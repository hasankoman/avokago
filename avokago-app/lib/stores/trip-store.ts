import { create } from "zustand";
import { Trip, CreateTripInput, UpdateTripInput } from "@/types/trips";
import {
  getTrips,
  getTrip,
  createTrip,
  updateTrip,
  deleteTrip,
} from "@/app/actions/trips";

interface TripStore {
  trips: Trip[];
  currentTrip: Trip | null;
  isLoading: boolean;
  error: string | null;
  fetchTrips: () => Promise<void>;
  fetchTrip: (id: string) => Promise<void>;
  createTrip: (input: CreateTripInput) => Promise<void>;
  updateTrip: (id: string, input: UpdateTripInput) => Promise<void>;
  deleteTrip: (id: string) => Promise<void>;
}

export const useTripStore = create<TripStore>((set) => ({
  trips: [],
  currentTrip: null,
  isLoading: false,
  error: null,

  fetchTrips: async () => {
    try {
      set({ isLoading: true, error: null });
      const trips = await getTrips();
      set({ trips, isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  fetchTrip: async (id: string) => {
    try {
      set({ isLoading: true, error: null });
      const trip = await getTrip(id);
      set({ currentTrip: trip, isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  createTrip: async (input: CreateTripInput) => {
    try {
      set({ isLoading: true, error: null });
      const newTrip = await createTrip(input);
      set((state) => ({
        trips: [newTrip, ...state.trips],
        isLoading: false,
      }));
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  updateTrip: async (id: string, input: UpdateTripInput) => {
    try {
      set({ isLoading: true, error: null });
      const updatedTrip = await updateTrip(id, input);
      set((state) => ({
        trips: state.trips.map((trip) => (trip.id === id ? updatedTrip : trip)),
        currentTrip:
          state.currentTrip?.id === id ? updatedTrip : state.currentTrip,
        isLoading: false,
      }));
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  deleteTrip: async (id: string) => {
    try {
      set({ isLoading: true, error: null });
      await deleteTrip(id);
      set((state) => ({
        trips: state.trips.filter((trip) => trip.id !== id),
        currentTrip: state.currentTrip?.id === id ? null : state.currentTrip,
        isLoading: false,
      }));
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },
}));
