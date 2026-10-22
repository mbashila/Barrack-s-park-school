import { Users, Star, Shield, Heart, BookOpen, Smile } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Users,
      title: "Experienced & Caring Staff",
      description: "Our dedicated team is passionate about child development",
    },
    {
      icon: Shield,
      title: "Safe & Secure Environment",
      description: "State-of-the-art facilities with top security measures",
    },
    {
      icon: BookOpen,
      title: "Well-equipped Classrooms",
      description: "Modern learning resources and technology-enhanced teaching",
    },
    {
      icon: Star,
      title: "Holistic Development",
      description: "Academic, social, emotional, and physical growth",
    },
    {
      icon: Heart,
      title: "Fun & Engaging Learning",
      description: "Interactive programs that make learning enjoyable",
    },
    {
      icon: Smile,
      title: "Strong Parent Partnership",
      description: "Regular communication and parent involvement",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <span className="text-school-red font-semibold uppercase tracking-wide">
            Why Barrack's Park School?
          </span>
          <h2 className="section-title">More Than Just a School</h2>
          <p className="section-subtitle">
            We are committed to providing quality education in a safe, inclusive
            and engaging environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-school-red text-white">
                      <IconComponent size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-school-blue mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
