import { z } from "zod";

export const destinationSchema = z.object({
  id: z.string(),
  name: z.string(),
  country: z.string(),
  averageFlightCost: z.number(),
  averageHotelCost: z.number(),
  description: z.string(),
  category: z.string(),
  rating: z.number(),
  reviewCount: z.number(),
  imageUrl: z.string(),
});

export const flightSchema = z.object({
  id: z.string(),
  airline: z.string(),
  flightNumber: z.string(),
  departure: z.object({
    airport: z.string(),
    time: z.string(),
    date: z.string(),
  }),
  arrival: z.object({
    airport: z.string(),
    time: z.string(),
    date: z.string(),
  }),
  price: z.number(),
  duration: z.string(),
});

export const hotelSchema = z.object({
  id: z.string(),
  name: z.string(),
  rating: z.number(),
  pricePerNight: z.number(),
  location: z.string(),
  amenities: z.array(z.string()),
  imageUrl: z.string(),
});

export const itineraryDaySchema = z.object({
  id: z.string(),
  day: z.number(),
  date: z.string(),
  location: z.string(),
  flight: flightSchema.optional(),
  hotel: hotelSchema.optional(),
  activities: z.array(z.object({
    id: z.string(),
    time: z.string(),
    title: z.string(),
    description: z.string(),
    cost: z.number(),
    type: z.enum(['meeting', 'meal', 'transport', 'activity']),
  })),
  dailyCost: z.number(),
});

export const budgetBreakdownSchema = z.object({
  flights: z.number(),
  hotels: z.number(),
  meals: z.number(),
  transport: z.number(),
  total: z.number(),
});

export const itinerarySchema = z.object({
  id: z.string(),
  title: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  travelers: z.number(),
  days: z.array(itineraryDaySchema),
  budget: budgetBreakdownSchema,
  totalCost: z.number(),
});

export const travelRequestSchema = z.object({
  departureCity: z.string(),
  destinationCities: z.array(z.string()),
  startDate: z.string(),
  endDate: z.string(),
  travelers: z.number(),
  budgetLimit: z.number().optional(),
});

export type Destination = z.infer<typeof destinationSchema>;
export type Flight = z.infer<typeof flightSchema>;
export type Hotel = z.infer<typeof hotelSchema>;
export type ItineraryDay = z.infer<typeof itineraryDaySchema>;
export type BudgetBreakdown = z.infer<typeof budgetBreakdownSchema>;
export type Itinerary = z.infer<typeof itinerarySchema>;
export type TravelRequest = z.infer<typeof travelRequestSchema>;
