import type React from "react"
import type { Metadata } from "next"
import { Calendar, Car, Facebook, Gauge, Instagram, MapPin, Phone, Twitter, Youtube } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Redline Auto Show 2025 — Modern Car Show Landing",
  description:
    "Experience supercars, concept vehicles, and future tech at the Redline Auto Show. One day of speed, design, and innovation.",
}
// Metadata exports are supported in Server Components to improve SEO and social shareability [^3].

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_80%_-20%,rgba(239,68,68,0.25),transparent),radial-gradient(800px_400px_at_-10%_10%,rgba(127,29,29,0.2),transparent)]"
      />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 py-20 md:grid-cols-2 md:py-28 lg:py-32">
            <div className="space-y-6">
              <Badge className="bg-red-600 hover:bg-red-600/90 text-white border-0">
                June 14, 2025 — LA Convention Center
              </Badge>
              <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">Redline Auto Show 2025</h1>
              <p className="max-w-xl text-balance text-neutral-300 md:text-lg">
                A curated showcase of supercars, concept vehicles, and next‑gen EVs. Feel the power of design and
                performance pushed to the limit.
              </p>
              <div className="grid w-full grid-cols-3 gap-6 pt-6 text-center md:max-w-md md:text-left">
                <Stat value="120+" label="Exhibitors" />
                <Stat value="45" label="Reveals" />
                <Stat value="30k+" label="Visitors" />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_300px_at_80%_20%,rgba(239,68,68,0.25),transparent)]" />
              <Image
                src="/images/20190225_bmw_i8_coupe.jpg"
                alt="Red supercar in a dark showroom with dramatic lighting"
                width={1080}
                height={720}
                priority
                className="h-full w-full rounded-xl border border-white/10 object-cover shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="container mx-auto grid gap-6 px-4 pb-16 md:grid-cols-3">
        <Feature
          icon={<Gauge className="h-6 w-6 text-red-500" />}
          title="Performance"
          desc="Track‑ready beasts and dyno demos showcasing unbelievable torque and top speed."
        />
        <Feature
          icon={<Car className="h-6 w-6 text-red-500" />}
          title="Design"
          desc="Coachbuilt masterpieces, concept sculptures, and bespoke interiors up close."
        />
        <Feature
          icon={<Calendar className="h-6 w-6 text-red-500" />}
          title="Reveals"
          desc="World premieres, limited runs, and behind‑the‑scenes sessions with engineers."
        />
      </section>

      {/* Gallery */}
      <section id="gallery" className="container mx-auto px-4 py-16">
        <SectionHeader
          eyebrow="Visuals"
          title="Gallery Preview"
          subtitle="A glimpse of what’s waiting under the lights."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <GalleryImage url="/images/BMW-i8-3.jpg" alt="Carbon fiber detail under red light" />
          <GalleryImage
            url="/images/pngtree-futuristic-midengine-sports-car-on-sleek-black-background-3d-rendering-picture-image_5819473.jpg"
            alt="Concept car side profile with red accent light"
          />
          <GalleryImage url="/images/1FDF780E-789E-42C8-9C51-5B91D8FCD7D2.jpeg" alt="EV hypercar rear lights glowing" />
          <GalleryImage url="/images/mercedes-benz-tridy-g-695103-L-3b1c66b91c52fba13b1c.jpg" alt="Classic muscle car front grille" />
          <GalleryImage url="/images/Neue-Sportwagen-2019-2020-2021-2022-und-2023-1200x800-e1e41e54610e1775.jpg" alt="High gloss red and black wheel rim" />
          <GalleryImage url="/images/Modern_Luxury_1.jpg" alt="Supercar engine bay with red accents" />
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="container mx-auto px-4 py-16">
        <SectionHeader eyebrow="Agenda" title="Show Day Schedule" subtitle="From door‑open to after‑dark reveals." />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <ScheduleCard
            time="09:00"
            title="Doors Open"
            desc="Early access, coffee, and warm‑up loops on the LED track."
          />
          <ScheduleCard time="11:30" title="Concept Hour" desc="Design leaders unveil future models and materials." />
          <ScheduleCard time="14:00" title="EV Performance" desc="Live dyno demos with next‑gen battery systems." />
          <ScheduleCard time="16:00" title="Track Talk" desc="Pro drivers breakdown aero, tires, and braking." />
          <ScheduleCard time="18:30" title="Headliners" desc="Supercar reveals with immersive light and sound." />
          <ScheduleCard time="21:00" title="After Dark" desc="Neon showcase and night photography session." />
        </div>
      </section>

      {/* Location */}
      <section id="location" className="container mx-auto px-4 py-16">
        <SectionHeader eyebrow="Location" title="LA Convention Center" subtitle="1201 S Figueroa St, Los Angeles, CA" />
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card className="bg-neutral-900/60 border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-red-500" />
                Getting There
              </CardTitle>
            </CardHeader>
            <CardContent className="text-neutral-300">
              - Metro Pico station, 5‑minute walk
              <br />- On‑site parking garage A, entrance from Pico Blvd
              <br />- Rideshare drop at West Hall
            </CardContent>
          </Card>
          <div className="overflow-hidden rounded-xl border border-white/10">
            <Image
              src="/images/mixcollage-21-oct-2024-10-45-am-6299.avif"
              alt="LA Convention Center at night with red lights"
              width={900}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsors" className="container mx-auto px-4 py-16">
        <SectionHeader eyebrow="Partners" title="Sponsors & Exhibitors" subtitle="Powered by industry leaders." />
        <div className="mt-8 grid grid-cols-2 gap-8 opacity-80 sm:grid-cols-3 md:grid-cols-6">
          {[
            "/images/BMW-i8-3.jpg",
            "/images/20190225_bmw_i8_coupe.jpg",
            "/images/pngtree-futuristic-midengine-sports-car-on-sleek-black-background-3d-rendering-picture-image_5819473.jpg",
            "/images/1FDF780E-789E-42C8-9C51-5B91D8FCD7D2.jpeg",
            "/images/mercedes-benz-tridy-g-695103-L-3b1c66b91c52fba13b1c.jpg",
            "/images/Neue-Sportwagen-2019-2020-2021-2022-und-2023-1200x800-e1e41e54610e1775.jpg",
            "/images/Modern_Luxury_1.jpg",
            "/images/mixcollage-21-oct-2024-10-45-am-6299.avif",
            "/images/b18aa0287.jpg",
            "/images/67400bf7fa0d2eb7e3ae6a3b2f2691c6.jpg",
            "/images/c302e1b4e7f99d19f88939c3a2775f47.jpg",
            "/images/maxresdefault.jpg"
          ].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Sponsor logo ${i + 1}`}
              width={160}
              height={80}
              className="mx-auto h-10 w-32 rounded bg-neutral-900/60 object-contain p-3 ring-1 ring-white/5"
            />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-4 pb-20 pt-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 p-6 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <Badge className="bg-red-600 text-white border-0">No Email Form</Badge>
              <h2 className="text-2xl font-bold md:text-3xl">Contact & Tickets</h2>
              <p className="text-neutral-300">Call us or reach out on social. We respond quickly during show week.</p>
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="tel:+12135551234"
                  className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-neutral-900/70 px-4 py-2 font-medium text-white hover:border-red-600/50 hover:bg-red-600/10"
                >
                  <Phone className="h-4 w-4 text-red-500" />
                  +1 (213) 555‑1234
                </a>
                <div className="flex items-center gap-3">
                  <SocialLink href="https://instagram.com" label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </SocialLink>
                  <SocialLink href="https://twitter.com" label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </SocialLink>
                  <SocialLink href="https://facebook.com" label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </SocialLink>
                  <SocialLink href="https://youtube.com" label="YouTube">
                    <Youtube className="h-5 w-5" />
                  </SocialLink>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/images/b18aa0287.jpg"
                alt="Red neon tunnel with supercar silhouette"
                width={800}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="rounded bg-red-600/20 p-2 ring-1 ring-red-600/30">
            <Car className="h-4 w-4 text-red-500" />
          </span>
          <span className="text-white">Redline</span>
        </a>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-4 text-sm text-neutral-300 md:gap-6">
            <li>
              <a className="hover:text-white" href="#highlights">
                Highlights
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#gallery">
                Gallery
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#schedule">
                Schedule
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#location">
                Location
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="/special-car">
                Special Car
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-left">
      <div className="text-2xl font-extrabold text-white">{value}</div>
      <div className="text-xs uppercase tracking-wide text-neutral-400">{label}</div>
    </div>
  )
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <Card className="border-white/10 bg-neutral-900/60">
      <CardHeader className="flex flex-row items-center gap-3 space-y-0">
        <div className="rounded-lg bg-red-600/10 p-2 ring-1 ring-red-600/20">{icon}</div>
        <CardTitle className="text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-300">{desc}</p>
      </CardContent>
    </Card>
  )
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mb-2">
        <Badge className="border-0 bg-red-600 text-white">{eyebrow}</Badge>
      </div>
      <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-2 text-neutral-300">{subtitle}</p> : null}
    </div>
  )
}

function GalleryImage({ url, alt }: { url: string; alt: string }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-white/10">
      <Image
        src={url || "/images/BMW-i8-3.jpg"}
        alt={alt}
        width={960}
        height={640}
        className="h-56 w-full object-cover transition duration-300 group-hover:scale-[1.02] sm:h-64 md:h-56 lg:h-60"
      />
    </div>
  )
}

function ScheduleCard({ time, title, desc }: { time: string; title: string; desc: string }) {
  return (
    <Card className="border-white/10 bg-neutral-900/60">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          <span className="rounded bg-red-600/20 px-2 py-1 text-xs font-semibold text-red-200 ring-1 ring-red-600/30">
            {time}
          </span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-neutral-300">{desc}</p>
      </CardContent>
    </Card>
  )
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-neutral-900/70 p-2 text-neutral-200 ring-red-600/20 transition hover:border-red-600/50 hover:bg-red-600/10"
      title={label}
    >
      {children}
    </a>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-sm text-neutral-400">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p>© {new Date().getFullYear()} Redline Auto Show. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#location" className="hover:text-white">
            Venue
          </a>
          <a href="#sponsors" className="hover:text-white">
            Sponsors
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
