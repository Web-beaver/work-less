import React from 'react'
import { useNavigate,createSearchParams } from "react-router-dom";
import './Cards.css'

function WorkCards({title,para,imageurl,cardText,backcolor,tags,desc,previewlink,sourcecodelink}) {
  const navigate = useNavigate();
  const queryParams = {Title:title,para:para,url:imageurl,shortdesc:cardText,desc:desc,sourcecodelink,previewlink}
  const navigateHandler = (path) => {
    
    navigate(path);
  }
  return (
    <div>
       <div class="card-container-product">
        <div class="card">
          <h2>{title}</h2>
          <i class="fas fa-arrow-right"></i>
          <p>{para}</p>
          <div class="pic" style={{backgroundImage:`url(${imageurl})`}}></div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
         
          <button style={{backgroundColor:`${backcolor}`}} onClick={() => { navigateHandler(`/projectone?${createSearchParams(queryParams)}`) }}>
          </button>
        </div>
          <div class="card card2">
            <div class="card-text">{cardText}</div>
            <div class="card-tags">
              {Object.keys(tags).map(item=>{
                return (
                  <div class="card-tag-text">{item}</div>
                )
              })}
             </div>
            <ul>   
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            <li></li>
            <li></li>
              </ul>
        </div>
    </div>
    </div>
  )
}

export default WorkCards;
