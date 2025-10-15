import { ArrowRight } from 'lucide-react';

export default function Announcements() {
  const announcements = [
    {
      title: '1 million free BYOK requests per month',
      description: 'Every customer gets 1,000,000 "Bring Your Own Key" (BYOK) requests per month for free.',
      date: '2025/10/1',
    },
    {
      title: 'The First-Ever Image Model Is Up on Transend AI',
      description: 'SOTA image generation, character consistency, and multi-image outputs—now live with Gemini 2.5 Flash Image Preview.',
      date: '2025/8/26',
    },
    {
      title: 'Tool Calling Accuracy',
      description: 'After just one week on the platform, GPT-5 has taken the #1 spot for tool calling accuracy on Transend AI. Here\'s how the leaderboard looks and what this means for developers.',
      date: '2025/8/14',
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Recent Announcements</h2>
        <a href="#" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium">
          View all
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {announcements.map((announcement, index) => (
          <a
            key={index}
            href="#"
            className="bg-white rounded-xl border border-gray-200 p-6 hover:border-indigo-300 hover:shadow-md transition-all group"
          >
            <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
              {announcement.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {announcement.description}
            </p>
            <time className="text-xs text-gray-400">{announcement.date}</time>
          </a>
        ))}
      </div>
    </section>
  );
}
