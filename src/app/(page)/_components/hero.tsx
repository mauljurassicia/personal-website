import { Bricolage_Grotesque, Syne } from "next/font/google";
import TypewriterEffect from "@/components/ui/typewriter-effect";
import StarOne from "@/components/accesorises/star-one";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
});

const SyneFont = Syne({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syne",
});

// ⬇️ strings for normal items, JSX for the special one
const listProfessions = [
  "developer",
  "dreamer",
  "designer",
  "doer",
  { text: "dietisien (not really)", className: "!text-6xl !lg:text-6xl" },
];

export default function Hero() {
  return (
    <div className="flex items-center justify-between px-5">
      <h1 className="flex flex-col gap-2 w-[60%] pl-15 lg:min-h-[264]">
        <span className={SyneFont.className + " text-[10rem]/[10rem] font-bold "}>
          I'M A
        </span>
        <span className={bricolageGrotesque.className}>
          <TypewriterEffect texts={listProfessions} className="lg:text-8xl text-gray-600" />
        </span>
      </h1>

      {/* star graphic */}
      <div className="w-[40%] h-[500px] flex items-center justify-center relative">
        <div className="absolute rotate-[5deg] opacity-70">
          <StarOne size={450} color="var(--color-chart-1)" />
        </div>
        <div className="absolute rotate-[-5deg] opacity-90">
          <StarOne size={450} color="var(--color-chart-3)" />
        </div>
      </div>
    </div>
  );
}
