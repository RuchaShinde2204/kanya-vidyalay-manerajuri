export default function NoticeCard({ notice }) {
  return (
    <article className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start gap-4">
        
        <div className="min-w-[80px] rounded-lg bg-school-mist p-3 text-center">
          <p className="text-xs font-semibold text-school-gold">
            {new Date(notice.createdAt).toLocaleDateString()}
          </p>
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-lg text-school-ink group-hover:text-school-green">
            {notice.title}
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-600 line-clamp-4">
            {notice.description}
          </p>
        </div>

      </div>
    </article>
  );
}