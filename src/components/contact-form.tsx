import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

type ContactState = {
  name: string;
  phone: string;
  email: string;
  town: string;
  message: string;
};

const empty: ContactState = {
  name: "",
  phone: "",
  email: "",
  town: "",
  message: "",
};

export function ContactForm() {
  const [c, setC] = useState<ContactState>(empty);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function set<K extends keyof ContactState>(key: K, value: ContactState[K]) {
    setC((prev) => ({ ...prev, [key]: value }));
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    if (c.name.trim().length < 2 || c.phone.trim().length < 7) {
      setError("Name and a working phone number, please.");
      return;
    }
    if (c.message.trim().length < 4) {
      setError("A short message helps us call back with the right notes.");
      return;
    }
    setError("");
    const body = [
      `Contact from ${c.name}`,
      `Phone: ${c.phone}`,
      `Email: ${c.email || "(not given)"}`,
      `Town / county: ${c.town || "(not given)"}`,
      ``,
      c.message.trim(),
    ].join("\n");
    const href = `${site.emailHref}?subject=${encodeURIComponent(`Contact · ${c.name}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    try {
      localStorage.setItem("barn-central-contact", JSON.stringify(c));
    } catch {
      /* ignore */
    }
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl bg-cream p-6 md:p-8">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-wood">Message ready</p>
        <h2 className="mt-2 font-display text-2xl text-ink">Message ready</h2>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted">
          Your mail app should open to sales@thebarncentral.com. If it does not, email us at that
          address or call (615) 693-9925.
        </p>
        <Button className="mt-6" type="button" variant="outline" onClick={() => setSent(false)}>
          Write another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="contact-name">Name *</Label>
          <Input
            id="contact-name"
            value={c.name}
            onChange={(e) => set("name", e.target.value)}
            required
            autoComplete="name"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="contact-phone">Phone *</Label>
          <Input
            id="contact-phone"
            value={c.phone}
            onChange={(e) => set("phone", e.target.value)}
            required
            autoComplete="tel"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            type="email"
            value={c.email}
            onChange={(e) => set("email", e.target.value)}
            autoComplete="email"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="contact-town">Town / county</Label>
          <Input id="contact-town" value={c.town} onChange={(e) => set("town", e.target.value)} />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="contact-message">Message *</Label>
        <Textarea
          id="contact-message"
          className="min-h-36"
          required
          value={c.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="What you’re building, where, and when you want to talk."
        />
      </div>
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg">
          Email {site.email}
        </Button>
        <Button type="button" size="lg" variant="outline" asChild>
          <a href={site.phoneHref}>Call {site.phone}</a>
        </Button>
      </div>
      <p className="text-xs text-muted">
        Opens your mail app addressed to {site.email}. A copy is saved on this device. No account.
      </p>
    </form>
  );
}
