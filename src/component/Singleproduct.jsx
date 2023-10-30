

export default function Singleproduct({singlData}) {

    const {name,category,seller,price,img}=singlData
  return (
    <div data-aos="fade-left" className="card bg-gradient-to-r from-slate-300 to-orange-300 shadow-md   p-3 flex flex-col justify-between">
      <figure>
        <img src={img}alt="Shoes"className="rounded-xl"/>
      </figure>
      <div className="mt-3 flex flex-col gap-2 items-center text-center capitalize ">
        <h2 className="text-lg font-semibold">{name}!</h2>
        <p>category :- {category}</p>
        <div className="flex gap-3 text-sm font-semibold capitalize">
        <p>seller :- {seller}</p>
        <p>price :- <span className="text-red-400">{price}$</span></p>
        </div>
        <div className="card-actions w-full">
          <button className=" btn btn-  bg-red-700 text-white  w-full">Add to Card</button>
        </div>
      </div>
    </div>
  );
}
