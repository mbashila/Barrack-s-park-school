import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  ctaButton?: {
    text: string;
    href: string;
  };
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  ctaButton,
}: HeroProps) {
  return (
    <section
      className="relative min-h-[500px] flex items-center justify-center text-white py-20"
      style={{
        backgroundImage: backgroundImage
          ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`
          : `linear-gradient(135deg, #1e3a8a 0%, #dc2626 100%)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100">{subtitle}</p>
        {ctaButton && (
          <Link href={ctaButton.href} className="btn-primary">
            {ctaButton.text}
          </Link>
        )}
      </div>
    </section>
  );
}
