import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  const benefits = [
    "No credit card required",
    "14-day free trial",
    "Cancel anytime"
  ];

  return (
    <section className="py-16 gradient-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Group Travel?</h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Join thousands of users who have streamlined their group travel planning with Nowadays Travel AI
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50 shadow-lg">
            Start Free Trial
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary-600">
            Schedule Demo
          </Button>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-primary-200">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Check className="h-4 w-4" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
