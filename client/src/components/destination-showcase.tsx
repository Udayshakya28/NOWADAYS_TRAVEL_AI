import { Star, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { destinations } from "@/lib/travel-data";

export default function DestinationShowcase() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Popular': 'bg-emerald-100 text-emerald-800',
      'Trending': 'bg-blue-100 text-blue-800',
      'Tech Hub': 'bg-purple-100 text-purple-800',
      'Asia Gateway': 'bg-green-100 text-green-800',
      'Luxury': 'bg-orange-100 text-orange-800',
      'Startup Hub': 'bg-indigo-100 text-indigo-800',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Popular Business Destinations</h2>
          <p className="text-slate-600">Discover the best corporate travel destinations with AI-powered insights</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card 
              key={destination.id} 
              className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <img 
                src={destination.imageUrl}
                alt={`${destination.name} cityscape`}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-slate-900">{destination.name}</h3>
                  <Badge className={`text-sm ${getCategoryColor(destination.category)}`}>
                    {destination.category}
                  </Badge>
                </div>
                <p className="text-slate-600 text-sm mb-4">{destination.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-slate-500">Avg. Flight</p>
                    <p className="font-semibold text-slate-900">{formatCurrency(destination.averageFlightCost)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Avg. Hotel</p>
                    <p className="font-semibold text-slate-900">{formatCurrency(destination.averageHotelCost)}/night</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                    <span className="text-xs text-slate-500">({destination.reviewCount.toLocaleString()} reviews)</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary-600 hover:text-primary-700 p-0">
                    View Details <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
