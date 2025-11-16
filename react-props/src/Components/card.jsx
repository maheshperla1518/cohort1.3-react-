let Card = ({name,price,type,image,desc,rating})=>{
    return(
        <>
            <div className="shadow w-[300px] mx-auto my-2 rounded-xl font-serif relative" onClick={()=>{
                alert(`${name} is Ordered`);
            }}>
                <img className="w-full rounded-tl-2xl object-fill rounded-tr-2xl" src={image} alt="" />
                <div className="px-4 py-2 mb-2 mt-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-medium mt-2 text-neutral-600">{name}</h2>
                        <div className={type =='Veg' ? "h-3 w-3 rounded-full bg-green-500" : 'h-3 w-3 rounded-full bg-red-500'}></div>
                    </div>
                    <p className=" text-sm font-sm mb-2 text-neutral-500">{desc}</p>
                    <p className="text-sm mb-2 font-medium text-neutral-600">Price: {price}</p>
                    <p className="text-sm font-medium text-neutral-600">Ratings: {rating}⭐</p>
                </div>
                <div className={rating >= 4.5 ? "bg-orange-300 text-sm text-orange-950 rounded-4xl px-3 py-1 absolute top-0 left-0 m-2" : "hidden"}>Best Seller</div>
                <div className={price >= 200 ? "bg-green-400 text-sm text-green-900 rounded-4xl px-3 py-1 absolute top-0 right-0 m-2" : "hidden"}>Free delivary</div>
            </div>
        </>
    )
}
export default Card;
