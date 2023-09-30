import { Tag, TagGroup } from 'rsuite';
import React,{ useState } from "react";

function Searchcontainer() {
    const [searchTitle, setSearchTitle] = useState("");
    const [isActive, setActive] = useState("false");
  const displayTags = ["Html", "Css", "MERN", "Python", "NodeJS","Responsive","JavaScript"];
  const [tags, setTags] = useState([]);
  const removeTags = (event,tag) => {
    if(event.code == "Backspace"){
      if(searchTitle == ""){
        if(tags.length > 0){
          setTags([...tags.slice(0,tags.length-1)]);
        }
      }
      return;
    }
    const nextTags = tags.filter(item => item !== tag);
    setTags(nextTags);
  }
  const addTags = (tag) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  }
  return (
    <div>
         <div className="tagandsearch">
      <div className="search-wrapper-tags">
        {/* <div className="searchIcon">
          <FontAwesomeIcon icon={faSearchengin} color="#000000" />
        </div> */}
        <div className="search-input-area-tag">
          <div className="tagging-area">
            {tags.map((t) => {
              return (
                <Tag style={{height:"32px",backgroundColor:"#68626266",color:"white",borderRadius:"20px"}} size="lg"  closable onClose={(event) => removeTags(event,t)}>{t}</Tag>
              )
            })}
          </div>
          <div className="regular-search-text">
            <input className="search-text" type="text" name="" id="Search-bar" placeholder="Look Out" value={searchTitle} onChange={(e)=>setSearchTitle(e.target.value)} onKeyUp={(event)=>removeTags(event)}/>
          </div>
        </div>
 
      </div>
      <div className="display-skills-tags-container">
      <div className={`display-skills-tags ${isActive ? "hide" : "show"}`}>
        <div className='fa fa-angle-down' onClick={() => {
      setActive(!isActive);
    }}></div>
        <TagGroup>
          {displayTags.map((t) => {
            return (
              <Tag size="lg" style={{height:"32px",padding:"5px 20px 0px 20px",width:"fit-content",backgroundColor:"#68626266",color:"white",borderRadius:"20px",cursor:"pointer"}} onClick={() => addTags(t)}>{t}</Tag>
            )
          })}
        </TagGroup>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Searchcontainer
