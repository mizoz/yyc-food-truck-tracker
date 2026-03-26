import { Truck, MapPin, Clock, Star, DollarSign } from 'lucide-react'

export interface FoodTruck {
  id: string
  name: string
  cuisine: string
  cuisineEmoji: string
  description: string
  rating: number
  priceRange: string
  isOpen: boolean
  lastSpotted: Date
  location: {
    lat: number
    lng: number
    address: string
  }
  menu: MenuItem[]
  imageUrl: string
  popular: boolean
  phone?: string
  website?: string
}

export interface MenuItem {
  name: string
  description: string
  price: string
  popular?: boolean
}

export interface CuisineFilter {
  id: string
  label: string
  emoji: string
}

export const CUISINE_FILTERS: CuisineFilter[] = [
  { id: 'all', label: 'All', emoji: '🍽️' },
  { id: 'tacos', label: 'Tacos', emoji: '🌮' },
  { id: 'burgers', label: 'Burgers', emoji: '🍔' },
  { id: 'asian', label: 'Asian', emoji: '🥡' },
  { id: 'desserts', label: 'Desserts', emoji: '🍦' },
  { id: 'sandwiches', label: 'Sandwiches', emoji: '🥪' },
  { id: 'ukrainian', label: 'Ukrainian', emoji: '🥟' },
  { id: 'indian', label: 'Indian', emoji: '🍛' },
]

export const FOOD_TRUCKS: FoodTruck[] = [
  {
    id: 'the-naked-ninja',
    name: 'The Naked Ninja',
    cuisine: 'asian',
    cuisineEmoji: '🍜',
    description: 'Asian fusion street food with bold flavors and fresh ingredients. Famous for their ninja-style noodles and secret sauces!',
    rating: 4.8,
    priceRange: '$$',
    isOpen: true,
    lastSpotted: new Date(Date.now() - 1000 * 60 * 30), // 30 mins ago
    location: {
      lat: 51.0454,
      lng: -114.0715,
      address: 'Stephen Avenue Walk, Downtown Calgary'
    },
    menu: [
      { name: 'Ninja Noodles', description: 'Wok-fried noodles with secret ninja sauce', price: '$14.99', popular: true },
      { name: 'Dragon Rice Bowl', description: 'Steamed rice with teriyaki chicken and veggies', price: '$12.99' },
      { name: 'Sumo Salad', description: 'Fresh Asian salad with sesame ginger dressing', price: '$9.99' },
      { name: 'Ninja Tacos', description: 'Fusion tacos with Korean BBQ beef', price: '$11.99', popular: true },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
    popular: true,
    phone: '(403) 555-0123',
    website: 'https://nakedninja.ca'
  },
  {
    id: 'burger-420',
    name: 'Burger 420',
    cuisine: 'burgers',
    cuisineEmoji: '🍔',
    description: 'Calgary\'s favorite burger joint on wheels! Huge patties, creative toppings, and the best loaded fries in town.',
    rating: 4.9,
    priceRange: '$$',
    isOpen: true,
    lastSpotted: new Date(Date.now() - 1000 * 60 * 15), // 15 mins ago
    location: {
      lat: 51.0378,
      lng: -114.0804,
      address: 'Kensington Village, NW Calgary'
    },
    menu: [
      { name: 'The Classic 420', description: 'Double patty with special sauce, lettuce, cheese, pickles, onions', price: '$15.99', popular: true },
      { name: 'Bacon Blitz', description: 'Triple bacon, cheddar, crispy onions', price: '$17.99' },
      { name: 'Loaded Fries', description: 'Fries topped with cheese, bacon, sour cream', price: '$12.99', popular: true },
      { name: 'Veggie Stack', description: 'Beyond burger with all the fixings', price: '$14.99' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    popular: true,
    phone: '(403) 555-0456',
  },
  {
    id: 'nomad-street-food',
    name: 'Nomad Street Food',
    cuisine: 'tacos',
    cuisineEmoji: '🌮',
    description: 'Wandering kitchen serving up globally-inspired street tacos. New locations, same amazing flavors!',
    rating: 4.7,
    priceRange: '$',
    isOpen: true,
    lastSpotted: new Date(Date.now() - 1000 * 60 * 45), // 45 mins ago
    location: {
      lat: 51.0501,
      lng: -114.0851,
      address: 'East Village, Calgary'
    },
    menu: [
      { name: 'Korean BBQ Tacos', description: 'Marinated beef, kimchi slaw, sesame', price: '$10.99', popular: true },
      { name: 'Fish Tacos', description: 'Beer-battered cod, lime crema, cabbage', price: '$11.99' },
      { name: 'Elote Side', description: 'Mexican street corn with cotija cheese', price: '$5.99', popular: true },
      { name: 'Churros', description: 'Cinnamon sugar churros with chocolate sauce', price: '$6.99' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop',
    popular: true,
    phone: '(403) 555-0789',
    website: 'https://nomadstreetfood.ca'
  },
  {
    id: 'butcher-and-the-baker',
    name: 'Butcher and The Baker',
    cuisine: 'sandwiches',
    cuisineEmoji: '🥪',
    description: 'Artisan sandwiches made with house-cured meats and freshly baked bread. A Calgary staple!',
    rating: 4.6,
    priceRange: '$$',
    isOpen: true,
    lastSpotted: new Date(Date.now() - 1000 * 60 * 20), // 20 mins ago
    location: {
      lat: 51.0411,
      lng: -114.0419,
      address: 'Inglewood, SE Calgary'
    },
    menu: [
      { name: 'The Butcher', description: 'Roast beef, horseradish cream, caramelized onions', price: '$14.99', popular: true },
      { name: 'The Baker', description: 'Turkey, avocado, sprouts, herbed mayo', price: '$13.99' },
      { name: 'Pulled Pork Special', description: 'Slow-cooked pork, coleslaw, BBQ sauce', price: '$12.99' },
      { name: 'Daily Soup', description: 'Ask about today\'s fresh soup!', price: '$7.99' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&h=300&fit=crop',
    popular: false,
    phone: '(403) 555-0234',
  },
  {
    id: 'fiasco-gelato',
    name: 'Fiasco Gelato',
    cuisine: 'desserts',
    cuisineEmoji: '🍦',
    description: 'Authentic Italian gelato made fresh daily. The perfect sweet treat on a hot Calgary day!',
    rating: 4.9,
    priceRange: '$',
    isOpen: true,
    lastSpotted: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
    location: {
      lat: 51.0493,
      lng: -114.0678,
      address: 'Beltline District, Calgary'
    },
    menu: [
      { name: 'Stracciatella', description: 'Classic Italian chocolate chip gelato', price: '$6.99', popular: true },
      { name: 'Salted Caramel', description: 'Rich caramel with Himalayan pink salt', price: '$6.99' },
      { name: 'Lemon Basil', description: 'Refreshing and unique flavor combo', price: '$6.99' },
      { name: 'Affogato', description: 'Gelato drowned in fresh espresso', price: '$8.99', popular: true },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?w=400&h=300&fit=crop',
    popular: true,
    phone: '(403) 555-0567',
    website: 'https://fiascogelato.ca'
  },
  {
    id: 'the-dog-house',
    name: 'The Dog House',
    cuisine: 'burgers',
    cuisineEmoji: '🌭',
    description: 'Gourmet hot dogs and sausages with outrageous toppings. The wildest dogs in YYC!',
    rating: 4.5,
    priceRange: '$',
    isOpen: false,
    lastSpotted: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
    location: {
      lat: 51.0764,
      lng: -114.1278,
      address: 'Brentwood Village, NW Calgary'
    },
    menu: [
      { name: 'The Calgary Stampeder', description: 'All-beef dog, chili, cheese, onions', price: '$9.99', popular: true },
      { name: 'Chicago Style', description: 'Mustard, neon green relish, onions, tomatoes, pickle, peppers', price: '$10.99' },
      { name: 'The Reuben Dog', description: 'Sauerkraut, Swiss cheese, Russian dressing', price: '$11.99' },
      { name: 'Loaded Nacho Dog', description: 'Cheese sauce, jalapeños, sour cream, tortilla chips', price: '$10.99', popular: true },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1612392062422-ef19b42f74df?w=400&h=300&fit=crop',
    popular: false,
    phone: '(403) 555-0890',
  },
  {
    id: 'sidewalk-citizen',
    name: 'Sidewalk Citizen',
    cuisine: 'sandwiches',
    cuisineEmoji: '🥖',
    description: 'Fresh-baked bread, seasonal ingredients, and a commitment to local. The best lunch in town!',
    rating: 4.7,
    priceRange: '$$',
    isOpen: true,
    lastSpotted: new Date(Date.now() - 1000 * 60 * 10), // 10 mins ago
    location: {
      lat: 51.0454,
      lng: -114.0578,
      address: 'Bridgeland, NE Calgary'
    },
    menu: [
      { name: 'Falafel Wrap', description: 'House-made falafel, hummus, pickled veggies, tahini', price: '$13.99', popular: true },
      { name: 'Grilled Cheese Deluxe', description: 'Three cheese blend on sourdough', price: '$10.99' },
      { name: 'Roasted Veggie Sandwich', description: 'Seasonal vegetables, pesto, goat cheese', price: '$12.99' },
      { name: 'Fresh Baked Focaccia', description: 'Warm focaccia with olive oil dip', price: '$5.99', popular: true },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
    popular: true,
    website: 'https://sidewalkcitizen.com'
  },
  {
    id: 'taste-of-ukraine',
    name: 'A Taste of Ukraine',
    cuisine: 'ukrainian',
    cuisineEmoji: '🥟',
    description: 'Homemade perogies, cabbage rolls, and comfort food from the heart of Ukraine!',
    rating: 4.8,
    priceRange: '$',
    isOpen: true,
    lastSpotted: new Date(Date.now() - 1000 * 60 * 25), // 25 mins ago
    location: {
      lat: 51.0390,
      lng: -114.0345,
      address: 'Forest Lawn, SE Calgary'
    },
    menu: [
      { name: 'Classic Perogies (12)', description: 'Potato and cheese, served with sour cream', price: '$11.99', popular: true },
      { name: 'Cabbage Rolls', description: 'Traditional holubtsi with tomato sauce', price: '$10.99' },
      { name: 'Borscht', description: 'Hearty beet soup with dill', price: '$6.99' },
      { name: 'Poutine Perogy', description: 'Perogies topped with gravy and cheese curds', price: '$13.99', popular: true },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
    popular: false,
    phone: '(403) 555-0111',
  },
  {
    id: 'naaco-truck',
    name: 'Naaco Truck',
    cuisine: 'indian',
    cuisineEmoji: '🍛',
    description: 'Authentic Indian street food with a modern twist. Butter chicken naaco wraps are legendary!',
    rating: 4.6,
    priceRange: '$',
    isOpen: true,
    lastSpotted: new Date(Date.now() - 1000 * 60 * 40), // 40 mins ago
    location: {
      lat: 51.0489,
      lng: -114.0912,
      address: 'Mission District, SW Calgary'
    },
    menu: [
      { name: 'Butter Chicken Naaco', description: 'Butter chicken in a crispy naan taco', price: '$12.99', popular: true },
      { name: 'Tandoori Chicken Wrap', description: 'Marinated chicken, mint chutney, pickled onions', price: '$11.99' },
      { name: 'Samosa Chaat', description: 'Crispy samosa with chickpeas, yogurt, chutneys', price: '$8.99' },
      { name: 'Mango Lassi', description: 'Sweet mango yogurt drink', price: '$4.99', popular: true },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
    popular: true,
    website: 'https://naacotruck.ca'
  },
  {
    id: 'bacon-bandits',
    name: 'Bacon Bandits',
    cuisine: 'burgers',
    cuisineEmoji: '🥓',
    description: 'Everything is better with bacon! Breakfast all day and bacon-topped everything.',
    rating: 4.4,
    priceRange: '$$',
    isOpen: true,
    lastSpotted: new Date(Date.now() - 1000 * 60 * 5), // 5 mins ago
    location: {
      lat: 51.0512,
      lng: -114.0789,
      address: 'Marda Loop, SW Calgary'
    },
    menu: [
      { name: 'The Heist', description: 'Triple bacon burger with bacon jam and crispy bacon strips', price: '$16.99', popular: true },
      { name: 'Breakfast Burger', description: 'Fried egg, bacon, cheese, hashbrown', price: '$14.99' },
      { name: 'Bacon Poutine', description: 'Fries, gravy, cheese curds, bacon bits', price: '$13.99', popular: true },
      { name: 'Bacon Donut', description: 'Maple bacon glazed donut', price: '$5.99' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop',
    popular: false,
    phone: '(403) 555-0222',
  },
  {
    id: 'perogy-boyz',
    name: 'Perogy Boyz',
    cuisine: 'ukrainian',
    cuisineEmoji: '🥟',
    description: 'Handmade perogies with creative fillings. The ultimate comfort food experience!',
    rating: 4.9,
    priceRange: '$',
    isOpen: true,
    lastSpotted: new Date(Date.now() - 1000 * 60 * 35), // 35 mins ago
    location: {
      lat: 51.0821,
      lng: -114.1345,
      address: 'University District, NW Calgary'
    },
    menu: [
      { name: 'Classic Potato & Cheese', description: 'The OG perogy, perfectly pinched', price: '$10.99', popular: true },
      { name: 'Buffalo Chicken Perogy', description: 'Spicy buffalo chicken with blue cheese dip', price: '$12.99' },
      { name: 'Perogy Poutine', description: 'Perogies topped with gravy and cheese curds', price: '$14.99', popular: true },
      { name: 'Cabbage Roll Plate', description: 'Two cabbage rolls with mashed potatoes', price: '$11.99' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop',
    popular: true,
    phone: '(403) 555-0333',
    website: 'https://perogyboyz.ca'
  },
  {
    id: 'los-compadres',
    name: 'Los Compadres',
    cuisine: 'tacos',
    cuisineEmoji: '🌮',
    description: 'Authentic Mexican street tacos made with love. Abuela\'s recipes, Calgary fresh!',
    rating: 4.7,
    priceRange: '$',
    isOpen: true,
    lastSpotted: new Date(Date.now() - 1000 * 60 * 50), // 50 mins ago
    location: {
      lat: 51.0367,
      lng: -114.0234,
      address: 'Ramsey, SE Calgary'
    },
    menu: [
      { name: 'Carne Asada Tacos (3)', description: 'Grilled steak, onions, cilantro, lime', price: '$10.99', popular: true },
      { name: 'Al Pastor Tacos (3)', description: 'Marinated pork with pineapple', price: '$10.99' },
      { name: 'Street Corn', description: 'Elote with mayo, cheese, chili powder', price: '$5.99', popular: true },
      { name: 'Horchata', description: 'Traditional rice drink', price: '$3.99' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop',
    popular: true,
    phone: '(403) 555-0444',
  },
  {
    id: 'alley-burger',
    name: 'Alley Burger',
    cuisine: 'burgers',
    cuisineEmoji: '🍔',
    description: 'Hidden gem serving smash burgers in secret locations. Follow them on social for today\'s spot!',
    rating: 4.8,
    priceRange: '$$',
    isOpen: true,
    lastSpotted: new Date(Date.now() - 1000 * 60 * 55), // 55 mins ago
    location: {
      lat: 51.0445,
      lng: -114.0689,
      address: 'Downtown Alley (check Instagram for exact location)'
    },
    menu: [
      { name: 'The Smash', description: 'Double smash patty, American cheese, special sauce', price: '$13.99', popular: true },
      { name: 'The Alley Classic', description: 'Lettuce, tomato, onion, pickles, house sauce', price: '$12.99' },
      { name: 'Loaded Smash Fries', description: 'Fries topped with burger meat, cheese, sauce', price: '$11.99', popular: true },
      { name: 'Secret Menu Item', description: 'Ask for "The Shadow" if you dare', price: '$15.99' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop',
    popular: true,
    website: 'https://alleyburger.ca'
  },
  {
    id: 'jelly-modern-doughnuts',
    name: 'Jelly Modern Doughnuts',
    cuisine: 'desserts',
    cuisineEmoji: '🍩',
    description: 'Gourmet doughnuts with crazy flavors. From maple bacon to s\'mores - treat yourself!',
    rating: 4.6,
    priceRange: '$',
    isOpen: true,
    lastSpotted: new Date(Date.now() - 1000 * 60 * 70), // 1h 10 mins ago
    location: {
      lat: 51.0423,
      lng: -114.0567,
      address: 'Kensington, NW Calgary'
    },
    menu: [
      { name: 'Maple Bacon', description: 'Maple glaze with crispy bacon bits', price: '$4.99', popular: true },
      { name: 'S\'mores', description: 'Chocolate glaze, marshmallow fluff, graham cracker', price: '$4.99' },
      { name: 'Calgary Stampede', description: 'Caramel glaze, mini donuts, cotton candy', price: '$5.99', popular: true },
      { name: 'Classic Glazed', description: 'Perfectly glazed yeast doughnut', price: '$3.99' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop',
    popular: false,
    phone: '(403) 555-0555',
  },
  {
    id: 'satay-brothers',
    name: 'Satay Brothers',
    cuisine: 'asian',
    cuisineEmoji: '🍢',
    description: 'Southeast Asian street food specialists. Charcoal-grilled satay and noodle bowls!',
    rating: 4.5,
    priceRange: '$',
    isOpen: false,
    lastSpotted: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
    location: {
      lat: 51.0356,
      lng: -114.0890,
      address: 'Beltline, SW Calgary'
    },
    menu: [
      { name: 'Chicken Satay (6 skewers)', description: 'Marinated chicken with peanut sauce', price: '$11.99', popular: true },
      { name: 'Beef Rendang', description: 'Slow-cooked beef in coconut curry', price: '$13.99' },
      { name: 'Laksa', description: 'Spicy coconut noodle soup', price: '$12.99', popular: true },
      { name: 'Spring Rolls (4)', description: 'Crispy vegetable spring rolls', price: '$6.99' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
    popular: false,
    phone: '(403) 555-0666',
  },
  {
    id: 'crave-cupcakes',
    name: 'Crave Cupcakes',
    cuisine: 'desserts',
    cuisineEmoji: '🧁',
    description: 'Gourmet cupcakes in every flavor imaginable. The sweetest truck in YYC!',
    rating: 4.4,
    priceRange: '$',
    isOpen: true,
    lastSpotted: new Date(Date.now() - 1000 * 60 * 90), // 1.5 hours ago
    location: {
      lat: 51.0889,
      lng: -114.1234,
      address: 'Edgemont, NW Calgary'
    },
    menu: [
      { name: 'Red Velvet', description: 'Cream cheese frosting, red velvet cake', price: '$4.49', popular: true },
      { name: 'Chocolate Overload', description: 'Triple chocolate with ganache', price: '$4.49' },
      { name: 'Salted Caramel', description: 'Caramel buttercream with sea salt', price: '$4.49', popular: true },
      { name: 'Mini Flight (6)', description: 'Assorted mini cupcakes', price: '$12.99' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&h=300&fit=crop',
    popular: false,
    phone: '(403) 555-0777',
    website: 'https://cravecupcakes.ca'
  },
]

export function formatTimeAgo(date: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / (1000 * 60))
  const diffHours = Math.floor(diffMins / 60)
  
  if (diffMins < 1) return 'Just now!'
  if (diffMins < 60) return `${diffMins} min ago`
  if (diffHours < 24) return `${diffHours}h ago`
  return `${Math.floor(diffHours / 24)}d ago`
}

export function getPopularTrucks(): FoodTruck[] {
  return FOOD_TRUCKS.filter(truck => truck.popular)
}

export function getOpenTrucks(): FoodTruck[] {
  return FOOD_TRUCKS.filter(truck => truck.isOpen)
}

export function filterTrucksByCuisine(cuisine: string): FoodTruck[] {
  if (cuisine === 'all') return FOOD_TRUCKS
  return FOOD_TRUCKS.filter(truck => truck.cuisine === cuisine)
}