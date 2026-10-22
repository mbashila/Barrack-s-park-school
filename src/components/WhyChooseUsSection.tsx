import Image from "next/image";
import { Users, Star, Shield, Heart, BookOpen, Handshake } from "lucide-react";

const benefits = [
  { icon: Users, label: "Experienced & Caring Staff" },
  { icon: Star, label: "Holistic Development" },
  { icon: Shield, label: "Safe & Secure Environment" },
  { icon: Heart, label: "Fun & Engaging Learning" },
  { icon: BookOpen, label: "Well-equipped Classrooms" },
  { icon: Handshake, label: "Strong Parent Partnership" },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-light-blue py-16 md:py-24">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Desktop 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
          {/* Left Column - School Building Image */}
          <div className="relative mt-8">
            <div className="bg-gradient-to-br from-navy-secondary to-navy-primary rounded-2xl overflow-hidden h-64 md:h-72">
              <Image
                src="/images/SchoolBuilding.jpg"
                alt="School Building"
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            {/* Brush stroke banner */}
            <div className="absolute bottom-6 left-0 right-0 px-4">
              <div className="bg-accent-red rounded-full py-3 px-4 text-white text-center">
                <p className="handwritten-text text-lg">Quality Education</p>
                <p className="handwritten-text text-lg">
                  for a Brighter Tomorrow
                </p>
              </div>
            </div>
          </div>

          {/* Center Column - School Info & Benefits */}
          <div>
            <p className="section-label">Why Barracka's Park School?</p>
            <h2 className="section-heading text-3xl">
              More Than Just a School
            </h2>
            <div className="section-heading-red-underline mb-6"></div>

            <p className="text-navy-body leading-relaxed mb-8">
              We are committed to providing quality education in a safe,
              inclusive and engaging environment. Our goal is to help every
              child discover their potential and grow into a confident,
              responsible and compassionate individual.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <Icon size={20} className="text-accent-red" />
                    </div>
                    <p className="text-sm font-medium text-navy-body">
                      {benefit.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Education Message Panel */}
          <div className="bg-white rounded-2xl p-8 md:p-10 h-72 md:h-80 flex flex-col items-center justify-center text-center shadow-lg">
            <div className="mb-4">
              <BookOpen size={48} className="text-navy-primary mx-auto" />
            </div>
            <p className="handwritten-text text-2xl md:text-3xl text-navy-primary mb-4 leading-relaxed">
              Nurturing
              <br />
              Young Minds
              <br />
              for a Brighter
              <br />
              Future
            </p>
            <div className="w-16 h-1 bg-accent-red rounded-full mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
