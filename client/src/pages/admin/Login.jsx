import { LogIn } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await login(credentials);
      navigate("/admin/dashboard");
    } catch {
      setError("Invalid admin email or password.");
    }
  };

  return (
    <div className="grid min-h-screen place-items-center bg-school-mist px-4">
      <form onSubmit={submit} className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-lg">
        <h1 className="text-2xl font-black text-school-ink">Admin Login</h1>
        <p className="mt-2 text-sm text-slate-600">Kanya Vidyalay Manerajuri administration portal.</p>
        <div className="mt-6 grid gap-4">
          <label>Email<input type="email" value={credentials.email} onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} required /></label>
          <label>Password<input type="password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} required /></label>
          <button disabled={loading} className="btn-primary" type="submit"><LogIn size={16} />Login</button>
          {error && <p className="text-sm font-semibold text-red-600">{error}</p>}
        </div>
      </form>
    </div>
  );
}
