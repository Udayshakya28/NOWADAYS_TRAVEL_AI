import { Card, CardContent } from "@/components/ui/card";

export default function IntegrationSection() {
  const integrations = [
    {
      name: "Slack Integration",
      description: "Get itinerary updates and approvals directly in your team channels",
      icon: "💬",
      color: "bg-blue-100"
    },
    {
      name: "Google Workspace",
      description: "Sync calendars, share documents, and collaborate on travel plans",
      icon: "🔍",
      color: "bg-red-100"
    },
    {
      name: "Microsoft 365",
      description: "Seamless integration with Outlook, Teams, and SharePoint",
      icon: "🖥️",
      color: "bg-purple-100"
    },
    {
      name: "Expense Management",
      description: "Connect with Expensify, Concur, and other expense platforms",
      icon: "📊",
      color: "bg-green-100"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Seamless Integration with Your Workflow</h2>
          <p className="text-slate-600">Connect with the tools your team already uses</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional using travel booking interface on laptop" 
              className="rounded-xl shadow-lg" 
            />
          </div>
          <div className="space-y-8">
            {integrations.map((integration, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${integration.color} rounded-lg flex items-center justify-center text-xl`}>
                  {integration.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{integration.name}</h3>
                  <p className="text-slate-600">{integration.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
