import images from "../../assets/images";
import RewardElement from "../RewardElement/RewardElement";
const Reward = () => {
  return (
    <section className="py-4 grid lg:grid-cols-6 gap-5">
      <div className="lg:col-start-1 lg:col-end-8 bg-[#FFE0BA] flex md:justify-between sm:flex-wrap flex-nowrap pl-5 pt-4 rounded">
        <div className="my-auto pt-7">
          <h1 className="text-[#0F2837] font-bold text-2xl">
            Apply for a car loan !
          </h1>
          <p className="text-[#0F2837]">This is a sample of a generated text</p>
          <button className="capitalize bg-[#0F2837] text-white xl:px-6 py-2 rounded-[4px] xl:my-7 my-4 px-4">
            discover more
          </button>
        </div>
        <div className="sm:w-2/5 lg:w-max lg:m-auto">
          <img src={images.desktop} alt="Desktop Icon" />
        </div>
      </div>
      <div className="lg:col-start-8 lg:col-end-12 flex gap-4 md:justify-around">
        <RewardElement
          rewardNum="20"
          rewardType="Badges!"
          paragraph="Hooray! way to go Mohammed!"
          image={images.trophyIcon}
          styleElm="bg-[#0F2837] pl-4"
        />
        <RewardElement
          rewardNum="1500"
          rewardType="Points!"
          paragraph="Redeem and claim your rewards!"
          image={images.peopleIcon}
          styleElm="bg-[#6E1946] px-4"
        />
      </div>
    </section>
  );
};

export default Reward;
