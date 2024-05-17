import { Plants } from "../../types/Plants";

export default function SlideItem({plant, promotion}:{plant : Plants, promotion : boolean}){

    if(promotion == true){
        const actualPrice = Number(plant.price)
        const discount = Number(plant.discountPercentage) / 100

        return <>
        
        <div className="w-fit hover:scale-105  transition-transform  shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            <img className="w-96 object-contain" src="/plant1.png" alt="Plant Card" />
            <div className="bg-white h-auto px-8 pt-4 pb-8">
                <h2 className="font-lato font-bold text-2xl text-primary-lunar-green">{plant.name}</h2>
                <div className="flex font-raleway text-base gap-3"><p className="text-primary-lunar-green font-raleway text-base">${(actualPrice - actualPrice * discount).toFixed(2)}</p><p className="text-dark-gray line-through">${(plant.price)}</p></div>
                <div className="my-6 border text-base border-primary-avacado px-3 py-2 w-[74px] rounded-[20px] text-primary-avacado">indoor</div>
            </div>
        </div>
        </>
    }

    else if(promotion == false){
        return <>
        <div className="w-fit hover:scale-105 transition-transform  shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            <img className="object-contain h-[390px]" src="/plant1.png" alt="Plant Card" />
            <div className="bg-white h-auto px-8 pt-4 pb-8">
                <h2 className="font-lato font-bold text-2xl text-primary-lunar-green">{plant.name}</h2>
                <div className="flex font-raleway text-base gap-3"><p className="text-primary-lunar-green font-raleway text-base">${plant.price}</p></div>
                <div className="my-6 border text-base border-primary-avacado px-3 py-2 w-[74px] rounded-[20px] text-primary-avacado">indoor</div>
            </div>
        </div>
        </>

    }

    
  

}