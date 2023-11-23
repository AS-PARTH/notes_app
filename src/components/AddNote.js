import { useState } from "react"

const AddNote = ({handleAddNote}) => {
    const [noteText , setNoteText] = useState('');
const characterLimit=200;

    const handleChange =(event)=>{
        if(characterLimit-event.target.value.length >=0){
            setNoteText(event.target.value);
        }
}
const handleSave =()=>{
    if(noteText.trim().length>0){
        handleAddNote(noteText);
        setNoteText('');
    }
};
  return (
    <div className="bg-[#67d7cc]  rounded-lg p-4 min-h-[170px] flex flex-col justify-between  ">
      <textarea 
      cols="10" 
      rows="8"
      placeholder="Type To Add a Note"
      className="border-none resize-none bg-[#67d7cc] focus:outline-none"
      onChange={handleChange}
      value={noteText}
      ></textarea>
 <div className="flex items-center justify-between ">        
 <small>{characterLimit-noteText.length} Remaining</small>
        <button className="bg-[#e1e1e1] border-none rounded-lg p-1  
        hover:bg-[#ededed] cursor-pointer "
        onClick={handleSave}>Save</button>
      </div>
    </div>
  )
}

export default AddNote
