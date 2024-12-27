const CategoriesCard = ({ category }) => {
  return (
    <div className="flex flex-col items-center mt-5">
      <div className="card bg-base-100 shadow-xl rounded-full max-w-[100px] w-full">
        <figure className="aspect-square overflow-hidden rounded-full">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
          />
        </figure>
      </div>
      <h2 className="mt-3 text-center text-lg font-semibold">
        {category.name}
      </h2>
    </div>
  )
}

export default CategoriesCard
