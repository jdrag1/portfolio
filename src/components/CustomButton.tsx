interface ICustomButtonProps {
    label: string;
   
}


const CustomButton = (props: ICustomButtonProps) => {
  return (
    <div className="w-full flex ml-40 mt-1 ">
    <button className="px-6 py-3 text-lg font-bold tracking-tight 
        bg-[linear-gradient(to_right,#58E7CE,#6A3973,#58E7CE,#2E3D61,#8FB1BE,#6A3973,#58E7CE)]
        bg-clip-text text-transparent border-2 border-[#6A3973] 
        rounded-full transition duration-300 ease-in-out 
        hover:scale-105 hover:border-[#58E7CE] uppercase self-center lg:self-start -ml-6">{props.label}</button>
        </div>
  )
}

export default CustomButton