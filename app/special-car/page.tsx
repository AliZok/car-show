import type React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Car, Gauge, Zap, DollarSign, Fuel, Timer, Phone, Share2, Settings } from "lucide-react"

export const metadata: Metadata = {
  title: "Special Car — Redline Auto Show",
  description: "Featured special edition supercar with pricing, specs, and gallery.",
}

export default function SpecialCarPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_80%_-20%,rgba(239,68,68,0.25),transparent),radial-gradient(800px_400px_at_-10%_10%,rgba(127,29,29,0.2),transparent)]"
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white">
            <ArrowLeft className="h-4 w-4 text-red-500" />
            Back to Home
          </a>
          <div className="flex items-center gap-2">
            <span className="rounded bg-red-600/20 p-2 ring-1 ring-red-600/30">
              <Car className="h-4 w-4 text-red-500" />
            </span>
            <span className="font-semibold">Redline</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/pngtree-futuristic-midengine-sports-car-on-sleek-black-background-3d-rendering-picture-image_5819473.jpg"
              alt="Special edition red supercar front three-quarter view"
              width={1080}
              height={720}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="space-y-5">
            <Badge className="border-0 bg-red-600 text-white">Special Edition</Badge>
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Apex RZ-1 Carbon Series</h1>
            <p className="text-neutral-300">
              Limited to 99 units worldwide. A road-legal track weapon engineered with a full carbon monocoque, adaptive
              aero, and next-gen hybrid boost.
            </p>

            <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-5">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-sm text-neutral-400">Starting price</div>
                  <div className="text-3xl font-extrabold text-white">$389,000</div>
                </div>
                <div className="inline-flex items-center gap-2 rounded-lg bg-red-600/15 px-3 py-1.5 text-red-200 ring-1 ring-red-600/30">
                  <DollarSign className="h-4 w-4" />
                  Show Week Offer
                </div>
              </div>
              <div className="mt-3 text-sm text-neutral-400">
                Includes carbon aero pack, forged wheels, and track calibration.
              </div>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a
                  href="tel:+12135551234"
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900/70 px-3 py-2 font-medium text-white hover:border-red-600/50 hover:bg-red-600/10"
                >
                  <Phone className="h-4 w-4 text-red-500" />
                  Call to Purchase
                </a>
                <a
                  href="https://wa.me/12135551234"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900/70 px-3 py-2 font-medium text-white hover:border-red-600/50 hover:bg-red-600/10"
                  aria-label="Open WhatsApp chat"
                >
                  <Share2 className="h-4 w-4 text-red-500" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Specs */}
            <div className="grid gap-3 sm:grid-cols-2">
              <Spec icon={<Gauge className="h-5 w-5 text-red-500" />} label="0–60 mph" value="2.7 s" />
              <Spec icon={<Zap className="h-5 w-5 text-red-500" />} label="Power" value="840 hp (hybrid)" />
              <Spec icon={<Timer className="h-5 w-5 text-red-500" />} label="Top Speed" value="215 mph" />
              <Spec icon={<Fuel className="h-5 w-5 text-red-500" />} label="Drivetrain" value="AWD torque-vectoring" />
              <Spec icon={<Settings className="h-5 w-5 text-red-500" />} label="Transmission" value="8‑spd DCT" />
              <Spec icon={<Car className="h-5 w-5 text-red-500" />} label="Chassis" value="Carbon monocoque" />
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="container mx-auto px-4 pb-8">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-white/10 bg-neutral-900/60">
            <CardContent className="space-y-2 p-5">
              <h3 className="text-lg font-semibold">Performance Package</h3>
              <ul className="list-disc space-y-1 pl-5 text-neutral-300">
                <li>Active aero with three-stage rear wing</li>
                <li>Carbon-ceramic brakes with 6‑piston calipers</li>
                <li>Adaptive magnetorheological damping</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-neutral-900/60">
            <CardContent className="space-y-2 p-5">
              <h3 className="text-lg font-semibold">Interior</h3>
              <ul className="list-disc space-y-1 pl-5 text-neutral-300">
                <li>Alcantara sport buckets with red contrast stitching</li>
                <li>Telemetry HUD and track lap recorder</li>
                <li>Forged carbon trim and titanium controls</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-white/10 bg-neutral-900/60">
            <CardContent className="space-y-2 p-5">
              <h3 className="text-lg font-semibold">Included</h3>
              <ul className="list-disc space-y-1 pl-5 text-neutral-300">
                <li>2‑year concierge service</li>
                <li>Track day with pro driver coaching</li>
                <li>Global covered transport</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery */}
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="border-0 bg-red-600 text-white">Gallery</Badge>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">Apex RZ-1 In Detail</h2>
          <p className="mt-2 text-neutral-300">Design close-ups and track-ready stance.</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <GalleryImage url="/images/BMW-i8-3.jpg" alt="Carbon fiber splitter macro" />
          <GalleryImage url="/images/20190225_bmw_i8_coupe.jpg" alt="Rear wing active aero close-up" />
          <GalleryImage url="/images/Modern_Luxury_1.jpg" alt="Alcantara interior with red stitching" />
          <GalleryImage url="/images/1FDF780E-789E-42C8-9C51-5B91D8FCD7D2.jpeg" alt="Engine bay hybrid system" />
          <GalleryImage url="/images/mercedes-benz-tridy-g-695103-L-3b1c66b91c52fba13b1c.jpg" alt="Side profile with track stance" />
          <GalleryImage url="/images/Neue-Sportwagen-2019-2020-2021-2022-und-2023-1200x800-e1e41e54610e1775.jpg" alt="Forged wheels with red calipers" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-sm text-neutral-400">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <p>© {new Date().getFullYear()} Redline Auto Show. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="tel:+12135551234" className="hover:text-white inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-red-500" />
              +1 (213) 555‑1234
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

function Spec({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-neutral-900/60 p-3">
      <div className="rounded-md bg-red-600/10 p-2 ring-1 ring-red-600/20">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-wide text-neutral-400">{label}</div>
        <div className="text-sm font-semibold text-white">{value}</div>
      </div>
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
