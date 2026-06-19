import { Mail, MapPin, Phone } from "lucide-react";
import { schoolInfo } from "../utils/constants";

export default function Footer() {
  return (
    <footer className="mt-16 bg-school-ink text-white">
      <div className="container-page grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-bold">{schoolInfo.name}</h2>
          <p className="mt-3 text-sm leading-6 text-white/75">{schoolInfo.tagline}</p>
        </div>
        <div className="space-y-3 text-sm text-white/80">
          <p className="flex gap-2"><MapPin size={18} />{schoolInfo.address}</p>
          <p className="flex gap-2"><Phone size={18} />{schoolInfo.phone}</p>
          <p className="flex gap-2"><Mail size={18} />{schoolInfo.email}</p>
        </div>
        <div>
          <p className="text-sm text-white/75">Managed by school administration through the MERN dashboard.</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {schoolInfo.name}. All rights reserved.
      </div>
    </footer>
  );
}
