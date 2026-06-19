  import {
  ArrowRight,
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import EventCard from "../components/EventCard";
import NoticeCard from "../components/NoticeCard";
import { publicService } from "../services/publicService";
import { schoolInfo } from "../utils/constants";

const stats = [
  ["Students", "650+", Users, "Learning with guidance"],
  ["Teachers", "28", GraduationCap, "Qualified and caring"],
  ["Years", "35+", Award, "Service to Manerajuri"],
  ["Facilities", "12", BookOpen, "Academic and activity spaces"]
];

const highlights = [
  ["Safe Campus", "A disciplined, supportive environment for girls.", ShieldCheck],
  ["Value Education", "Learning shaped by confidence, respect, and responsibility.", HeartHandshake],
  ["Active Learning", "Events, sports, reading, science, and community activities.", Sparkles]
];

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -40px 0px", ...options }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

function AnimatedCounter({ value, active }) {
  const [display, setDisplay] = useState("0");
  const numericValue = Number.parseInt(value, 10);
  const suffix = value.replace(String(numericValue), "");

  useEffect(() => {
    if (!active || Number.isNaN(numericValue)) return;
    if (prefersReducedMotion()) {
      setDisplay(value);
      return;
    }

    let frame;
    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${Math.round(numericValue * eased)}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, numericValue, suffix, value]);

  return display;
}

export default function Home() {
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);
  const [statsRef, statsVisible] = useInView();
  const [overviewRef, overviewVisible] = useInView();
  const [noticesRef, noticesVisible] = useInView();
  const [eventsRef, eventsVisible] = useInView();
  const [ctaRef, ctaVisible] = useInView();

  useEffect(() => {
    publicService.getNotices().then(({ data }) => setNotices(data.slice(0, 3))).catch(() => setNotices([]));
    publicService.getUpcomingEvents().then(({ data }) => setEvents(data.slice(0, 3))).catch(() => setEvents([]));
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-[#f6faf4]">
        <div classname="animate-fade-in"/>
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-school-green via-school-gold to-school-leaf" />
        <div className="floating-leaf left-[7%] top-24" />
        <div className="floating-leaf floating-leaf-delay right-[8%] top-36" />
        
        <div className="floating-leaf left-[20%] bottom-20 scale-75 opacity-40" />
        <div className="floating-leaf right-[15%] bottom-32 scale-125 opacity-30" />
        <div className="floating-leaf left-[45%] top-10 scale-50 opacity-20" />
        <div className="floating-leaf right-[35%] top-52 scale-90 opacity-25" />

        <div className="container-page grid min-h-[620px] items-center gap-10 py-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <p className="hero-rise inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-bold text-school-green shadow-sm ring-1 ring-school-green/10">
              <MapPin size={16} /> Rural girls' education in Manerajuri
            </p>
            <h1 className="hero-rise mt-5 max-w-3xl text-4xl font-black leading-tight text-school-ink md:text-6xl" style={{ "--delay": "80ms" }}>{schoolInfo.name}</h1>
            <p className="hero-rise mt-5 max-w-2xl text-lg leading-8 text-slate-700" style={{ "--delay": "160ms" }}>{schoolInfo.tagline}</p>
            <div className="hero-rise mt-8 flex flex-wrap gap-3" style={{ "--delay": "240ms" }}>
              <Link to="/admission" className="btn-primary lift-hover px-5 py-3">Apply for Admission <ArrowRight size={18} /></Link>
              <Link to="/about" className="btn-secondary lift-hover">About School</Link>
            </div>
            <div className="hero-rise mt-8 grid gap-3 sm:grid-cols-3" style={{ "--delay": "320ms" }}>
              {["Girls focused learning", "Admin managed updates", "Community rooted school"].map((item, index) => (
                <p key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700" style={{ "--delay": `${400 + index * 80}ms` }}>
                  <CheckCircle2 className="text-school-green" size={18} /> {item}
                </p>
              ))}
            </div>
          </div>
          <div className="hero-rise relative" style={{ "--delay": "420ms" }}>
            <div className="absolute -inset-4 rounded-[2rem] bg-school-green/10 blur-2xl" />
            <img
              className="relative h-[460px] w-full rounded-lg border-4 border-white object-cover shadow-2xl ring-1 ring-black/5"
              src="/images/school-building.jpg"
              onError={(event) => {
                event.currentTarget.src = "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80";
              }}
              alt="Students studying in a classroom"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-lg border-l-4 border-school-green bg-white/95 p-4 shadow-lg backdrop-blur">
              <p className="flex items-center gap-2 text-sm font-bold text-school-green">
                <span className="pulse-dot" /> Admissions open
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-600">Submit applications online and let the school office review them from the admin dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={statsRef} className={`section-reveal container-page relative z-10 -mt-8 ${statsVisible ? "is-visible" : ""}`}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([label, value, Icon, text], index) => (
            <div key={label} className="shimmer-card lift-hover rounded-lg border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60" style={{ "--delay": `${index * 90}ms` }}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-3xl font-black text-school-ink"><AnimatedCounter value={value} active={statsVisible} /></p>
                  <p className="mt-1 text-sm font-bold text-slate-700">{label}</p>
                </div>
                <div className="grid h-11 w-11 place-items-center rounded-md bg-school-mist text-school-green">
                  <Icon size={22} />
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section ref={overviewRef} className={`section-reveal container-page grid gap-10 py-14 lg:grid-cols-[0.85fr_1.15fr] ${overviewVisible ? "is-visible" : ""}`}>
        <div className="section-reveal-child">
          <h2 className="section-title">School Overview</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Kanya Vidyalay Manerajuri supports girls from rural families with quality teaching,
            disciplined learning, co-curricular activities, and a caring campus environment.
          </p>
          <div className="mt-6 grid gap-4">
            {highlights.map(([title, text, Icon], index) => (
              <article key={title} className="slide-in-card lift-hover flex gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm" style={{ "--delay": `${index * 110}ms` }}>
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-school-mist text-school-green">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-school-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </article>
            ))}
          </div>
          <Link className="btn-secondary mt-6" to="/facilities">View Facilities</Link>
        </div>
        <div ref={noticesRef} className={`section-reveal-child ${noticesVisible ? "is-visible" : ""}`}>
          <div className="mb-5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Megaphone className="text-school-green" />
              <h2 className="section-title">Latest Notices</h2>
            </div>
            <Link className="hidden text-sm font-semibold text-school-green sm:inline" to="/admin/login">Admin update</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-1">
            {notices.length ? notices.map((notice, index) => (
              <div className="fade-card lift-hover" key={notice._id} style={{ "--delay": `${index * 90}ms` }}>
                <NoticeCard notice={notice} />
              </div>
            )) : (
              <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500 md:col-span-3">
                No notices published yet.
              </div>
            )}
          </div>
        </div>
      </section>

      <section ref={eventsRef} className={`section-reveal bg-slate-50 py-14 ${eventsVisible ? "is-visible" : ""}`}>
        <div className="container-page">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <CalendarDays className="text-school-green" />
                <h2 className="section-title">Upcoming Events</h2>
              </div>
              <p className="mt-2 text-sm text-slate-600">Programs and activities added by the school administration.</p>
            </div>
            <Link to="/events" className="btn-secondary">View All Events</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {events.length ? events.map((event, index) => (
              <div className="fade-card lift-hover" key={event._id} style={{ "--delay": `${index * 100}ms` }}>
                <EventCard event={event} />
              </div>
            )) : (
              <p className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500 md:col-span-3">No upcoming events available.</p>
            )}
          </div>
        </div>
      </section>

      <section ref={ctaRef} className={`section-reveal container-page py-14 ${ctaVisible ? "is-visible" : ""}`}>
        <div className="cta-panel relative grid overflow-hidden rounded-lg bg-gradient-to-br from-school-ink via-school-green to-[#123828] p-6 text-white md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div className="cta-ring right-8 top-5" />
          <div className="cta-ring bottom-5 left-[45%]" />
          <div>
            <h2 className="text-2xl font-black">Ready to apply for admission?</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/75">Parents can submit student details online. The office can track every application from the admin dashboard.</p>
          </div>
          <Link to="/admission" className="lift-hover relative inline-flex items-center justify-center gap-2 rounded-md bg-[#c8a84b] px-5 py-3 text-sm font-bold text-school-ink transition hover:bg-white">
            Start Application <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}