import Image from "next/image";
import Hero from "./_components/hero";
import HeroDetail from "./_components/hero-detail";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <section id="hero" className="lg:pt-16 flex flex-col gap-20">
        <Hero />
        <HeroDetail />
      </section>
      <section id="story"></section>
      <section id="skill" className="px-[5%] py-20 bg-muted">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-3xl font-bold text-center">My Skillset</h2>

          {/* Tech skills */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm font-medium">
              <li className="bg-white border px-4 py-2 text-center rounded">
                HTML / CSS
              </li>
              <li className="bg-white border px-4 py-2 text-center rounded">
                JavaScript
              </li>
              <li className="bg-white border px-4 py-2 text-center rounded">
                React / Next.js
              </li>
              <li className="bg-white border px-4 py-2 text-center rounded">
                Tailwind CSS
              </li>
              <li className="bg-white border px-4 py-2 text-center rounded">
                Node.js
              </li>
              <li className="bg-white border px-4 py-2 text-center rounded">
                Supabase
              </li>
              <li className="bg-white border px-4 py-2 text-center rounded">
                Framer Motion
              </li>
              <li className="bg-white border px-4 py-2 text-center rounded">
                Git & GitHub
              </li>
            </ul>
          </div>

          {/* Domain skills */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Nutrition & Research</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Knowledge in human nutrition and dietary planning</li>
              <li>
                Understanding of public health nutrition and interventions
              </li>
              <li>Experience with research writing & literature review</li>
              <li>Interest in applying tech to improve health data systems</li>
            </ul>
          </div>
        </div>
      </section>

      
      <section id="portfolio"></section>
    </main>
  );
}
