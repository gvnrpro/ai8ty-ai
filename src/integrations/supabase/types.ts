export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      battle_history: {
        Row: {
          battle_stats: Json | null
          created_at: string | null
          experience_gained: number | null
          id: string
          match_id: string
          opponent_id: string
          player_id: string
          rank_change: number | null
          result: string
          rewards: Json | null
        }
        Insert: {
          battle_stats?: Json | null
          created_at?: string | null
          experience_gained?: number | null
          id?: string
          match_id: string
          opponent_id: string
          player_id: string
          rank_change?: number | null
          result: string
          rewards?: Json | null
        }
        Update: {
          battle_stats?: Json | null
          created_at?: string | null
          experience_gained?: number | null
          id?: string
          match_id?: string
          opponent_id?: string
          player_id?: string
          rank_change?: number | null
          result?: string
          rewards?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "battle_history_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "pvp_matches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "battle_history_opponent_id_fkey"
            columns: ["opponent_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "battle_history_opponent_id_fkey"
            columns: ["opponent_id"]
            isOneToOne: false
            referencedRelation: "real_user_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "battle_history_opponent_id_fkey"
            columns: ["opponent_id"]
            isOneToOne: false
            referencedRelation: "user_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "battle_history_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "battle_history_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "real_user_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "battle_history_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "user_leaderboard"
            referencedColumns: ["id"]
          },
        ]
      }
      clan_levels: {
        Row: {
          created_at: string | null
          energy_boost_percentage: number | null
          id: number
          level: number
          level_name: string
          min_energy: number
          min_members: number
          min_missions_completed: number
        }
        Insert: {
          created_at?: string | null
          energy_boost_percentage?: number | null
          id?: number
          level: number
          level_name: string
          min_energy: number
          min_members: number
          min_missions_completed: number
        }
        Update: {
          created_at?: string | null
          energy_boost_percentage?: number | null
          id?: number
          level?: number
          level_name?: string
          min_energy?: number
          min_members?: number
          min_missions_completed?: number
        }
        Relationships: []
      }
      clan_members: {
        Row: {
          clan_id: string | null
          coins_contributed: number | null
          id: string
          joined_at: string
          role: string | null
          user_id: string | null
        }
        Insert: {
          clan_id?: string | null
          coins_contributed?: number | null
          id?: string
          joined_at?: string
          role?: string | null
          user_id?: string | null
        }
        Update: {
          clan_id?: string | null
          coins_contributed?: number | null
          id?: string
          joined_at?: string
          role?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clan_members_clan_id_fkey"
            columns: ["clan_id"]
            isOneToOne: false
            referencedRelation: "clan_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clan_members_clan_id_fkey"
            columns: ["clan_id"]
            isOneToOne: false
            referencedRelation: "clans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clan_members_clan_id_fkey"
            columns: ["clan_id"]
            isOneToOne: false
            referencedRelation: "real_clan_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clan_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clan_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "real_user_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clan_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_leaderboard"
            referencedColumns: ["id"]
          },
        ]
      }
      clan_mission_progress: {
        Row: {
          clan_id: string | null
          completed_at: string | null
          current_progress: number | null
          expires_at: string
          id: string
          is_completed: boolean | null
          mission_id: string | null
          progress_date: string | null
          started_at: string | null
        }
        Insert: {
          clan_id?: string | null
          completed_at?: string | null
          current_progress?: number | null
          expires_at: string
          id?: string
          is_completed?: boolean | null
          mission_id?: string | null
          progress_date?: string | null
          started_at?: string | null
        }
        Update: {
          clan_id?: string | null
          completed_at?: string | null
          current_progress?: number | null
          expires_at?: string
          id?: string
          is_completed?: boolean | null
          mission_id?: string | null
          progress_date?: string | null
          started_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clan_mission_progress_clan_id_fkey"
            columns: ["clan_id"]
            isOneToOne: false
            referencedRelation: "clan_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clan_mission_progress_clan_id_fkey"
            columns: ["clan_id"]
            isOneToOne: false
            referencedRelation: "clans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clan_mission_progress_clan_id_fkey"
            columns: ["clan_id"]
            isOneToOne: false
            referencedRelation: "real_clan_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clan_mission_progress_mission_id_fkey"
            columns: ["mission_id"]
            isOneToOne: false
            referencedRelation: "clan_missions"
            referencedColumns: ["id"]
          },
        ]
      }
      clan_missions: {
        Row: {
          created_at: string | null
          description: string
          id: string
          is_active: boolean | null
          mission_type: string
          reward_boost_hours: number | null
          reward_energy: number | null
          target_type: string
          target_value: number
          title: string
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: string
          is_active?: boolean | null
          mission_type: string
          reward_boost_hours?: number | null
          reward_energy?: number | null
          target_type: string
          target_value: number
          title: string
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: string
          is_active?: boolean | null
          mission_type?: string
          reward_boost_hours?: number | null
          reward_energy?: number | null
          target_type?: string
          target_value?: number
          title?: string
        }
        Relationships: []
      }
      clan_war_participants: {
        Row: {
          clan_id: string | null
          final_rank: number | null
          id: string
          joined_at: string | null
          members_participated: number | null
          reward_claimed: boolean | null
          total_energy_contributed: number | null
          war_id: string | null
        }
        Insert: {
          clan_id?: string | null
          final_rank?: number | null
          id?: string
          joined_at?: string | null
          members_participated?: number | null
          reward_claimed?: boolean | null
          total_energy_contributed?: number | null
          war_id?: string | null
        }
        Update: {
          clan_id?: string | null
          final_rank?: number | null
          id?: string
          joined_at?: string | null
          members_participated?: number | null
          reward_claimed?: boolean | null
          total_energy_contributed?: number | null
          war_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clan_war_participants_clan_id_fkey"
            columns: ["clan_id"]
            isOneToOne: false
            referencedRelation: "clan_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clan_war_participants_clan_id_fkey"
            columns: ["clan_id"]
            isOneToOne: false
            referencedRelation: "clans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clan_war_participants_clan_id_fkey"
            columns: ["clan_id"]
            isOneToOne: false
            referencedRelation: "real_clan_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clan_war_participants_war_id_fkey"
            columns: ["war_id"]
            isOneToOne: false
            referencedRelation: "clan_wars"
            referencedColumns: ["id"]
          },
        ]
      }
      clan_wars: {
        Row: {
          created_at: string | null
          end_date: string
          id: string
          reward_amount: number
          reward_type: string
          start_date: string
          status: string | null
          war_name: string
        }
        Insert: {
          created_at?: string | null
          end_date: string
          id?: string
          reward_amount: number
          reward_type: string
          start_date: string
          status?: string | null
          war_name: string
        }
        Update: {
          created_at?: string | null
          end_date?: string
          id?: string
          reward_amount?: number
          reward_type?: string
          start_date?: string
          status?: string | null
          war_name?: string
        }
        Relationships: []
      }
      clans: {
        Row: {
          boost_expires_at: string | null
          created_at: string
          daily_energy: number | null
          description: string | null
          energy_boost_active: boolean | null
          id: string
          image: string | null
          leader_id: string | null
          level: number | null
          logo_url: string | null
          max_members: number | null
          member_count: number | null
          missions_completed: number | null
          name: string
          telegram_link: string | null
          total_coins: number | null
          updated_at: string
          weekly_energy: number | null
        }
        Insert: {
          boost_expires_at?: string | null
          created_at?: string
          daily_energy?: number | null
          description?: string | null
          energy_boost_active?: boolean | null
          id?: string
          image?: string | null
          leader_id?: string | null
          level?: number | null
          logo_url?: string | null
          max_members?: number | null
          member_count?: number | null
          missions_completed?: number | null
          name: string
          telegram_link?: string | null
          total_coins?: number | null
          updated_at?: string
          weekly_energy?: number | null
        }
        Update: {
          boost_expires_at?: string | null
          created_at?: string
          daily_energy?: number | null
          description?: string | null
          energy_boost_active?: boolean | null
          id?: string
          image?: string | null
          leader_id?: string | null
          level?: number | null
          logo_url?: string | null
          max_members?: number | null
          member_count?: number | null
          missions_completed?: number | null
          name?: string
          telegram_link?: string | null
          total_coins?: number | null
          updated_at?: string
          weekly_energy?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "clans_leader_id_fkey"
            columns: ["leader_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clans_leader_id_fkey"
            columns: ["leader_id"]
            isOneToOne: false
            referencedRelation: "real_user_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clans_leader_id_fkey"
            columns: ["leader_id"]
            isOneToOne: false
            referencedRelation: "user_leaderboard"
            referencedColumns: ["id"]
          },
        ]
      }
      leaderboard_stats: {
        Row: {
          created_at: string | null
          id: string
          last_updated: string
          total_players: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          last_updated?: string
          total_players?: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          last_updated?: string
          total_players?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      mining_sessions: {
        Row: {
          coins_earned: number | null
          created_at: string
          end_time: string | null
          id: string
          is_active: boolean | null
          session_duration_minutes: number | null
          start_time: string
          user_id: string
        }
        Insert: {
          coins_earned?: number | null
          created_at?: string
          end_time?: string | null
          id?: string
          is_active?: boolean | null
          session_duration_minutes?: number | null
          start_time?: string
          user_id: string
        }
        Update: {
          coins_earned?: number | null
          created_at?: string
          end_time?: string | null
          id?: string
          is_active?: boolean | null
          session_duration_minutes?: number | null
          start_time?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          earnings: number | null
          first_name: string | null
          id: string
          last_name: string | null
          photo_url: string | null
          referral_name: string
          telegram_id: number
          updated_at: string
          username: string | null
        }
        Insert: {
          created_at?: string
          earnings?: number | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          photo_url?: string | null
          referral_name: string
          telegram_id: number
          updated_at?: string
          username?: string | null
        }
        Update: {
          created_at?: string
          earnings?: number | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          photo_url?: string | null
          referral_name?: string
          telegram_id?: number
          updated_at?: string
          username?: string | null
        }
        Relationships: []
      }
      pvp_character_stats: {
        Row: {
          abilities: Json | null
          character_id: string
          created_at: string | null
          equipment: Json | null
          experience: number | null
          id: string
          level: number | null
          losses: number | null
          pvp_rank: number | null
          total_battles: number | null
          updated_at: string | null
          user_id: string
          win_rate: number | null
          wins: number | null
        }
        Insert: {
          abilities?: Json | null
          character_id: string
          created_at?: string | null
          equipment?: Json | null
          experience?: number | null
          id?: string
          level?: number | null
          losses?: number | null
          pvp_rank?: number | null
          total_battles?: number | null
          updated_at?: string | null
          user_id: string
          win_rate?: number | null
          wins?: number | null
        }
        Update: {
          abilities?: Json | null
          character_id?: string
          created_at?: string | null
          equipment?: Json | null
          experience?: number | null
          id?: string
          level?: number | null
          losses?: number | null
          pvp_rank?: number | null
          total_battles?: number | null
          updated_at?: string | null
          user_id?: string
          win_rate?: number | null
          wins?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "pvp_character_stats_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pvp_character_stats_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "real_user_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pvp_character_stats_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_leaderboard"
            referencedColumns: ["id"]
          },
        ]
      }
      pvp_leaderboard: {
        Row: {
          created_at: string | null
          favorite_character: string | null
          highest_rank: number | null
          id: string
          last_battle_at: string | null
          pvp_rank: number
          season_points: number | null
          total_losses: number | null
          total_wins: number | null
          updated_at: string | null
          user_id: string
          username: string
          win_streak: number | null
        }
        Insert: {
          created_at?: string | null
          favorite_character?: string | null
          highest_rank?: number | null
          id?: string
          last_battle_at?: string | null
          pvp_rank?: number
          season_points?: number | null
          total_losses?: number | null
          total_wins?: number | null
          updated_at?: string | null
          user_id: string
          username: string
          win_streak?: number | null
        }
        Update: {
          created_at?: string | null
          favorite_character?: string | null
          highest_rank?: number | null
          id?: string
          last_battle_at?: string | null
          pvp_rank?: number
          season_points?: number | null
          total_losses?: number | null
          total_wins?: number | null
          updated_at?: string | null
          user_id?: string
          username?: string
          win_streak?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "pvp_leaderboard_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pvp_leaderboard_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "real_user_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pvp_leaderboard_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "user_leaderboard"
            referencedColumns: ["id"]
          },
        ]
      }
      pvp_matches: {
        Row: {
          battle_data: Json | null
          completed_at: string | null
          created_at: string | null
          id: string
          match_duration: number | null
          match_status: string
          match_type: string
          player1_character_id: string
          player1_id: string
          player1_score: number | null
          player2_character_id: string
          player2_id: string
          player2_score: number | null
          started_at: string | null
          winner_id: string | null
        }
        Insert: {
          battle_data?: Json | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          match_duration?: number | null
          match_status?: string
          match_type?: string
          player1_character_id: string
          player1_id: string
          player1_score?: number | null
          player2_character_id: string
          player2_id: string
          player2_score?: number | null
          started_at?: string | null
          winner_id?: string | null
        }
        Update: {
          battle_data?: Json | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          match_duration?: number | null
          match_status?: string
          match_type?: string
          player1_character_id?: string
          player1_id?: string
          player1_score?: number | null
          player2_character_id?: string
          player2_id?: string
          player2_score?: number | null
          started_at?: string | null
          winner_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pvp_matches_player1_id_fkey"
            columns: ["player1_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pvp_matches_player1_id_fkey"
            columns: ["player1_id"]
            isOneToOne: false
            referencedRelation: "real_user_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pvp_matches_player1_id_fkey"
            columns: ["player1_id"]
            isOneToOne: false
            referencedRelation: "user_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pvp_matches_player2_id_fkey"
            columns: ["player2_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pvp_matches_player2_id_fkey"
            columns: ["player2_id"]
            isOneToOne: false
            referencedRelation: "real_user_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pvp_matches_player2_id_fkey"
            columns: ["player2_id"]
            isOneToOne: false
            referencedRelation: "user_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pvp_matches_winner_id_fkey"
            columns: ["winner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pvp_matches_winner_id_fkey"
            columns: ["winner_id"]
            isOneToOne: false
            referencedRelation: "real_user_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pvp_matches_winner_id_fkey"
            columns: ["winner_id"]
            isOneToOne: false
            referencedRelation: "user_leaderboard"
            referencedColumns: ["id"]
          },
        ]
      }
      referral_events: {
        Row: {
          created_at: string
          event_data: Json | null
          event_type: string
          id: string
          processed: boolean | null
          processed_at: string | null
          referred_username: string | null
          referrer_username: string
          telegram_user_id: number | null
        }
        Insert: {
          created_at?: string
          event_data?: Json | null
          event_type: string
          id?: string
          processed?: boolean | null
          processed_at?: string | null
          referred_username?: string | null
          referrer_username: string
          telegram_user_id?: number | null
        }
        Update: {
          created_at?: string
          event_data?: Json | null
          event_type?: string
          id?: string
          processed?: boolean | null
          processed_at?: string | null
          referred_username?: string | null
          referrer_username?: string
          telegram_user_id?: number | null
        }
        Relationships: []
      }
      referral_notifications: {
        Row: {
          created_at: string
          id: string
          message: string
          metadata: Json | null
          notification_type: string
          read: boolean | null
          title: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          metadata?: Json | null
          notification_type: string
          read?: boolean | null
          title: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          metadata?: Json | null
          notification_type?: string
          read?: boolean | null
          title?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "referral_notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referral_notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "real_user_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referral_notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_leaderboard"
            referencedColumns: ["id"]
          },
        ]
      }
      referral_rewards: {
        Row: {
          completed_at: string | null
          created_at: string
          id: string
          referred_id: string
          referrer_id: string
          reward_amount: number
          status: string | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          id?: string
          referred_id: string
          referrer_id: string
          reward_amount: number
          status?: string | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          id?: string
          referred_id?: string
          referrer_id?: string
          reward_amount?: number
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "referral_rewards_referred_id_fkey"
            columns: ["referred_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referral_rewards_referrer_id_fkey"
            columns: ["referrer_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      referral_tracking: {
        Row: {
          created_at: string
          id: string
          referred_profile_id: string | null
          referred_telegram_id: number
          referrer_profile_id: string
          reward_given: boolean | null
        }
        Insert: {
          created_at?: string
          id?: string
          referred_profile_id?: string | null
          referred_telegram_id: number
          referrer_profile_id: string
          reward_given?: boolean | null
        }
        Update: {
          created_at?: string
          id?: string
          referred_profile_id?: string | null
          referred_telegram_id?: number
          referrer_profile_id?: string
          reward_given?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "referral_tracking_referred_profile_id_fkey"
            columns: ["referred_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referral_tracking_referred_profile_id_fkey"
            columns: ["referred_profile_id"]
            isOneToOne: false
            referencedRelation: "real_user_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referral_tracking_referred_profile_id_fkey"
            columns: ["referred_profile_id"]
            isOneToOne: false
            referencedRelation: "user_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referral_tracking_referrer_profile_id_fkey"
            columns: ["referrer_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referral_tracking_referrer_profile_id_fkey"
            columns: ["referrer_profile_id"]
            isOneToOne: false
            referencedRelation: "real_user_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referral_tracking_referrer_profile_id_fkey"
            columns: ["referrer_profile_id"]
            isOneToOne: false
            referencedRelation: "user_leaderboard"
            referencedColumns: ["id"]
          },
        ]
      }
      referrals: {
        Row: {
          created_at: string
          id: string
          referral_reward: number | null
          referred_id: string
          referrer_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          referral_reward?: number | null
          referred_id: string
          referrer_id: string
        }
        Update: {
          created_at?: string
          id?: string
          referral_reward?: number | null
          referred_id?: string
          referrer_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "referrals_referred_id_fkey"
            columns: ["referred_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referrals_referred_id_fkey"
            columns: ["referred_id"]
            isOneToOne: true
            referencedRelation: "real_user_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referrals_referred_id_fkey"
            columns: ["referred_id"]
            isOneToOne: true
            referencedRelation: "user_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referrals_referrer_id_fkey"
            columns: ["referrer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referrals_referrer_id_fkey"
            columns: ["referrer_id"]
            isOneToOne: false
            referencedRelation: "real_user_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referrals_referrer_id_fkey"
            columns: ["referrer_id"]
            isOneToOne: false
            referencedRelation: "user_leaderboard"
            referencedColumns: ["id"]
          },
        ]
      }
      simple_referrals: {
        Row: {
          created_at: string
          id: string
          referred_reward: number | null
          referred_username: string
          referrer_reward: number | null
          referrer_username: string
          updated_at: string
          verified: boolean | null
        }
        Insert: {
          created_at?: string
          id?: string
          referred_reward?: number | null
          referred_username: string
          referrer_reward?: number | null
          referrer_username: string
          updated_at?: string
          verified?: boolean | null
        }
        Update: {
          created_at?: string
          id?: string
          referred_reward?: number | null
          referred_username?: string
          referrer_reward?: number | null
          referrer_username?: string
          updated_at?: string
          verified?: boolean | null
        }
        Relationships: []
      }
      space_mining_sessions: {
        Row: {
          earned: number | null
          end_time: string | null
          id: string
          is_active: boolean | null
          start_time: string | null
          user_id: string
        }
        Insert: {
          earned?: number | null
          end_time?: string | null
          id?: string
          is_active?: boolean | null
          start_time?: string | null
          user_id: string
        }
        Update: {
          earned?: number | null
          end_time?: string | null
          id?: string
          is_active?: boolean | null
          start_time?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "space_mining_sessions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "space_users"
            referencedColumns: ["id"]
          },
        ]
      }
      space_referrals: {
        Row: {
          created_at: string | null
          id: string
          referred_id: string
          referrer_code: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          referred_id: string
          referrer_code: string
        }
        Update: {
          created_at?: string | null
          id?: string
          referred_id?: string
          referrer_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "space_referrals_referred_id_fkey"
            columns: ["referred_id"]
            isOneToOne: false
            referencedRelation: "space_users"
            referencedColumns: ["id"]
          },
        ]
      }
      space_users: {
        Row: {
          balance: number | null
          created_at: string | null
          id: string
          ip_address: string | null
          referral_code: string
          referred_by_code: string | null
          telegram_id: string
          username: string | null
        }
        Insert: {
          balance?: number | null
          created_at?: string | null
          id?: string
          ip_address?: string | null
          referral_code: string
          referred_by_code?: string | null
          telegram_id: string
          username?: string | null
        }
        Update: {
          balance?: number | null
          created_at?: string | null
          id?: string
          ip_address?: string | null
          referral_code?: string
          referred_by_code?: string | null
          telegram_id?: string
          username?: string | null
        }
        Relationships: []
      }
      tasks: {
        Row: {
          arabic_description: string
          arabic_title: string
          completed: boolean | null
          created_at: string
          description: string
          external_link: string | null
          id: string
          image_url: string | null
          is_active: boolean | null
          link: string | null
          max_completions: number | null
          reward: number
          reward_amount: number | null
          sort_order: number | null
          status: string | null
          time_required: number | null
          title: string
          updated_at: string
        }
        Insert: {
          arabic_description: string
          arabic_title: string
          completed?: boolean | null
          created_at?: string
          description: string
          external_link?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          link?: string | null
          max_completions?: number | null
          reward?: number
          reward_amount?: number | null
          sort_order?: number | null
          status?: string | null
          time_required?: number | null
          title: string
          updated_at?: string
        }
        Update: {
          arabic_description?: string
          arabic_title?: string
          completed?: boolean | null
          created_at?: string
          description?: string
          external_link?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          link?: string | null
          max_completions?: number | null
          reward?: number
          reward_amount?: number | null
          sort_order?: number | null
          status?: string | null
          time_required?: number | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      telegram_stars_transactions: {
        Row: {
          amount_stars: number
          created_at: string
          currency: string | null
          id: string
          item_description: string | null
          item_name: string
          provider_payment_charge_id: string | null
          status: string
          telegram_payment_charge_id: string
          telegram_user_id: number
          updated_at: string
          user_purchase_id: string | null
        }
        Insert: {
          amount_stars: number
          created_at?: string
          currency?: string | null
          id?: string
          item_description?: string | null
          item_name: string
          provider_payment_charge_id?: string | null
          status?: string
          telegram_payment_charge_id: string
          telegram_user_id: number
          updated_at?: string
          user_purchase_id?: string | null
        }
        Update: {
          amount_stars?: number
          created_at?: string
          currency?: string | null
          id?: string
          item_description?: string | null
          item_name?: string
          provider_payment_charge_id?: string | null
          status?: string
          telegram_payment_charge_id?: string
          telegram_user_id?: number
          updated_at?: string
          user_purchase_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "telegram_stars_transactions_user_purchase_id_fkey"
            columns: ["user_purchase_id"]
            isOneToOne: false
            referencedRelation: "user_purchases"
            referencedColumns: ["id"]
          },
        ]
      }
      telegram_webhook_events: {
        Row: {
          created_at: string
          event_type: string
          id: string
          processed: boolean | null
          processed_at: string | null
          referral_code: string | null
          update_id: number
          user_data: Json
        }
        Insert: {
          created_at?: string
          event_type: string
          id?: string
          processed?: boolean | null
          processed_at?: string | null
          referral_code?: string | null
          update_id: number
          user_data: Json
        }
        Update: {
          created_at?: string
          event_type?: string
          id?: string
          processed?: boolean | null
          processed_at?: string | null
          referral_code?: string | null
          update_id?: number
          user_data?: Json
        }
        Relationships: []
      }
      transactions: {
        Row: {
          amount: number
          created_at: string
          description: string | null
          id: string
          metadata: Json | null
          type: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          description?: string | null
          id?: string
          metadata?: Json | null
          type: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          description?: string | null
          id?: string
          metadata?: Json | null
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      user_activity: {
        Row: {
          activity_type: string
          created_at: string
          id: string
          metadata: Json | null
          user_id: string
          username: string | null
        }
        Insert: {
          activity_type: string
          created_at?: string
          id?: string
          metadata?: Json | null
          user_id: string
          username?: string | null
        }
        Update: {
          activity_type?: string
          created_at?: string
          id?: string
          metadata?: Json | null
          user_id?: string
          username?: string | null
        }
        Relationships: []
      }
      user_coins: {
        Row: {
          coin_multiplier: number | null
          created_at: string | null
          first_name: string | null
          id: string
          mining_speed: number | null
          space_coins: number | null
          spin_tickets: number | null
          telegram_id: number
          updated_at: string | null
          username: string | null
        }
        Insert: {
          coin_multiplier?: number | null
          created_at?: string | null
          first_name?: string | null
          id?: string
          mining_speed?: number | null
          space_coins?: number | null
          spin_tickets?: number | null
          telegram_id: number
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          coin_multiplier?: number | null
          created_at?: string | null
          first_name?: string | null
          id?: string
          mining_speed?: number | null
          space_coins?: number | null
          spin_tickets?: number | null
          telegram_id?: number
          updated_at?: string | null
          username?: string | null
        }
        Relationships: []
      }
      user_daily_login_streak: {
        Row: {
          claimed_today: boolean | null
          created_at: string | null
          current_day: number | null
          id: string
          last_login_date: string | null
          streak_broken: boolean | null
          telegram_id: number
          total_space_earned: number | null
          total_tickets_earned: number | null
          updated_at: string | null
        }
        Insert: {
          claimed_today?: boolean | null
          created_at?: string | null
          current_day?: number | null
          id?: string
          last_login_date?: string | null
          streak_broken?: boolean | null
          telegram_id: number
          total_space_earned?: number | null
          total_tickets_earned?: number | null
          updated_at?: string | null
        }
        Update: {
          claimed_today?: boolean | null
          created_at?: string | null
          current_day?: number | null
          id?: string
          last_login_date?: string | null
          streak_broken?: boolean | null
          telegram_id?: number
          total_space_earned?: number | null
          total_tickets_earned?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      user_daily_rush: {
        Row: {
          bonuses_claimed: number[] | null
          created_at: string | null
          current_ticket: number | null
          event_id: string
          id: string
          last_activity: string | null
          surprise_bonuses_received: number | null
          telegram_id: number
          tickets_claimed: number[] | null
          total_spent: number | null
          updated_at: string | null
        }
        Insert: {
          bonuses_claimed?: number[] | null
          created_at?: string | null
          current_ticket?: number | null
          event_id: string
          id?: string
          last_activity?: string | null
          surprise_bonuses_received?: number | null
          telegram_id: number
          tickets_claimed?: number[] | null
          total_spent?: number | null
          updated_at?: string | null
        }
        Update: {
          bonuses_claimed?: number[] | null
          created_at?: string | null
          current_ticket?: number | null
          event_id?: string
          id?: string
          last_activity?: string | null
          surprise_bonuses_received?: number | null
          telegram_id?: number
          tickets_claimed?: number[] | null
          total_spent?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      user_daily_streak: {
        Row: {
          claimed_today: boolean | null
          created_at: string | null
          current_day: number | null
          id: string
          last_login_date: string | null
          streak_broken: boolean | null
          telegram_id: number
          total_space_earned: number | null
          total_tickets_earned: number | null
          updated_at: string | null
        }
        Insert: {
          claimed_today?: boolean | null
          created_at?: string | null
          current_day?: number | null
          id?: string
          last_login_date?: string | null
          streak_broken?: boolean | null
          telegram_id: number
          total_space_earned?: number | null
          total_tickets_earned?: number | null
          updated_at?: string | null
        }
        Update: {
          claimed_today?: boolean | null
          created_at?: string | null
          current_day?: number | null
          id?: string
          last_login_date?: string | null
          streak_broken?: boolean | null
          telegram_id?: number
          total_space_earned?: number | null
          total_tickets_earned?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          balance: number
          created_at: string
          first_name: string | null
          id: string
          last_login: string | null
          last_name: string | null
          referral_code: string
          referred_by: string | null
          telegram_id: number | null
          total_earned: number
          updated_at: string
          user_id: string | null
          username: string
        }
        Insert: {
          balance?: number
          created_at?: string
          first_name?: string | null
          id?: string
          last_login?: string | null
          last_name?: string | null
          referral_code?: string
          referred_by?: string | null
          telegram_id?: number | null
          total_earned?: number
          updated_at?: string
          user_id?: string | null
          username: string
        }
        Update: {
          balance?: number
          created_at?: string
          first_name?: string | null
          id?: string
          last_login?: string | null
          last_name?: string | null
          referral_code?: string
          referred_by?: string | null
          telegram_id?: number | null
          total_earned?: number
          updated_at?: string
          user_id?: string | null
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_profiles_referred_by_fkey"
            columns: ["referred_by"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_purchases: {
        Row: {
          amount: number
          created_at: string | null
          currency: string
          id: string
          item_name: string
          payment_method: string | null
          payment_reference: string | null
          status: string
          user_id: string
          username: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          currency?: string
          id?: string
          item_name: string
          payment_method?: string | null
          payment_reference?: string | null
          status?: string
          user_id: string
          username?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          currency?: string
          id?: string
          item_name?: string
          payment_method?: string | null
          payment_reference?: string | null
          status?: string
          user_id?: string
          username?: string | null
        }
        Relationships: []
      }
      user_referrals: {
        Row: {
          claimed_at: string | null
          created_at: string
          id: string
          referred_profile_id: string | null
          referred_username: string
          referrer_profile_id: string | null
          referrer_username: string
          reward_amount: number | null
          reward_claimed: boolean | null
          space_coin_reward: number | null
          spin_reward: number | null
          ton_reward: number | null
          verification_status: string | null
          verified_at: string | null
        }
        Insert: {
          claimed_at?: string | null
          created_at?: string
          id?: string
          referred_profile_id?: string | null
          referred_username: string
          referrer_profile_id?: string | null
          referrer_username: string
          reward_amount?: number | null
          reward_claimed?: boolean | null
          space_coin_reward?: number | null
          spin_reward?: number | null
          ton_reward?: number | null
          verification_status?: string | null
          verified_at?: string | null
        }
        Update: {
          claimed_at?: string | null
          created_at?: string
          id?: string
          referred_profile_id?: string | null
          referred_username?: string
          referrer_profile_id?: string | null
          referrer_username?: string
          reward_amount?: number | null
          reward_claimed?: boolean | null
          space_coin_reward?: number | null
          spin_reward?: number | null
          ton_reward?: number | null
          verification_status?: string | null
          verified_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_referrals_referred_profile_id_fkey"
            columns: ["referred_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_referrals_referred_profile_id_fkey"
            columns: ["referred_profile_id"]
            isOneToOne: false
            referencedRelation: "real_user_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_referrals_referred_profile_id_fkey"
            columns: ["referred_profile_id"]
            isOneToOne: false
            referencedRelation: "user_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_referrals_referrer_profile_id_fkey"
            columns: ["referrer_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_referrals_referrer_profile_id_fkey"
            columns: ["referrer_profile_id"]
            isOneToOne: false
            referencedRelation: "real_user_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_referrals_referrer_profile_id_fkey"
            columns: ["referrer_profile_id"]
            isOneToOne: false
            referencedRelation: "user_leaderboard"
            referencedColumns: ["id"]
          },
        ]
      }
      user_rewards: {
        Row: {
          amount: number
          claimed: boolean | null
          created_at: string
          id: string
          reward_category: string
          reward_type: string
          source_referral_id: string | null
          user_id: string
          username: string | null
        }
        Insert: {
          amount: number
          claimed?: boolean | null
          created_at?: string
          id?: string
          reward_category: string
          reward_type: string
          source_referral_id?: string | null
          user_id: string
          username?: string | null
        }
        Update: {
          amount?: number
          claimed?: boolean | null
          created_at?: string
          id?: string
          reward_category?: string
          reward_type?: string
          source_referral_id?: string | null
          user_id?: string
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_rewards_source_referral_id_fkey"
            columns: ["source_referral_id"]
            isOneToOne: false
            referencedRelation: "user_referrals"
            referencedColumns: ["id"]
          },
        ]
      }
      user_sessions: {
        Row: {
          id: string
          is_active: boolean | null
          last_activity: string
          session_start: string
          user_id: string
          username: string | null
        }
        Insert: {
          id?: string
          is_active?: boolean | null
          last_activity?: string
          session_start?: string
          user_id: string
          username?: string | null
        }
        Update: {
          id?: string
          is_active?: boolean | null
          last_activity?: string
          session_start?: string
          user_id?: string
          username?: string | null
        }
        Relationships: []
      }
      user_spin_tickets: {
        Row: {
          created_at: string | null
          id: string
          last_free_spin: string | null
          telegram_id: number
          tickets_count: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          last_free_spin?: string | null
          telegram_id: number
          tickets_count?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          last_free_spin?: string | null
          telegram_id?: number
          tickets_count?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      user_task_completions: {
        Row: {
          claimed_at: string | null
          completed_at: string
          id: string
          reward_claimed: boolean | null
          task_id: string
          user_id: string
        }
        Insert: {
          claimed_at?: string | null
          completed_at?: string
          id?: string
          reward_claimed?: boolean | null
          task_id: string
          user_id: string
        }
        Update: {
          claimed_at?: string | null
          completed_at?: string
          id?: string
          reward_claimed?: boolean | null
          task_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_task_completions_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      clan_leaderboard: {
        Row: {
          created_at: string | null
          description: string | null
          id: string | null
          image: string | null
          leader_name: string | null
          member_count: number | null
          name: string | null
          rank: number | null
          telegram_link: string | null
          total_coins: number | null
        }
        Relationships: []
      }
      real_clan_leaderboard: {
        Row: {
          created_at: string | null
          description: string | null
          id: string | null
          image: string | null
          leader_id: string | null
          leader_name: string | null
          member_count: number | null
          name: string | null
          rank: number | null
          telegram_link: string | null
          total_coins: number | null
        }
        Relationships: [
          {
            foreignKeyName: "clans_leader_id_fkey"
            columns: ["leader_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clans_leader_id_fkey"
            columns: ["leader_id"]
            isOneToOne: false
            referencedRelation: "real_user_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clans_leader_id_fkey"
            columns: ["leader_id"]
            isOneToOne: false
            referencedRelation: "user_leaderboard"
            referencedColumns: ["id"]
          },
        ]
      }
      real_user_leaderboard: {
        Row: {
          clan_id: string | null
          clan_name: string | null
          coins: number | null
          created_at: string | null
          first_name: string | null
          id: string | null
          last_name: string | null
          photo_url: string | null
          rank: number | null
          referral_name: string | null
          username: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clan_members_clan_id_fkey"
            columns: ["clan_id"]
            isOneToOne: false
            referencedRelation: "clan_leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clan_members_clan_id_fkey"
            columns: ["clan_id"]
            isOneToOne: false
            referencedRelation: "clans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "clan_members_clan_id_fkey"
            columns: ["clan_id"]
            isOneToOne: false
            referencedRelation: "real_clan_leaderboard"
            referencedColumns: ["id"]
          },
        ]
      }
      user_leaderboard: {
        Row: {
          clan_id: string | null
          clan_name: string | null
          coins: number | null
          created_at: string | null
          id: string | null
          rank: number | null
          referral_name: string | null
          username: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      calculate_clan_level: {
        Args: { clan_id_param: string }
        Returns: number
      }
      calculate_mining_earnings: {
        Args: { session_duration_minutes: number }
        Returns: number
      }
      check_ip_registration_limit: {
        Args: { ip_addr: string }
        Returns: boolean
      }
      claim_daily_login_reward: {
        Args: { p_telegram_id: number; p_day: number }
        Returns: Json
      }
      claim_referral_reward: {
        Args: { referral_id: string }
        Returns: Json
      }
      generate_random_string: {
        Args: { length: number }
        Returns: string
      }
      generate_unique_referral_code: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_comprehensive_referral_stats: {
        Args: { username_param: string }
        Returns: Json
      }
      get_current_active_users: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      get_daily_login_streak: {
        Args: { p_telegram_id: number }
        Returns: Json
      }
      get_last_hour_active_users: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      get_task_completion_stats: {
        Args: Record<PropertyKey, never>
        Returns: {
          task_id: string
          task_title: string
          completion_count: number
        }[]
      }
      get_top_purchasers: {
        Args: { limit_count?: number }
        Returns: {
          username: string
          total_spent: number
          purchase_count: number
        }[]
      }
      is_admin: {
        Args: { user_id: string }
        Returns: boolean
      }
      process_comprehensive_referral_reward: {
        Args: {
          referral_id: string
          referred_username: string
          referrer_username: string
        }
        Returns: Json
      }
      process_comprehensive_referral_with_events: {
        Args: {
          referral_id: string
          referred_username: string
          referrer_username: string
        }
        Returns: Json
      }
      process_referral: {
        Args: { referrer_code_param: string; new_user_id: string }
        Returns: boolean
      }
      process_referral_event: {
        Args: {
          p_event_type: string
          p_referrer_username: string
          p_referred_username?: string
          p_telegram_user_id?: number
          p_event_data?: Json
        }
        Returns: string
      }
      process_referral_reward: {
        Args: { referrer_id: string; reward_amount?: number }
        Returns: undefined
      }
      reset_daily_clan_progress: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      reset_weekly_clan_progress: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      send_referral_notification: {
        Args: {
          p_username: string
          p_notification_type: string
          p_title: string
          p_message: string
          p_metadata?: Json
        }
        Returns: string
      }
      update_daily_player_count: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      update_user_balance: {
        Args: {
          p_user_id: string
          p_amount: number
          p_transaction_type: string
          p_description?: string
        }
        Returns: boolean
      }
      verify_referral: {
        Args: { referral_id: string }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
