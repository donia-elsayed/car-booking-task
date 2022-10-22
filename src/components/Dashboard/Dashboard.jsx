
import BestSellingCars from "../BestCarsBuyer/BestSellingCars"
import Reward from "../Reward/Reward"
import Statistic from "../Statistic/Statistic"

const Dashboard = () => {
  return (
    <main className="bg-[#F5F4F6] px-9 pb-9">
      <Statistic/>
      <Reward/>
      <BestSellingCars/>
    </main>
  )
}

export default Dashboard