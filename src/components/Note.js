import { MdDeleteForever } from 'react-icons/md'
const Note = ({id,text,date ,handleDelete}) => {
  return (
    <div className="bg-[#fef68a] rounded-lg p-4 min-h-[170px] flex flex-col justify-between whitespace-pre-wrap	">
      <span>{text}</span>
      <div className="flex items-center justify-between ">
        <small>{date}</small>
        <MdDeleteForever 
        className='cursor-pointer  '
         size='1.3em'
         onClick={()=>handleDelete(id)} />
      </div>
    </div>
  )
}

export default Note
