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
      admin_user: {
        Row: {
          active: boolean
          created_at: string
          id: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          id: string
        }
        Update: {
          active?: boolean
          created_at?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "admin_user_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
        ]
      }
      character: {
        Row: {
          appearance: string
          class_id: number
          created_at: string
          id: number
          instinct: string
          name: string
          owner_id: string | null
        }
        Insert: {
          appearance?: string
          class_id: number
          created_at?: string
          id?: number
          instinct?: string
          name?: string
          owner_id?: string | null
        }
        Update: {
          appearance?: string
          class_id?: number
          created_at?: string
          id?: number
          instinct?: string
          name?: string
          owner_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "character_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "character_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
        ]
      }
      character_move: {
        Row: {
          character_id: number
          id: number
          move_id: number
          stat_line_id: number | null
        }
        Insert: {
          character_id: number
          id?: number
          move_id: number
          stat_line_id?: number | null
        }
        Update: {
          character_id?: number
          id?: number
          move_id?: number
          stat_line_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "character_move_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "character"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "character_move_move_id_fkey"
            columns: ["move_id"]
            isOneToOne: false
            referencedRelation: "move"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "character_move_stat_line_id_fkey"
            columns: ["stat_line_id"]
            isOneToOne: false
            referencedRelation: "stat_line"
            referencedColumns: ["id"]
          },
        ]
      }
      class: {
        Row: {
          created_at: string
          description: string
          id: number
          instincts: Json[]
          name: string
        }
        Insert: {
          created_at?: string
          description?: string
          id?: number
          instincts?: Json[]
          name?: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: number
          instincts?: Json[]
          name?: string
        }
        Relationships: []
      }
      item: {
        Row: {
          affected_by_prosperity: boolean
          charges: number
          charges_label: string | null
          description: string
          id: number
          instructions: string
          name: string
          official: boolean
          qualifier: string
          size: Database["public"]["Enums"]["item_size"]
          traits: string
          weight: number
        }
        Insert: {
          affected_by_prosperity?: boolean
          charges?: number
          charges_label?: string | null
          description?: string
          id?: number
          instructions?: string
          name?: string
          official?: boolean
          qualifier?: string
          size?: Database["public"]["Enums"]["item_size"]
          traits?: string
          weight?: number
        }
        Update: {
          affected_by_prosperity?: boolean
          charges?: number
          charges_label?: string | null
          description?: string
          id?: number
          instructions?: string
          name?: string
          official?: boolean
          qualifier?: string
          size?: Database["public"]["Enums"]["item_size"]
          traits?: string
          weight?: number
        }
        Relationships: []
      }
      move: {
        Row: {
          body: string
          class_id: number | null
          created_at: string
          id: number
          level_requirement: number
          name: string
          type: Database["public"]["Enums"]["move_types"]
        }
        Insert: {
          body?: string
          class_id?: number | null
          created_at?: string
          id?: number
          level_requirement?: number
          name?: string
          type?: Database["public"]["Enums"]["move_types"]
        }
        Update: {
          body?: string
          class_id?: number | null
          created_at?: string
          id?: number
          level_requirement?: number
          name?: string
          type?: Database["public"]["Enums"]["move_types"]
        }
        Relationships: [
          {
            foreignKeyName: "move_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class"
            referencedColumns: ["id"]
          },
        ]
      }
      pack_item: {
        Row: {
          character_id: number
          created_at: string
          id: number
          item_id: number
          uses: number
        }
        Insert: {
          character_id: number
          created_at?: string
          id?: number
          item_id: number
          uses?: number
        }
        Update: {
          character_id?: number
          created_at?: string
          id?: number
          item_id?: number
          uses?: number
        }
        Relationships: [
          {
            foreignKeyName: "pack_item_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "character"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pack_item_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "item"
            referencedColumns: ["id"]
          },
        ]
      }
      pool: {
        Row: {
          character_id: number
          id: number
          label: string
          max: number
          type: Database["public"]["Enums"]["pool_type"]
          value: number
        }
        Insert: {
          character_id: number
          id?: number
          label?: string
          max?: number
          type?: Database["public"]["Enums"]["pool_type"]
          value?: number
        }
        Update: {
          character_id?: number
          id?: number
          label?: string
          max?: number
          type?: Database["public"]["Enums"]["pool_type"]
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "pool_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "character"
            referencedColumns: ["id"]
          },
        ]
      }
      possession: {
        Row: {
          character_id: number
          created_at: string
          item_id: number
          quantity: number
        }
        Insert: {
          character_id: number
          created_at?: string
          item_id: number
          quantity?: number
        }
        Update: {
          character_id?: number
          created_at?: string
          item_id?: number
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "possession_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "character"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "possession_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "item"
            referencedColumns: ["id"]
          },
        ]
      }
      profile: {
        Row: {
          created_at: string
          display_name: string
          email: string
          id: string
          player_name: string
        }
        Insert: {
          created_at?: string
          display_name?: string
          email?: string
          id: string
          player_name?: string
        }
        Update: {
          created_at?: string
          display_name?: string
          email?: string
          id?: string
          player_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "profile_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      stat_line: {
        Row: {
          armor: number
          charisma: number
          constitution: number
          created_at: string
          damage_dice: number
          damage_modified: number
          dexterity: number
          id: number
          intelligence: number
          label: string
          max_hp: number
          strength: number
          wisdom: number
        }
        Insert: {
          armor?: number
          charisma?: number
          constitution?: number
          created_at?: string
          damage_dice?: number
          damage_modified?: number
          dexterity?: number
          id?: number
          intelligence?: number
          label?: string
          max_hp?: number
          strength?: number
          wisdom?: number
        }
        Update: {
          armor?: number
          charisma?: number
          constitution?: number
          created_at?: string
          damage_dice?: number
          damage_modified?: number
          dexterity?: number
          id?: number
          intelligence?: number
          label?: string
          max_hp?: number
          strength?: number
          wisdom?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      item_size: "small" | "normal"
      move_types:
        | "basic"
        | "value"
        | "system"
        | "homefront"
        | "expedition"
        | "class"
      pool_type: "character" | "move" | "system" | "status" | "other"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
