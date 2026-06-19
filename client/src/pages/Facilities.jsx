import {
  Activity,
  BookOpen,
  FlaskConical,
  HeartPulse,
  Trophy,
  Warehouse,
} from "lucide-react";

import CountUp from "react-countup";

const facilities = [
  [
    "Library",
    "Reading space with reference books, textbooks, newspapers, and guided reading support.",
    BookOpen,
  ],
  [
    "Laboratories",
    "Science and computer lab access for practical learning and demonstrations.",
    FlaskConical,
  ],
  [
    "Sports Facilities",
    "Outdoor games, annual sports activities, and fitness-focused participation.",
    Trophy,
  ],
  [
    "Classrooms",
    "Bright classrooms designed for regular teaching, group work, and student interaction.",
    Warehouse,
  ],
  [
    "Health Checkup Facility",
    "Periodic health checkups and basic awareness programs for students.",
    HeartPulse,
  ],
  [
    "Student Activities",
    "Cultural programs, competitions, awareness drives, and local community initiatives.",
    Activity,
  ],
];

export default function Facilities() {
  return (
    <div className="container-page py-12">
      {/* Hero Section */}
      <section className="rounded-3xl bg-gradient-to-r from-school-green to-green-700 p-10 text-white shadow-xl">
        <h1 className="text-5xl font-black">Our Facilities</h1>

        <p className="mt-4 max-w-3xl text-lg text-green-100">
          Modern facilities designed to support learning, creativity,
          health, sports, and overall student development.
        </p>
      </section>

      {/* Statistics */}
      <section className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-4xl font-black text-school-green">
            <CountUp end={650} duration={3} />+
          </h3>
          <p className="mt-2 text-slate-600">Students</p>
        </div>

        <div className="rounded-2xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-4xl font-black text-school-green">
            <CountUp end={35} duration={3} />+
          </h3>
          <p className="mt-2 text-slate-600">Teachers</p>
        </div>

        <div className="rounded-2xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-4xl font-black text-school-green">
            <CountUp end={6} duration={3} />+
          </h3>
          <p className="mt-2 text-slate-600">Facilities</p>
        </div>

        <div className="rounded-2xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-4xl font-black text-school-green">
            <CountUp end={95} duration={3} />%
          </h3>
          <p className="mt-2 text-slate-600">Success Rate</p>
        </div>
      </section>

      {/* Facilities Cards */}
      <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {facilities.map(([title, text, Icon]) => (
          <article
            key={title}
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-school-green
              hover:shadow-2xl
            "
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-green-500 opacity-0 transition-opacity duration-500 group-hover:opacity-5"></div>

            <Icon
              size={36}
              className="
                relative
                text-school-green
                transition-all
                duration-500
                group-hover:scale-125
                group-hover:rotate-6
              "
            />

            <h2
              className="
                relative
                mt-5
                text-xl
                font-bold
                text-school-ink
                transition-colors
                duration-300
                group-hover:text-school-green
              "
            >
              {title}
            </h2>

            <p className="relative mt-3 leading-7 text-slate-600">
              {text}
            </p>
          </article>
        ))}
      </section>

      {/* Bottom Section */}
      <section className="mt-16 rounded-3xl bg-green-50 p-10 text-center">
        <h2 className="text-3xl font-black text-school-ink">
          Creating Better Learning Experiences
        </h2>

        <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-600">
          Our facilities are designed to ensure every student receives
          quality education, practical exposure, physical development,
          and a safe environment to grow confidently.
        </p>
      </section>
    </div>
  );
}