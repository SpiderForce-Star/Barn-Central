/** 2D elevations and cross-sections for accessories and insulation. Not isometric. Not AI barns. */

export function WalkDoorElevation() {
  return (
    <svg viewBox="0 0 420 220" className="h-auto w-full" role="img" aria-label="Walk door beside overheads">
      <rect width="420" height="220" fill="#e9e1d4" />
      <rect x="0" y="188" width="420" height="32" fill="#d4c6b0" />
      <line x1="0" y1="188" x2="420" y2="188" stroke="#8b5a2b" strokeWidth="2" />
      <rect x="48" y="70" width="324" height="118" fill="#f2f1ed" stroke="#1a120c" strokeWidth="1.4" />
      <polygon points="48,70 210,28 372,70" fill="#f2f1ed" stroke="#1a120c" strokeWidth="1.4" />
      <polygon points="42,74 210,22 378,74 372,70 210,28 48,70" fill="#5d6168" />
      <rect x="86" y="108" width="92" height="80" fill="#1a120c" opacity="0.55" />
      <rect x="86" y="108" width="92" height="5" fill="#5d6168" />
      <rect x="192" y="108" width="92" height="80" fill="#1a120c" opacity="0.55" />
      <rect x="192" y="108" width="92" height="5" fill="#5d6168" />
      <rect x="300" y="118" width="28" height="70" fill="#2a1f16" stroke="#5d6168" strokeWidth="1.2" />
      <rect x="304" y="124" width="20" height="28" fill="#cfe4f2" stroke="#5d6168" strokeWidth="0.8" />
      <circle cx="322" cy="162" r="1.8" fill="#c4a574" />
    </svg>
  );
}

export function WindowElevation() {
  return (
    <svg viewBox="0 0 420 220" className="h-auto w-full" role="img" aria-label="Windows on a shop and living wall">
      <rect width="420" height="220" fill="#e9e1d4" />
      <rect x="0" y="188" width="420" height="32" fill="#d4c6b0" />
      <line x1="0" y1="188" x2="420" y2="188" stroke="#8b5a2b" strokeWidth="2" />
      <rect x="40" y="72" width="340" height="116" fill="#f2f1ed" stroke="#1a120c" strokeWidth="1.4" />
      <polygon points="40,72 210,30 380,72" fill="#f2f1ed" stroke="#1a120c" strokeWidth="1.4" />
      <polygon points="34,76 210,24 386,76 380,72 210,30 40,72" fill="#5d6168" />
      <rect x="58" y="118" width="70" height="70" fill="#1a120c" opacity="0.5" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={148 + i * 52} y="96" width="40" height="58" fill="#cfe4f2" stroke="#5d6168" strokeWidth="1.4" />
          <line x1={168 + i * 52} y1="96" x2={168 + i * 52} y2="154" stroke="#5d6168" strokeWidth="1" />
          <line x1={148 + i * 52} y1="125" x2={188 + i * 52} y2="125" stroke="#5d6168" strokeWidth="1" />
        </g>
      ))}
    </svg>
  );
}

export function RoofVentElevation() {
  return (
    <svg viewBox="0 0 420 220" className="h-auto w-full" role="img" aria-label="Ridge vent with soffit intake">
      <rect width="420" height="220" fill="#e9e1d4" />
      <rect x="0" y="188" width="420" height="32" fill="#d4c6b0" />
      <line x1="0" y1="188" x2="420" y2="188" stroke="#8b5a2b" strokeWidth="2" />
      <rect x="56" y="78" width="308" height="110" fill="#f2f1ed" stroke="#1a120c" strokeWidth="1.4" />
      <polygon points="56,78 210,32 364,78" fill="#f2f1ed" stroke="#1a120c" strokeWidth="1.4" />
      <polygon points="50,82 210,26 370,82 364,78 210,32 56,78" fill="#5d6168" />
      <line x1="168" y1="38" x2="252" y2="38" stroke="#1a120c" strokeWidth="6" />
      <text x="210" y="28" textAnchor="middle" fontSize="11" fill="#5c3317">
        ridge vent
      </text>
      <rect x="64" y="78" width="18" height="8" fill="#8b5a2b" />
      <rect x="338" y="78" width="18" height="8" fill="#8b5a2b" />
      <text x="73" y="102" textAnchor="middle" fontSize="10" fill="#5c3317">
        soffit
      </text>
      <ellipse cx="210" cy="58" rx="10" ry="14" fill="#d4c6b0" stroke="#1a120c" strokeWidth="1.1" />
      <line x1="204" y1="50" x2="216" y2="66" stroke="#1a120c" strokeWidth="1" />
      <line x1="216" y1="50" x2="204" y2="66" stroke="#1a120c" strokeWidth="1" />
    </svg>
  );
}

export function CupolaElevation() {
  return (
    <svg viewBox="0 0 420 220" className="h-auto w-full" role="img" aria-label="Cupola on a gabled ridge">
      <rect width="420" height="220" fill="#e9e1d4" />
      <rect x="0" y="188" width="420" height="32" fill="#d4c6b0" />
      <line x1="0" y1="188" x2="420" y2="188" stroke="#8b5a2b" strokeWidth="2" />
      <rect x="56" y="92" width="308" height="96" fill="#f2f1ed" stroke="#1a120c" strokeWidth="1.4" />
      <polygon points="56,92 210,48 364,92" fill="#f2f1ed" stroke="#1a120c" strokeWidth="1.4" />
      <polygon points="50,96 210,42 370,96 364,92 210,48 56,92" fill="#5d6168" />
      <rect x="192" y="22" width="36" height="28" fill="#efe6c6" stroke="#1a120c" strokeWidth="1.2" />
      <line x1="200" y1="28" x2="200" y2="46" stroke="#5d6168" strokeWidth="1.4" />
      <line x1="210" y1="28" x2="210" y2="46" stroke="#5d6168" strokeWidth="1.4" />
      <line x1="220" y1="28" x2="220" y2="46" stroke="#5d6168" strokeWidth="1.4" />
      <polygon points="186,22 210,8 234,22" fill="#5d6168" stroke="#1a120c" strokeWidth="1.1" />
      <line x1="210" y1="8" x2="210" y2="2" stroke="#1a120c" strokeWidth="1.2" />
      <path d="M210 2 l8 -3" stroke="#1a120c" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

export function ExtraOptionMark({ kind }: { kind: "wainscot" | "gutters" | "liner" | "posts" }) {
  const labels = {
    wainscot: "Wainscot",
    gutters: "Gutters",
    liner: "Liner panel",
    posts: "Porch posts",
  };
  return (
    <svg viewBox="0 0 200 120" className="h-auto w-full" role="img" aria-label={labels[kind]}>
      <rect width="200" height="120" fill="#e9e1d4" />
      <rect x="28" y="28" width="144" height="72" fill="#f2f1ed" stroke="#1a120c" strokeWidth="1.2" />
      {kind === "wainscot" ? <rect x="28" y="72" width="144" height="28" fill="#555c3a" /> : null}
      {kind === "gutters" ? (
        <rect x="24" y="24" width="152" height="8" fill="#5d6168" />
      ) : null}
      {kind === "liner" ? (
        <>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line
              key={i}
              x1={40 + i * 22}
              y1="32"
              x2={40 + i * 22}
              y2="96"
              stroke="#c8b07a"
              strokeWidth="3"
            />
          ))}
        </>
      ) : null}
      {kind === "posts" ? (
        <>
          <polygon points="28,50 172,28 172,100 28,100" fill="#f2f1ed" stroke="#1a120c" strokeWidth="1.1" />
          {[46, 100, 154].map((x) => (
            <rect key={x} x={x} y="52" width="8" height="48" fill="#6b4a2f" />
          ))}
        </>
      ) : null}
    </svg>
  );
}

type InsulationKind =
  | "condensation"
  | "blanket"
  | "foil"
  | "board"
  | "spray"
  | "blown";

export function InsulationCutaway({ kind }: { kind: InsulationKind }) {
  const labels: Record<InsulationKind, string> = {
    condensation: "Condensation control on the roof steel",
    blanket: "Vinyl-faced fiberglass blanket",
    foil: "Reflective bubble / foil",
    board: "Rigid foam board under the steel",
    spray: "Closed-cell spray foam to the steel",
    blown: "Ceiling plus blown insulation",
  };
  return (
    <svg viewBox="0 0 420 200" className="h-auto w-full" role="img" aria-label={labels[kind]}>
      <rect width="420" height="200" fill="#e9e1d4" />
      <polygon points="40,150 210,28 380,150 380,188 40,188" fill="#f2f1ed" stroke="#1a120c" strokeWidth="1.3" />
      <polyline points="40,150 210,28 380,150" fill="none" stroke="#5d6168" strokeWidth="6" />
      <line x1="40" y1="188" x2="380" y2="188" stroke="#8b5a2b" strokeWidth="2" />

      {kind === "condensation" ? (
        <polyline points="48,148 210,40 372,148" fill="none" stroke="#efe6c6" strokeWidth="5" />
      ) : null}

      {kind === "blanket" ? (
        <>
          <polyline points="56,146 210,48 364,146" fill="none" stroke="#c8b07a" strokeWidth="10" />
          <polyline points="56,146 210,48 364,146" fill="none" stroke="#f2f1ed" strokeWidth="2" strokeDasharray="6 4" />
        </>
      ) : null}

      {kind === "foil" ? (
        <>
          <polyline points="52,144 210,44 368,144" fill="none" stroke="#c5c5c5" strokeWidth="4" />
          <polyline points="60,140 210,52 360,140" fill="none" stroke="#1a120c" strokeWidth="1" strokeDasharray="3 5" />
        </>
      ) : null}

      {kind === "board" ? (
        <polyline points="50,146 210,42 370,146" fill="none" stroke="#c4a574" strokeWidth="8" />
      ) : null}

      {kind === "spray" ? (
        <polygon points="50,150 210,40 370,150 360,150 210,52 60,150" fill="#4a2230" opacity="0.55" />
      ) : null}

      {kind === "blown" ? (
        <>
          <line x1="70" y1="118" x2="350" y2="118" stroke="#1a120c" strokeWidth="2" />
          <rect x="70" y="88" width="280" height="30" fill="#c8b07a" opacity="0.85" />
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <circle key={i} cx={90 + i * 32} cy="102" r="5" fill="#8b5a2b" opacity="0.45" />
          ))}
          <text x="210" y="80" textAnchor="middle" fontSize="11" fill="#5c3317">
            vented attic
          </text>
        </>
      ) : null}
    </svg>
  );
}
