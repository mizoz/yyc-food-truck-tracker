'use client'

import { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { FoodTruck } from '@/data/trucks'
import Link from 'next/link'

// Custom truck icon
const createTruckIcon = (emoji: string, isOpen: boolean) => {
  return L.divIcon({
    className: 'custom-truck-icon',
    html: `
      <div style="
        background: ${isOpen ? '#22c55e' : '#ef4444'};
        width: 40px;
        height: 40px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        border: 3px solid white;
      ">
        <span style="transform: rotate(45deg); font-size: 18px;">${emoji}</span>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  })
}

const userIcon = L.divIcon({
  className: 'user-location-icon',
  html: `
    <div style="
      background: #3b82f6;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 8px rgba(59, 130, 246, 0.5);
    "></div>
  `,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
})

interface Props {
  trucks: FoodTruck[]
  userLocation: { lat: number; lng: number } | null
  onTruckClick?: (truck: FoodTruck) => void
}

function MapController({ userLocation }: { userLocation: { lat: number; lng: number } | null }) {
  const map = useMap()
  
  useEffect(() => {
    if (userLocation) {
      map.flyTo([userLocation.lat, userLocation.lng], 14, {
        duration: 1.5
      })
    }
  }, [userLocation, map])

  return null
}

export default function TruckMap({ trucks, userLocation, onTruckClick }: Props) {
  const mapRef = useRef<L.Map | null>(null)

  // Calgary center
  const center: [number, number] = [51.0447, -114.0719]

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <MapController userLocation={userLocation} />

      {/* User Location Marker */}
      {userLocation && (
        <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
          <Popup>
            <div className="text-center">
              <p className="font-bold text-blue-600">📍 You are here!</p>
            </div>
          </Popup>
        </Marker>
      )}

      {/* Truck Markers */}
      {trucks.map((truck) => (
        <Marker
          key={truck.id}
          position={[truck.location.lat, truck.location.lng]}
          icon={createTruckIcon(truck.cuisineEmoji, truck.isOpen)}
        >
          <Popup>
            <div className="min-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{truck.cuisineEmoji}</span>
                <div>
                  <h3 className="font-bold text-gray-800">{truck.name}</h3>
                  <p className="text-xs text-gray-500 capitalize">{truck.cuisine}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm mb-1">
                <span className={truck.isOpen ? 'text-green-600' : 'text-red-600'}>
                  {truck.isOpen ? '🟢 Open' : '🔴 Closed'}
                </span>
                <span className="text-yellow-500">⭐ {truck.rating}</span>
                <span className="text-orange-600">{truck.priceRange}</span>
              </div>
              <p className="text-xs text-gray-600 mb-2">{truck.location.address}</p>
              <Link 
                href={`/truck/${truck.id}`}
                className="block w-full text-center py-2 bg-orange-500 text-white rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors"
              >
                View Menu →
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}