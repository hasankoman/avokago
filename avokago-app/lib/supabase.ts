import { createClient } from '@supabase/supabase-js'

// Lazy loading için Supabase client'ı
let supabaseClient: any = null

function getSupabaseClient() {
    if (!supabaseClient) {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
        const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

        if (!supabaseUrl || !supabaseAnonKey) {
            throw new Error('Missing Supabase environment variables')
        }

        supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
    }
    return supabaseClient
}

export const supabase = getSupabaseClient()

// Type definitions
export interface User {
    id: string
    email: string
    name?: string | null
    surname?: string | null
    profile_type?: string | null
    created_at: string
    updated_at: string
}

export interface Database {
    public: {
        Tables: {
            users: {
                Row: User
                Insert: Omit<User, 'id' | 'created_at' | 'updated_at'>
                Update: Partial<Omit<User, 'id' | 'created_at' | 'updated_at'>>
            }
        }
    }
}

// Helper functions for common database operations
export const supabaseHelpers = {
    // User operations
    async getUser(userId: string): Promise<User> {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('id', userId)
            .single()

        if (error) throw error
        return data
    },

    // Create user
    async createUser(userData: Database['public']['Tables']['users']['Insert']): Promise<User> {
        const { data, error } = await supabase
            .from('users')
            .insert([userData])
            .select()
            .single()

        if (error) throw error
        return data
    },

    // Update user
    async updateUser(userId: string, updates: Database['public']['Tables']['users']['Update']): Promise<User> {
        const { data, error } = await supabase
            .from('users')
            .update(updates)
            .eq('id', userId)
            .select()
            .single()

        if (error) throw error
        return data
    },

    // Delete user
    async deleteUser(userId: string): Promise<boolean> {
        const { error } = await supabase
            .from('users')
            .delete()
            .eq('id', userId)

        if (error) throw error
        return true
    },

    // Generic query helper
    async query<T = any>(
        table: string,
        options: {
            select?: string
            where?: Record<string, any>
            orderBy?: { column: string; ascending: boolean }
            limit?: number
        } = {}
    ): Promise<T[]> {
        let query = supabase.from(table).select(options.select || '*')

        if (options.where) {
            Object.entries(options.where).forEach(([key, value]) => {
                query = query.eq(key, value)
            })
        }

        if (options.orderBy) {
            query = query.order(options.orderBy.column, { ascending: options.orderBy.ascending })
        }

        if (options.limit) {
            query = query.limit(options.limit)
        }

        const { data, error } = await query

        if (error) throw error
        return data || []
    }
}

export default supabase 