import { Bell } from "lucide-react";
import nowadaysLogo from "@assets/image_1754246748647.png";

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <img src={nowadaysLogo} alt="Nowadays" className="h-8 w-auto" />
              <div>
                <span className="text-xl font-bold text-slate-900">Nowadays Travel AI</span>
                <div className="text-xs text-slate-600 -mt-1">From idea to itinerary</div>
              </div>
              <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full font-medium">
                Beta
              </span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                Dashboard
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                Itineraries
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                Budget Tools
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                Reports
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-slate-600 hover:text-slate-900 transition-colors">
              <Bell size={20} />
            </button>
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">JD</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
