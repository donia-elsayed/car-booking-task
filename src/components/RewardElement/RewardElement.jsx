const RewardElement = (props) => {
  return (
    <div className={`rounded py-5 ${props.styleElm} md:w-2/4 lg:w-auto`}>
      <div className="flex justify-between">
        <h2 className="text-white font-bold text-[16.5px] leading-8 w-1/12">
          You have earned{" "}
          <span className="text-[#FF9619] text-4xl block">
            {props.rewardNum}
          </span>
          {props.rewardType}
        </h2>
        <div className="w-max">
          <img src={props.image} alt="" />
        </div>
      </div>
      <p className="text-[#FF9619] font-normal text-xs">{props.paragraph}</p>
    </div>
  );
};
export default RewardElement;

