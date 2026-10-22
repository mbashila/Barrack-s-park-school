import { BookOpen, Baby, Users, Award } from "lucide-react";

export default function ProgramShowcase() {
  const programs = [
    {
      name: "Day Care",
      description: "A safe and caring start",
      icon: Award,
      color: "text-red-500",
    },
    {
      name: "Baby Class",
      description: "Building strong foundations",
      icon: Baby,
      color: "text-blue-500",
    },
    {
      name: "Middle Class",
      description: "Developing key skills",
      icon: BookOpen,
      color: "text-green-500",
    },
    {
      name: "Reception",
      description: "Preparing for primary school",
      icon: Users,
      color: "text-yellow-500",
    },
    {
      name: "Grade 1 - 7",
      description: "Building bright future",
      icon: Award,
      color: "text-purple-500",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-school-red font-semibold uppercase tracking-wide">
            Our Programs
          </span>
          <h2 className="section-title">Education for Every Stage</h2>
          <p className="section-subtitle">
            From early childhood to primary education, we provide a strong
            foundation for lifelong learning and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gray-100 rounded-full p-4">
                    <IconComponent size={40} className={program.color} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-school-blue mb-2">
                  {program.name}
                </h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
