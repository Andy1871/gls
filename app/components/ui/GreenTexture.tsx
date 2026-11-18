import { grain } from "./SoftTexture";

/*
  Soft light patches with grain, for dark green (bg-sage-dark) backgrounds,
  as on the About page header. Drop inside any `relative overflow-hidden`
  block, and give the block's content `relative` so it sits above the texture.
*/
export default function GreenTexture() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,232,213,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.25),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
        style={{ backgroundImage: grain }}
      />
    </>
  );
}
