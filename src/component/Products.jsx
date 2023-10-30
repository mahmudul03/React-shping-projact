import { useEffect } from "react"
import { useState } from "react"
import Singleproduct from "./Singleproduct"

export default function Products() {
    const [products,setproducts] = useState([])

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json').
        then(res=>res.json()).
        then(data=>setproducts(data))
    },[])

  return (
    <div>
        {/* <h2 className="text-center text-5xl font-semibold capitalize mb-5 text-orange-500">continue shoping</h2> */}
        <div className="grid grid-cols-4 gap-5 p-8">
            <div className="col-span-3 grid grid-cols-3 gap-5">
            {
            products.map(single => <Singleproduct key={single.id} singlData={single}></Singleproduct>)
            }
            </div>

            <div className="border-2 border-red-500 p-3 rounded-lg max-h-screen">
                <h2 className="text-lg font-semibold capitalize flex items-center justify-center gap-3"><i className='bx bxs-cart-alt text-emerald-400  text-4xl'></i> Your order</h2>

            
            </div>
        </div>
    </div>
  )
}
