export default function handler(req, res) {
  const smartphones = [
    {
      id: 1,
      name: 'Smartphone 1',
      image:
        'https://d61s2hjse0ytn.cloudfront.net/color/1617/honor_x6b_midnight_black.webp',
      originalPrice: 100,
      discountedPrice: 70,
      discount: '60% OFF',
      savings: 30,
    },
    {
      id: 2,
      name: 'Smartphone 2',
      image:
        'https://d61s2hjse0ytn.cloudfront.net/color/1606/realme_c75_lightning_gold.webp',
      originalPrice: 120,
      discountedPrice: 90,
      discount: '25% OFF',
      savings: 30,
    },
    {
      id: 3,
      name: 'Smartphone 3',
      image:
        'https://d61s2hjse0ytn.cloudfront.net/color/1601/iqoo_13_alpha.webp',
      originalPrice: 150,
      discountedPrice: 100,
      discount: '33% OFF',
      savings: 50,
    },
    {
      id: 4,
      name: 'Smartphone 4',
      image:
        'https://d61s2hjse0ytn.cloudfront.net/color/1600/nord_4_obsidian_midnight_1.webp',
      originalPrice: 150,
      discountedPrice: 100,
      discount: '33% OFF',
      savings: 50,
    },
    {
      id: 5,
      name: 'Smartphone 5',
      image:
        'https://d61s2hjse0ytn.cloudfront.net/color/1522/nokia_220_4g_2024_black.webp',
      originalPrice: 150,
      discountedPrice: 100,
      discount: '33% OFF',
      savings: 50,
    },
  ]

  res.status(200).json(smartphones)
}
