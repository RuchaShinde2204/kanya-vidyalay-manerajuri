import {
  Award,
  Eye,
  Flag,
  HeartHandshake,
  GraduationCap,
  Users,
  School,
  Trophy
} from "lucide-react";

export default function About() {
  const values = [
    [
      "Vision",
      "To build an educated, self-reliant generation of rural girls.",
      Eye
    ],
    [
      "Mission",
      "To provide inclusive learning with strong values and practical exposure.",
      Flag
    ],
    [
      "Achievements",
      "Academic success, cultural participation, sports recognition, and community initiatives.",
      Award
    ],
    [
      "Values",
      "Respect, discipline, equality, service, and excellence.",
      HeartHandshake
    ]
  ];

  const stats = [
    ["650+", "Students", Users],
    ["28+", "Teachers", GraduationCap],
    ["35+", "Years", School],
    ["95%", "Pass Rate", Trophy]
  ];

  return (
    <div className="container-page py-10">

      {/* Hero Section */}
      <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-school-green to-green-800 text-white shadow-xl">
        <div className="grid items-center gap-10 p-10 lg:grid-cols-2">
          <div classname="overflow-hidden rounded-3xl">
            <p className="font-semibold uppercase tracking-widest text-green-100">
              About Our School
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              Empowering Rural Girls Through Education
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/90">
              Kanya Vidyalay Manerajuri has been nurturing confidence,
              knowledge, leadership, and values among young girls for
              generations. Our mission is to provide quality education
              and create opportunities for every student.
            </p>
          </div>

          <img
            src="/images/school-building.png"
            alt="School Campus"
            className="h-[380px] w-full rounded-3xl object-cover transition-all duration-500 hover:scale-105"
            // onError={(e) => {
            //   e.currentTarget.src =
            //     "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80";
            // }}
          />
        </div>
      </section>

      {/* Statistics */}
      <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map(([value, label, Icon]) => (
          <div
            key={label}
            className="rounded-2xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <Icon className="text-school-green" size={28} />
            </div>

            <h2 className="mt-4 text-4xl font-black text-school-green">
              {value}
            </h2>

            <p className="mt-2 text-slate-600">{label}</p>
          </div>
        ))}
      </section>

      {/* School History */}
      <section className="mt-16">
        <h2 className="text-center text-4xl font-black text-school-ink">
          Our Journey
        </h2>

        <div className="mx-auto mt-10 max-w-3xl space-y-8">
          <div className="border-l-4 border-school-green pl-6">
            <h3 className="text-xl font-bold text-school-green">1988</h3>
            <p className="mt-2 text-slate-600">
              Kanya Vidyalay Manerajuri was established with a vision of
              providing quality education to girls in rural areas.
            </p>
          </div>

          <div className="border-l-4 border-school-green pl-6">
            <h3 className="text-xl font-bold text-school-green">2005</h3>
            <p className="mt-2 text-slate-600">
              Expansion of classrooms and educational facilities to
              support a growing number of students.
            </p>
          </div>

          <div className="border-l-4 border-school-green pl-6">
            <h3 className="text-xl font-bold text-school-green">2018</h3>
            <p className="mt-2 text-slate-600">
              Introduction of digital learning tools and extracurricular
              programs.
            </p>
          </div>

          <div className="border-l-4 border-school-green pl-6">
            <h3 className="text-xl font-bold text-school-green">2026</h3>
            <p className="mt-2 text-slate-600">
              Launch of the online school management and admission portal.
            </p>
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="mt-20 rounded-3xl bg-green-50 p-8 shadow-sm">
        <div className="overflow-hidden rounded-2xl shadow-lg grid items-center gap-8 lg:grid-cols-[350px_1fr]">

          <img
            src="/images/principal.png"
            alt="Principal"
            
            className="h-[380px] w-full object-cover transition-transform duration-700 hover:scale-105"
            // onError={(e) => {
            //   e.currentTarget.src =
            //     "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80";
            // }}
          />

          <div>
            <p className="font-semibold text-school-green">
              Principal's Message
            </p>

            <h2 className="mt-2 text-4xl font-black text-school-ink">
              Building Confidence, Character & Knowledge
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our goal is to help every student become confident,
              responsible, and prepared for future opportunities.
              Education is not only about academic excellence but also
              about discipline, curiosity, compassion, leadership, and
              community service.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              We are proud to support students in achieving their dreams
              and becoming responsible citizens who contribute positively
              to society.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="mt-20">
        <h2 className="text-center text-4xl font-black text-school-ink">
          Vision, Mission & Values
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map(([title, text, Icon]) => (
            <article
              key={title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="inline-flex rounded-xl bg-green-100 p-3">
                <Icon className="text-school-green" size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-school-ink">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="mt-20 rounded-3xl bg-school-ink p-10 text-center text-white">
        <h2 className="text-3xl font-black">
          Join Our Learning Community
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          We are committed to providing quality education and empowering
          young girls to achieve their full potential.
        </p>

        <a
          href="/admission"
          className="mt-6 inline-flex rounded-lg bg-school-gold px-6 py-3 font-bold text-school-ink transition hover:bg-white"
        >
          Apply for Admission
        </a>
      </section>

    </div>
  );
}