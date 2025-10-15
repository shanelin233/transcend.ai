export default function Stats() {
  const stats = [
    { value: '12T', label: 'Monthly Tokens', linkable: true },
    { value: '4.2M+', label: 'Global Users', linkable: false },
    { value: '60+', label: 'Active Providers', linkable: true },
    { value: '500+', label: 'Models', linkable: true },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`text-center ${stat.linkable ? 'cursor-pointer group' : ''}`}
          >
            <div className={`space-y-2 ${stat.linkable ? 'group-hover:opacity-80 transition-opacity' : ''}`}>
              <p className={`text-4xl md:text-5xl font-bold ${index === 3 ? 'text-indigo-600' : 'text-gray-900'}`}>
                {stat.value}
              </p>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
