import type { Destination, Flight, Hotel, ItineraryDay, Itinerary } from "@shared/schema";

export const destinations: Destination[] = [
  {
    id: "nyc",
    name: "New York",
    country: "United States",
    averageFlightCost: 340,
    averageHotelCost: 280,
    description: "Perfect for financial meetings and corporate events",
    category: "Popular",
    rating: 4.8,
    reviewCount: 2100,
    imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: "london",
    name: "London",
    country: "United Kingdom",
    averageFlightCost: 620,
    averageHotelCost: 320,
    description: "Gateway to European business opportunities",
    category: "Trending",
    rating: 4.7,
    reviewCount: 1800,
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    averageFlightCost: 890,
    averageHotelCost: 240,
    description: "Innovation center for technology partnerships",
    category: "Tech Hub",
    rating: 4.9,
    reviewCount: 1500,
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: "singapore",
    name: "Singapore",
    country: "Singapore",
    averageFlightCost: 1120,
    averageHotelCost: 180,
    description: "Strategic hub for Asian market expansion",
    category: "Asia Gateway",
    rating: 4.8,
    reviewCount: 980,
    imageUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    averageFlightCost: 780,
    averageHotelCost: 350,
    description: "Premium destination for executive meetings",
    category: "Luxury",
    rating: 4.6,
    reviewCount: 1200,
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: "berlin",
    name: "Berlin",
    country: "Germany",
    averageFlightCost: 520,
    averageHotelCost: 160,
    description: "Thriving ecosystem for innovation and partnerships",
    category: "Startup Hub",
    rating: 4.5,
    reviewCount: 750,
    imageUrl: "https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: "amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    averageFlightCost: 580,
    averageHotelCost: 190,
    description: "Perfect for group adventures with canals, museums, and nightlife",
    category: "Friends Favorite",
    rating: 4.7,
    reviewCount: 1350,
    imageUrl: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: "barcelona",
    name: "Barcelona",
    country: "Spain",
    averageFlightCost: 490,
    averageHotelCost: 140,
    description: "Beach vibes, amazing food, and vibrant culture for groups",
    category: "Beach & Culture",
    rating: 4.8,
    reviewCount: 2100,
    imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    averageFlightCost: 920,
    averageHotelCost: 85,
    description: "Tropical paradise perfect for group retreats and adventures",
    category: "Tropical Escape",
    rating: 4.9,
    reviewCount: 1800,
    imageUrl: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  }
];

export const sampleItinerary: Itinerary = {
  id: "corporate-trip-2024",
  title: "7-Day Corporate Trip",
  startDate: "2024-03-15",
  endDate: "2024-03-21",
  travelers: 12,
  days: [
    {
      id: "day-1",
      day: 1,
      date: "2024-03-15",
      location: "San Francisco → New York",
      flight: {
        id: "ua-123",
        airline: "United Airlines",
        flightNumber: "UA 123",
        departure: {
          airport: "SFO",
          time: "6:30 AM",
          date: "2024-03-15"
        },
        arrival: {
          airport: "JFK",
          time: "3:15 PM",
          date: "2024-03-15"
        },
        price: 450,
        duration: "5h 45m"
      },
      hotel: {
        id: "marriott-downtown",
        name: "Marriott Downtown",
        rating: 4.5,
        pricePerNight: 320,
        location: "Financial District",
        amenities: ["WiFi", "Business Center", "Gym", "Restaurant"],
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&h=300"
      },
      activities: [],
      dailyCost: 890
    },
    {
      id: "day-2",
      day: 2,
      date: "2024-03-16",
      location: "New York Meetings",
      activities: [
        {
          id: "breakfast",
          time: "8:00 AM",
          title: "Team Breakfast",
          description: "The Plaza",
          cost: 45,
          type: "meal"
        },
        {
          id: "client-meeting",
          time: "10:00 AM",
          title: "Client Meeting",
          description: "Goldman Sachs",
          cost: 0,
          type: "meeting"
        },
        {
          id: "team-dinner",
          time: "7:00 PM",
          title: "Team Dinner",
          description: "Le Bernardin",
          cost: 140,
          type: "meal"
        }
      ],
      dailyCost: 185
    },
    {
      id: "day-3",
      day: 3,
      date: "2024-03-17",
      location: "New York → London",
      flight: {
        id: "ba-183",
        airline: "British Airways",
        flightNumber: "BA 183",
        departure: {
          airport: "JFK",
          time: "9:15 PM",
          date: "2024-03-17"
        },
        arrival: {
          airport: "LHR",
          time: "8:35 AM",
          date: "2024-03-18"
        },
        price: 890,
        duration: "7h 20m"
      },
      hotel: {
        id: "hilton-london",
        name: "Hilton London",
        rating: 4.3,
        pricePerNight: 350,
        location: "Central London",
        amenities: ["WiFi", "Business Center", "Spa", "Restaurant"],
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=400&h=300"
      },
      activities: [],
      dailyCost: 1240
    }
  ],
  budget: {
    flights: 18240,
    hotels: 4560,
    meals: 1320,
    transport: 460,
    total: 24580
  },
  totalCost: 24580
};

export const testimonials = [
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    title: "VP Operations, TechCorp",
    content: "TravelFlow AI reduced our corporate travel planning time from days to minutes. The budget insights are incredibly accurate.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&h=100"
  },
  {
    id: "alex-thompson",
    name: "Alex Thompson",
    title: "Friend Group Organizer",
    content: "Planning our 8-person trip to Europe was so easy! The budget splitting feature helped us stay on track and the itinerary suggestions were perfect.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100"
  },
  {
    id: "priya-patel",
    name: "Priya Patel",
    title: "Operations Manager, StartupHub",
    content: "We use this for both work retreats and team social trips. The drag-and-drop itinerary builder works great for any group type.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100"
  },
  {
    id: "jamie-wilson",
    name: "Jamie Wilson",
    title: "Adventure Enthusiast",
    content: "My college friends and I planned an amazing Bali trip in under 10 minutes. The AI knew exactly what activities we'd love!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100"
  }
];
