import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="gradient-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Group Travel Made <span className="text-primary-600">Effortless</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            AI-powered itinerary planning, budget estimation, and travel coordination for corporate events, business trips, and group adventures with friends.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Check className="h-5 w-5 text-emerald-600" />
              <span className="text-slate-700">Multi-city itinerary builder for any group size</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="h-5 w-5 text-emerald-600" />
              <span className="text-slate-700">Real-time budget splitting & estimation</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="h-5 w-5 text-emerald-600" />
              <span className="text-slate-700">Smart recommendations for groups & teams</span>
            </div>
            <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white">
              Start Planning Now
            </Button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Business traveler using laptop at airport" 
              className="rounded-xl shadow-2xl float-animation" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
