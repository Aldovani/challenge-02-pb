import { plantsService } from "../../services/impls/plants"
import { useState,useEffect } from "react";
import { Plants } from "../../types/Plants";
import SlideItem from "./SlideItem";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';



export default function Index(){
    const [plants, setPlants] = useState<Plants[]>([]);

    useEffect(() => {
        plantsService.getAll()
            .then(data => setPlants(data.data));
        }, []);

    const plantsInDiscount = []
    const plantsJustInSale = []
    
    for(let i = 0; i < plants.length; i ++){
        if(plants[i].discountPercentage > 0){
            plantsInDiscount.push(plants[i]);
        }
        else{
            plantsJustInSale.push(plants[i])
        }
    }
   
    return(
      <>
      <section className="bg-wisper py-20">
            
        <div className= "text-start">
            <h2 className="text-primary-lunar-green w-full font-eb-garamond text-center font-bold text-[64px]">This Weeks Most Popular <span className="text-primary-avacado">And Best Selling</span></h2>
        
            <div className="flex gap-12 mt-[96px] ml-[100px]">
              <Splide
                options={{
                  height: 630,
                  perPage: 4,
                  gap: "1rem",
                }}>

                {plantsInDiscount.map((plant) => (
                  <SplideSlide key={plant.id}>
                    <SlideItem promotion={true} plant={plant} />
                  </SplideSlide>
                ))}
              </Splide>
          </div>
        </div>

        <div className="text-start">
            <h2 className="text-primary-avacado font-eb-garamond font-bold text-[64px] mt-[93px] text-center">Plants In <span className="text-primary-lunar-green">Sale</span></h2>
            
            <div className="flex gap-12 mt-[96px] ml-[100px]">
              <Splide
                options={{
                  height: 630,
                  perPage: 4,
                  gap: "1rem",
                }}>

                {plantsJustInSale.map((plant) => (
                  <SplideSlide key={plant.id}>
                    <SlideItem promotion={true} plant={plant} />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
        </div>
      </section>
      </>
    )
}