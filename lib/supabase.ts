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
      card: {
        Row: {
          created_at: string;
          details: Json | null;
          id: string;
          profile_id: string;
        };
        Insert: {
          created_at?: string;
          details?: Json | null;
          id?: string;
          profile_id: string;
        };
        Update: {
          created_at?: string;
          details?: Json | null;
          id?: string;
          profile_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "card_profile_id_fkey";
            columns: ["profile_id"];
            referencedRelation: "profile";
            referencedColumns: ["id"];
          }
        ];
      };
      profile: {
        Row: {
          created_at: string;
          email: string | null;
          id: string;
          name: string | null;
          stripe_customer: string | null;
          subscription: number | null;
        };
        Insert: {
          created_at?: string;
          email?: string | null;
          id: string;
          name?: string | null;
          stripe_customer?: string | null;
          subscription?: number | null;
        };
        Update: {
          created_at?: string;
          email?: string | null;
          id?: string;
          name?: string | null;
          stripe_customer?: string | null;
          subscription?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "profile_id_fkey";
            columns: ["id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      wallet: {
        Row: {
          created_at: string;
          details: Json | null;
          id: string;
          receiver_id: string | null;
          sender_id: string | null;
        };
        Insert: {
          created_at?: string;
          details?: Json | null;
          id?: string;
          receiver_id?: string | null;
          sender_id?: string | null;
        };
        Update: {
          created_at?: string;
          details?: Json | null;
          id?: string;
          receiver_id?: string | null;
          sender_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "wallet_receiver_id_fkey";
            columns: ["receiver_id"];
            referencedRelation: "profile";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "wallet_sender_id_fkey";
            columns: ["sender_id"];
            referencedRelation: "profile";
            referencedColumns: ["id"];
          }
        ];
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
