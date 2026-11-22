import { cacheLife } from "next/cache";

// Server-only: the Behold feed that serves the latest Instagram posts
// (Behold keeps the Instagram connection alive; manage it at behold.so)
export { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "./instagram-profile";
const FEED_URL = "https://feeds.behold.so/7wOCOHSrbaR0dcJRnxcj";

export type InstagramPost = {
  id: string;
  href: string; // the post on Instagram
  image: string;
  alt: string;
};

type BeholdPost = {
  id: string;
  permalink: string;
  prunedCaption?: string;
  sizes?: { medium?: { mediaUrl: string } };
};

// Short alt text from the caption's first line
function altFromCaption(caption?: string) {
  const firstLine = caption?.split("\n").find((line) => line.trim())?.trim();
  if (!firstLine) return "Instagram post from Greenlife Studio";
  return firstLine.length > 120 ? `${firstLine.slice(0, 117)}…` : firstLine;
}

// Latest posts, refreshed in the background about once an hour.
// Returns [] if the feed can't be reached, so the page still renders.
export async function getInstagramPosts(limit: number): Promise<InstagramPost[]> {
  "use cache";
  cacheLife("hours");

  try {
    const res = await fetch(FEED_URL);
    if (!res.ok) return [];
    const data: { posts?: BeholdPost[] } = await res.json();

    return (data.posts ?? [])
      .filter((p) => p.sizes?.medium?.mediaUrl)
      .slice(0, limit)
      .map((p) => ({
        id: p.id,
        href: p.permalink,
        image: p.sizes!.medium!.mediaUrl,
        alt: altFromCaption(p.prunedCaption),
      }));
  } catch {
    return [];
  }
}
