import { ArrowRight, Boxes, Activity, TrendingUp, Shield } from 'lucide-react';

export default function Features() {
  return (
    <section className="container mx-auto px-4 py-20 space-y-12">
      {/* Feature 1: One API for Any Model */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-indigo-100">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Boxes className="w-6 h-6 text-indigo-600" />
              <h3 className="text-2xl font-bold text-gray-900">One API for Any Model</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Access all major models through a single, unified interface. OpenAI SDK works out of the box.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium">
              Browse all
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-6 gap-3">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-white shadow-sm flex items-center justify-center border border-gray-200"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature 2: Higher Availability */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-green-100">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="inline-block px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-sm font-mono">
                  anthropic/claude-3.7-sonnet
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-50" />
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600" />
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 opacity-50" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Activity className="w-6 h-6 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900">Higher Availability</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Reliable AI models via our distributed infrastructure. Fall back to other providers when one goes down.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium">
              Learn more
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Feature 3: Price and Performance */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-blue-100">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Price and Performance</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Keep costs in check without sacrificing speed. Transend AI runs at the edge, adding just ~25ms between your users and their inference.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
              Learn more
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="h-48 bg-white rounded-xl border border-gray-200 p-4 flex items-end gap-2">
            {[40, 65, 45, 80, 55, 90, 70, 85].map((height, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
      </div>

      {/* Feature 4: Custom Data Policies */}
      <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-violet-100">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 flex items-center justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-white shadow-lg border-4 border-violet-200 flex items-center justify-center">
                <Shield className="w-16 h-16 text-violet-600" />
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-green-400 border-4 border-white flex items-center justify-center">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-violet-600" />
              <h3 className="text-2xl font-bold text-gray-900">Custom Data Policies</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Protect your organization with fine grained data policies. Ensure prompts only go to the models and providers you trust.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-medium">
              View docs
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {/* Explore Models */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer group">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
              <Boxes className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Explore Models</h3>
              <p className="text-gray-600 text-sm">
                Discover AI models across our collection, from all major labs and providers.
              </p>
            </div>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-indigo-600 group-hover:text-indigo-700 font-medium text-sm">
            View models
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Model & App Rankings */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer group">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Model & App Rankings</h3>
              <p className="text-gray-600 text-sm">
                Explore token usage across models, labs, and public applications.
              </p>
            </div>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-blue-600 group-hover:text-blue-700 font-medium text-sm">
            View rankings
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
