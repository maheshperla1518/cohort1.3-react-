let User = ({name,image,profession})=>{
    return(
        <>
            <div className=" w-[400px] shadow mx-auto my-6 rounded-xl px-4 py-2 bg-amber-50">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img className="h-14 w-14 rounded-full object-cover" src={image} alt="" />
                            <div className="text-sm font-medium text-neutral-600">
                                <p>{name}</p>
                                <p>{profession}</p>
                            </div>
                    </div>
                        <button className="text-sm font-medium text-neutral-600 cursor-pointer" onClick={()=>{
                            alert(`Started following ${name}`);
                        }}>Follow</button>
                </div>
            </div>
        </>
    )
}
export default User;




