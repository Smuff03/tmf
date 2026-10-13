import { useEffect, useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { generalEnquiryLink, site, telLink } from "../config/site";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const initial = { name: "", phone: "", email: "", message: "" };

const validate = (f) => {
  const errors = {};
  if (!f.name.trim() || f.name.trim().length < 2) errors.name = "Please enter your name.";
  if (f.phone.trim() && !/^[6-9]\d{9}$/.test(f.phone.trim()))
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!f.message.trim() || f.message.trim().length < 10)
    errors.message = "Please write a message (at least 10 characters).";
  return errors;
};

const Contact = () => {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  useEffect(() => {
    document.title = `Contact Us | ${site.name}`;
  }, []);

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) {
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setSending(true);
    try {
      const res = await fetch(`${API}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim() || null,
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success("Thank you! Your enquiry has been sent. We will get back to you soon.");
      setForm(initial);
    } catch {
      toast.error("Could not send right now. Please reach us on WhatsApp instead.");
    } finally {
      setSending(false);
    }
  };

  const inputClass = (hasError) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-stone-800 shadow-sm outline-none transition-colors placeholder:text-stone-400 focus:ring-2 ${
      hasError
        ? "border-red-400 focus:border-red-500 focus:ring-red-200"
        : "border-stone-300 focus:border-orange-500 focus:ring-orange-200"
    }`;

  return (
    <main data-testid="contact-page" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Contact The Maharashtra Foods"
        subtitle="Call, email or WhatsApp us — or send the form below and we will reach out."
        testId="contact-heading"
      />

      <div className="grid gap-10 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          {site.contacts.map((c, i) => (
            <Reveal key={c.phone} delay={i * 0.05}>
              <a
                href={telLink(c.phone)}
                data-testid={`contact-person-${c.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="flex items-center gap-4 rounded-2xl border border-stone-200/80 bg-white p-4 shadow-sm transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-display text-base font-bold text-stone-900">{c.name}</span>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-stone-500">{c.role}</span>
                  <span className="mt-0.5 block text-sm font-semibold text-emerald-700">+91 {c.phone}</span>
                </span>
              </a>
            </Reveal>
          ))}

          <Reveal delay={0.25}>
            <div className="rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-orange-700" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-stone-500">Email</p>
                  <a data-testid="contact-email" href={`mailto:${site.email}`} className="break-all text-sm font-semibold text-stone-800 hover:text-orange-700">
                    {site.email}
                  </a>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-700" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-stone-500">Address</p>
                  <p data-testid="contact-address" className="text-sm leading-relaxed text-stone-700">{site.address}</p>
                </div>
              </div>
              <p data-testid="contact-gstin" className="mt-4 border-t border-stone-100 pt-3 text-xs text-stone-500">
                GSTIN: {site.gstin}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <a
              href={generalEnquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-whatsapp-cta"
              className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-700 px-6 py-4 text-base font-semibold text-white shadow-md transition-colors duration-200 hover:bg-emerald-800 active:scale-95"
            >
              <MessageCircle className="h-5 w-5" /> Chat With Us on WhatsApp
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-3">
          <form
            data-testid="contact-form"
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm sm:p-8"
          >
            <h3 className="font-display text-xl font-bold text-stone-900">Send Us a Message</h3>
            <p className="mt-1 text-sm text-stone-500">We usually reply within a day.</p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm font-semibold text-stone-700">
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  data-testid="contact-name-input"
                  type="text"
                  value={form.name}
                  onChange={set("name")}
                  placeholder="e.g. Rahul Patil"
                  className={inputClass(errors.name)}
                />
                {errors.name && <p data-testid="contact-name-error" className="mt-1 text-xs font-medium text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-semibold text-stone-700">
                  Mobile Number <span className="font-normal text-stone-400">(optional)</span>
                </label>
                <input
                  id="contact-phone"
                  data-testid="contact-phone-input"
                  type="tel"
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="10-digit mobile"
                  className={inputClass(errors.phone)}
                />
                {errors.phone && <p data-testid="contact-phone-error" className="mt-1 text-xs font-medium text-red-600">{errors.phone}</p>}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="contact-email-input" className="mb-1.5 block text-sm font-semibold text-stone-700">
                Email Address *
              </label>
              <input
                id="contact-email-input"
                data-testid="contact-email-input"
                type="email"
                value={form.email}
                onChange={set("email")}
                placeholder="you@example.com"
                className={inputClass(errors.email)}
              />
              {errors.email && <p data-testid="contact-email-error" className="mt-1 text-xs font-medium text-red-600">{errors.email}</p>}
            </div>

            <div className="mt-5">
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold text-stone-700">
                Message *
              </label>
              <textarea
                id="contact-message"
                data-testid="contact-message-input"
                rows={5}
                value={form.message}
                onChange={set("message")}
                placeholder="Tell us which snacks you'd like to order or enquire about…"
                className={`${inputClass(errors.message)} resize-none`}
              />
              {errors.message && <p data-testid="contact-message-error" className="mt-1 text-xs font-medium text-red-600">{errors.message}</p>}
            </div>

            <button
              type="submit"
              data-testid="contact-submit-btn"
              disabled={sending}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-600/25 transition-colors duration-200 hover:bg-orange-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              {sending ? "Sending…" : "Send Enquiry"}
            </button>
          </form>
        </Reveal>
      </div>
    </main>
  );
};

export default Contact;
