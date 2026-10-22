import ProgramCard from "./ProgramCard";
import { Baby, BookOpen, Award, Users, Smile } from "lucide-react";

const programs = [
  {
    name: "Day Care",
    description: "A safe and caring start",
    icon: Award,
    iconColor: "text-white",
    iconBgColor: "bg-red-500",
  },
  {
    name: "Baby Class",
    description: "Building early foundations",
    icon: Baby,
    iconColor: "text-white",
    iconBgColor: "bg-blue-500",
  },
  {
    name: "Middle Class",
    description: "Developing key skills",
    icon: BookOpen,
    iconColor: "text-white",
    iconBgColor: "bg-green-500",
  },
  {
    name: "Reception",
    description: "Preparing for primary school",
    icon: Award,
    iconColor: "text-white",
    iconBgColor: "bg-amber-500",
  },
  {
    name: "Grade 1 – 7",
    description: "Building bright futures",
    icon: Users,
    iconColor: "text-white",
    iconBgColor: "bg-purple-500",
  },
];

export default function ProgramsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Introduction */}
          <div>
            <p className="section-label">Our Programs</p>
            <h2 className="section-heading">
              Education for
              <br />
              Every Stage
            </h2>
            <div className="section-heading-red-underline"></div>
            <p className="text-navy-body text-lg leading-relaxed">
              From early childhood to primary education, we provide a strong
              foundation for lifelong learning and success.
            </p>
          </div>

          {/* Right Program Cards */}
          <div className="flex flex-nowrap gap-4 lg:gap-6 overflow-x-auto">
            {programs.map((program) => (
              <div key={program.name} className="flex-shrink-0 w-[180px] lg:w-[220px]">
                <ProgramCard
                  title={program.name}
                  description={program.description}
                  icon={program.icon}
                  iconColor={program.iconColor}
                  iconBgColor={program.iconBgColor}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
