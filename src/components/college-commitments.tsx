"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";

const COLLEGES = [
  {
    name: "University of Houston",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HAUSE%20University_of_Houston_Logo.svg-sVN9ALuMZH20YiQ2qe3lFrOsS31pOU.png",
    darkBg: true,
  },
  {
    name: "Sewanee: The University of the South",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HAUSE%20SEWANEE%20Logo-eY1aECBnupNSaf18lsfNZFYRz0AFwx.webp",
    darkBg: true,
  },
  {
    name: "UTSA",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HAUSE%20UTSA_Athletics_logo.svg-B1VEN8a8Dy4Ck7ZYUDq475jyR4Xlm4.png",
    darkBg: true,
  },
  {
    name: "University of Oklahoma",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HAUSE%20Oklahoma-Sooners-logo-1536x864-Um3L1UPcebD7SrYJdG6aubPbmmWl7V.png",
    darkBg: true,
  },
  {
    name: "Yale University",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HAUSE%20Yale-Bulldogs-logo-1536x864-ErVYsJ34ixLP4Q7zJS1ogJ76fXAC6X.png",
    darkBg: true,
  },
  {
    name: "TCU",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HAUSE%20TCULogo_purple_5X7-01-7lWUmJnPE76FocRZgUuuG92rHvnMar.jpg",
    darkBg: false,
  },
  {
    name: "Villanova University",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HAUSE%20Villanova-Wildcats-Logo-oEmEdJKqzj3ln3HB1cBR5rayCKcgGR.png",
    darkBg: true,
  },
  {
    name: "Rice University",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HAUSE%20Rice-Owls-logo-zQlpR0FLswZIvbgtu6ZlYK1IbUJkA3.png",
    darkBg: true,
  },
];

export function CollegeCommitments() {
  return (
    <section className="bg-ink py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Header */}
        <Reveal variant="up" className="mb-14 md:mb-20 text-center">
          <p className="eyebrow text-sky">Player Results</p>
          <h2 className="display-lg mt-5 text-white text-[clamp(2rem,4.4vw,3.4rem)]">
            Colleges our players{" "}
            <span className="text-sky">have committed to.</span>
          </h2>
          <p className="mt-6 text-white/65 text-[15.5px] leading-relaxed max-w-2xl mx-auto">
            Scott Hause&apos;s coaching has helped junior golfers earn spots at
            programs across Division I, Division III, and Ivy League
            institutions.
          </p>
        </Reveal>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5">
          {COLLEGES.map((college, i) => (
            <motion.div
              key={college.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.05 * i,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className={`relative flex items-center justify-center rounded-2xl overflow-hidden aspect-[4/3] ${
                college.darkBg
                  ? "bg-ink-2 border border-rule-2"
                  : "bg-white/95 border border-white/10"
              } hover:scale-[1.03] transition-transform duration-300`}
            >
              <Image
                src={college.src}
                alt={college.name}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 50vw"
                className="object-contain p-6"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
