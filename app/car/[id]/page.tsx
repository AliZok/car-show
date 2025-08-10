"use client"

import React from "react"
import { Car, ArrowLeft, Star, MapPin, Calendar, Users, Zap, Gauge } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Car data - in a real app this would come from an API
const cars = [
  {
    id: 1,
    name: "BMW i8 Coupe",
    brand: "BMW",
    price: "$147,500",
    image: "/images/20190225_bmw_i8_coupe.jpg",
    category: "Electric",
    specs: { power: "369 hp", acceleration: "4.4s", topSpeed: "155 mph" },
    description: "The BMW i8 is a plug-in hybrid sports car that combines futuristic design with cutting-edge technology. It features a lightweight carbon fiber body and an innovative hybrid powertrain that delivers both performance and efficiency.",
    features: ["Carbon Fiber Body", "Hybrid Powertrain", "Laser Headlights", "Digital Dashboard", "Eco Mode", "Sport Mode"],
    gallery: [
      "/images/20190225_bmw_i8_coupe.jpg",
      "/images/BMW-i8-3.jpg",
      "/images/c302e1b4e7f99d19f88939c3a2775f47.jpg"
    ]
  },
  {
    id: 2,
    name: "Mercedes G-Class",
    brand: "Mercedes-Benz",
    price: "$156,750",
    image: "/images/mercedes-benz-tridy-g-695103-L-3b1c66b91c52fba13b1c.jpg",
    category: "Luxury SUV",
    specs: { power: "416 hp", acceleration: "5.6s", topSpeed: "149 mph" },
    description: "The Mercedes-Benz G-Class is the ultimate luxury SUV that combines rugged off-road capability with premium comfort and sophisticated technology. Its iconic boxy design has remained largely unchanged for decades.",
    features: ["4MATIC All-Wheel Drive", "Adaptive Suspension", "Burmester Sound System", "Head-Up Display", "360° Camera", "Off-Road Package"],
    gallery: [
      "/images/mercedes-benz-tridy-g-695103-L-3b1c66b91c52fba13b1c.jpg",
      "/images/67400bf7fa0d2eb7e3ae6a3b2f2691c6.jpg"
    ]
  },
  {
    id: 3,
    name: "Futuristic Concept",
    brand: "Concept",
    price: "TBA",
    image: "/images/pngtree-futuristic-midengine-sports-car-on-sleek-black-background-3d-rendering-picture-image_5819473.jpg",
    category: "Concept",
    specs: { power: "800+ hp", acceleration: "2.5s", topSpeed: "220+ mph" },
    description: "This futuristic concept car represents the future of automotive design and technology. With its mid-engine layout and advanced aerodynamics, it pushes the boundaries of what's possible in automotive engineering.",
    features: ["Mid-Engine Layout", "Active Aerodynamics", "Autonomous Driving", "Electric Powertrain", "Gesture Controls", "Holographic Display"],
    gallery: [
      "/images/pngtree-futuristic-midengine-sports-car-on-sleek-black-background-3d-rendering-picture-image_5819473.jpg"
    ]
  },
  {
    id: 4,
    name: "Modern Luxury",
    brand: "Luxury",
    price: "$89,900",
    image: "/images/Modern_Luxury_1.jpg",
    category: "Luxury Sedan",
    specs: { power: "300 hp", acceleration: "6.2s", topSpeed: "130 mph" },
    description: "A sophisticated luxury sedan that offers the perfect balance of comfort, performance, and technology. Its elegant design and premium materials create an exceptional driving experience.",
    features: ["Premium Leather Interior", "Advanced Driver Assistance", "Panoramic Sunroof", "Premium Audio System", "Ambient Lighting", "Heated/Cooled Seats"],
    gallery: [
      "/images/Modern_Luxury_1.jpg"
    ]
  },
  {
    id: 5,
    name: "Sports Collection",
    brand: "Sports",
    price: "$125,000",
    image: "/images/Neue-Sportwagen-2019-2020-2021-2022-und-2023-1200x800-e1e41e54610e1775.jpg",
    category: "Sports Car",
    specs: { power: "450 hp", acceleration: "3.8s", topSpeed: "180 mph" },
    description: "A high-performance sports car designed for enthusiasts who demand the ultimate driving experience. Its aerodynamic design and powerful engine deliver exhilarating performance on both road and track.",
    features: ["Carbon Fiber Components", "Track Mode", "Launch Control", "Sport Exhaust", "Racing Seats", "Performance Tires"],
    gallery: [
      "/images/Neue-Sportwagen-2019-2020-2021-2022-und-2023-1200x800-e1e41e54610e1775.jpg"
    ]
  },
  {
    id: 6,
    name: "Classic Beauty",
    brand: "Classic",
    price: "$95,000",
    image: "/images/1FDF780E-789E-42C8-9C51-5B91D8FCD7D2.jpeg",
    category: "Classic",
    specs: { power: "350 hp", acceleration: "5.1s", topSpeed: "160 mph" },
    description: "A beautifully restored classic car that represents automotive history and craftsmanship. Its timeless design and mechanical simplicity offer a pure driving experience that modern cars can't replicate.",
    features: ["Handcrafted Interior", "Classic Styling", "Mechanical Simplicity", "Collector's Edition", "Restored Engine", "Vintage Wheels"],
    gallery: [
      "/images/1FDF780E-789E-42C8-9C51-5B91D8FCD7D2.jpeg"
    ]
  }
]

export default function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params)
  const car = cars.find(c => c.id === parseInt(id))
  
  if (!car) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-950 via-black to-red-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Car Not Found</h1>
          <Link href="/" className="text-red-400 hover:text-red-300">Back to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-950 via-black to-red-900 text-white">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.3),transparent)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(239,68,68,0.2),transparent)] animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-red-500/20">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-3 font-bold text-xl hover:scale-105 transition-transform duration-300">
            <div className="p-2 bg-red-600 rounded-lg animate-glow-red">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
              Elite Car Show
            </span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-red-200 hover:text-white transition-colors duration-300">
            <ArrowLeft className="w-5 h-5" />
            Back to Show
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Car Image */}
            <div className="relative animate-slide-in-left">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-red-600 text-white border-0 animate-pulse">
                    {car.category}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Car Info */}
            <div className="space-y-6 animate-slide-in-right">
              <div>
                <h1 className="text-5xl lg:text-6xl font-black mb-4 gradient-text-red">{car.name}</h1>
                <p className="text-2xl text-red-200 mb-2">{car.brand}</p>
                <div className="text-3xl font-bold text-white mb-6">{car.price}</div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">{car.description}</p>

                             {/* Specs Grid */}
               <div className="grid grid-cols-3 gap-4">
                 <div className="text-center p-4 bg-red-900/30 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-105">
                   <Zap className="w-8 h-8 text-red-400 mx-auto mb-2" />
                   <div className="text-xl font-bold">{car.specs.power}</div>
                   <div className="text-red-300 text-sm">Power</div>
                 </div>
                 <div className="text-center p-4 bg-red-900/30 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-105">
                   <Gauge className="w-8 h-8 text-red-400 mx-auto mb-2" />
                   <div className="text-xl font-bold">{car.specs.acceleration}</div>
                   <div className="text-red-300 text-sm">0-60</div>
                 </div>
                 <div className="text-center p-4 bg-red-900/30 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-105">
                   <Star className="w-8 h-8 text-red-400 mx-auto mb-2" />
                   <div className="text-xl font-bold">{car.specs.topSpeed}</div>
                   <div className="text-red-300 text-sm">Top Speed</div>
                 </div>
               </div>

              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-300">
                      <Star className="w-4 h-4 text-red-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {car.gallery.length > 1 && (
        <section className="py-16 bg-black/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {car.gallery.map((image, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                  <Image
                    src={image}
                    alt={`${car.name} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-black border-t border-red-500/20 py-12 text-center text-red-300">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Elite Car Show. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
