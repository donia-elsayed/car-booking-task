import images from '../../assets/images'
function Navbar() {
  return (
    <nav className="bg-white px-[30px] py-4 flex sm:justify-between justify-around">
      <div className="relative">
        <img src={images.searchIcon} alt="Search Icon" className='absolute ml-[14px] mr-9 my-[13px]'/>
        <input type="text" className="bg-[#F5F4F6] rounded-lg py-3 px-[14px] lg:w-[358px] placeholder:text-[#7C7C8D] placeholder:left-14 placeholder:absolute" placeholder='Search or type'/>
      </div>
      <div className="flex lg:gap-8 gap-4 items-center">
        <img src={images.notificationIcon} alt="Notification Icon"/>
        <img src={images.profileIcon} alt="Profile Icon" className='rounded-full'/> 
      </div> 
    </nav>
  )
}

export default Navbar