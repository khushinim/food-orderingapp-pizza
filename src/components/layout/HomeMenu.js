import Image from "next/image";
import MenuItem from "@/components/layout/Menu/MenuItem";

export default function HomeMenu() {
    return (
       <section className="">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image src={'/sallad1.png'} width={109} height={189}  alt={'sallad'} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} />
        </div>
      </div>
      <div className="text-center mb-4">
        <h3 className="uppercase text-gray-500-font-semibold leading-4">
            Go Through Our
        </h3>
        <h2 className="text-primary font-bold text-4xl italic">
            Menu
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        
        <div className="relative">
          <Image src={'/sallad1.png'} width={300} height={300} alt={'sallad'} />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h3 className="text-white uppercase text-xl font-semibold">
                Sallad
            </h3>
          </div>
        </div>
        <div className="relative">
          <Image src={'/pasta1.png'} width={300} height={300} alt={'pasta'} />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h3 className="text-white uppercase text-xl font-semibold">
                Pasta
            </h3>
          </div>
        </div>
      </div>
    </section>
    );
}
