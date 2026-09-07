import { wallColors } from "@/lib/site";

type Props = {
  width: number;
  length: number;
  height: number;
  porch: "none" | "one" | "two";
  porchDepth: number;
  colorId: string;
  openBay?: boolean;
};

function iso(x: number, y: number, z: number) {
  const sx = 210 + (x - z) * 0.86;
  const sy = 210 - y * 0.92 - (x + z) * 0.32;
  return `${sx.toFixed(1)},${sy.toFixed(1)}`;
}

function poly(pts: [number, number, number][], fill: string, opacity = 1) {
  return (
    <polygon
      points={pts.map(([x, y, z]) => iso(x, y, z)).join(" ")}
      fill={fill}
      opacity={opacity}
      stroke="rgba(26,18,12,0.18)"
      strokeWidth="0.6"
    />
  );
}

export function BuildingPreview({
  width,
  length,
  height,
  porch,
  porchDepth,
  colorId,
  openBay = true,
}: Props) {
  const color = wallColors.find((c) => c.id === colorId) ?? wallColors[0];
  const w = 46 + (width / 80) * 54;
  const d = 36 + (length / 120) * 58;
  const h = 22 + ((height - 8) / 12) * 28;
  const roof = h + 16;
  const lean = porch === "none" ? 0 : 10 + (porchDepth / 16) * 10;
  const both = porch === "two";
  const one = porch === "one" || both;

  const left = 0;
  const right = w;
  const front = 0;
  const back = d;

  return (
    <div className="relative overflow-hidden rounded-lg bg-cream">
      <svg viewBox="0 0 420 280" className="h-auto w-full" aria-hidden="true">
        <defs>
          <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#d7e4ef" />
            <stop offset="55%" stopColor="#e7ece4" />
            <stop offset="100%" stopColor="#c9b89a" />
          </linearGradient>
        </defs>
        <rect width="420" height="280" fill="url(#sky)" />
        <ellipse cx="210" cy="232" rx="170" ry="18" fill="rgba(26,18,12,0.08)" />

        {both
          ? poly(
              [
                [left - lean, 0, front],
                [left, 0, front],
                [left, 0, back],
                [left - lean, 0, back],
              ],
              "#b7b1a6",
            )
          : null}
        {one
          ? poly(
              [
                [right, 0, front],
                [right + lean, 0, front],
                [right + lean, 0, back],
                [right, 0, back],
              ],
              "#b7b1a6",
            )
          : null}

        {poly(
          [
            [left, 0, back],
            [right, 0, back],
            [right, h, back],
            [left, h, back],
          ],
          color.wall,
          0.82,
        )}
        {poly(
          [
            [right, 0, front],
            [right, 0, back],
            [right, h, back],
            [right, h, front],
          ],
          color.wall,
          0.7,
        )}
        {poly(
          [
            [left, 0, front],
            [right, 0, front],
            [right, h, front],
            [left, h, front],
          ],
          color.wall,
        )}
        {poly(
          [
            [left, h, front],
            [right, h, front],
            [(left + right) / 2, roof, front],
          ],
          color.wall,
        )}

        {poly(
          [
            [left, h, front],
            [(left + right) / 2, roof, front],
            [(left + right) / 2, roof, back],
            [left, h, back],
          ],
          color.roof,
          0.95,
        )}
        {poly(
          [
            [right, h, front],
            [(left + right) / 2, roof, front],
            [(left + right) / 2, roof, back],
            [right, h, back],
          ],
          color.roof,
          0.78,
        )}

        {openBay
          ? poly(
              [
                [left + w * 0.28, 0, front],
                [right - w * 0.28, 0, front],
                [right - w * 0.28, h * 0.82, front],
                [left + w * 0.28, h * 0.82, front],
              ],
              "#1a120c",
              0.55,
            )
          : null}

        {one ? (
          <g>
            {poly(
              [
                [right, 0, front],
                [right + lean, 0, front],
                [right + lean, h * 0.55, front],
                [right, h * 0.72, front],
              ],
              "#c4a574",
              0.55,
            )}
            {poly(
              [
                [right, h * 0.72, front],
                [right + lean, h * 0.55, front],
                [right + lean, h * 0.55, back],
                [right, h * 0.72, back],
              ],
              color.roof,
              0.88,
            )}
          </g>
        ) : null}
        {both ? (
          <g>
            {poly(
              [
                [left, 0, front],
                [left - lean, 0, front],
                [left - lean, h * 0.55, front],
                [left, h * 0.72, front],
              ],
              "#c4a574",
              0.4,
            )}
            {poly(
              [
                [left, h * 0.72, front],
                [left - lean, h * 0.55, front],
                [left - lean, h * 0.55, back],
                [left, h * 0.72, back],
              ],
              color.roof,
              0.9,
            )}
          </g>
        ) : null}
      </svg>
      <div className="pointer-events-none absolute bottom-3 left-3 rounded-md bg-ink/70 px-2.5 py-1 font-sans text-xs tracking-wide text-cream">
        {width}×{length}×{height}
        {porch !== "none" ? ` · ${porch === "two" ? "two" : "one"} ${porchDepth}' porch` : ""}
      </div>
    </div>
  );
}
