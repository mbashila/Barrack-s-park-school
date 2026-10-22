import Hero from "@/components/Hero";
import { Users, Heart, Lightbulb, Award } from "lucide-react";

export default function About() {
  return (
    <main>
      <Hero
        title="About Us"
        subtitle="Learn more about Barrack's Park School's mission and values"
      />

      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-gray-700 text-lg mb-4">
                Barrack's Park School was founded with a vision to provide
                quality education that nurtures the whole child.
              </p>
              <p className="text-gray-700 text-lg mb-4">
                We believe every child deserves a safe, welcoming environment
                where they can learn, play, and grow into confident individuals.
              </p>
              <p className="text-gray-700 text-lg">
                Our experienced team is dedicated to creating memorable learning
                experiences that inspire curiosity and foster a lifelong love of
                learning.
              </p>
            </div>
            <div className="bg-gradient-to-br from-school-blue to-school-red rounded-lg h-64 flex items-center justify-center text-white text-center p-8">
              <p className="text-2xl font-bold">Building Bright Futures</p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="section-title text-center mb-16">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Care",
                  description: "We genuinely care for every child's wellbeing",
                },
                {
                  icon: Users,
                  title: "Community",
                  description: "We foster a supportive school community",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description: "We embrace modern teaching approaches",
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description: "We strive for the highest standards",
                },
              ].map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="bg-school-red rounded-full p-4 text-white">
                        <IconComponent size={32} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-school-blue mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
