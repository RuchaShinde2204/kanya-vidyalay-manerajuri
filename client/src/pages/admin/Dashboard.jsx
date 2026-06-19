import { CalendarDays, Images, Inbox, Megaphone, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { adminService } from "../../services/adminService";

export default function Dashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    adminService.stats().then(({ data }) => setStats(data)).catch(() => setStats({}));
  }, []);

  
  const cards = [
    ["Total Admissions", stats.totalAdmissions || 0, Users],
    ["Pending", stats.pendingAdmissions || 0, Users, "text-yellow-600"],
    ["Approved", stats.approvedAdmissions || 0, Users, "text-green-600"],
    ["Rejected", stats.rejectedAdmissions || 0, Users, "text-red-600"],
    ["Total Events", stats.totalEvents || 0, CalendarDays],
    ["Gallery Images", stats.totalGalleryImages || 0, Images],
    ["Contact Messages", stats.totalContactMessages || 0, Inbox],
    ["Total Notices", stats.totalNotices || 0, Megaphone]
  ];

  <div className="mt-8 rounded-xl bg-white p-6 shadow-md">
  <h2 className="mb-4 text-xl font-bold text-school-ink">
    Recent Admissions
  </h2>

  <p className="text-slate-500">
    View latest student admission applications.
  </p>
</div>

  return (
    
    <div>
      <h1 className="text-3xl font-black text-school-ink">Dashboard</h1>
      <div className="mb-6 rounded-xl bg-gradient-to-r from-school-green to-green-700 p-6 text-white shadow-lg">
        <h2 className="text-3xl font-bold">
          Welcome Back, Admin 👋
        </h2>

        <p className="mt-2 text-white/90">
          Manage admissions, events, gallery, notices and communications from one place.
        </p>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(([label, value, Icon, color]) => (
          <div key={label} className="rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Icon className={color} size={30}  />
            <p className="mt-4 text-3xl font-black">{value}</p>
            <p className="text-sm font-semibold text-slate-500">{label}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-xl bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-bold text-school-ink">
          Recent Admissions
        </h2>

        <p className="text-slate-500">
          View latest student admission applications.
        </p>
      </div>
    </div>
  );
}
