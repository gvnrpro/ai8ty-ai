
import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from "@/hooks/use-toast";
import { useTaskManagement } from '@/hooks/useTaskManagement';
import { useSpaceCoins } from '../hooks/useSpaceCoins';
import { taskUserService } from '@/services/taskUserService';
import DailyCheckInTask from '@/components/DailyCheckInTask';
import { 
  CheckCircle, 
  ExternalLink, 
  Calendar, 
  UserPlus,
  Clock,
  Gift,
  Handshake,
  Star
} from 'lucide-react';
import type { Database } from '@/integrations/supabase/types';

type Task = Database['public']['Tables']['tasks']['Row'];

const TasksPage = () => {
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const [isTaskInProgress, setIsTaskInProgress] = useState<Record<string, boolean>>({});
  const { toast } = useToast();
  const { addCoins, spaceCoins } = useSpaceCoins();
  
  // Get real tasks from database
  const { tasks, isLoading: tasksLoading, reloadTasks } = useTaskManagement();
  
  // Get username from localStorage
  const username = localStorage.getItem('username') || '';

  // Load completed tasks on component mount
  useEffect(() => {
    if (username) {
      loadCompletedTasks();
    }
  }, [username]);

  const loadCompletedTasks = async () => {
    try {
      const userCompletedTasks = await taskUserService.getUserCompletedTasks(username);
      const completedTaskIds = new Set(userCompletedTasks.map(ct => ct.task_id));
      setCompletedTasks(completedTaskIds);
    } catch (error) {
      console.error('Error loading completed tasks:', error);
    }
  };

  // Check if a task is daily check-in
  const isDailyCheckInTask = (taskTitle: string) => {
    return taskTitle.toLowerCase().includes('daily check-in');
  };

  const getTaskIcon = (status: string) => {
    switch (status) {
      case 'pending': return Calendar;
      case 'in_progress': return Clock;
      case 'completed': return CheckCircle;
      case 'failed': return Gift;
      default: return Gift;
    }
  };

  const getCategoryColor = (status: string) => {
    switch (status) {
      case 'pending': return 'from-yellow-500 to-orange-600';
      case 'in_progress': return 'from-blue-500 to-cyan-600';
      case 'completed': return 'from-green-500 to-emerald-600';
      case 'failed': return 'from-red-500 to-pink-600';
      default: return 'from-gray-500 to-slate-600';
    }
  };

  const formatReward = (reward: number) => {
    return reward.toLocaleString();
  };

  const handleTaskComplete = async (task: Task) => {
    if (isTaskInProgress[task.id] || completedTasks.has(task.id)) {
      return;
    }

    if (!username) {
      toast({
        title: 'Error',
        description: 'Please login first',
        variant: 'destructive'
      });
      return;
    }

    setIsTaskInProgress(prev => ({ ...prev, [task.id]: true }));

    try {
      // Open external link if available
      if (task.external_link && task.external_link !== '#') {
        window.open(task.external_link, '_blank');
      }

      // Complete the task in database
      await taskUserService.completeTask(task.id, username);
      
      // Add coins to user
      const rewardAmount = task.reward_amount || task.reward || 0;
      addCoins(rewardAmount);
      
      // Update completed tasks
      setCompletedTasks(prev => new Set([...prev, task.id]));
      
      toast({
        title: 'Congratulations!',
        description: `Task completed and you earned ${rewardAmount} reward`,
      });
    } catch (error) {
      console.error('Error completing task:', error);
      toast({
        title: 'Error',
        description: 'Failed to complete task',
        variant: 'destructive'
      });
    } finally {
      setIsTaskInProgress(prev => ({ ...prev, [task.id]: false }));
    }
  };

  // Filter tasks based on their status for proper categorization
  const tasksByCategory = useMemo(() => {
    const activeTasks = tasks.filter(task => {
      return task.is_active !== false && !completedTasks.has(task.id);
    });

    return {
      // Main tasks: Tasks with status 'in_progress' (excluding daily check-in)
      main: activeTasks.filter(task => 
        task.status === 'in_progress' && 
        !isDailyCheckInTask(task.title || '')
      ),
      // Partner tasks: Tasks with status 'completed' (excluding daily check-in)
      partner: activeTasks.filter(task => 
        task.status === 'completed' && 
        !isDailyCheckInTask(task.title || '')
      ),
      // Daily tasks: Tasks with status 'pending' OR daily check-in tasks
      daily: activeTasks.filter(task => 
        task.status === 'pending' || 
        isDailyCheckInTask(task.title || '')
      )
    };
  }, [tasks, completedTasks]);

  const renderTaskCard = (task: Task) => {
    // Handle daily check-in task specially
    if (isDailyCheckInTask(task.title || '')) {
      return (
        <DailyCheckInTask
          key={task.id}
          taskId={task.id}
          rewardAmount={task.reward_amount || task.reward || 0}
          username={username}
          onTaskComplete={() => {
            setCompletedTasks(prev => new Set([...prev, task.id]));
            reloadTasks();
          }}
        />
      );
    }

    const TaskIcon = getTaskIcon(task.status || 'pending');
    const isCompleted = completedTasks.has(task.id);
    const inProgress = isTaskInProgress[task.id] === true;
    
    if (isCompleted) {
      return null;
    }
    
    return (
      <div 
        key={task.id} 
        className="glass-card hover:bg-white/15 transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105"
        onClick={() => handleTaskComplete(task)}
      >
        <div className="p-3">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden">
              {task.image_url ? (
                <img 
                  src={task.image_url} 
                  alt={task.title || 'Task image'}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className={`w-full h-full flex items-center justify-center bg-gradient-to-r ${getCategoryColor(task.status || 'pending')}`}>
                  <TaskIcon className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-medium text-sm mb-2">
                {task.title}
              </h3>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <img 
                    src="/lovable-uploads/a56963aa-9f88-44b8-9aff-3b5e9e4c7a60.png" 
                    alt="Space Coin"
                    className="w-3 h-3 rounded-full"
                  />
                  <span className="text-yellow-400 font-bold text-xs">
                    +{formatReward(task.reward_amount || task.reward || 0)}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  handleTaskComplete(task);
                }}
                disabled={isCompleted || inProgress}
                variant="glass-blue"
                className="px-3 py-1.5 text-xs flex items-center gap-1 rounded-lg transition-all duration-300"
              >
                {inProgress ? (
                  <Clock className="w-3 h-3 animate-spin" />
                ) : (
                  <>
                    Start
                    {task.external_link && task.external_link !== '#' && (
                      <ExternalLink className="w-3 h-3" />
                    )}
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Show loading state
  if (tasksLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-white">Loading tasks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="min-h-screen flex flex-col">
        {/* Tasks Header */}
        <div className="text-center pt-8 pb-4 px-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent mb-1">
            Tasks
          </h1>
          <p className="text-gray-400 text-sm">
            Complete tasks and earn amazing rewards
          </p>
        </div>

        {/* Tasks Section */}
        <div className="flex-1 px-4 pb-4">
          <div className="max-w-md mx-auto">
            <Tabs defaultValue="main" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-4 h-10 rounded-xl bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50">
                <TabsTrigger 
                  value="main" 
                  className="text-xs py-1.5 rounded-lg transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-800 data-[state=active]:to-black data-[state=active]:text-white data-[state=active]:shadow-lg text-gray-300"
                >
                  <UserPlus className="w-3 h-3 mr-1" />
                  Main
                </TabsTrigger>
                <TabsTrigger 
                  value="partner" 
                  className="text-xs py-1.5 rounded-lg transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-800 data-[state=active]:to-black data-[state=active]:text-white data-[state=active]:shadow-lg text-gray-300"
                >
                  <Handshake className="w-3 h-3 mr-1" />
                  Partners
                </TabsTrigger>
                <TabsTrigger 
                  value="daily" 
                  className="text-xs py-1.5 rounded-lg transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-800 data-[state=active]:to-black data-[state=active]:text-white data-[state=active]:shadow-lg text-gray-300"
                >
                  <Calendar className="w-3 h-3 mr-1" />
                  Daily
                </TabsTrigger>
              </TabsList>

              <div className="space-y-2">
                <TabsContent value="main" className="space-y-2 mt-0">
                  {tasksByCategory.main.map((task) => renderTaskCard(task))}
                  {tasksByCategory.main.length === 0 && (
                    <div className="glass-card">
                      <div className="p-4 text-center">
                        <p className="text-gray-400 text-sm">No main tasks available at the moment</p>
                      </div>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="partner" className="space-y-2 mt-0">
                  {tasksByCategory.partner.map((task) => renderTaskCard(task))}
                  {tasksByCategory.partner.length === 0 && (
                    <div className="glass-card">
                      <div className="p-4 text-center">
                        <p className="text-gray-400 text-sm">No partner tasks available at the moment</p>
                      </div>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="daily" className="space-y-2 mt-0">
                  {tasksByCategory.daily.map((task) => renderTaskCard(task))}
                  {tasksByCategory.daily.length === 0 && (
                    <div className="glass-card">
                      <div className="p-4 text-center">
                        <p className="text-gray-400 text-sm">No daily tasks available at the moment</p>
                      </div>
                    </div>
                  )}
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksPage;
