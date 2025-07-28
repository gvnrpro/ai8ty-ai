
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, FileText, BarChart3, Shield, Webhook } from 'lucide-react';
import TaskAdminDashboard from './TaskAdminDashboard';
import AdminClanManagement from './AdminClanManagement';
import ReferralActivationDashboard from './ReferralActivationDashboard';

const TaskAdminPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock props for components until real implementations are available
  const mockTasks = [];
  const mockAnalyticsData = {
    currentActiveUsers: 0,
    lastHourActiveUsers: 0,
    topPurchasers: [],
    isLoading: false
  };

  const handleTaskEdit = (taskId: string) => {
    console.log('Edit task:', taskId);
  };

  const handleTaskDelete = (taskId: string) => {
    console.log('Delete task:', taskId);
  };

  const handleTaskToggle = (taskId: string) => {
    console.log('Toggle task:', taskId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
            Admin Control Panel
          </h1>
          <p className="text-gray-400">
            Complete system management and administration
          </p>
        </div>

        {/* Admin Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <TabsTrigger 
              value="dashboard" 
              className="flex items-center gap-2 data-[state=active]:bg-purple-500/30 data-[state=active]:text-purple-400"
            >
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger 
              value="tasks" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-500/30 data-[state=active]:text-blue-400"
            >
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Tasks</span>
            </TabsTrigger>
            <TabsTrigger 
              value="webhook" 
              className="flex items-center gap-2 data-[state=active]:bg-green-500/30 data-[state=active]:text-green-400"
            >
              <Webhook className="w-4 h-4" />
              <span className="hidden sm:inline">Webhook</span>
            </TabsTrigger>
            <TabsTrigger 
              value="clans" 
              className="flex items-center gap-2 data-[state=active]:bg-orange-500/30 data-[state=active]:text-orange-400"
            >
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">Clans</span>
            </TabsTrigger>
            <TabsTrigger 
              value="analytics" 
              className="flex items-center gap-2 data-[state=active]:bg-red-500/30 data-[state=active]:text-red-400"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Analytics</span>
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <TaskAdminDashboard />
          </TabsContent>

          {/* Tasks Management Tab */}
          <TabsContent value="tasks" className="space-y-6">
            <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <FileText className="w-5 h-5 text-blue-400" />
                  <span>Task Management</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-400">Task management interface will be developed soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Webhook Management Tab */}
          <TabsContent value="webhook" className="space-y-6">
            <Card className="bg-black/40 border-green-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Webhook className="w-5 h-5 text-green-400" />
                  <span>Webhook & Referral System Management</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ReferralActivationDashboard />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Clans Management Tab */}
          <TabsContent value="clans" className="space-y-6">
            <Card className="bg-black/40 border-orange-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <AdminClanManagement />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <Card className="bg-black/40 border-red-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <BarChart3 className="w-5 h-5 text-red-400" />
                  <span>Analytics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-400">Analytics dashboard will be added soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TaskAdminPage;
