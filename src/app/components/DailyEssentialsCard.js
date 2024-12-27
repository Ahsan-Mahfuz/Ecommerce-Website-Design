const DailyEssentialsCard = ({ item }) => {
  return (
    <div className="flex flex-col items-center mt-5 mb-20">
      <div className="card bg-base-100 shadow-xl rounded-2xl max-w-[200px] w-full">
        <figure className="aspect-square overflow-hidden rounded-2xl">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-fill"
          />
        </figure>
      </div>
      <p className="mt-3 text-xs">{item.category}</p>
      <h2 className="text-center text-lg font-semibold">{item.offer}</h2>
    </div>
  )
}

export default DailyEssentialsCard
