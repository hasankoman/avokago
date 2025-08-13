export interface Trip {
  id: string;
  user_id: string;
  location: string;
  start_date: string;
  duration_days: number;
  themes?: string[];
  daily_plan?: {
    [key: string]: any;
  };
  created_at?: string;
}

export type CreateTripInput = Omit<Trip, "id" | "user_id" | "created_at">;
export type UpdateTripInput = Partial<CreateTripInput>;
