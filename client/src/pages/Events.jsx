import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { publicService } from "../services/publicService";
import { CalendarDays, Trophy, Users } from "lucide-react";

export default function Events() {
  const [upcoming, setUpcoming] = useState([]);
  const [past, setPast] = useState([]);

  useEffect(() => {
    publicService
      .getUpcomingEvents()
      .then(({ data }) => setUpcoming(data))
      .catch(() => setUpcoming([]));

    publicService
      .getPastEvents()
      .then(({ data }) => setPast(data))
      .catch(() => setPast([]));
  }, []);

  return (
    <div className="container-page py-12">

      {/* Hero Section */}
      <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-school-green to-green-700 px-8 py-16 text-white shadow-xl">
        <h1 className="text-5xl font-black">School Events</h1>

        <p className="mt-4 max-w-3xl text-lg text-green-100">
          Celebrating learning, culture, sports, achievements, and community
          engagement through memorable events and activities.
        </p>
      </section>

      {/* Statistics */}
      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
          <CalendarDays className="text-school-green" size={32} />
          <h3 className="mt-3 text-3xl font-black text-school-green">
            {upcoming.length + past.length}
          </h3>
          <p className="text-slate-600">Total Events</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
          <Users className="text-school-green" size={32} />
          <h3 className="mt-3 text-3xl font-black text-school-green">
            500+
          </h3>
          <p className="text-slate-600">Student Participation</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
          <Trophy className="text-school-green" size={32} />
          <h3 className="mt-3 text-3xl font-black text-school-green">
            25+
          </h3>
          <p className="text-slate-600">Achievements</p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mt-14">
        <div className="flex items-center justify-between">
          <h2 className="section-title">Upcoming Events</h2>

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            {upcoming.length} Events
          </span>
        </div>

        <div className="mt-6 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {upcoming.length ? (
            upcoming.map((event) => (
              <EventCard key={event._id} event={event} />
            ))
          ) : (
            <div className="col-span-full rounded-2xl bg-slate-50 p-8 text-center text-slate-500">
              No upcoming events available.
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="mt-16">
        <div className="flex items-center justify-between">
          <h2 className="section-title">Past Events</h2>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            {past.length} Events
          </span>
        </div>

        <div className="mt-6 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {past.length ? (
            past.map((event) => (
              <EventCard key={event._id} event={event} />
            ))
          ) : (
            <div className="col-span-full rounded-2xl bg-slate-50 p-8 text-center text-slate-500">
              No past events available.
            </div>
          )}
        </div>
      </section>

      {/* Timeline */}
      <section className="mt-20 rounded-3xl bg-white p-8 shadow-md">
        <h2 className="text-3xl font-black text-school-ink">
          School Journey
        </h2>

        <div className="mt-8 space-y-6 border-l-4 border-school-green pl-6">
          <div>
            <h3 className="font-bold text-school-green">2026</h3>
            <p className="text-slate-600">
              Launch of online school admission and management portal.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-school-green">2025</h3>
            <p className="text-slate-600">
              Annual Day Celebration and Tree Plantation Drive.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-school-green">2024</h3>
            <p className="text-slate-600">
              Science Exhibition and Cultural Programs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}