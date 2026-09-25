import { useId } from "react";
import {
  colorById,
  framingTypes,
  type CupolaId,
  type FoundationId,
  type FramingId,
  type WalkDoorId,
  type WindowId,
} from "@/lib/site";

export type BuildingPreviewProps = {
  width: number;
  length: number;
  height: number;
  porch: "none" | "one" | "two";
  porchDepth: number;
  wallColorId: string;
  roofColorId: string;
  trimColorId: string;
  framing: FramingId;
  foundation: FoundationId;
  walkDoors?: WalkDoorId;
  windows?: WindowId;
  ridgeVent?: boolean;
  cupola?: CupolaId;
};

/**
 * Gable-end (or side) elevation — the view a metal-building quote is drawn in.
 * Width and porch/lean-to depth scale. Length is labeled, not faked in perspective.
 */
export function BuildingPreview({
  width,
  length,
  height,
  porch,
  porchDepth,
  wallColorId,
  roofColorId,
  trimColorId,
  framing,
  foundation,
  walkDoors = "0",
  windows = "none",
  ridgeVent = false,
  cupola = "none",
}: BuildingPreviewProps) {
  const wall = colorById(wallColorId).hex;
  const roof = colorById(roofColorId).hex;
  const trim = colorById(trimColorId).hex;
  const clipId = useId().replace(/:/g, "");

  const leanTo = framing === "lean-to" || framing === "lean-to-both";
  const leftLean = framing === "lean-to-both";
  const rightLean = leanTo;
  const leftPorch = !leanTo && porch === "two";
  const rightPorch = !leanTo && (porch === "one" || porch === "two");
  const porchEach = porch === "none" || leanTo ? 0 : porchDepth;
  const leanDepth = leanTo ? Math.max(porchDepth, 12) : 0;
  const span =
    width +
    porchEach * ((leftPorch ? 1 : 0) + (rightPorch ? 1 : 0)) +
    leanDepth * ((leftLean ? 1 : 0) + (rightLean ? 1 : 0));

  const VB_W = 640;
  const VB_H = 340;
  const padX = 36;
  const groundY = 248;
  const maxDrawW = VB_W - padX * 2;
  const maxWallH = 150;
  const px = maxDrawW / Math.max(span, 24);
  const wallH = Math.min(maxWallH, Math.max(72, height * 6.6));
  const roofH = Math.max(26, wallH * 0.28);
  const porchW = porchEach * px;
  const leanW = leanDepth * px;
  const bodyW = width * px;
  const startX =
    padX +
    (maxDrawW -
      (bodyW + (leftPorch ? porchW : 0) + (rightPorch ? porchW : 0) + (leftLean ? leanW : 0) + (rightLean ? leanW : 0))) /
      2;
  const bodyX = startX + (leftPorch ? porchW : 0) + (leftLean ? leanW : 0);
  const eaveY = groundY - wallH;
  const peakX = framing === "gabled-unsym" ? bodyX + bodyW * 0.32 : bodyX + bodyW / 2;
  const peakY = eaveY - roofH;
  const highY = framing === "single-slope" ? eaveY - roofH : eaveY;
  const porchEave = wallH * 0.62;
  const porchY = groundY - porchEave;
  const leanEave = wallH * 0.55;
  const leanY = groundY - leanEave;

  const framingLabel =
    framing === "gabled"
      ? "gabled"
      : framing === "gabled-unsym"
        ? "gabled unsymmetrical"
        : framing === "single-slope"
          ? "single slope"
          : framing === "lean-to-both"
            ? "gabled + lean-to both sides"
            : "gabled + lean-to one side";

  const caption =
    porch === "none" || leanTo
      ? `${width}×${length}×${height} · ${framingLabel}`
      : `${width}×${length}×${height} · ${framingLabel} · ${porch === "two" ? "two" : "one"} ${porchDepth}' ${porch === "two" ? "porches" : "porch"}`;

  const doorCount = walkDoors === "0" ? 0 : walkDoors === "1" ? 1 : walkDoors === "2" ? 2 : 3;
  const openingW = Math.min(bodyW * 0.32, Math.max(52, bodyW * 0.32));
  const openingCenter = framing === "single-slope" ? bodyX + bodyW / 2 : peakX;
  const openingX = Math.max(
    bodyX + 8,
    Math.min(openingCenter - openingW / 2, bodyX + bodyW - openingW - 8),
  );
  const openingTop = eaveY + wallH * 0.34;

  return (
    <div className="relative overflow-hidden rounded-lg bg-cream">
      <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="h-auto w-full" role="img" aria-label={caption}>
        <rect width={VB_W} height={VB_H} fill="#e9e1d4" />
        <FoundationStrip foundation={foundation} groundY={groundY} vbW={VB_W} vbH={VB_H} />

        {leftPorch ? (
          <Porch
            x={startX}
            w={porchW}
            attachX={bodyX}
            eaveY={eaveY}
            porchY={porchY}
            groundY={groundY}
            wall={wall}
            roof={roof}
            side="left"
          />
        ) : null}

        {rightPorch ? (
          <Porch
            x={bodyX + bodyW}
            w={porchW}
            attachX={bodyX + bodyW}
            eaveY={eaveY}
            porchY={porchY}
            groundY={groundY}
            wall={wall}
            roof={roof}
            side="right"
          />
        ) : null}

        {leftLean ? (
          <LeanTo
            x={bodyX - leanW}
            w={leanW}
            eaveY={eaveY}
            leanY={leanY}
            groundY={groundY}
            roof={roof}
            side="left"
          />
        ) : null}

        {rightLean ? (
          <LeanTo
            x={bodyX + bodyW}
            w={leanW}
            eaveY={eaveY}
            leanY={leanY}
            groundY={groundY}
            roof={roof}
            side="right"
          />
        ) : null}

        <defs>
          <clipPath id={`${clipId}-wall`}>
            {framing === "single-slope" ? (
              <polygon
                points={`${bodyX},${highY} ${bodyX + bodyW},${eaveY} ${bodyX + bodyW},${groundY} ${bodyX},${groundY}`}
              />
            ) : (
              <polygon
                points={`${bodyX},${groundY} ${bodyX},${eaveY} ${peakX},${peakY} ${bodyX + bodyW},${eaveY} ${bodyX + bodyW},${groundY}`}
              />
            )}
          </clipPath>
        </defs>

        {framing === "single-slope" ? (
          <>
            <polygon
              points={`${bodyX},${highY} ${bodyX + bodyW},${eaveY} ${bodyX + bodyW},${groundY} ${bodyX},${groundY}`}
              fill={wall}
              stroke="#1a120c"
              strokeWidth="1.4"
            />
            <polygon
              points={`${bodyX - 8},${highY + 4} ${bodyX + bodyW + 8},${eaveY + 4} ${bodyX + bodyW},${eaveY} ${bodyX},${highY}`}
              fill={roof}
            />
          </>
        ) : (
          <>
            <polygon
              points={`${bodyX},${groundY} ${bodyX},${eaveY} ${peakX},${peakY} ${bodyX + bodyW},${eaveY} ${bodyX + bodyW},${groundY}`}
              fill={wall}
              stroke="#1a120c"
              strokeWidth="1.4"
            />
            <polygon
              points={`${bodyX - 6},${eaveY + 4} ${peakX},${peakY - 4} ${bodyX + bodyW + 6},${eaveY + 4} ${bodyX + bodyW},${eaveY} ${peakX},${peakY} ${bodyX},${eaveY}`}
              fill={roof}
            />
          </>
        )}

        <g clipPath={`url(#${clipId}-wall)`}>
          {Array.from({ length: Math.floor(bodyW / 8) }, (_, i) => {
            const x = bodyX + 6 + i * 8;
            return (
              <line
                key={x}
                x1={x}
                y1={peakY}
                x2={x}
                y2={groundY}
                stroke="#1a120c"
                strokeWidth="1.1"
                opacity="0.22"
              />
            );
          })}
        </g>

        {ridgeVent ? (
          <line
            x1={framing === "single-slope" ? bodyX + 8 : peakX - bodyW * 0.18}
            y1={framing === "single-slope" ? highY + 2 : peakY + 2}
            x2={framing === "single-slope" ? bodyX + bodyW - 8 : peakX + bodyW * 0.18}
            y2={framing === "single-slope" ? eaveY + 2 : peakY + 2}
            stroke="#1a120c"
            strokeWidth="3.5"
            opacity="0.75"
          />
        ) : null}

        {cupola !== "none" && framing !== "single-slope" ? (
          <g>
            <CupolaMark x={peakX} y={peakY} roof={roof} trim={trim} />
            {cupola === "two" ? <CupolaMark x={peakX + 28} y={peakY + 6} roof={roof} trim={trim} /> : null}
          </g>
        ) : null}

        <rect
          x={openingX}
          y={openingTop}
          width={openingW}
          height={groundY - openingTop}
          fill="#1a120c"
          opacity="0.55"
        />
        <rect x={openingX} y={openingTop} width={openingW} height="5" fill={trim} />

        {windows !== "none"
          ? Array.from({ length: windows === "living" ? 4 : 2 }).map((_, i) => {
              const n = windows === "living" ? 4 : 2;
              const w = bodyW * (windows === "living" ? 0.1 : 0.09);
              const gap = (bodyW * 0.36) / n;
              const x = bodyX + bodyW * 0.62 + gap * i;
              return (
                <g key={`win-${i}`}>
                  <rect
                    x={x}
                    y={eaveY + wallH * 0.28}
                    width={w}
                    height={wallH * (windows === "living" ? 0.42 : 0.28)}
                    fill="#cfe4f2"
                    stroke={trim}
                    strokeWidth="1.4"
                  />
                  <line
                    x1={x + w / 2}
                    y1={eaveY + wallH * 0.28}
                    x2={x + w / 2}
                    y2={eaveY + wallH * (windows === "living" ? 0.7 : 0.56)}
                    stroke={trim}
                    strokeWidth="1"
                  />
                </g>
              );
            })
          : null}

        {doorCount > 0
          ? Array.from({ length: doorCount }).map((_, i) => {
              const w = Math.min(16, bodyW * 0.065);
              const gap = 7;
              const roomRight = bodyX + bodyW - (openingX + openingW) - 6;
              const side = roomRight >= w ? "right" : "left";
              const x =
                side === "right"
                  ? openingX + openingW + gap + i * (w + gap)
                  : openingX - gap - w - i * (w + gap);
              return (
                <g key={`wd-${i}`}>
                  <rect
                    x={x}
                    y={groundY - wallH * 0.48}
                    width={w}
                    height={wallH * 0.48}
                    fill="#2a1f16"
                    stroke={trim}
                    strokeWidth="1.2"
                  />
                  <circle cx={x + w * 0.78} cy={groundY - wallH * 0.24} r="1.5" fill="#c4a574" />
                </g>
              );
            })
          : null}

        <PostsBelow
          foundation={foundation}
          bodyX={bodyX}
          bodyW={bodyW}
          groundY={groundY}
          leftLean={leftLean}
          rightLean={rightLean}
          leanW={leanW}
        />
      </svg>
      <div className="pointer-events-none absolute bottom-3 left-3 rounded-md bg-ink/75 px-2.5 py-1 font-sans text-xs tracking-wide text-cream">
        {caption}
      </div>
    </div>
  );
}

function CupolaMark({ x, y, roof, trim }: { x: number; y: number; roof: string; trim: string }) {
  return (
    <g>
      <rect x={x - 10} y={y - 22} width="20" height="16" fill="#efe6c6" stroke="#1a120c" strokeWidth="1.1" />
      <line x1={x - 7} y1={y - 18} x2={x - 7} y2={y - 8} stroke={trim} strokeWidth="1.2" />
      <line x1={x} y1={y - 18} x2={x} y2={y - 8} stroke={trim} strokeWidth="1.2" />
      <line x1={x + 7} y1={y - 18} x2={x + 7} y2={y - 8} stroke={trim} strokeWidth="1.2" />
      <polygon points={`${x - 13},${y - 22} ${x},${y - 34} ${x + 13},${y - 22}`} fill={roof} stroke="#1a120c" strokeWidth="1.1" />
    </g>
  );
}

function FoundationStrip({
  foundation,
  groundY,
  vbW,
  vbH,
}: {
  foundation: FoundationId;
  groundY: number;
  vbW: number;
  vbH: number;
}) {
  const depth = vbH - groundY;
  if (foundation === "slab") {
    return (
      <g>
        <rect x="0" y={groundY} width={vbW} height={18} fill="#9a9a96" />
        <rect x="0" y={groundY + 18} width={vbW} height={depth - 18} fill="#cfc6b4" />
        <line x1="0" y1={groundY} x2={vbW} y2={groundY} stroke="#5d6168" strokeWidth="2" />
      </g>
    );
  }
  if (foundation === "post-gravel") {
    return (
      <g>
        <rect x="0" y={groundY} width={vbW} height={22} fill="#b7b0a4" />
        <rect x="0" y={groundY + 22} width={vbW} height={depth - 22} fill="#cfc6b4" />
        <GravelHatch y={groundY} h={22} vbW={vbW} />
        <line x1="0" y1={groundY} x2={vbW} y2={groundY} stroke="#8b5a2b" strokeWidth="2" />
      </g>
    );
  }
  if (foundation === "split") {
    return (
      <g>
        <rect x="0" y={groundY} width={vbW * 0.48} height={22} fill="#b7b0a4" />
        <rect x={vbW * 0.48} y={groundY} width={vbW * 0.52} height={18} fill="#9a9a96" />
        <rect x="0" y={groundY + 22} width={vbW} height={depth - 22} fill="#cfc6b4" />
        <GravelHatch y={groundY} h={22} vbW={vbW * 0.48} />
        <line x1="0" y1={groundY} x2={vbW} y2={groundY} stroke="#8b5a2b" strokeWidth="2" />
        <text x={vbW * 0.22} y={groundY + 38} textAnchor="middle" fontSize="11" fill="#5c3317">
          gravel
        </text>
        <text x={vbW * 0.72} y={groundY + 38} textAnchor="middle" fontSize="11" fill="#5c3317">
          concrete
        </text>
      </g>
    );
  }
  return (
    <g>
      <rect x="0" y={groundY} width={vbW} height={depth} fill="#c4b496" />
      <line x1="0" y1={groundY} x2={vbW} y2={groundY} stroke="#8b5a2b" strokeWidth="2" />
    </g>
  );
}

function GravelHatch({ y, h, vbW }: { y: number; h: number; vbW: number }) {
  const lines = [];
  for (let x = -20; x < vbW + 20; x += 10) {
    lines.push(
      <line key={x} x1={x} y1={y} x2={x + h} y2={y + h} stroke="#8a8378" strokeWidth="1" opacity="0.45" />,
    );
  }
  return <g>{lines}</g>;
}

function PostsBelow({
  foundation,
  bodyX,
  bodyW,
  groundY,
  leftLean,
  rightLean,
  leanW,
}: {
  foundation: FoundationId;
  bodyX: number;
  bodyW: number;
  groundY: number;
  leftLean: boolean;
  rightLean: boolean;
  leanW: number;
}) {
  if (foundation !== "post-dirt" && foundation !== "post-gravel") return null;
  const xs = [0.12, 0.38, 0.62, 0.88].map((t) => bodyX + bodyW * t);
  if (leftLean) xs.push(bodyX - leanW * 0.55, bodyX - leanW * 0.18);
  if (rightLean) xs.push(bodyX + bodyW + leanW * 0.45, bodyX + bodyW + leanW * 0.82);
  const embed = foundation === "post-gravel" ? 28 : 34;
  return (
    <g>
      {xs.map((x) => (
        <rect key={x} x={x - 3.5} y={groundY} width="7" height={embed} fill="#6b4a2f" />
      ))}
    </g>
  );
}

function Porch({
  x,
  w,
  attachX,
  eaveY,
  porchY,
  groundY,
  wall,
  roof,
  side,
}: {
  x: number;
  w: number;
  attachX: number;
  eaveY: number;
  porchY: number;
  groundY: number;
  wall: string;
  roof: string;
  side: "left" | "right";
}) {
  const outer = side === "left" ? x : x + w;
  const inner = attachX;
  return (
    <g>
      <polygon
        points={`${outer},${porchY} ${inner},${eaveY + 8} ${inner},${groundY} ${outer},${groundY}`}
        fill={wall}
        stroke="#1a120c"
        strokeWidth="1.2"
        opacity="0.92"
      />
      <polygon
        points={
          side === "left"
            ? `${outer},${porchY} ${inner},${eaveY + 8} ${inner + 10},${eaveY + 2} ${outer + 10},${porchY - 6}`
            : `${inner},${eaveY + 8} ${outer},${porchY} ${outer - 10},${porchY - 6} ${inner - 10},${eaveY + 2}`
        }
        fill={roof}
      />
      {[0.18, 0.5, 0.82].map((t) => (
        <rect
          key={t}
          x={x + w * t - 3}
          y={porchY + 8}
          width="6"
          height={groundY - porchY - 8}
          fill="#6b4a2f"
        />
      ))}
    </g>
  );
}

function LeanTo({
  x,
  w,
  eaveY,
  leanY,
  groundY,
  roof,
  side,
}: {
  x: number;
  w: number;
  eaveY: number;
  leanY: number;
  groundY: number;
  roof: string;
  side: "left" | "right";
}) {
  const step = 16;
  const innerX = side === "right" ? x : x + w;
  const outerX = side === "right" ? x + w : x;
  const innerY = eaveY + step;
  const outerY = leanY;
  const roofPts =
    side === "right"
      ? `${innerX},${innerY} ${outerX},${outerY} ${outerX - 4},${outerY - 8} ${innerX},${innerY - 8}`
      : `${outerX},${outerY} ${innerX},${innerY} ${innerX},${innerY - 8} ${outerX + 4},${outerY - 8}`;
  const stepPts =
    side === "right"
      ? `${innerX},${eaveY + 4} ${innerX + 7},${eaveY + 4} ${innerX + 7},${innerY} ${innerX},${innerY}`
      : `${innerX - 7},${eaveY + 4} ${innerX},${eaveY + 4} ${innerX},${innerY} ${innerX - 7},${innerY}`;

  return (
    <g>
      <polygon points={stepPts} fill={roof} stroke="#1a120c" strokeWidth="1" />
      <polygon points={roofPts} fill={roof} stroke="#1a120c" strokeWidth="1.1" />
      {[0.06, 0.34, 0.62, 0.9].map((t) => {
        const postX = x + w * t;
        const roofAt =
          side === "right" ? innerY + (outerY - innerY) * t : outerY + (innerY - outerY) * t;
        return (
          <rect key={t} x={postX - 3.5} y={roofAt} width="7" height={groundY - roofAt} fill="#6b4a2f" />
        );
      })}
    </g>
  );
}

/** Static 2D elevation used on /framing — same language as the quote preview. */
export function FramingElevation({
  framing,
  className,
}: {
  framing: FramingId;
  className?: string;
}) {
  const look = framingTypes.find((f) => f.id === framing) ?? framingTypes[0];
  return (
    <div className={className}>
      <BuildingPreview
        width={40}
        length={60}
        height={14}
        porch="none"
        porchDepth={12}
        wallColorId={look.wallColorId}
        roofColorId={look.roofColorId}
        trimColorId="charcoal"
        framing={framing}
        foundation="post-gravel"
        walkDoors="1"
      />
    </div>
  );
}

export function FoundationSection({
  foundation,
  className,
}: {
  foundation: FoundationId;
  className?: string;
}) {
  const VB_W = 420;
  const VB_H = 180;
  const grade = 78;
  const wallTop = 28;
  const postW = 10;
  const labels: Record<FoundationId, string> = {
    "post-dirt": "Sunken post in graded dirt",
    "post-gravel": "Sunken post on a gravel pad",
    slab: "Solid concrete floor",
    split: "Gravel storage + concrete shop / living",
  };

  return (
    <div className={className}>
      <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="h-auto w-full" role="img" aria-label={labels[foundation]}>
        <rect width={VB_W} height={VB_H} fill="#e9e1d4" />
        <rect x="70" y={wallTop} width="280" height={grade - wallTop} fill="#f2f1ed" stroke="#1a120c" strokeWidth="1.4" />
        <polygon points="70,28 210,8 350,28" fill="#5d6168" />

        {foundation === "slab" ? (
          <>
            <rect x="70" y={grade} width="280" height="22" fill="#9a9a96" />
            <rect x="0" y={grade + 22} width={VB_W} height={VB_H - grade - 22} fill="#c4b496" />
            <text x="210" y="168" textAnchor="middle" fontSize="12" fill="#5c3317">
              concrete
            </text>
          </>
        ) : null}

        {foundation === "post-dirt" ? (
          <>
            <rect x="0" y={grade} width={VB_W} height={VB_H - grade} fill="#c4b496" />
            {[110, 180, 250, 310].map((x) => (
              <rect key={x} x={x} y={grade} width={postW} height="52" fill="#6b4a2f" />
            ))}
            <text x="210" y="168" textAnchor="middle" fontSize="12" fill="#5c3317">
              graded dirt
            </text>
          </>
        ) : null}

        {foundation === "post-gravel" ? (
          <>
            <rect x="0" y={grade} width={VB_W} height="20" fill="#b7b0a4" />
            <rect x="0" y={grade + 20} width={VB_W} height={VB_H - grade - 20} fill="#c4b496" />
            {[110, 180, 250, 310].map((x) => (
              <rect key={x} x={x} y={grade} width={postW} height="48" fill="#6b4a2f" />
            ))}
            <text x="210" y="168" textAnchor="middle" fontSize="12" fill="#5c3317">
              gravel pad
            </text>
          </>
        ) : null}

        {foundation === "split" ? (
          <>
            <rect x="0" y={grade} width="210" height="20" fill="#b7b0a4" />
            <rect x="210" y={grade} width="210" height="22" fill="#9a9a96" />
            <rect x="0" y={grade + 22} width={VB_W} height={VB_H - grade - 22} fill="#c4b496" />
            {[110, 170].map((x) => (
              <rect key={x} x={x} y={grade} width={postW} height="48" fill="#6b4a2f" />
            ))}
            <line
              x1="210"
              y1={wallTop}
              x2="210"
              y2={grade + 22}
              stroke="#1a120c"
              strokeWidth="1"
              strokeDasharray="4 3"
            />
            <text x="120" y="168" textAnchor="middle" fontSize="12" fill="#5c3317">
              gravel
            </text>
            <text x="300" y="168" textAnchor="middle" fontSize="12" fill="#5c3317">
              concrete
            </text>
          </>
        ) : null}

        <line x1="0" y1={grade} x2={VB_W} y2={grade} stroke="#8b5a2b" strokeWidth="2" />
      </svg>
    </div>
  );
}
