import Hero from "@/components/Hero";
import { Calendar, User } from "lucide-react";

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "School Opens New Science Lab",
      excerpt:
        "We're excited to announce the opening of our state-of-the-art science laboratory with modern equipment for hands-on learning.",
      date: "October 15, 2025",
      author: "Admin",
      category: "Facilities",
    },
    {
      id: 2,
      title: "Annual Sports Day Celebration",
      excerpt:
        "Our students showcased their athletic talents during this year's sports day. Congratulations to all participants!",
      date: "October 8, 2025",
      author: "Events Team",
      category: "Events",
    },
    {
      id: 3,
      title: "New Teacher Joins Our Team",
      excerpt:
        "Please welcome Ms. Amina Zulu, our new Grade 3 teacher, who brings 8 years of teaching experience.",
      date: "October 1, 2025",
      author: "Admin",
      category: "Staff",
    },
    {
      id: 4,
      title: "Parent-Teacher Meeting Dates",
      excerpt:
        "Mark your calendars for our upcoming parent-teacher meetings scheduled for October 20-22.",
      date: "September 28, 2025",
      author: "Admin",
      category: "Updates",
    },
  ];

  return (
    <main>
      <Hero
        title="News & Events"
        subtitle="Stay updated with the latest from our school"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-r from-school-blue to-school-red h-48 relative">
                  <span className="absolute top-4 right-4 bg-white text-school-red px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-school-blue mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{item.author}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
