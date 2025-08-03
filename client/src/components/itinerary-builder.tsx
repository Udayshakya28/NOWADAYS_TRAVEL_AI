import { useState, useEffect } from "react";
import { Plane, Bed, Coffee, Handshake, Utensils, Plus, Download, Share, CalendarPlus, Lightbulb, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useItinerary } from "@/hooks/use-itinerary";
import { sampleItinerary } from "@/lib/travel-data";

export default function ItineraryBuilder() {
  const { itinerary, exportItinerary, setItinerary } = useItinerary();
  const [displayItinerary, setDisplayItinerary] = useState(sampleItinerary);

  useEffect(() => {
    if (itinerary) {
      setDisplayItinerary(itinerary);
    }
  }, [itinerary]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'meal': return <Utensils className="h-4 w-4 text-primary-600" />;
      case 'meeting': return <Handshake className="h-4 w-4 text-primary-600" />;
      default: return <Coffee className="h-4 w-4 text-primary-600" />;
    }
  };

  const budgetStatus = displayItinerary.totalCost <= 27000;

  return (
    <section id="itinerary-builder" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Interactive Itinerary Builder</h2>
          <p className="text-slate-600">Drag, drop, and customize your perfect business travel plan</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline Column */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-slate-900">{displayItinerary.title}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-slate-600">Total Budget:</span>
                    <span className="text-xl font-bold text-primary-600">
                      {formatCurrency(displayItinerary.totalCost)}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {displayItinerary.days.map((day) => (
                    <Card key={day.id} className="border border-slate-200 hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                              {day.day}
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-900">
                                {new Date(day.date).toLocaleDateString('en-US', { 
                                  weekday: 'long', 
                                  month: 'long', 
                                  day: 'numeric' 
                                })}
                              </h4>
                              <p className="text-sm text-slate-600">{day.location}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-slate-900">
                              {formatCurrency(day.dailyCost)} per person
                            </p>
                            <p className="text-xs text-slate-500">
                              {day.flight && day.hotel ? 'Flight + Hotel' : 
                               day.activities.length > 0 ? 'Meals + Transport' : 'Travel Day'}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {day.flight && (
                            <div className="bg-slate-50 rounded-lg p-3">
                              <div className="flex items-center space-x-2 mb-2">
                                <Plane className="h-4 w-4 text-primary-600" />
                                <span className="text-sm font-medium">Flight {day.flight.flightNumber}</span>
                              </div>
                              <p className="text-xs text-slate-600">
                                {day.flight.departure.airport} → {day.flight.arrival.airport} • {day.flight.departure.time} - {day.flight.arrival.time}
                              </p>
                            </div>
                          )}

                          {day.hotel && (
                            <div className="bg-slate-50 rounded-lg p-3">
                              <div className="flex items-center space-x-2 mb-2">
                                <Bed className="h-4 w-4 text-primary-600" />
                                <span className="text-sm font-medium">{day.hotel.name}</span>
                              </div>
                              <p className="text-xs text-slate-600">
                                Check-in 4:00 PM • {formatCurrency(day.hotel.pricePerNight)}/night
                              </p>
                            </div>
                          )}

                          {day.activities.map((activity) => (
                            <div key={activity.id} className="bg-slate-50 rounded-lg p-3">
                              <div className="flex items-center space-x-2 mb-2">
                                {getActivityIcon(activity.type)}
                                <span className="text-sm font-medium">{activity.title}</span>
                              </div>
                              <p className="text-xs text-slate-600">
                                {activity.time} • {activity.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 flex justify-center">
                  <Button variant="ghost" className="text-primary-600 hover:text-primary-700">
                    <Plus className="mr-1 h-4 w-4" />
                    Add More Days
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Budget Summary */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Budget Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Flights</span>
                    <span className="font-medium">{formatCurrency(displayItinerary.budget.flights)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Hotels</span>
                    <span className="font-medium">{formatCurrency(displayItinerary.budget.hotels)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Meals</span>
                    <span className="font-medium">{formatCurrency(displayItinerary.budget.meals)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Transport</span>
                    <span className="font-medium">{formatCurrency(displayItinerary.budget.transport)}</span>
                  </div>
                  <hr className="my-3" />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-primary-600">{formatCurrency(displayItinerary.budget.total)}</span>
                  </div>
                </div>
                
                <div className={`mt-4 p-3 rounded-lg ${budgetStatus ? 'bg-emerald-50' : 'bg-red-50'}`}>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${budgetStatus ? 'bg-emerald-600' : 'bg-red-600'}`} />
                    <span className={`text-sm font-medium ${budgetStatus ? 'text-emerald-800' : 'text-red-800'}`}>
                      {budgetStatus ? 'Within Budget' : 'Over Budget'}
                    </span>
                  </div>
                  <p className={`text-xs mt-1 ${budgetStatus ? 'text-emerald-700' : 'text-red-700'}`}>
                    {budgetStatus 
                      ? `${formatCurrency(27000 - displayItinerary.totalCost)} under your $27,000 limit`
                      : `${formatCurrency(displayItinerary.totalCost - 27000)} over your $27,000 limit`
                    }
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white"
                    onClick={exportItinerary}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Export Itinerary
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Share className="mr-2 h-4 w-4" />
                    Share with Team
                  </Button>
                  <Button variant="outline" className="w-full">
                    <CalendarPlus className="mr-2 h-4 w-4" />
                    Add to Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AI Suggestions */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">AI Suggestions</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Lightbulb className="h-4 w-4 text-blue-600 mt-1" />
                      <div>
                        <p className="text-sm font-medium text-blue-900">Save $320 on flights</p>
                        <p className="text-xs text-blue-700">Consider departing Tuesday instead of Monday</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-purple-600 mt-1" />
                      <div>
                        <p className="text-sm font-medium text-purple-900">Better hotel option</p>
                        <p className="text-xs text-purple-700">Hyatt nearby is 15% cheaper with same rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
