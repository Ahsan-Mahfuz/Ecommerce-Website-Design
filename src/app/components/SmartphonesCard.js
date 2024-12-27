const SmartphonesCard = ({ phone }) => {
  const { name, image, originalPrice, discountedPrice, discount, savings } =
    phone

  return (
    <div>
      <div className="mt-5">
        <div className="card bg-base-100 max-w-60 w-full shadow-xl">
          <figure>
            <img src={image} alt={name} className="w-full" />
          </figure>

          <div className="absolute top-0 right-0 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-br-lg">
            {discount}
          </div>
          <div className="p-3">
            <h2 className="card-title">{name}</h2>
            <div>
              <span className="font-bold">${discountedPrice}</span>{' '}
              <span className="font-thin line-through">${originalPrice}</span>
            </div>
            <hr />
            <div className="mt-2 text-green-500 font-bold">
              Save - ${savings}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmartphonesCard
