'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Star, Clock, DollarSign, ChevronRight, ExternalLink, Phone, Globe } from 'lucide-react'
import { FoodTruck, formatTimeAgo } from '@/data/trucks'

interface Props {
  truck: FoodTruck
}

export default function TruckCard({ truck }: Props) {
  const [imageError, setImageError] = useState(false)

  const fallbackEmoji = truck.cuisineEmoji || '🍽️'

  return (
    <Link href={`/truck/${truck.id}`}>
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-48 bg-gradient-to-br from-orange-100 to-yellow-100">
          {!imageError ? (
            <img
              src={truck.imageUrl}
              alt={truck.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-7xl">
              {fallbackEmoji}
            </div>
          )}
          
          {/* Status Badge */}
          <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-semibold ${
            truck.isOpen 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-500 text-white'
          }`}>
            {truck.isOpen ? '🟢 Open Now' : '🔴 Closed'}
          </div>

          {/* Popular Badge */}
          {truck.popular && (
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-semibold bg-orange-500 text-white animate-pulse">
              🔥 Popular
            </div>
          )}

          {/* Price Range */}
          <div className="absolute bottom-3 right-3 px-2 py-1 rounded-full text-sm font-medium bg-white/90 text-orange-600">
            {truck.priceRange}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Header */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
              {truck.cuisineEmoji} {truck.name}
            </h3>
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-semibold">{truck.rating}</span>
            </div>
          </div>

          {/* Cuisine */}
          <p className="text-sm text-gray-500 mb-2 capitalize">
            {truck.cuisine} cuisine
          </p>

          {/* Description */}
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
            {truck.description}
          </p>

          {/* Location & Time */}
          <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
            <MapPin className="w-3 h-3 text-orange-500" />
            <span className="truncate">{truck.location.address}</span>
          </div>

          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Clock className="w-3 h-3 text-orange-500" />
            <span>Last spotted: {formatTimeAgo(truck.lastSpotted)}</span>
          </div>

          {/* View Details Arrow */}
          <div className="flex items-center justify-end mt-3 text-orange-500 text-sm font-medium group-hover:text-orange-600">
            View Menu <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}