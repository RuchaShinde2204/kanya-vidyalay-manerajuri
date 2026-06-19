import { Send } from "lucide-react";
import { useState } from "react";
import { publicService } from "../services/publicService";
import { grades } from "../utils/constants";

const initial = {
  studentName: "",
  dob: "",
  gender: "Female",
  address: "",
  parentName: "",
  contactNumber: "",
  email: "",
  previousSchool: "",
  gradeApplyingFor: "5th",
  document: null
};

export default function Admission() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("");

  const change = (event) => {
    const { name, value, files } = event.target;
    setForm((current) => ({ ...current, [name]: files ? files[0] : value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });
    await publicService.submitAdmission(formData);
    setStatus("Admission application submitted successfully.");
    setForm(initial);
  };

  return (
    <div className="container-page py-12">
      <h1 className="text-4xl font-black text-school-ink">Online Admission Form</h1>
      <p className="mt-3 max-w-2xl leading-7 text-slate-600">Submit student details for school admission. The administration can review applications from the dashboard.</p>
      <form onSubmit={submit} className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          <label>Student Name<input name="studentName" value={form.studentName} onChange={change} required /></label>
          <label>Date of Birth<input type="date" name="dob" value={form.dob} onChange={change} required /></label>
          <label>Gender<select name="gender" value={form.gender} onChange={change}><option>Female</option><option>Male</option><option>Other</option></select></label>
          <label>Parent Name<input name="parentName" value={form.parentName} onChange={change} required /></label>
          <label>Contact Number<input name="contactNumber" value={form.contactNumber} onChange={change} required /></label>
          <label>Email<input type="email" name="email" value={form.email} onChange={change} /></label>
          <label>Previous School<input name="previousSchool" value={form.previousSchool} onChange={change} /></label>
          <label>Grade Applying For<select name="gradeApplyingFor" value={form.gradeApplyingFor} onChange={change}>{grades.map((grade) => <option key={grade}>{grade}</option>)}</select></label>
          <label className="md:col-span-2">Address<textarea name="address" rows="4" value={form.address} onChange={change} required /></label>
          <label className="md:col-span-2">Document<input type="file" name="document" onChange={change} accept=".pdf,.jpg,.jpeg,.png,.webp" /></label>
        </div>
        <button className="btn-primary mt-6" type="submit"><Send size={16} />Submit Application</button>
        {status && <p className="mt-4 text-sm font-semibold text-school-green">{status}</p>}
      </form>
    </div>
  );
}
