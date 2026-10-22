import Hero from "@/components/Hero";

export default function Programs() {
  const programDetails = [
    {
      name: "Day Care",
      age: "Ages 6 weeks - 2 years",
      description: "A safe and caring start for the youngest learners.",
      features: [
        "Professional childcare staff",
        "Warm, nurturing environment",
        "Age-appropriate activities",
        "Regular parent communication",
      ],
    },
    {
      name: "Baby Class",
      age: "Ages 2 - 3 years",
      description: "Building strong foundations through play and exploration.",
      features: [
        "Play-based learning",
        "Language development",
        "Social skills building",
        "Parent involvement",
      ],
    },
    {
      name: "Middle Class",
      age: "Ages 3 - 4 years",
      description: "Developing key skills and independence.",
      features: [
        "Structured learning activities",
        "Pre-literacy skills",
        "Numeracy foundations",
        "Character development",
      ],
    },
    {
      name: "Reception",
      age: "Ages 4 - 5 years",
      description: "Preparing for primary school with confidence.",
      features: [
        "School readiness program",
        "Academic foundations",
        "Leadership skills",
        "Transition support",
      ],
    },
    {
      name: "Primary School",
      age: "Grades 1 - 7",
      description: "Building bright futures with comprehensive education.",
      features: [
        "Comprehensive curriculum",
        "Qualified teachers",
        "Extracurricular activities",
        "Holistic development",
      ],
    },
  ];

  return (
    <main>
      <Hero
        title="Our Programs"
        subtitle="Quality education for every stage of childhood"
      />

      <section className="py-20 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="space-y-12">
            {programDetails.map((program, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
              >
                <div className="bg-school-blue text-white p-8">
                  <h3 className="text-3xl font-bold mb-2">{program.name}</h3>
                  <p className="text-gray-200">{program.age}</p>
                </div>
                <div className="p-8">
                  <p className="text-lg text-gray-700 mb-6">
                    {program.description}
                  </p>
                  <div>
                    <h4 className="font-bold text-school-blue mb-4">
                      Key Features:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {program.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <span className="text-school-red font-bold text-xl">
                            ✓
                          </span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
