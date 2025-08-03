import { useState, useCallback } from "react";
import type { Itinerary, TravelRequest, BudgetBreakdown } from "@shared/schema";
import { sampleItinerary } from "@/lib/travel-data";

export function useItinerary() {
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateItinerary = useCallback(async (request: TravelRequest) => {
    setIsGenerating(true);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // For demo purposes, return modified sample itinerary
    const generatedItinerary: Itinerary = {
      ...sampleItinerary,
      id: `trip-${Date.now()}`,
      travelers: request.travelers,
      startDate: request.startDate,
      endDate: request.endDate,
      // Adjust costs based on travelers
      budget: {
        flights: Math.round(sampleItinerary.budget.flights * (request.travelers / 12)),
        hotels: Math.round(sampleItinerary.budget.hotels * (request.travelers / 12)),
        meals: Math.round(sampleItinerary.budget.meals * (request.travelers / 12)),
        transport: Math.round(sampleItinerary.budget.transport * (request.travelers / 12)),
        total: Math.round(sampleItinerary.budget.total * (request.travelers / 12))
      },
      totalCost: Math.round(sampleItinerary.totalCost * (request.travelers / 12))
    };
    
    setItinerary(generatedItinerary);
    setIsGenerating(false);
    
    return generatedItinerary;
  }, []);

  const updateBudget = useCallback((newBudget: BudgetBreakdown) => {
    if (itinerary) {
      setItinerary({
        ...itinerary,
        budget: newBudget,
        totalCost: newBudget.total
      });
    }
  }, [itinerary]);

  const exportItinerary = useCallback(() => {
    if (!itinerary) return;
    
    const dataStr = JSON.stringify(itinerary, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `${itinerary.title.replace(/\s+/g, '-').toLowerCase()}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }, [itinerary]);

  return {
    itinerary,
    isGenerating,
    generateItinerary,
    updateBudget,
    exportItinerary,
    setItinerary
  };
}
