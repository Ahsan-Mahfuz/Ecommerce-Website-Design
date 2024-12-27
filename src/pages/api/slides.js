export default function handler(req, res) {
  const slides = [
    {
      id: 'slide1',
      img: 'https://www.boat-lifestyle.com/cdn/shop/articles/smartwatch_1.jpg?v=1612348458&width=1900',
    },
    {
      id: 'slide2',
      img: 'https://img.global.news.samsung.com/in/wp-content/uploads/2023/08/16550_F34-KV_FINAL-e1691405411296.jpg',
    },
    {
      id: 'slide3',
      img: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
    },
    {
      id: 'slide4',
      img: 'https://incitrio.com/wp-content/uploads/2015/07/Screen-Shot-2015-07-06-at-9.19.22-AM.png',
    },
  ]

  res.status(200).json(slides)
}
