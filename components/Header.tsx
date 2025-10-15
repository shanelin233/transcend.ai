import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo and Brand */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image src="/logo.svg" alt="Logo" width={32} height={32} />
            <span className="text-xl font-semibold text-gray-900">Transend AI</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border border-gray-200 w-64">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none outline-none text-sm w-full placeholder:text-gray-400"
            />
            <span className="text-xs text-gray-400">/</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <button className="hidden md:inline-block text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Models
          </button>
          <button className="hidden md:inline-block text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Chat
          </button>
          <button className="hidden md:inline-block text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Rankings
          </button>
          <button className="hidden md:inline-block text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Enterprise
          </button>
          <button className="hidden md:inline-block text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Docs
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all shadow-sm hover:shadow-md">
            Sign in
          </button>
        </div>
      </nav>
    </header>
  );
}
