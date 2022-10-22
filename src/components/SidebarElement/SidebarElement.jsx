const SidebarElement = (props) => {
  return (
    <div className="flex gap-3 items-center p-2 active:bg-[#F3F5F8] cursor-pointer">
        <img src={props.image} alt={props.imgAlt}/>
        <h3 className='capitalize'>{props.title}</h3>
    </div>
  )
}
export default SidebarElement