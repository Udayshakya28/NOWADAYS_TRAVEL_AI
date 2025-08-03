import { Clock, CheckCircle, XCircle, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FeatureComparison() {
  const traditionalFeatures = [
    {
      icon: <XCircle className="text-red-500 mt-1" />,
      title: "20+ hours per trip",
      description: "Manual research across multiple sites"
    },
    {
      icon: <XCircle className="text-red-500 mt-1" />,
      title: "Fragmented information",
      description: "Scattered emails, bookings, and documents"
    },
    {
      icon: <XCircle className="text-red-500 mt-1" />,
      title: "Budget surprises",
      description: "Hidden costs discovered during booking"
    },
    {
      icon: <XCircle className="text-red-500 mt-1" />,
      title: "Limited optimization",
      description: "No AI suggestions for cost savings"
    }
  ];

  const aiFeatures = [
    {
      icon: <CheckCircle className="text-emerald-500 mt-1" />,
      title: "5 minutes to plan",
      description: "AI generates optimized itineraries instantly"
    },
    {
      icon: <CheckCircle className="text-emerald-500 mt-1" />,
      title: "Unified dashboard",
      description: "All bookings, budgets, and plans in one place"
    },
    {
      icon: <CheckCircle className="text-emerald-500 mt-1" />,
      title: "Real-time budget tracking",
      description: "Live cost estimates with instant updates"
    },
    {
      icon: <CheckCircle className="text-emerald-500 mt-1" />,
      title: "Smart cost optimization",
      description: "AI finds the best deals and suggests savings"
    }
  ];

  const stats = [
    { value: "400x", label: "Faster planning" },
    { value: "25%", label: "Average cost savings" },
    { value: "400K+", label: "Vetted venues" },
    { value: "99.9%", label: "Uptime guarantee" }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose TravelFlow AI?</h2>
          <p className="text-slate-600">Compare traditional planning methods with our AI-powered solution</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Traditional Method */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-red-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Traditional Planning</h3>
                <p className="text-slate-600">Manual research and coordination</p>
              </div>
              
              <div className="space-y-4">
                {traditionalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    {feature.icon}
                    <div>
                      <p className="font-medium text-slate-900">{feature.title}</p>
                      <p className="text-sm text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <div className="text-center">
                  <p className="text-red-800 font-semibold">Average Time: 20+ hours</p>
                  <p className="text-red-600 text-sm">Potential overspend: 15-30%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* TravelFlow AI Method */}
          <Card className="shadow-lg border-2 border-primary-200">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-primary-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">TravelFlow AI</h3>
                <p className="text-slate-600">AI-powered intelligent planning</p>
              </div>
              
              <div className="space-y-4">
                {aiFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    {feature.icon}
                    <div>
                      <p className="font-medium text-slate-900">{feature.title}</p>
                      <p className="text-sm text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <div className="text-center">
                  <p className="text-primary-800 font-semibold">Average Time: 5 minutes</p>
                  <p className="text-primary-600 text-sm">Average savings: 20-35%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
