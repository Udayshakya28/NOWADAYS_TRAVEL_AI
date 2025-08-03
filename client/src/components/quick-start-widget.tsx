import { useState } from "react";
import { Plane, MapPin, Calendar, Users, Sparkles, Calculator, Briefcase, Heart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useItinerary } from "@/hooks/use-itinerary";
import type { TravelRequest } from "@shared/schema";

export default function QuickStartWidget() {
  const [formData, setFormData] = useState<Partial<TravelRequest>>({
    departureCity: "San Francisco, CA",
    destinationCities: ["New York", "London"],
    startDate: "2024-03-15",
    endDate: "2024-03-22",
    travelers: 12,
    tripType: "mixed"
  });

  const { generateItinerary, isGenerating } = useItinerary();

  const handleSubmit = async (type: 'itinerary' | 'budget') => {
    if (!formData.departureCity || !formData.destinationCities?.length || !formData.startDate || !formData.endDate || !formData.travelers) {
      return;
    }

    const request: TravelRequest = {
      departureCity: formData.departureCity,
      destinationCities: formData.destinationCities,
      startDate: formData.startDate,
      endDate: formData.endDate,
      travelers: formData.travelers,
      tripType: formData.tripType || "mixed"
    };

    if (type === 'itinerary') {
      await generateItinerary(request);
      // Scroll to itinerary builder section
      document.getElementById('itinerary-builder')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Plan Your Next Group Trip</h2>
          <p className="text-slate-600">Whether it's business travel or adventures with friends - get started in seconds with our AI-powered travel assistant</p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-xl border-slate-200">
          <CardContent className="p-8">
            {/* Trip Type Selector */}
            <div className="mb-6">
              <Label className="text-sm font-medium text-slate-700 mb-3 block">Trip Type</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div 
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    formData.tripType === 'corporate' 
                      ? 'border-primary-500 bg-primary-50' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                  onClick={() => setFormData({ ...formData, tripType: 'corporate' })}
                >
                  <div className="flex items-center space-x-3">
                    <Briefcase className="h-5 w-5 text-primary-600" />
                    <div>
                      <h3 className="font-medium text-slate-900">Corporate</h3>
                      <p className="text-xs text-slate-600">Business meetings & events</p>
                    </div>
                  </div>
                </div>
                <div 
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    formData.tripType === 'friends' 
                      ? 'border-primary-500 bg-primary-50' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                  onClick={() => setFormData({ ...formData, tripType: 'friends' })}
                >
                  <div className="flex items-center space-x-3">
                    <Heart className="h-5 w-5 text-red-500" />
                    <div>
                      <h3 className="font-medium text-slate-900">Friends</h3>
                      <p className="text-xs text-slate-600">Group adventures & hangouts</p>
                    </div>
                  </div>
                </div>
                <div 
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    formData.tripType === 'mixed' 
                      ? 'border-primary-500 bg-primary-50' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                  onClick={() => setFormData({ ...formData, tripType: 'mixed' })}
                >
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-green-600" />
                    <div>
                      <h3 className="font-medium text-slate-900">Mixed</h3>
                      <p className="text-xs text-slate-600">Business + leisure combo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div>
                <Label htmlFor="departure" className="text-sm font-medium text-slate-700 mb-2">
                  Departure City
                </Label>
                <div className="relative">
                  <Input
                    id="departure"
                    placeholder="San Francisco, CA"
                    value={formData.departureCity}
                    onChange={(e) => setFormData({ ...formData, departureCity: e.target.value })}
                    className="pl-10"
                  />
                  <Plane className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="destinations" className="text-sm font-medium text-slate-700 mb-2">
                  Destination Cities
                </Label>
                <div className="relative">
                  <Input
                    id="destinations"
                    placeholder="New York, London..."
                    value={formData.destinationCities?.join(", ")}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      destinationCities: e.target.value.split(",").map(s => s.trim()).filter(Boolean)
                    })}
                    className="pl-10"
                  />
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="dates" className="text-sm font-medium text-slate-700 mb-2">
                  Travel Dates
                </Label>
                <div className="relative">
                  <Input
                    id="dates"
                    placeholder="Mar 15 - Mar 22"
                    value={formData.startDate && formData.endDate ? 
                      `${new Date(formData.startDate).toLocaleDateString()} - ${new Date(formData.endDate).toLocaleDateString()}` : ''
                    }
                    className="pl-10"
                    readOnly
                  />
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="travelers" className="text-sm font-medium text-slate-700 mb-2">
                  Travelers
                </Label>
                <div className="relative">
                  <Input
                    id="travelers"
                    type="number"
                    min="1"
                    value={formData.travelers}
                    onChange={(e) => setFormData({ ...formData, travelers: parseInt(e.target.value) || 1 })}
                    className="pl-10"
                  />
                  <Users className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => handleSubmit('itinerary')}
                disabled={isGenerating}
                className="bg-primary-600 hover:bg-primary-700 text-white"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Smart Itinerary
                  </>
                )}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => handleSubmit('budget')}
                className="border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                <Calculator className="mr-2 h-4 w-4" />
                Estimate Budget Only
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
