import { useEffect, useState } from "react";
import images from "../../assets/images";
import SingleCarCard from "../SingleCarCard/SingleCarCard";

const BookingCars = () => {
  const [allCarsData, setAllCarsData] = useState([]);
  const [carName, setCarName] = useState("");
  const [carType, setCarType] = useState("");
  const carNameChangeHandler = (e) => {
    setCarName(e.target.value);
  };
  const carTypeChangeHandler = (e) => {
    setCarType(e.target.value);
  };
  let url = "https://mocki.io/v1/18fa5f92-0247-47ce-a02a-7de5aff45541";
  function getAllCarsData() {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => setAllCarsData(data.data));
  }
  const filteredCars = allCarsData.filter(
    (car) => car.carName === carName || car.carType === carType
  );
  useEffect(() => {
    getAllCarsData();
  }, []);
  return (
    <section className="bg-[#F5F5F5] p-7">
      <h1 className="text-[#242731] capitalize font-medium text-2xl">
        booking
      </h1>
      <div className="flex justify-between my-5">
        <div className="flex gap-4">
          <select
            name="carTypes"
            className="w-30 h-10 rounded-3xl px-6 m-auto"
            onChange={carTypeChangeHandler}
          >
            <option defaultValue="Cars Types">Cars Types</option>
            <option value="manual">manual</option>
            <option value="automatic">automatic</option>
          </select>
          <select
            name="carNames"
            className="w-30 h-10 rounded-3xl px-6 m-auto"
            onChange={carNameChangeHandler}
          >
            <option defaultValue="Cars Names">Cars Names</option>
            {allCarsData?.map((car, index) => (
              <option value={car.carName} key={index}>
                {car.carName}
              </option>
            ))}
          </select>
        </div>
        <div className="flex">
          <img src={images.carDashboard} alt="Dashboard Icon" />
          <img src={images.filterIcon} alt="Filter Icon" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 lg:grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 lg:gap-6 sm:gap-4 gap-3">
        {filteredCars?.length > 0
          ? filteredCars?.map((carItem, index) => (
              <SingleCarCard singleCarData={carItem} key={index} />
            ))
          : allCarsData?.map((carItem, index) => (
              <SingleCarCard singleCarData={carItem} key={index} />
            ))}
      </div>
    </section>
  );
};

export default BookingCars;
