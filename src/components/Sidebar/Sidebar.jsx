import images from "../../assets/images";
import SidebarElement from "../SidebarElement/SidebarElement";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
      <section className="bg-white top-0 left-0 h-full pl-6 w-56">
        <div className="flex gap-3 items-center ml-2 my-7">
          <img
            src={images.logoIcon}
            alt="Motive Logo"
            className="bg-[#A162F7] rounded-md py-1.5 px-1"
          />
          <h3 className="text-[#1F2128] capitalize text-2xl">motiv.</h3>
        </div>
        <Link to="/dashboard">
          <SidebarElement
            image={images.dashboardIcon}
            imgAlt="Dashboard Icon"
            title="dashboard"
          />
        </Link>
        <Link to="/BookingCars">
          <SidebarElement
            image={images.carsIcon}
            imgAlt="Cars Icon"
            title="cars"
          />
        </Link>
        <div className="bottom-0 left-0 fixed ml-6 mb-7 mr-12">
          <SidebarElement
            image={images.settingIcon}
            imgAlt="Settings Icon"
            title="settings"
            styleProp="mb-8"
          />
          <SidebarElement
            image={images.signOutIcon}
            imgAlt="Logout Icon"
            title="log out"
          />
        </div>
      </section>
  );
};

export default Sidebar;
