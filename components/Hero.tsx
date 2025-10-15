import { ArrowRight, Send, Sparkles } from 'lucide-react';

export default function Hero() {
  const featuredModels = [
    {
      name: 'Gemini 2.5 Pro',
      provider: 'google',
      tokens: '143.7B',
      latency: '2.5s',
      growth: '-6.82%',
      growthPositive: false,
    },
    {
      name: 'GPT-5',
      provider: 'openai',
      tokens: '157.1B',
      latency: '7.4s',
      growth: '+20.69%',
      growthPositive: true,
    },
    {
      name: 'Claude Sonnet 4.5',
      provider: 'anthropic',
      tokens: '2.6B',
      latency: '2.1s',
      growth: '--',
      growthPositive: null,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Hero Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="block">The Unified</span>
              <span className="block">Interface For LLMs</span>
            </h1>
            <p className="text-lg text-gray-600">
              Better{' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-700 underline">
                prices
              </a>
              , better{' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-700 underline">
                uptime
              </a>
              , no subscription.
            </p>
          </div>

          {/* Chat Input Demo */}
          <div className="relative">
            <div className="absolute -left-4 top-1/2 w-24 h-24 bg-indigo-100 rounded-full blur-3xl opacity-50" />
            <div className="relative bg-white rounded-2xl border-2 border-gray-200 shadow-xl overflow-hidden">
              <div className="flex items-center gap-2 p-2">
                <Sparkles className="w-5 h-5 text-indigo-600 ml-2" />
                <input
                  type="text"
                  placeholder="Start a message..."
                  className="flex-1 px-3 py-3 text-gray-700 placeholder:text-gray-400 border-none outline-none"
                />
                <button className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Featured Models */}
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Featured Models</h2>
            <a href="#" className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700 font-medium">
              View Trending
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-3">
            {featuredModels.map((model, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{model.name}</h3>
                    <p className="text-sm text-gray-500">by {model.provider}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500" />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{model.tokens}</p>
                    <p className="text-xs text-gray-500">Tokens/wk</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{model.latency}</p>
                    <p className="text-xs text-gray-500">Latency</p>
                  </div>
                  <div>
                    <p
                      className={`text-sm font-semibold ${
                        model.growthPositive === true
                          ? 'text-green-600'
                          : model.growthPositive === false
                          ? 'text-red-600'
                          : 'text-gray-400'
                      }`}
                    >
                      {model.growth}
                    </p>
                    <p className="text-xs text-gray-500">Weekly growth</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
