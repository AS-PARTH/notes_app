import { MdSearch } from "react-icons/md"

const Search = ({handleSearchNote}) => {
  return (
    <div className=" flex items-center bg-[#e1e1e1] rounded-xl p-1 mb-6  ">
      <MdSearch className="" size='1.3rem' />
      <input type="text" 
      onChange={(event)=>
        handleSearchNote(event.target.value)
    }
      placeholder="Search" 
      className="border-none bg-[#e1e1e1] w-full focus:outline-none"
      />
    </div>
  )
}

export default Search
