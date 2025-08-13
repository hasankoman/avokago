export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          name: string | null;
          email: string | null;
          email_verified: string | null;
          image: string | null;
          travel_type: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name?: string | null;
          email?: string | null;
          email_verified?: string | null;
          image?: string | null;
          travel_type?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string | null;
          email?: string | null;
          email_verified?: string | null;
          image?: string | null;
          travel_type?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      accounts: {
        Row: {
          id: string;
          user_id: string;
          type: string;
          provider: string;
          provider_account_id: string;
          refresh_token: string | null;
          access_token: string | null;
          expires_at: number | null;
          token_type: string | null;
          scope: string | null;
          id_token: string | null;
          session_state: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          type: string;
          provider: string;
          provider_account_id: string;
          refresh_token?: string | null;
          access_token?: string | null;
          expires_at?: number | null;
          token_type?: string | null;
          scope?: string | null;
          id_token?: string | null;
          session_state?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          type?: string;
          provider?: string;
          provider_account_id?: string;
          refresh_token?: string | null;
          access_token?: string | null;
          expires_at?: number | null;
          token_type?: string | null;
          scope?: string | null;
          id_token?: string | null;
          session_state?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      sessions: {
        Row: {
          id: string;
          session_token: string;
          user_id: string;
          expires: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          session_token: string;
          user_id: string;
          expires: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          session_token?: string;
          user_id?: string;
          expires?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      verification_tokens: {
        Row: {
          identifier: string;
          token: string;
          expires: string;
        };
        Insert: {
          identifier: string;
          token: string;
          expires: string;
        };
        Update: {
          identifier?: string;
          token?: string;
          expires?: string;
        };
      };
      trips: {
        Row: {
          id: string;
          user_id: string;
          location: string;
          start_date: string;
          duration_days: number;
          themes: string[] | null;
          daily_plan: Json | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          location: string;
          start_date: string;
          duration_days: number;
          themes?: string[] | null;
          daily_plan?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          location?: string;
          start_date?: string;
          duration_days?: number;
          themes?: string[] | null;
          daily_plan?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
