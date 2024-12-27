const ElectronicsCard = ({ item }) => {
  return (
    <div className="mt-5">
      <div className="card card-side bg-black shadow-xl text-white">
        <div className="card-body">
          <h2 className="card-title">{item.brand}</h2>
          <p>{item.offer}</p>
        </div>
        <figure>
          <img
            src={item.image}
            alt={item.brand}
            className="h-36 object-cover"
          />
        </figure>
      </div>
    </div>
  )
}

export default ElectronicsCard
