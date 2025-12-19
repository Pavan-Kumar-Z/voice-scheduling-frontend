import { Calendar, Mic, Sparkles, Clock } from 'lucide-react';

export const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Calendar className="w-12 h-12 text-primary-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Voice<span className="text-primary-600">Schedule</span>
            </h1>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Schedule Meetings with
            <span className="text-primary-600"> Your Voice</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Just speak naturally. Our AI assistant will handle the rest and 
            create calendar events in seconds.
          </p>

          {/* CTA Button */}
          <button
            onClick={onGetStarted}
            className="btn-primary text-lg inline-flex items-center gap-3 group"
          >
            <Mic className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Start Scheduling Now
            <Sparkles className="w-5 h-5" />
          </button>

          {/* Trust Badge */}
          <p className="mt-6 text-sm text-gray-500">
            ✨ Free to use • 🔒 Secure • ⚡ Instant
          </p>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FeatureCard
            icon={<Mic className="w-8 h-8 text-primary-600" />}
            title="Natural Voice Input"
            description="Just talk naturally. Say 'tomorrow at 3pm' and our AI understands perfectly."
          />
          <FeatureCard
            icon={<Clock className="w-8 h-8 text-primary-600" />}
            title="Instant Creation"
            description="Events appear in your Google Calendar within seconds. No typing required."
          />
          <FeatureCard
            icon={<Sparkles className="w-8 h-8 text-primary-600" />}
            title="Smart AI Assistant"
            description="Powered by GPT-4. Handles dates, times, and confirmations intelligently."
          />
        </div>

        {/* How It Works */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            How It Works
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Click & Speak"
              description="Click the microphone button and tell us about your meeting"
            />
            <StepCard
              number="2"
              title="AI Confirms"
              description="Our assistant confirms all details with you before creating"
            />
            <StepCard
              number="3"
              title="Event Created"
              description="Your meeting appears in Google Calendar instantly"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="card text-center hover:shadow-xl transition-shadow">
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const StepCard = ({ number, title, description }) => (
  <div className="relative">
    <div className="card">
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
        {number}
      </div>
      <h4 className="text-lg font-semibold mb-2 text-gray-900 mt-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);