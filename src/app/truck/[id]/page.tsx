'use client'

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { MapPin, Star, Clock, ArrowLeft, Phone, Globe, DollarSign, ExternalLink, Share2, Heart } from 'lucide-react'
import { FOOD_TRUCKS, formatTimeAgo, FoodTruck } from '@/data/trucks'
import dynamic from 'next/dynamic'

const TruckMap = dynamic(() => import('@/components/TruckMap'), { ssr: false })

export default function TruckDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [truck, setTruck] = useState<FoodTruck | null>(null)
  const [isFavorite, setIsFavorite] = useState(false)
  const [showShareToast, setShowShareToast] = useState(false)

  useEffect(() => {
    const found = FOOD_TRUCKS.find(t => t.id === params.id)
    setTruck(found || null)
  }, [params.id])

  if (!truck) {
    return (
      <div className="min-h-screen bg-orange-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl mb-4">🚚💨</p>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Truck Not Found</h1>
          <p className="text-gray-600 mb-4">This truck might have driven away!</p>
          <Link href="/" className="text-orange-600 font-semibold hover:underline">
            ← Back to all trucks
          </Link>
        </div>
      </div>
    )
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    setShowShareToast(true)
    setTimeout(() => setShowShareToast(false), 2000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-yellow-50 to-orange-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 text-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-1 text-white/90 hover:text-white transition-colors mb-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-64 sm:h-80 bg-gradient-to-br from-orange-200 to-yellow-200">
        <img
          src={truck.imageUrl}
          alt={truck.name}
          className="w-full h-full object-cover opacity-90"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Status Badge */}
        <div className={`absolute top-4 right-4 px-4 py-2 rounded-full font-bold text-lg ${
          truck.isOpen ? 'bg-green-500 text-white' : 'bg-gray-600 text-white'
        }`}>
          {truck.isOpen ? '🟢 Open Now' : '🔴 Closed'}
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
                {truck.cuisineEmoji} {truck.name}
              </h1>
              <p className="text-white/90 text-lg capitalize">{truck.cuisine} cuisine</p>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-bold text-xl">{truck.rating}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-6">
        {/* Action Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={handleShare}
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-white rounded-xl shadow-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Share2 className="w-5 h-5" />
            Share
          </button>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl shadow-lg font-semibold transition-colors ${
              isFavorite 
                ? 'bg-red-500 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            {isFavorite ? 'Saved!' : 'Save'}
          </button>
        </div>

        {/* Share Toast */}
        {showShareToast && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg z-50">
            Link copied! 📋
          </div>
        )}

        {/* Quick Info */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-lg text-center">
            <DollarSign className="w-6 h-6 mx-auto text-orange-500 mb-1" />
            <p className="text-2xl font-bold text-gray-800">{truck.priceRange}</p>
            <p className="text-xs text-gray-500">Price Range</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg text-center">
            <Clock className="w-6 h-6 mx-auto text-orange-500 mb-1" />
            <p className="text-sm font-bold text-gray-800">{formatTimeAgo(truck.lastSpotted)}</p>
            <p className="text-xs text-gray-500">Last Spotted</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg text-center">
            <MapPin className="w-6 h-6 mx-auto text-orange-500 mb-1" />
            <p className="text-xs font-bold text-gray-800">Live</p>
            <p className="text-xs text-gray-500">Location</p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">About</h2>
          <p className="text-gray-600 leading-relaxed">{truck.description}</p>
        </div>

        {/* Contact */}
        {(truck.phone || truck.website) && (
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Contact</h2>
            <div className="flex flex-wrap gap-3">
              {truck.phone && (
                <a 
                  href={`tel:${truck.phone}`}
                  className="flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {truck.phone}
                </a>
              )}
              {truck.website && (
                <a 
                  href={truck.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  Website
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Location */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">📍 Current Location</h2>
          <p className="text-gray-600 mb-4">{truck.location.address}</p>
          <div className="h-64 rounded-xl overflow-hidden">
            <TruckMap trucks={[truck]} userLocation={null} />
          </div>
        </div>

        {/* Menu */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">🍽️ Menu</h2>
          <div className="space-y-4">
            {truck.menu.map((item, index) => (
              <div 
                key={index}
                className={`p-4 rounded-xl ${
                  item.popular 
                    ? 'bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200' 
                    : 'bg-gray-50'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-gray-800">{item.name}</h3>
                      {item.popular && (
                        <span className="px-2 py-0.5 bg-orange-500 text-white text-xs font-semibold rounded-full">
                          🔥 Popular
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                  <span className="text-lg font-bold text-orange-600 ml-4">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back to All Trucks */}
        <div className="text-center pb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            Find More Trucks
          </Link>
        </div>
      </section>
    </main>
  )
}