/**
 * Windows into a region of a larger screenshot so a detail (e.g. the WHT
 * report) fills the frame, with a deep, smooth zoom on group-hover. Pass the
 * source's natural size and the focus rectangle in natural pixels.
 */
export function FocusCrop({
  src,
  alt,
  natural,
  focus,
  className = "",
  imgStyle,
}: {
  src: string;
  alt: string;
  natural: { w: number; h: number };
  focus: { x: number; y: number; w: number; h: number };
  className?: string;
  imgStyle?: React.CSSProperties;
}) {
  const widthPct = (natural.w / focus.w) * 100;
  const leftPct = -(focus.x / focus.w) * 100;
  const topPct = -(focus.y / focus.h) * 100;
  const aspect = focus.w / focus.h;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: `${aspect}` }}
    >
      <img
        src={src}
        alt={alt}
        className="absolute max-w-none origin-center transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.14]"
        style={{
          width: `${widthPct}%`,
          left: `${leftPct}%`,
          top: `${topPct}%`,
          ...imgStyle,
        }}
      />
    </div>
  );
}
