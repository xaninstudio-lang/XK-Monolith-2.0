import React from 'react';
import { BioluminescentGrid, BioluminescentGridItem } from './ExperimentsGrid';
import { MousePointer2, ScrollText, LayoutGrid, Fingerprint, Activity, Box } from 'lucide-react';

export default function Experiments() {
  const studies = [
    {
      Icon: Box,
      title: "Experiments",
      description: "A focused set of UI and motion studies exploring interaction, layout, and visual rhythm.",
      className: "md:col-span-2 md:row-span-2",
      isHeader: true,
    },
    {
      Icon: MousePointer2,
      title: "Interactive Cards",
      description: "Hover, focus, and layered motion behavior.",
      className: "",
    },
    {
      Icon: ScrollText,
      title: "Scroll Motion",
      description: "Elements that respond smoothly to scroll.",
      className: "",
    },
    {
      Icon: LayoutGrid,
      title: "Grid & Layout Systems",
      description: "Structured, responsive layout experiments.",
      className: "md:row-span-2",
    },
    {
      Icon: Fingerprint,
      title: "Micro-Interactions",
      description: "Subtle feedback through motion and state.",
      className: "md:col-span-2",
    },
    {
      Icon: Activity,
      title: "Transitions & States",
      description: "Animated state changes and flow.",
      className: "",
    },
  ];

  return (
    <section id="experiments" className="py-32 bg-[#050505] px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <BioluminescentGrid>
          {studies.map((feature, i) => (
            <BioluminescentGridItem key={i} className={feature.className}>
              <div className={`flex flex-col h-full p-8 ${feature.isHeader ? 'justify-center' : 'justify-between'}`}>
                <feature.Icon 
                  strokeWidth={1} 
                  className={`${feature.isHeader ? 'w-12 h-12 mb-8' : 'w-5 h-5'} text-white/50 group-hover:text-white transition-colors duration-500`} 
                />
                <div>
                  <h2 className={`${feature.isHeader ? 'text-4xl' : 'text-xs'} text-white font-light tracking-widest uppercase mb-4`}>
                    {feature.title}
                  </h2>
                  <p className={`font-mono leading-relaxed text-white/40 uppercase tracking-tighter ${feature.isHeader ? 'text-lg max-w-sm' : 'text-[10px]'}`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </BioluminescentGridItem>
          ))}
        </BioluminescentGrid>
      </div>
    </section>
  );
}