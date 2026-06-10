"use client";

import Image from "next/image";
import { Reveal } from "@/components/reveal";

const COLLEGES = [
  {
    name: "University of Houston",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HAUSE%20University_of_Houston_Logo.svg-sVN9ALuMZH20YiQ2qe3lFrOsS31pOU.png",
  },
  {
    name: "Sewanee: The University of the South",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HAUSE%20SEWANEE%20Logo-eY1aECBnupNSaf18lsfNZFYRz0AFwx.webp",
  },
  {
    name: "UTSA",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HAUSE%20UTSA_Athletics_logo.svg-B1VEN8a8Dy4Ck7ZYUDq475jyR4Xlm4.png",
  },
  {
    name: "University of Oklahoma",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HAUSE%20Oklahoma-Sooners-logo-1536x864-Um3L1UPcebD7SrYJdG6aubPbmmWl7V.png",
  },
  {
    name: "Yale University",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HAUSE%20Yale-Bulldogs-logo-1536x864-ErVYsJ34ixLP4Q7zJS1ogJ76fXAC6X.png",
  },
  {
    name: "TCU",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HAUSE%20TCULogo_purple_5X7-01-7lWUmJnPE76FocRZgUuuG92rHvnMar.jpg",
  },
  {
    name: "Villanova University",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HAUSE%20Villanova-Wildcats-Logo-oEmEdJKqzj3ln3HB1cBR5rayCKcgGR.png",
  },
  {
    name: "Rice University",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HAUSE%20Rice-Owls-logo-zQlpR0FLswZIvbgtu6ZlYK1IbUJkA3.png",
  },
  {
    name: "UCLA",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ucla-DnqfELgSf229kNoMPJkQngo5Zzfzqa.png",
  },
];

// Duplicate for seamless loop
const TRACK = [...COLLEGES, ...COLLEGES];

export function CollegeCommitments() {
  return (
    <section className="bg-surface py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal variant="up" className="mb-12 md:mb-16 text-center">
          <p className="eyebrow text-sky-2">Player Results</p>
          <h2 className="display-lg mt-5 text-ink text-[clamp(2rem,4.4vw,3.4rem)]">
            Colleges our players{" "}
            <span className="text-sky">have committed to.</span>
          </h2>
          <p className="mt-6 text-ink/60 text-[15.5px] leading-relaxed max-w-2xl mx-auto">
            Scott Hause&apos;s coaching has helped junior golfers earn spots at
            programs across Division I, Division III, and Ivy League
            institutions.
          </p>
        </Reveal>
      </div>

      {/* Continuous scroller — no cards, just logos */}
      <div className="mask-fade">
        <div
          className="flex animate-marquee"
          style={{ width: "max-content" }}
          aria-hidden="false"
        >
          {TRACK.map((college, i) => (
            <div
              key={`${college.name}-${i}`}
              className="flex items-center justify-center mx-8 md:mx-12 shrink-0"
              style={{ width: 140, height: 80 }}
            >
              <Image
                src={college.src}
                alt={college.name}
                width={140}
                height={80}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
