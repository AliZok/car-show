"use client"

import React from "react"
import { Car, MapPin, Phone, Instagram, Facebook, Twitter, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"



// Car data for the show
const cars = [
  {
    id: 1,
    name: "BMW i8 Coupe",
    brand: "BMW",
    price: "$147,500",
    image: "/images/20190225_bmw_i8_coupe.jpg",
    category: "Electric",
    specs: { power: "369 hp", acceleration: "4.4s", topSpeed: "155 mph" }
  },
  {
    id: 2,
    name: "Mercedes G-Class",
    brand: "Mercedes-Benz",
    price: "$156,750",
    image: "/images/mercedes-benz-tridy-g-695103-L-3b1c66b91c52fba13b1c.jpg",
    category: "Luxury SUV",
    specs: { power: "416 hp", acceleration: "5.6s", topSpeed: "149 mph" }
  },
  {
    id: 3,
    name: "Futuristic Concept",
    brand: "Concept",
    price: "TBA",
    image: "/images/pngtree-futuristic-midengine-sports-car-on-sleek-black-background-3d-rendering-picture-image_5819473.jpg",
    category: "Concept",
    specs: { power: "800+ hp", acceleration: "2.5s", topSpeed: "220+ mph" }
  },
  {
    id: 4,
    name: "Modern Luxury",
    brand: "Luxury",
    price: "$89,900",
    image: "/images/Modern_Luxury_1.jpg",
    category: "Luxury Sedan",
    specs: { power: "300 hp", acceleration: "6.2s", topSpeed: "130 mph" }
  },
  {
    id: 5,
    name: "Sports Collection",
    brand: "Sports",
    price: "$125,000",
    image: "/images/Neue-Sportwagen-2019-2020-2021-2022-und-2023-1200x800-e1e41e54610e1775.jpg",
    category: "Sports Car",
    specs: { power: "450 hp", acceleration: "3.8s", topSpeed: "180 mph" }
  },
  {
    id: 6,
    name: "Classic Beauty",
    brand: "Classic",
    price: "$95,000",
    image: "/images/1FDF780E-789E-42C8-9C51-5B91D8FCD7D2.jpeg",
    category: "Classic",
    specs: { power: "350 hp", acceleration: "5.1s", topSpeed: "160 mph" }
  }
]

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#7a0015] via-black to-[#940019] text-white">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(148,0,25,0.3),transparent)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(148,0,25,0.2),transparent)] animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <Header />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/maxresdefault.jpg"
            alt="Luxury Car Background"
            fill
            className="object-cover filter grayscale brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#7a0015]/80 via-black/70 to-[#940019]/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <div className="animate-fade-in-up">
            <Badge className="bg-[#940019] hover:bg-[#b3001f] text-white border-0 mb-8 text-sm font-medium px-4 py-2 animate-bounce">
              June 15-17, 2025
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 drop-shadow-2xl">
              Elite Car Show
            </h1>
            <p className="text-xl md:text-2xl text-[#b3001f] mb-12 max-w-2xl mx-auto font-light drop-shadow-lg">
              Where luxury meets innovation
            </p>
          </div>
        </div>
      </section>

      {/* Car Carousel Section */}
      <section id="cars" className="h-screen bg-black text-white relative">
        <div className="absolute inset-0">
          <Carousel cars={cars} />
        </div>
      </section>

      {/* Event Info */}
      <section id="info" className="py-24 bg-gradient-to-br from-[#7a0015] to-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <h2 className="text-5xl font-black mb-8">Event Details</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-[#940019]/30 rounded-lg border border-[#940019]/20 hover:border-[#940019]/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#940019]/25">
                  <MapPin className="w-6 h-6 text-[#940019]" />
                  <div>
                    <div className="font-medium text-lg">Los Angeles Convention Center</div>
                    <div className="text-[#b3001f]">1201 S Figueroa St, Los Angeles, CA</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#940019]/30 rounded-lg border border-[#940019]/20 hover:border-[#940019]/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#940019]/25">
                  <Phone className="w-6 h-6 text-[#940019]" />
                  <div>
                    <div className="font-medium text-lg">Contact & Tickets</div>
                    <div className="text-[#b3001f]">+1 (213) 555-0123</div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a href="https://instagram.com" className="p-3 bg-[#940019]/20 rounded-lg hover:bg-[#940019]/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#940019]/25">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://facebook.com" className="p-3 bg-[#940019]/20 rounded-lg hover:bg-[#940019]/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#940019]/25">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://twitter.com" className="p-3 bg-[#940019]/20 rounded-lg hover:bg-[#940019]/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#940019]/25">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <Image
                src="/images/mixcollage-21-oct-2024-10-45-am-6299.avif"
                alt="LA Convention Center"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-black to-[#940019] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-8">Contact Us</h2>
            <p className="text-xl text-[#b3001f] max-w-2xl mx-auto">
              Get in touch with us for any questions about the Elite Car Show
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-6 bg-[#940019]/30 rounded-lg border border-[#940019]/20 hover:border-[#940019]/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#940019]/25">
                  <MapPin className="w-8 h-8 text-[#940019]" />
                  <div>
                    <div className="font-medium text-xl">Location</div>
                    <div className="text-[#b3001f]">Los Angeles Convention Center</div>
                    <div className="text-[#b3001f]">1201 S Figueroa St, Los Angeles, CA</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-6 bg-[#940019]/30 rounded-lg border border-[#940019]/20 hover:border-[#940019]/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#940019]/25">
                  <Phone className="w-8 h-8 text-[#940019]" />
                  <div>
                    <div className="font-medium text-xl">Phone</div>
                    <div className="text-[#b3001f]">+1 (213) 555-0123</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-6 bg-[#940019]/30 rounded-lg border border-[#940019]/20 hover:border-[#940019]/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#940019]/25">
                  <div className="w-8 h-8 text-[#940019] flex items-center justify-center">
                    <span className="text-2xl">✉</span>
                  </div>
                  <div>
                    <div className="font-medium text-xl">Email</div>
                    <div className="text-[#b3001f]">info@elitecarshow.com</div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a href="https://instagram.com" className="p-4 bg-[#940019]/20 rounded-lg hover:bg-[#940019]/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#940019]/25">
                  <Instagram className="w-8 h-8" />
                </a>
                <a href="https://facebook.com" className="p-4 bg-[#940019]/20 rounded-lg hover:bg-[#940019]/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#940019]/25">
                  <Facebook className="w-8 h-8" />
                </a>
                <a href="https://twitter.com" className="p-4 bg-[#940019]/20 rounded-lg hover:bg-[#940019]/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#940019]/25">
                  <Twitter className="w-8 h-8" />
                </a>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <Image
                src="/images/c302e1b4e7f99d19f88939c3a2775f47.jpg"
                alt="Contact Us"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function Carousel({ cars }: { cars: Array<{
  id: number;
  name: string;
  brand: string;
  price: string;
  image: string;
  category: string;
  specs: { power: string; acceleration: string; topSpeed: string };
}> }) {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true)

  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cars.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, cars.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cars.length)
    // Pause auto-play temporarily when manually navigating
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10 seconds
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cars.length) % cars.length)
    // Pause auto-play temporarily when manually navigating
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10 seconds
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    // Pause auto-play temporarily when manually navigating
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10 seconds
  }

  return (
    <div className="relative w-full h-full">
      {/* Carousel Container */}
      <div className="relative w-full h-full overflow-hidden">
        {cars.map((car, index) => (
          <div
            key={car.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0 scale-100'
                : index < currentSlide
                ? 'opacity-0 -translate-x-full scale-95'
                : 'opacity-0 translate-x-full scale-95'
            }`}
          >
            <div className="relative h-full w-full">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Slide Title and Content */}
              <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                <div className={`transition-all duration-1000 delay-300 ${
                  index === currentSlide ? 'animate-slide-up' : 'opacity-0 translate-y-10'
                }`}>
                  <Badge className="bg-[#940019] text-white border-0 mb-6 text-sm animate-pulse">
                    {car.category}
                  </Badge>
                  <h3 className="text-5xl md:text-7xl font-black mb-4 text-shadow-lg">{car.name}</h3>
                  <p className="text-2xl md:text-3xl text-[#b3001f] mb-6 font-light">{car.brand}</p>
                  <div className="text-3xl font-bold mb-8">{car.price}</div>
                  
                  {/* Car Specs */}
                  <div className="grid grid-cols-3 gap-6 max-w-md">
                    <div className="text-center p-4 bg-[#940019]/50 rounded-lg backdrop-blur-sm border border-[#940019]/30 hover:border-[#940019]/60 transition-all duration-300 hover:scale-105">
                      <div className="text-xl font-bold">{car.specs.power}</div>
                      <div className="text-[#b3001f] text-sm">Power</div>
                    </div>
                    <div className="text-center p-4 bg-[#940019]/50 rounded-lg backdrop-blur-sm border border-[#940019]/30 hover:border-[#940019]/60 transition-all duration-300 hover:scale-105">
                      <div className="text-xl font-bold">{car.specs.acceleration}</div>
                      <div className="text-[#b3001f] text-sm">0-60</div>
                    </div>
                    <div className="text-center p-4 bg-[#940019]/50 rounded-lg backdrop-blur-sm border border-[#940019]/30 hover:border-[#940019]/60 transition-all duration-300 hover:scale-105">
                      <div className="text-xl font-bold">{car.specs.topSpeed}</div>
                      <div className="text-[#b3001f] text-sm">Top Speed</div>
                    </div>
                  </div>
                  
                  {/* View Details Button */}
                  <a 
                    href={`/car/${car.id}`}
                    className="inline-block mt-8 bg-[#940019] hover:bg-[#b3001f] text-white py-4 px-8 rounded-lg text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#940019]/50"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm text-white p-4 rounded-full hover:bg-black/60 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-[#940019]/50 z-10"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm text-white p-4 rounded-full hover:bg-black/60 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-[#940019]/50 z-10"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-4 z-10">
        {cars.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[#940019] scale-125 shadow-lg shadow-[#940019]/50' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-8 right-8 z-10">
        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
          isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-500'
        }`} title={isAutoPlaying ? 'Auto-playing' : 'Auto-play paused'}></div>
      </div>
    </div>
  )
}

function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-[#940019]/20">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <a href="#" onClick={() => scrollToSection('home')} className="flex items-center gap-3 font-bold text-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
          <div className="p-2 bg-[#940019] rounded-lg animate-glow">
            <Car className="h-6 w-6 text-white" />
          </div>
          <span className="bg-gradient-to-r from-white to-[#b3001f] bg-clip-text text-transparent">
            Elite Car Show
          </span>
        </a>
        <nav>
          <ul className="flex items-center gap-8 text-[#b3001f]">
            <li><a onClick={() => scrollToSection('cars')} className="hover:text-white transition-colors duration-300 hover:scale-105 inline-block cursor-pointer">Cars</a></li>
            <li><a onClick={() => scrollToSection('info')} className="hover:text-white transition-colors duration-300 hover:scale-105 inline-block cursor-pointer">Info</a></li>
            <li><a onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors duration-300 hover:scale-105 inline-block cursor-pointer">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-black border-t border-[#940019]/20 py-12 text-center text-[#b3001f]">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} Elite Car Show. All rights reserved.</p>
      </div>
    </footer>
  )
}
