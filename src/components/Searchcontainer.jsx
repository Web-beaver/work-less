import { Tag, TagGroup } from 'rsuite';
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from '../Slices/dataSlice';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { fetchQueryBased,fetchDataStrapi } from '../Slices/dataSlice';

function Searchcontainer({chunckSize}) {
  const ctag = useRef();
  const dispatch = useDispatch();
  const [searchTitle, setSearchTitle] = useState("");
  const [isActive, setActive] = useState("false");
  const displayTags = ["Html", "Css", "MERN", "Python", "NodeJS", "Responsive", "VITE"];
  const [tags, setTags] = useState([]);

  const searchProject = ()=>{
    dispatch(actions.updateSearchStatus({val:true}));
    dispatch(fetchQueryBased(searchTitle));
  }

  const removeByKeyboard = (event, tag) => {
    if (event.code == "Backspace") {
      if (searchTitle == "") {
        if (tags.length > 0) {
          setTags([...tags.slice(0, tags.length - 1)]);
          dispatch(actions.rollBack({ tags: [...tags.slice(0, tags.length - 1)] }));
          dispatch(actions.updateSearchStatus({ val: true }));
        }
      }else{
        setSearchTitle("");
        dispatch(fetchDataStrapi());
      }
      return;
    }
    if(chunckSize==1){
      if(searchTitle == ""){
        setSearchTitle("");
        dispatch(fetchDataStrapi());
      }
    }

  }
  const removeTags = (event, tag) => {
    const nextTags = tags.filter(item => item !== tag.toUpperCase());
    dispatch(actions.rollBack({ tags: nextTags }));
    dispatch(actions.updateSearchStatus({ val: true }));
    setTags(nextTags);
  }
  const addTags = (tag) => {
    if (!tags.includes(tag)) {
      dispatch(actions.updateTags({ tags: [...tags, tag.toUpperCase()] }));
      setTags([...tags, tag.toUpperCase()]);
      dispatch(actions.updateSearchStatus({ val: true }));
    }
    if(chunckSize==1){
      
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
                  <Tag style={{ height: "32px", backgroundColor: "#68626266", color: "white", borderRadius: "20px" }} size="lg" closable onClose={(event) => removeTags(event, t)}>{t}</Tag>
                )
              })}
            </div>
            <div className="regular-search-text">
              <input className="search-text" type="text" name="" id="Search-bar" placeholder="Look Out" value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} onKeyUp={(event) => removeByKeyboard(event)} />
            </div>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",padding:10}} onClick={()=>searchProject()}>
              <FontAwesomeIcon icon={faSearch} style={{color: "#e2e5e9"}} />
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
                  <Tag ref={ctag} size="lg" style={{ height: "32px", padding: "5px 20px 0px 20px", width: "fit-content", backgroundColor: "#68626266", color: "white", borderRadius: "20px", cursor: "pointer" }} onClick={() => addTags(t)} >{t}</Tag>
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
