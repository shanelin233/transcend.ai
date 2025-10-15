import { User, CreditCard, Key, Github, Mail, Wallet } from 'lucide-react';

export default function Steps() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Step 1: Signup */}
        <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 font-bold text-lg">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Signup</h3>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Create an account to get started. You can set up an org for your team later.
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <User className="w-8 h-8 text-gray-400 mb-4" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
                  <Github className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Buy credits */}
        <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 font-bold text-lg">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Buy credits</h3>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Credits can be used with any model or provider.
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <CreditCard className="w-8 h-8 text-gray-400 mb-4" />
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-xs text-gray-500">Apr 1</span>
                  <span className="font-semibold text-gray-900">$99</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-xs text-gray-500">Mar 30</span>
                  <span className="font-semibold text-gray-900">$10</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Get your API key */}
        <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 font-bold text-lg">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Get your API key</h3>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Create an API key and start making requests.{' '}
            <a href="#" className="text-indigo-600 hover:text-indigo-700 underline">
              Fully OpenAI compatible
            </a>
            .
          </p>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border border-gray-200 space-y-3">
              <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                <Key className="w-4 h-4 text-gray-400" />
                <span className="text-xs font-mono text-gray-600">TRANSEND_AI_KEY</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-400">••••••••••••••••</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
