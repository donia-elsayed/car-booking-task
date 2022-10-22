import { useEffect, useState } from "react";
import images from "../../assets/images";
import SingleCarCard from "../SingleCarCard/SingleCarCard";

const BookingCars = () => {
  let [allCarsData, setAllCarsData] = useState([]);
  let url = "https://mocki.io/v1/18fa5f92-0247-47ce-a02a-7de5aff45541";
  function getAllCarsData() {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => setAllCarsData(data.data));
  }
  useEffect(()=>{
    getAllCarsData()
  },[])
  return (
    <section className="bg-[#F5F5F5] p-7">
      <h1 className="text-[#242731] capitalize font-medium text-2xl">
        booking
      </h1>
      <div className="flex justify-between my-5">
        <div className="flex gap-4 ">
          <select name="carTypes" className="w-30 h-10 rounded-3xl px-6 m-auto">
            <option value="">New</option>
          </select>
          <select name="carNames" className="w-30 h-10 rounded-3xl px-6 m-auto">
            <option value="">Toyota</option>
          </select>
        </div>
        <div className="flex">
          <img src={images.carDashboard} alt="Dashboard Icon" />
          <img src={images.filterIcon} alt="Filter Icon" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 lg:grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 lg:gap-6 sm:gap-4 gap-3">
        {
          allCarsData?.map((carItem,index)=>(
            <SingleCarCard singleCarData={carItem} key={index}/>
          ))
        }
      </div>   
    </section>
  );
};

export default BookingCars;
