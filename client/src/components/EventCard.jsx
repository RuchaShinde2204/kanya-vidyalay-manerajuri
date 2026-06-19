import { CalendarDays, MapPin } from "lucide-react";

export default function EventCard({ event }) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-3
        hover:shadow-2xl
        hover:border-school-green
      "
    >
      <div className="overflow-hidden">
        <img
          src={
            event.imageUrl ||
            "https://images.unsplash.com/photo-1589883164746-0fc6e5b6f1ef?auto=format&fit=crop&w=900&q=80"
          }
          alt={event.title}
          className="
            h-52
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />
      </div>

      <div className="space-y-3 p-5">
        <p
          className="
            inline-flex
            rounded-full
            bg-school-mist
            px-3
            py-1
            text-xs
            font-semibold
            text-school-green
            transition-all
            duration-300
            group-hover:bg-school-green
            group-hover:text-white
          "
        >
          {event.category}
        </p>

        <h3
          className="
            text-xl
            font-bold
            text-school-ink
            transition-colors
            duration-300
            group-hover:text-school-green
          "
        >
          {event.title}
        </h3>

        <p className="line-clamp-3 text-sm leading-6 text-slate-600">
          {event.description}
        </p>

        <div className="space-y-2 border-t pt-3 text-sm text-slate-500">
          <p className="flex items-center gap-2">
            <CalendarDays size={16} />
            {new Date(event.date).toLocaleDateString()}
          </p>

          <p className="flex items-center gap-2">
            <MapPin size={16} />
            {event.location}
          </p>
        </div>
      </div>
    </article>
  );
}