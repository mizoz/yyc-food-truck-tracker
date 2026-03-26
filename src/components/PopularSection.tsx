'use client'

import { FoodTruck } from '@/data/trucks'
import TruckCard from './TruckCard'
import { TrendingUp } from 'lucide-react'

interface Props {
  trucks: FoodTruck[]
}

export default function PopularSection({ trucks }: Props) {
  if (trucks.length === 0) return null

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6 bg-gradient-to-r from-orange-100 to-yellow-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 flex items-center gap-2">
          <TrendingUp className="w-7 h-7 text-orange-500" />
          Popular This Week 🔥
        </h2>
        <p className="text-gray-600 mb-6">
          The hottest trucks Calgary can&apos;t stop talking about!
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trucks.slice(0, 4).map((truck) => (
            <TruckCard key={truck.id} truck={truck} />
          ))}
        </div>
      </div>
    </section>
  )
}