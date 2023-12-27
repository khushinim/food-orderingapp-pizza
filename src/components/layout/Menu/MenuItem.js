export default function MenuItem() {
    return (
        
        <div className="bg-black bg-opacity-50 p-4 rounded-lg text-center hover:bg-lime-600">
          <img src="/pizza1.png" alt="pizza"/>
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
