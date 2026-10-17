import { cn } from "@/lib/utils";

function Frame({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <figure className={cn("rounded-xl bg-surface p-4 shadow-plate", className)}>
      <figcaption className="mb-3 text-xs uppercase tracking-[0.16em] text-muted">{title}</figcaption>
      {children}
    </figure>
  );
}

export function UrinaryDiagram() {
  return (
    <Frame title="Urinary tract — male cat, schematic">
      <svg viewBox="0 0 360 220" className="h-auto w-full" role="img" aria-label="Male feline urinary tract schematic">
        <rect width="360" height="220" fill="#F4EFE6" rx="12" />
        <ellipse cx="150" cy="118" rx="110" ry="70" fill="#EFE8DC" />
        <ellipse cx="168" cy="100" rx="38" ry="28" fill="#2A5348" opacity="0.9" />
        <text x="168" y="104" textAnchor="middle" fontSize="11" fill="#F4EFE6">
          Bladder
        </text>
        <path d="M200 112 C 250 118, 280 150, 300 168" stroke="#9B2C2C" strokeWidth="7" fill="none" />
        <text x="236" y="138" fontSize="11" fill="#9B2C2C">
          Urethra (narrow)
        </text>
        <circle cx="304" cy="172" r="7" fill="#9B2C2C" />
        <text x="20" y="28" fontSize="12" fill="#1A1814">
          A plug here stops all urine.
        </text>
        <text x="20" y="204" fontSize="11" fill="#6F685E">
          Schematic only — not a diagnostic image.
        </text>
      </svg>
    </Frame>
  );
}

export function RespiratoryDiagram() {
  return (
    <Frame title="Breathing effort — what to watch">
      <svg viewBox="0 0 360 220" className="h-auto w-full" role="img" aria-label="Feline respiratory effort schematic">
        <rect width="360" height="220" fill="#F4EFE6" rx="12" />
        <ellipse cx="160" cy="120" rx="100" ry="64" fill="#EFE8DC" />
        <ellipse cx="148" cy="108" rx="34" ry="26" fill="#2A5348" />
        <text x="148" y="112" textAnchor="middle" fontSize="11" fill="#F4EFE6">
          Lungs
        </text>
        <path d="M210 90 C 250 70, 280 90, 300 80" stroke="#2A5348" strokeWidth="3" fill="none" />
        <text x="222" y="68" fontSize="11" fill="#2A5348">
          Open mouth = emergency
        </text>
        <path d="M80 160 C 120 190, 180 190, 220 160" stroke="#9B2C2C" strokeWidth="3" fill="none" />
        <text x="96" y="204" fontSize="11" fill="#9B2C2C">
          Belly pumping
        </text>
      </svg>
    </Frame>
  );
}

export function CardiacDiagram() {
  return (
    <Frame title="Aorta split — saddle thrombus">
      <svg viewBox="0 0 360 220" className="h-auto w-full" role="img" aria-label="Saddle thrombus schematic">
        <rect width="360" height="220" fill="#F4EFE6" rx="12" />
        <ellipse cx="150" cy="70" rx="28" ry="22" fill="#9B2C2C" />
        <text x="150" y="74" textAnchor="middle" fontSize="11" fill="#F4EFE6">
          Heart
        </text>
        <path d="M150 92 L150 130 L110 190 M150 130 L190 190" stroke="#2A5348" strokeWidth="8" fill="none" />
        <circle cx="150" cy="132" r="9" fill="#9B2C2C" />
        <text x="168" y="128" fontSize="11" fill="#9B2C2C">
          Clot at the split
        </text>
        <text x="70" y="210" fontSize="11" fill="#6F685E">
          Hind paws go cold. This is pain. Go now.
        </text>
      </svg>
    </Frame>
  );
}

export function GiDiagram() {
  return (
    <Frame title="Stomach and gut — schematic">
      <svg viewBox="0 0 360 220" className="h-auto w-full" role="img" aria-label="Feline gastrointestinal schematic">
        <rect width="360" height="220" fill="#F4EFE6" rx="12" />
        <ellipse cx="130" cy="90" rx="36" ry="24" fill="#2A5348" />
        <text x="130" y="94" textAnchor="middle" fontSize="11" fill="#F4EFE6">
          Stomach
        </text>
        <path
          d="M160 96 C 200 80, 230 120, 200 140 C 170 160, 240 170, 250 150"
          stroke="#2A5348"
          strokeWidth="6"
          fill="none"
        />
        <text x="200" y="188" fontSize="11" fill="#6F685E">
          Repeated vomiting or a hanging string is not a wait.
        </text>
      </svg>
    </Frame>
  );
}

export function NeuroDiagram() {
  return (
    <Frame title="Collapse — keep the carrier level">
      <svg viewBox="0 0 360 220" className="h-auto w-full" role="img" aria-label="Collapse handling schematic">
        <rect width="360" height="220" fill="#F4EFE6" rx="12" />
        <rect x="70" y="80" width="220" height="80" rx="14" fill="#2A5348" />
        <ellipse cx="180" cy="120" rx="70" ry="22" fill="#F4EFE6" />
        <text x="180" y="124" textAnchor="middle" fontSize="12" fill="#2A5348">
          Level carrier
        </text>
        <text x="40" y="40" fontSize="12" fill="#1A1814">
          Do not dangle. Do not give oral medicine.
        </text>
      </svg>
    </Frame>
  );
}

export function TraumaDiagram() {
  return (
    <Frame title="Pressure, then the hospital">
      <svg viewBox="0 0 360 220" className="h-auto w-full" role="img" aria-label="Bleeding control schematic">
        <rect width="360" height="220" fill="#F4EFE6" rx="12" />
        <rect x="90" y="70" width="80" height="90" rx="8" fill="#EFE8DC" />
        <rect x="150" y="90" width="90" height="50" rx="8" fill="#2A5348" />
        <text x="195" y="120" textAnchor="middle" fontSize="11" fill="#F4EFE6">
          Firm cloth
        </text>
        <text x="40" y="200" fontSize="11" fill="#6F685E">
          Direct pressure. No tourniquet unless a veterinarian is on the phone.
        </text>
      </svg>
    </Frame>
  );
}

export function Anatomy({ kind }: { kind?: string }) {
  switch (kind) {
    case "urinary":
      return <UrinaryDiagram />;
    case "respiratory":
      return <RespiratoryDiagram />;
    case "cardiac":
      return <CardiacDiagram />;
    case "gi":
      return <GiDiagram />;
    case "neuro":
      return <NeuroDiagram />;
    case "trauma":
      return <TraumaDiagram />;
    default:
      return null;
  }
}
