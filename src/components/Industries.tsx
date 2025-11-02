// ...existing code...
import { Building2, Hammer, Factory, GitBranch, Home, Drill } from 'lucide-react';

const industries = [
  {
    icon: Building2,
    name: 'Construction',
    description: 'High-grade steel for residential and commercial building projects with superior strength and durability.',
    example: 'Reinforcement for 18 apartment towers in İstanbul',
    stat: '50k+ tons supplied'
  },
  {
    icon: GitBranch,
    name: 'Infrastructure',
    description: 'Structural steel for bridges, highways and large-scale public works with certified welds and QA.',
    example: 'Girders supplied for regional overpass projects',
    stat: '12 major projects'
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Precision steel components for machinery, jigs and plant equipment with tight tolerances.',
    example: 'Custom press frames for OEM lines',
    stat: '5 custom production lines'
  },
  {
    icon: Hammer,
    name: 'Fabrication',
    description: 'End-to-end fabrication: cutting, welding, machining and finishing for bespoke assemblies.',
    example: 'Bespoke welded assemblies for energy sector',
    stat: '24/7 shop capacity'
  },
  {
    icon: Home,
    name: 'Real Estate',
    description: 'Reliable framing, roofing and structural sections for housing developments and commercial builds.',
    example: 'Roof & framing supply for suburban developments',
    stat: '10k+ homes served'
  },
  {
    icon: Drill,
    name: 'Mining & Heavy Industry',
    description: 'Wear-resistant plates, casings and heavy sections engineered for harsh mining environments.',
    example: 'Wear plates and drill casings for regional mines',
    stat: 'Wear life +30%'
  }
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Trusted partner across diverse sectors with specialized steel solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
              >
                <div className="bg-emerald-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {industry.name}
                </h3>

                {industry.stat && (
                  <div className="text-sm text-emerald-600 font-medium mb-2">
                    {industry.stat}
                  </div>
                )}

                <p className="text-slate-600 leading-relaxed mb-2">
                  {industry.description}
                </p>

                {industry.example && (
                  <p className="text-sm text-slate-500">Example: {industry.example}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
// ...existing code...