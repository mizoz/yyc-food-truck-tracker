'use client'

import { useEffect, useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { MapPin, Navigation, Filter, Clock, Star, X, AlertCircle } from 'lucide-react'
import { FOOD_TRUCKS, CUISINE_FILTERS, FoodTruck, formatTimeAgo, filterTrucksByCuisine } from '@/data/trucks'
import TruckCard from '@/components/TruckCard'
import PopularSection from '@/components/PopularSection'
import Header from '@/components/Header'

// Dynamic import for map (SSR issue with Leaflet)
const TruckMap = dynamic(() => import('@/components/TruckMap'), { ssr: false })

export default function Home() {
  const [selectedCuisine, setSelectedCuisine] = useState('all')
  const [showOpenOnly, setShowOpenOnly] = useState(false)
  const [trucks, setTrucks] = useState<FoodTruck[]>(FOOD_TRUCKS)
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [locationError, setLocationError] = useState<string | null>(null)
  const [showReportModal, setShowReportModal] = useState(false)
  const [selectedTruck, setSelectedTruck] = useState<FoodTruck | null>(null)
  const [isLocating, setIsLocating] = useState(false)

  // Simulate live location updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTrucks(prevTrucks => 
        prevTrucks.map(truck => {
          // Randomly move trucks slightly (simulating movement)
          const latOffset = (Math.random() - 0.5) * 0.001
          const lngOffset = (Math.random() - 0.5) * 0.001
          
          return {
            ...truck,
            lastSpotted: new Date(Date.now() - Math.random() * 1000 * 60 * 60),
            location: {
              ...truck.location,
              lat: truck.location.lat + latOffset,
              lng: truck.location.lng + lngOffset
            }
          }
        })
      )
    }, 30000) // Every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const filteredTrucks = trucks.filter(truck => {
    const matchesCuisine = selectedCuisine === 'all' || truck.cuisine === selectedCuisine
    const matchesOpen = !showOpenOnly || truck.isOpen
    return matchesCuisine && matchesOpen
  })

  const handleFindNearMe = useCallback(() => {
    setIsLocating(true)
    setLocationError(null)
    
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser')
      setIsLocating(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
        setIsLocating(false)
      },
      (error) => {
        setLocationError('Unable to get your location. Please enable location services.')
        setIsLocating(false)
      }
    )
  }, [])

  const handleReportLocation = () => {
    setShowReportModal(true)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-yellow-50 to-orange-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-8 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-6xl animate-bounce-slow">🌮</div>
          <div className="absolute top-20 right-20 text-5xl animate-pulse-slow">🚚</div>
          <div className="absolute bottom-10 left-1/4 text-4xl animate-wiggle">🍔</div>
          <div className="absolute top-1/2 right-10 text-5xl animate-bounce-slow">🌭</div>
          <div className="absolute bottom-20 right-1/3 text-4xl animate-pulse-slow">🍦</div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500 mb-4">
            YYC Food Truck Tracker
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            Find the best food trucks in Calgary! 🍽️ Track your favorites, discover new spots, and never miss a delicious meal on wheels.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            <button
              onClick={handleFindNearMe}
              disabled={isLocating}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Navigation className="w-5 h-5" />
              {isLocating ? 'Locating...' : 'Trucks Near Me'}
            </button>
            <button
              onClick={handleReportLocation}
              className="flex items-center gap-2 px-6 py-3 bg-white text-orange-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all border-2 border-orange-300"
            >
              <MapPin className="w-5 h-5" />
              Report Truck Location
            </button>
          </div>
          
          {locationError && (
            <div className="flex items-center gap-2 justify-center text-red-600 text-sm mb-4">
              <AlertCircle className="w-4 h-4" />
              {locationError}
            </div>
          )}
        </div>
      </section>

      {/* Popular This Week */}
      <PopularSection trucks={trucks.filter(t => t.popular)} />

      {/* Map Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <MapPin className="w-7 h-7 text-orange-500" />
            Live Truck Map 🗺️
          </h2>
          <div className="h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-200">
            <TruckMap trucks={filteredTrucks} userLocation={userLocation} onTruckClick={setSelectedTruck} />
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center gap-2">
              <Filter className="w-7 h-7 text-orange-500" />
              Find Your Perfect Truck 🚚
            </h2>
            
            {/* Open Now Toggle */}
            <button
              onClick={() => setShowOpenOnly(!showOpenOnly)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                showOpenOnly
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Clock className="w-4 h-4" />
              Open Now
              {showOpenOnly && ' ✅'}
            </button>
          </div>

          {/* Cuisine Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {CUISINE_FILTERS.map((cuisine) => (
              <button
                key={cuisine.id}
                onClick={() => setSelectedCuisine(cuisine.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                  selectedCuisine === cuisine.id
                    ? 'bg-orange-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-orange-100 shadow'
                }`}
              >
                {cuisine.emoji} {cuisine.label}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-gray-600 mb-4">
            Showing <span className="font-bold text-orange-600">{filteredTrucks.length}</span> food trucks
            {selectedCuisine !== 'all' && ` in ${CUISINE_FILTERS.find(c => c.id === selectedCuisine)?.label}`}
            {showOpenOnly && ' that are open now'}
          </p>

          {/* Truck Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTrucks.map((truck) => (
              <TruckCard key={truck.id} truck={truck} />
            ))}
          </div>

          {filteredTrucks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-6xl mb-4">🍔</p>
              <p className="text-xl text-gray-600">No trucks match your filters. Try broadening your search!</p>
            </div>
          )}
        </div>
      </section>

      {/* Report Location Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">📍 Report a Truck</h3>
              <button onClick={() => setShowReportModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-600 mb-4">
              Spotted a food truck? Help the community by reporting its location!
            </p>
            <div className="space-y-3">
              <select className="w-full p-3 border-2 border-orange-200 rounded-lg focus:border-orange-500 focus:outline-none">
                <option>Select a truck...</option>
                {FOOD_TRUCKS.map(truck => (
                  <option key={truck.id} value={truck.id}>{truck.cuisineEmoji} {truck.name}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Location (e.g., Stephen Avenue)"
                className="w-full p-3 border-2 border-orange-200 rounded-lg focus:border-orange-500 focus:outline-none"
              />
              <button
                onClick={() => {
                  alert('Thanks for reporting! 🎉 Your submission has been received.')
                  setShowReportModal(false)
                }}
                className="w-full py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                Submit Report 🚀
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-orange-600 text-white py-8 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl mb-2">🚚 🍔 🌮 🌭 🍦</p>
          <p className="text-lg font-semibold mb-2">YYC Food Truck Tracker</p>
          <p className="text-orange-200 text-sm">
            Made with ❤️ for Calgary&apos;s amazing food truck community
          </p>
          <p className="text-orange-300 text-xs mt-4">
            © {new Date().getFullYear()} YYC Food Truck Tracker | MIT License
          </p>
        </div>
      </footer>
    </main>
  )
}