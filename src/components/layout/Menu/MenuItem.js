export default function MenuItem() {
    return (
       // bg-black bg-opacity-50 bg-lime-600 
        <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-lime-600 hover:shadow-xl hover:shadow-black/75 transition-all">
          <div className="text-center">
            <img src="/pizza1.png" className="max-w-auto max-h-25 block mx-auto" alt="pizza"/>
          </div>
          <h4 className="font-semibold text-xl my-3">
            Pepperoni Pizza</h4>
          <p className="text-black text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
           <div className="text-center mt-4 font-bold">
            <p>Rs.259</p>
            </div>
          <button className="mt-4 bg-primary text-white rounded-full px-4 py-2">
            Add to cart
          </button>
        </div>
    );
}
