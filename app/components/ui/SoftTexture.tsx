// Fine film-grain texture, generated as an SVG so no image file is needed
export const grain = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

/*
  Soft warm light patches with grain, for beige backgrounds (no green).
  Drop inside any `relative overflow-hidden` block, and give the block's
  content `relative` so it sits above the texture.
*/
export default function SoftTexture() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.7),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(230,214,195,0.45),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-15 mix-blend-multiply"
        style={{ backgroundImage: grain }}
      />
    </>
  );
}
