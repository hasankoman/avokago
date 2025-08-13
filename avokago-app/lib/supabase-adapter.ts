import { Adapter } from "next-auth/adapters";
import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "@/types/database";

export function SupabaseAdapter(client: SupabaseClient<Database>): Adapter {
  return {
    async createUser(user: any) {
      const { data, error } = await client
        .from("users")
        .insert({
          id: crypto.randomUUID(),
          name: user.name,
          email: user.email,
          email_verified: user.emailVerified?.toISOString(),
          travel_type: user.travelType,
          image: user.image,
        })
        .select()
        .single();

      if (error) throw error;

      return {
        id: data.id,
        name: data.name,
        email: data.email!,
        emailVerified: data.email_verified
          ? new Date(data.email_verified)
          : null,
        travelType: data.travel_type,
        image: data.image,
      };
    },

    async getUser(id) {
      const { data, error } = await client
        .from("users")
        .select("*")
        .eq("id", id)
        .single();

      if (error || !data) return null;

      return {
        id: data.id,
        name: data.name,
        email: data.email!,
        emailVerified: data.email_verified
          ? new Date(data.email_verified)
          : null,
        travelType: data.travel_type,
        image: data.image,
      };
    },

    async getUserByEmail(email) {
      const { data, error } = await client
        .from("users")
        .select("*")
        .eq("email", email)
        .single();

      if (error || !data) return null;

      return {
        id: data.id,
        name: data.name,
        email: data.email!,
        emailVerified: data.email_verified
          ? new Date(data.email_verified)
          : null,
        travelType: data.travel_type,
        image: data.image,
      };
    },

    async getUserByAccount({ providerAccountId, provider }) {
      const { data, error } = await client
        .from("accounts")
        .select(
          `
          user_id,
          users (
            id,
            name,
            email,
            email_verified,
            travel_type,
            image
          )
        `
        )
        .eq("provider_account_id", providerAccountId)
        .eq("provider", provider)
        .single();

      if (error || !data || !data.users) return null;

      const user = Array.isArray(data.users) ? data.users[0] : data.users;

      return {
        id: user.id,
        name: user.name,
        email: user.email!,
        emailVerified: user.email_verified
          ? new Date(user.email_verified)
          : null,
        travelType: user.travel_type,
        image: user.image,
      };
    },

    async updateUser(user) {
      const { data, error } = await client
        .from("users")
        .update({
          name: user.name,
          email: user.email,
          email_verified: user.emailVerified?.toISOString(),
          travel_type: user.travelType,
          image: user.image,
        })
        .eq("id", user.id!)
        .select()
        .single();

      if (error) throw error;

      return {
        id: data.id,
        name: data.name,
        email: data.email!,
        emailVerified: data.email_verified
          ? new Date(data.email_verified)
          : null,
        travelType: data.travel_type,
        image: data.image,
      };
    },

    async deleteUser(userId) {
      const { error } = await client.from("users").delete().eq("id", userId);

      if (error) throw error;
    },

    async linkAccount(account: any) {
      const { error } = await client.from("accounts").insert({
        id: crypto.randomUUID(),
        user_id: account.userId,
        type: account.type,
        provider: account.provider,
        provider_account_id: account.providerAccountId,
        refresh_token: account.refresh_token,
        access_token: account.access_token,
        expires_at: account.expires_at,
        token_type: account.token_type,
        scope: account.scope,
        id_token: account.id_token,
        session_state: account.session_state,
      });

      if (error) throw error;
    },

    async unlinkAccount({ providerAccountId, provider }) {
      const { error } = await client
        .from("accounts")
        .delete()
        .eq("provider_account_id", providerAccountId)
        .eq("provider", provider);

      if (error) throw error;
    },

    async createSession({ sessionToken, userId, expires }) {
      const { data, error } = await client
        .from("sessions")
        .insert({
          id: crypto.randomUUID(),
          session_token: sessionToken,
          user_id: userId,
          expires: expires.toISOString(),
        })
        .select()
        .single();

      if (error) throw error;

      return {
        sessionToken: data.session_token,
        userId: data.user_id,
        expires: new Date(data.expires),
      };
    },

    async getSessionAndUser(sessionToken) {
      const { data, error } = await client
        .from("sessions")
        .select(
          `
          session_token,
          user_id,
          expires,
          users (
            id,
            name,
            email,
            email_verified,
            travel_type,
            image
          )
        `
        )
        .eq("session_token", sessionToken)
        .single();

      if (error || !data || !data.users) return null;

      const user = Array.isArray(data.users) ? data.users[0] : data.users;

      return {
        session: {
          sessionToken: data.session_token,
          userId: data.user_id,
          expires: new Date(data.expires),
        },
        user: {
          id: user.id,
          name: user.name,
          email: user.email!,
          emailVerified: user.email_verified
            ? new Date(user.email_verified)
            : null,
          travelType: user.travel_type,
          image: user.image,
        },
      };
    },

    async updateSession({ sessionToken, expires, userId }) {
      const { data, error } = await client
        .from("sessions")
        .update({
          expires: expires?.toISOString(),
          user_id: userId,
        })
        .eq("session_token", sessionToken)
        .select()
        .single();

      if (error) throw error;

      return {
        sessionToken: data.session_token,
        userId: data.user_id,
        expires: new Date(data.expires),
      };
    },

    async deleteSession(sessionToken) {
      const { error } = await client
        .from("sessions")
        .delete()
        .eq("session_token", sessionToken);

      if (error) throw error;
    },

    async createVerificationToken({ identifier, expires, token }) {
      const { data, error } = await client
        .from("verification_tokens")
        .insert({
          identifier,
          token,
          expires: expires.toISOString(),
        })
        .select()
        .single();

      if (error) throw error;

      return {
        identifier: data.identifier,
        token: data.token,
        expires: new Date(data.expires),
      };
    },

    async useVerificationToken({ identifier, token }) {
      const { data, error } = await client
        .from("verification_tokens")
        .delete()
        .eq("identifier", identifier)
        .eq("token", token)
        .select()
        .single();

      if (error || !data) return null;

      return {
        identifier: data.identifier,
        token: data.token,
        expires: new Date(data.expires),
      };
    },
  };
}
