"use client";

import Image from "next/image";

interface HeroProps {
  title: string;
  titleRed: string;
  subtitle: string;
  backgroundImage?: string;
  ctaButtons?: {
    primary: { text: string; href: string };
    secondary: { text: string; href: string };
  };
  handwrittenText?: string;
}

export default function Hero({
  title,
  titleRed,
  subtitle,
  backgroundImage,
  ctaButtons,
  handwrittenText,
}: HeroProps) {
  return (
    <section
      className="relative min-h-[400px] md:min-h-[450px] flex items-center justify-start overflow-hidden"
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(90deg, rgba(6,35,75,0.8) 0%, rgba(6,35,75,0.3) 50%, transparent 100%), url(${backgroundImage})`
          : "linear-gradient(90deg, rgba(6,35,75,0.8) 0%, rgba(6,35,75,0.3) 50%, #EEF6FD 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center right",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 w-full">
        <div className="max-w-xl">
          {/* Welcome Label */}
          <p className="section-label">Welcome to Barracka's Park School</p>

          {/* Main Heading */}
          <div className="my-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              {title}
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-red">
              {titleRed}
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg text-gray-100 mb-8 leading-relaxed max-w-md">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          {ctaButtons && (
            <div className="flex flex-col md:flex-row gap-4">
              <button className="btn-primary">
                {ctaButtons.primary.text} →
              </button>
              <button className="btn-secondary">
                {ctaButtons.secondary.text}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Handwritten Decoration */}
      {handwrittenText && (
        <div className="absolute bottom-8 right-8 md:right-12 md:bottom-12 lg:right-20 lg:bottom-16 text-white handwritten-text text-2xl md:text-3xl transform -rotate-12">
          <p className="text-center">{handwrittenText.split("\n")[0]}</p>
          <p className="text-center">{handwrittenText.split("\n")[1]}</p>
          <div className="w-24 h-1 bg-white mx-auto mt-2 rounded-full"></div>
        </div>
      )}
    </section>
  );
}
