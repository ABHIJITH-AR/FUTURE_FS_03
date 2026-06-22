/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const PLANTS = [
  {
    id: 'rose',
    name: 'Rose',
    category: 'flower',
    price: 30,
    driveId: '1_cmVuGlAMC2YWQ0B7rzU-NH-Ufllped0',
    description: 'Classic romantic red and pink blooms with premium petals. Perfect for gardens and patios.',
    scientificName: 'Rosa rubiginosa',
    sunlight: 'Full Sun',
    watering: 'Moderate',
    size: 'Small to Medium',
    rating: 5,
    inStock: true,
    unsplashFallback: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'moss-rose',
    name: 'Moss Rose',
    category: 'flower',
    price: 20,
    driveId: '13oD08SmWc85-tSwbtqJDBcmE5IcPpcMC',
    description: 'Beautiful low-growing flowering annual. Bursting with bright, vibrant neon summer colors.',
    scientificName: 'Portulaca grandiflora',
    sunlight: 'Full Sun',
    watering: 'Low (Dry resilient)',
    size: 'Very Small',
    rating: 4,
    inStock: true,
    unsplashFallback: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'bougainville',
    name: 'Bougainvillea',
    category: 'flower',
    price: 150,
    driveId: '1gLi3Eq09OVvC70OUoXV7Vv1J5KHbL80O',
    description: 'Spectacular ornamental paper-flower climber. Vibrant magenta blooms that love warm climates.',
    scientificName: 'Bougainvillea glabra',
    sunlight: 'Direct Sun',
    watering: 'Low',
    size: 'Climber / Large',
    rating: 4.8,
    inStock: true,
    unsplashFallback: 'https://images.unsplash.com/photo-1589244159943-460088ed5c92?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'orchid',
    name: 'Orchid',
    category: 'flower',
    price: 200,
    driveId: '1f4iln54cXzwig4QTt90Fa7C7bYXAekou',
    description: 'Elegant exotic indoor floral specimen. Prefers filtered ambient bright light and high humidity.',
    scientificName: 'Orchidaceae',
    sunlight: 'Partial Shade',
    watering: 'Moderate',
    size: 'Small',
    rating: 5,
    inStock: true,
    unsplashFallback: 'https://images.unsplash.com/photo-1525253013412-55c1a69a5738?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'melastoma',
    name: 'Melastoma',
    category: 'flower',
    price: 60,
    driveId: '1rwcLsAYrLcpYiTmVU6rjluYfFJLCFWOd',
    description: 'Glistening wild purple flowers with robust green foliage. Hardy choice for outdoor setups.',
    scientificName: 'Melastoma malabathricum',
    sunlight: 'Full Sun/Partial',
    watering: 'Normal',
    size: 'Medium Bush',
    rating: 4.5,
    inStock: true,
    unsplashFallback: 'https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ixora',
    name: 'Ixora',
    category: 'flower',
    price: 40,
    driveId: '1TwoEldJ0UPT_TpFpGngjx0F1sB43s7Ur',
    description: 'Charming clustered scarlet flowers widely known as Jungle Flame. Perfect for ornamental borders.',
    scientificName: 'Ixora coccinea',
    sunlight: 'Full Sun',
    watering: 'Moderate',
    size: 'Medium shrub',
    rating: 4.3,
    inStock: true,
    unsplashFallback: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'adenium',
    name: 'Adenium (Desert Rose)',
    category: 'flower',
    price: 100,
    driveId: '1enPL-wrcpJxclf9TgOGW5URz-s-UxOx-',
    description: 'Sculptural bonsai-like thick trunk with stunning trumpet-shaped neon pink blooms.',
    scientificName: 'Adenium obesum',
    sunlight: 'Intense Sun',
    watering: 'Very Low (Succulent)',
    size: 'Compact Bonsai',
    rating: 4.9,
    inStock: false,
    unsplashFallback: 'https://images.unsplash.com/photo-1600411832986-5a44d18c5a14?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mango',
    name: 'Mango Tree',
    category: 'tree',
    price: 350,
    driveId: '1Z2VPycuotLSL1kMeF8emcfT1mr1gsxr1',
    description: 'Premium grafted mango cultivars (Alphonso/Neelum) optimized for quick, sweet yields.',
    scientificName: 'Mangifera indica',
    sunlight: 'Full Sun',
    watering: 'Moderate',
    size: 'Grafted Sapling',
    rating: 4.7,
    inStock: true,
    unsplashFallback: 'https://images.unsplash.com/photo-1553134988-5622b1d6b810?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'jackfruit',
    name: 'Jackfruit Tree',
    category: 'tree',
    price: 300,
    driveId: '1befI_U1ArG66rrxC1jbN3JS4GTC6QGrZ',
    description: 'High-yield tropical jackfruit sapling. Flourishes with minimal effort in Kerala garden soils.',
    scientificName: 'Artocarpus heterophyllus',
    sunlight: 'Full Sun',
    watering: 'Moderate to Low',
    size: 'Healthy Starter',
    rating: 4.6,
    inStock: true,
    unsplashFallback: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'rambutan',
    name: 'Rambutan Tree',
    category: 'tree',
    price: 400,
    driveId: '1OA96u0po6DZt4ns2QzIsiL6TjsEUtykF',
    description: 'Exotic tropical hairy-fruit tree. Grafted to bear heavy sweet crimson rambutan fruits early.',
    scientificName: 'Nephelium lappaceum',
    sunlight: 'Full Sun & Humid',
    watering: 'High',
    size: 'Well-rooted',
    rating: 4.9,
    inStock: true,
    unsplashFallback: 'https://images.unsplash.com/photo-1534432586043-ead5b99229fb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'nutmeg',
    name: 'Nutmeg Tree (Jaathikka)',
    category: 'tree',
    price: 750,
    driveId: '1llrNmXXy7DmbvvKYKKFb1U82AjJTQFBF',
    description: 'High-grade aromatic nutmeg spice plant. Highly sought after for its rich spice yields.',
    scientificName: 'Myristica fragrans',
    sunlight: 'Partial Shade',
    watering: 'Consistent Damp',
    size: 'Large Sapling',
    rating: 5,
    inStock: true,
    unsplashFallback: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80'
  }
];

export const REVIEWS = [
  {
    id: 'rev-1',
    name: 'Amal Joseph',
    rating: 5,
    text: 'Best experience under low price. All plants are healthy and properly delivered across Ernakulam!',
    timeAgo: '1 year ago',
    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'rev-2',
    name: 'Jinto Joy',
    rating: 4,
    text: 'Perfect customer service and clean, neat packaging. Satisfied with my orchid and rambutan trees.',
    timeAgo: '1 year ago',
    avatarUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'rev-3',
    name: 'Nadhil Shan',
    rating: 5,
    text: 'Good nursery with excellent varieties of grafted tree saplings. Highly recommended for plant enthusiasts.',
    timeAgo: '2 years ago',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'rev-4',
    name: 'Leo Kuriakose',
    rating: 5,
    text: 'Grafted Mango and Jackfruit starter trees purchased last season are growing incredibly well in our field.',
    timeAgo: '2 years ago',
    avatarUrl: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'rev-5',
    name: 'Jobin Padukkachi',
    rating: 3,
    text: 'Fair prices and useful advisory details about seasonal soil care and composting organic fertilizer.',
    timeAgo: '7 months ago',
    avatarUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'rev-6',
    name: 'Anoop Chummarath',
    rating: 4,
    text: 'Incredible collection of Bougainvillea creepers and Moss Rose. Friendly staff and fast delivery options.',
    timeAgo: '1 year ago',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'rev-7',
    name: 'Jacob Cyriac',
    rating: 5,
    text: 'A true green paradise. The quality of their organic saplings and help desk service has remained premium over the years.',
    timeAgo: '5 years ago',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80'
  }
];

export const KERALA_DISTRICTS = [
  'Alappuzha',
  'Ernakulam',
  'Idukki',
  'Kannur',
  'Kasaragod',
  'Kollam',
  'Kottayam',
  'Kozhikode',
  'Malappuram',
  'Palakkad',
  'Pathanamthitta',
  'Thiruvananthapuram',
  'Thrissur',
  'Wayanad'
];
