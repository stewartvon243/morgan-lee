import { cn } from "@/lib/utils";
import {
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiDotnet,
  SiCsharp,
  SiAngular,
  SiAngularjs,
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiFirebase,
  SiAndroid,
  SiThreedotjs,
  SiSolidity,
  SiWeb3Dotjs,
  SiTypescript,
  SiRust,
  SiEthereum,
  SiVuedotjs,
  SiWordpress,
} from "react-icons/si";
import { Gamepad2, Link, Anchor } from "lucide-react";

const techCategories = {
  blockchain: [
    { Icon: SiSolidity, label: "Solidity" },
    { Icon: SiRust, label: "Rust" },
    { Icon: SiWeb3Dotjs, label: "Web3.js" },
    { Icon: Gamepad2, label: "Hardhat" },
    { Icon: Gamepad2, label: "Truffle" },
    { Icon: Gamepad2, label: "Anchor" },
    { Icon: SiEthereum, label: "Ethereum" },
    { Icon: Link, label: "Solana" },
    { Icon: Anchor, label: "Polygon" },
  ],
  frontend: [
    { Icon: SiReact, label: "React" },
    { Icon: SiVuedotjs, label: "Vue.js" },
    { Icon: SiAngular, label: "Angular" },
    { Icon: SiAngularjs, label: "AngularJS" },
    { Icon: SiJavascript, label: "JavaScript" },
    { Icon: SiTypescript, label: "TypeScript" },
    { Icon: SiThreedotjs, label: "Three.js" },
    { Icon: SiAndroid, label: "Android" },
  ],
  backend: [
    { Icon: SiNodedotjs, label: "Node.js" },
    { Icon: SiPhp, label: "PHP" },
    { Icon: SiLaravel, label: "Laravel" },
    { Icon: SiWordpress, label: "WordPress" },
    { Icon: SiDotnet, label: ".NET" },
    { Icon: SiCsharp, label: "C#" },
    { Icon: SiRust, label: "Rust" },
  ],
  database: [
    { Icon: SiMysql, label: "MySQL" },
    { Icon: SiMongodb, label: "MongoDB" },
    { Icon: SiPostgresql, label: "PostgreSQL" },
    { Icon: SiSupabase, label: "Supabase" },
    { Icon: SiFirebase, label: "Firebase" },
  ],
};

export default function TechStack({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-12", className)}>
      {Object.entries(techCategories).map(([category, items]) => (
        <div key={category} className="text-center">
          <h3 className="text-xl font-semibold text-primary mb-6 capitalize">{category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
            {items.map(({ Icon, label }) => (
              <div 
                key={label} 
                className="glass-panel neon-border rounded-xl p-6 flex flex-col items-center justify-center hover-scale w-full max-w-[120px]" 
                aria-label={label}
              >
                <Icon className="size-12 text-primary mb-3" aria-hidden />
                <span className="text-sm text-muted-foreground font-medium text-center">{label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
