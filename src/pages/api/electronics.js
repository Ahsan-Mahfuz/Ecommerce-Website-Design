export default function handler(req, res) {
  const electronics = [
    {
      id: 1,
      brand: 'Iphone',
      offer: 'Up to 80% off',
      image:
        'https://www.excelestore.com.bd/public/uploads/all/6wm8ddgd7Gfqp89EbcSAWnL0FGiXlaLh0KHNNTpz.webp',
    },
    {
      id: 2,
      brand: 'Samsung',
      offer: 'Up to 70% off',
      image:
        'https://www.excelestore.com.bd/public/uploads/all/6wm8ddgd7Gfqp89EbcSAWnL0FGiXlaLh0KHNNTpz.webp',
    },
    {
      id: 3,
      brand: 'Sony',
      offer: 'Up to 50% off',
      image:
        'https://www.excelestore.com.bd/public/uploads/all/6wm8ddgd7Gfqp89EbcSAWnL0FGiXlaLh0KHNNTpz.webp',
    },
  ]

  res.status(200).json(electronics)
}
