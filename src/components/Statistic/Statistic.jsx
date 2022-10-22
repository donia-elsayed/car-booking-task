import { useEffect, useState } from "react";
const Statistic = () => {
  let [statisticData, setStatisticData] = useState([]);
  let url = "https://mocki.io/v1/ccc1ce3d-d829-475e-b770-dee86939ca24";
  useEffect(() => {
    getStatisticsData();
  }, []);

  function getStatisticsData() {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => setStatisticData(data.data));
  }
  return (
    <section className="py-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statisticData?.map((item, index) => (
        <div
          className={`py-[22px] px-[30px] h-[266px] bg-white text-center rounded-2xl hover:${item.hoverColor} hover:text-white`}
          key={index}
        >
          <div
            className={`w-9 h-9 rounded-full py-2 mb-2 m-auto ${item.color}`}
          >
            <img src={item.image} alt="" className="m-auto" />
          </div>
          <h4 className="text-lg font-medium mb-5">{item.title}</h4>
          <div className="flex justify-center items-center w-[100px] h-[100px] mx-auto mb-5 rounded-full border-8 border-solid border-[#F4F5F9] border-b-transparent">
            <span className="text-xl font-semibold">{item.percentage}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Statistic;
