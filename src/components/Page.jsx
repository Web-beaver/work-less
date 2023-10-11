import {useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../Slices/dataSlice";

const Page = ({data,cards,setCards,chunckSize}) => {
    const record = useSelector(state=>state.preloader.record);
    const dispatch = useDispatch();
    const navigateNext = (idx) => {

        dispatch(actions.updateSearchStatus({ val: true }));
        let sidx = ((chunckSize * (idx))) % data.length;
        let eidx = Math.min(data.length - 1, sidx + chunckSize - 1);
    
        const splicedArray = data.slice(sidx, eidx + 1);
        setCards(splicedArray);
      }
    const addPagination = () => {
        try{
        let pagesBtn = document.querySelectorAll(".pagination-ul li");
       
        const clearActivePage = () => {
          
          pagesBtn.forEach((el) => el.classList.remove("active"));
          
        }
    
        pagesBtn.forEach((el) => {
          el.addEventListener("click", () => {
            clearActivePage();
            el.classList.add("active");
          })
        })
    
    
        pagesBtn[0].classList.add("active");
      }
      catch{
        
      }
      }
    
    useEffect(()=>{
      if(record == false)return;
      addPagination();
      dispatch(actions.recordUpdate({val:false}));
    },[record])
    useEffect(()=>{
      addPagination();
    },[])
    return (
      <>
        {data?.length != 0 &&
          (
            Array.from({ length: Math.ceil(data.length / chunckSize) }, () => Math.random()).map((ele, idx) => {

              return (
                <li role="presentation" onClick={() => navigateNext(idx)}><button></button></li>
              )
            })
          )}
      </>
    )
  }
  

export default Page;