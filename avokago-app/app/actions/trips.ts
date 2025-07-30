"use server";

import { createClient } from "@/lib/supabase";
import { auth } from "@/lib/auth";
import { Trip, CreateTripInput, UpdateTripInput } from "@/types/trips";
import { revalidatePath } from "next/cache";

export async function getTrips(): Promise<Trip[]> {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Not authenticated");
  }

  const supabase = createClient();
  const { data, error } = await supabase
    .from("trips")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getTrip(id: string): Promise<Trip> {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Not authenticated");
  }

  const supabase = createClient();
  const { data, error } = await supabase
    .from("trips")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function createTrip(input: CreateTripInput): Promise<Trip> {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Not authenticated");
  }

  const supabase = createClient();
  const { data, error } = await supabase
    .from("trips")
    .insert([
      {
        ...input,
        user_id: session.user.id,
      },
    ])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/dashboard/plans");
  return data;
}

export async function updateTrip(
  id: string,
  input: UpdateTripInput
): Promise<Trip> {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Not authenticated");
  }

  const supabase = createClient();
  const { data, error } = await supabase
    .from("trips")
    .update(input)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/dashboard/plans");
  return data;
}

export async function deleteTrip(id: string): Promise<void> {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Not authenticated");
  }

  const supabase = createClient();
  const { error } = await supabase.from("trips").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/dashboard/plans");
}
