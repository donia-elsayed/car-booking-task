import { useEffect, useState } from "react";
import images from "../../assets/images";

const BestSellingCars = () => {
  let [carsData, setCarsData] = useState([]);
  let urlCars = "https://mocki.io/v1/c467745d-15dd-4b69-b9a4-0a69a8eea16c";
  function getCarData() {
    fetch(urlCars)
      .then((response) => response.json())
      .then((data) => setCarsData(data.carData));
  }
  useEffect(() => {
    getCarData();
    console.log(carsData);
  }, []);
  return (
    <section className="pt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        carsData.map((car,index)=> (
          <div className={`rounded-[14px] py-3 px-5 ${car?.color}`} key={index}>
            <div className="flex"> 
              <img src={images.arrowCircleIcon} alt="" className="mx-2"/>
              <span className="capitalize">{car.evaluationPercent}</span>
            </div>
            <div className="py-3">
              <img src={car.image} alt="" />
            </div>
            <h3 className="capitalize ml-2 text-lg font-medium mb-2">{car.carName}</h3>
            <div className="flex justify-between">
              <div className="flex gap-[14px] mx-2">
                <img src={images.shareIcon} alt="" />
                <span>{car.followerNum}</span>
                <img src={images.wheelIcon} alt="" />
                <img src={images.energyCarIcon} alt="" />  
              </div>
              <span>{car.price}</span>
            </div>
          </div>
        ))
      } 
    </section>
  );
};

export default BestSellingCars;
