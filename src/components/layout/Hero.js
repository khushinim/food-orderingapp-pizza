import Right from "@/components/Icons/Right";
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="hero mt-4">
            <div className="py-12">
            <h1 className="text-4xl font-semibold">
                Hurry!<br/>I Knead <span className="text-primary">
                    Pizza
                    </span> Now!
                </h1>
            <p className="my-6 text-gray-500 text-sm">
                Calling all pizza lovers! Is your stomach rumbling like a volcano? Do you hear your taste buds chanting "cheese! cheese!"? Don't wait any longer, your pizza destiny awaits!
            </p>
            <div className="flex gap-4 text-sm">
                <button className="bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
                    Order Now
                <Right />
                </button>
                <button className="flex gap-2 py-2 text-gray-600 font-semibold">
                    Learn More
                    <Right />
                </button>    
            </div>
            </div>
        
            <div className="relative">
            <Image src={'/pizza1.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
             </div>
        
        </section>
    );
}
