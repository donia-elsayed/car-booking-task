import React from "react";
import images from "../../assets/images";

const SingleCarCard = (props) => {
  const {singleCarData} = props;
  return (
    <div className="bg-white rounded-2xl xl:py-4 xl:px-8 lg:p-4 p-2">
      <div className="flex justify-between">
        <h3 className="text-[#242731] font-medium text-lg">
          {singleCarData.carName}
        </h3>
        <img src={images.heartIcon} alt="" />
      </div>
      <span className="block capitalize text-[#72767C]">coupe</span>
      <img src={singleCarData.carImage} alt="" className="mx-auto my-5" />
      <div className="flex lg:justify-between sm:flex-wrap flex-nowrap sm:justify-center justify-between">
        <div className="flex gap-5">
          <div className="flex gap-1">
            <img src={images.personIcon} alt="" />
            <span className="capitalize text-[#72767C]">
              {singleCarData.passengerNum}
            </span>
          </div>
          <div className="flex gap-1">
            <img src={images.carShareIcon} alt="" />
            <span className="capitalize text-[#72767C]">{singleCarData.carType}</span>
          </div>
        </div>
        <span className="text-[#242731] font-semibold">
          {singleCarData.price}
          <span className="text-[#72767C] font-thin">/d</span>
        </span>
      </div>
    </div>
  );
};

export default SingleCarCard;
