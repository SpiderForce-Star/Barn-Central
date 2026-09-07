import { wallColors } from "@/lib/site";

type Props = {
  width: number;
  length: number;
  height: number;
  porch: "none" | "one" | "two";
  porchDepth: number;
  colorId: string;
};

/**
 * Gable-end elevation — the view a metal-building quote is actually drawn in.
 * Width and porch depth scale. Length is labeled, not faked in perspective.
 */
export function BuildingPreview({
  width,
  length,
  height,
  porch,
  porchDepth,
  colorId,
}: Props) {
  const color = wallColors.find((c) => c.id === colorId) ?? wallColors[0];
  const leftPorch = porch === "two";
  const rightPorch = porch === "one" || porch === "two";
  const porchEach = porch === "none" ? 0 : porchDepth;
  const span = width + porchEach * (leftPorch && rightPorch ? 2 : rightPorch || leftPorch ? 1 : 0);

  const VB_W = 640;
  const VB_H = 320;
  const padX = 36;
  const groundY = 268;
  const maxDrawW = VB_W - padX * 2;
  const maxWallH = 168;
  const px = maxDrawW / Math.max(span, 24);
  const wallH = Math.min(maxWallH, Math.max(72, height * 7.2));
  const roofH = Math.max(28, wallH * 0.28);
  const porchW = porchEach * px;
  const bodyW = width * px;
  const startX =
    padX + (maxDrawW - (bodyW + (leftPorch ? porchW : 0) + (rightPorch ? porchW : 0))) / 2;
  const bodyX = startX + (leftPorch ? porchW : 0);
  const eaveY = groundY - wallH;
  const peakX = bodyX + bodyW / 2;
  const peakY = eaveY - roofH;
  const porchEave = wallH * 0.62;
  const porchY = groundY - porchEave;

  const caption =
    porch === "none"
      ? `${width}×${length}×${height}`
      : `${width}×${length}×${height} · ${porch === "two" ? "two" : "one"} ${porchDepth}' ${porch === "two" ? "porches" : "porch"}`;

  return (
    <div className="relative overflow-hidden rounded-lg bg-cream">
      <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="h-auto w-full" role="img" aria-label={caption}>
        <rect width={VB_W} height={VB_H} fill="#e9e1d4" />
        <rect x="0" y={groundY} width={VB_W} height={VB_H - groundY} fill="#d4c6b0" />
        <line x1="0" y1={groundY} x2={VB_W} y2={groundY} stroke="#8b5a2b" strokeWidth="2" />

        {leftPorch ? (
          <g>
            <polygon
              points={`${startX},${porchY} ${bodyX},${eaveY + 8} ${bodyX},${groundY} ${startX},${groundY}`}
              fill={color.wall}
              stroke="#1a120c"
              strokeWidth="1.2"
              opacity="0.92"
            />
            <polygon
              points={`${startX},${porchY} ${bodyX},${eaveY + 8} ${bodyX + 10},${eaveY + 2} ${startX + 10},${porchY - 6}`}
              fill={color.roof}
            />
            {[0.18, 0.5, 0.82].map((t) => (
              <rect
                key={`lp${t}`}
                x={startX + porchW * t - 3}
                y={porchY + 8}
                width="6"
                height={groundY - porchY - 8}
                fill="#6b4a2f"
              />
            ))}
          </g>
        ) : null}

        {rightPorch ? (
          <g>
            <polygon
              points={`${bodyX + bodyW},${eaveY + 8} ${bodyX + bodyW + porchW},${porchY} ${bodyX + bodyW + porchW},${groundY} ${bodyX + bodyW},${groundY}`}
              fill={color.wall}
              stroke="#1a120c"
              strokeWidth="1.2"
              opacity="0.92"
            />
            <polygon
              points={`${bodyX + bodyW},${eaveY + 8} ${bodyX + bodyW + porchW},${porchY} ${bodyX + bodyW + porchW - 10},${porchY - 6} ${bodyX + bodyW - 10},${eaveY + 2}`}
              fill={color.roof}
            />
            {[0.18, 0.5, 0.82].map((t) => (
              <rect
                key={`rp${t}`}
                x={bodyX + bodyW + porchW * t - 3}
                y={porchY + 8}
                width="6"
                height={groundY - porchY - 8}
                fill="#6b4a2f"
              />
            ))}
          </g>
        ) : null}

        <rect
          x={bodyX}
          y={eaveY}
          width={bodyW}
          height={wallH}
          fill={color.wall}
          stroke="#1a120c"
          strokeWidth="1.4"
        />
        <polygon
          points={`${bodyX},${eaveY} ${peakX},${peakY} ${bodyX + bodyW},${eaveY}`}
          fill={color.wall}
          stroke="#1a120c"
          strokeWidth="1.4"
        />
        <polygon
          points={`${bodyX - 6},${eaveY + 4} ${peakX},${peakY - 4} ${bodyX + bodyW + 6},${eaveY + 4} ${bodyX + bodyW},${eaveY} ${peakX},${peakY} ${bodyX},${eaveY}`}
          fill={color.roof}
        />

        <rect
          x={bodyX + bodyW * 0.28}
          y={eaveY + wallH * 0.28}
          width={bodyW * 0.44}
          height={wallH * 0.72}
          fill="#1a120c"
          opacity="0.55"
        />
        <rect
          x={bodyX + bodyW * 0.28}
          y={eaveY + wallH * 0.28}
          width={bodyW * 0.44}
          height="5"
          fill={color.trim}
        />
      </svg>
      <div className="pointer-events-none absolute bottom-3 left-3 rounded-md bg-ink/75 px-2.5 py-1 font-sans text-xs tracking-wide text-cream">
        {caption}
      </div>
    </div>
  );
}
