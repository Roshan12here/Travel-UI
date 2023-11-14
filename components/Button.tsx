import Image from "next/image";

interface ButtonProps {
    type:'button' | 'submit'
    title:string;
    icon?:string;
    variant:string
    full?:boolean
}

const Button = ({type,title,icon,variant,full} :ButtonProps) => {
  return (
    <div>
      <button
      type={type}
      className={` btn_green flexCenter gap-3 cursor-pointer rounded-full  ${variant} first-letter:
      ${full && 'w-full'}
      `}
      >
{icon && <Image src={icon} alt={title} width={24} height={24}/>}
      <label>
        {title}
      </label>
      </button>
    </div>
  )
}

export default Button