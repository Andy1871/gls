import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import { cn } from "@/app/lib/cn";

const instagramUrl = "https://instagram.com/yourhandle";

const posts = [
  { image: "/header-ps.jpg", alt: "Mat Pilates class" },
  { image: "/header-ps.jpg", alt: "Studio session" },
  { image: "/header-ps.jpg", alt: "Stretching outdoors" },
];

export default function InstagramSection({
  className,
}: {
  className?: string;
}) {
  return (
    <section className={cn("mt-24 lg:mt-36", className)}>
      <div className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 md:px-8 lg:grid-cols-4 lg:items-end lg:px-2 lg:pb-15">
        {/* Images: touching, sharp edges, pulled up over the top */}
        <div className="-mt-12 grid grid-cols-3 shadow-lg lg:col-span-3 lg:-mt-20">
          {posts.map((post, i) => (
            <a
              key={i}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-4/5 overflow-hidden"
            >
              <Image
                quality={90}
                src={post.image}
                alt={post.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                <FaInstagram className="h-7 w-7 text-white opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>

        {/* Text panel */}
        <div className="flex flex-col items-start lg:pb-4">
          <SectionHeader size="sm" className="">
            Follow along on Instagram
          </SectionHeader>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            Classes, tips and studio life, shared every week.
          </p>
          <Button
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-sm"
          >
            <FaInstagram className="h-4 w-4" />
            Follow me
          </Button>
        </div>
      </div>
    </section>
  );
}
