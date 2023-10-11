import React from 'react';
import { quote } from '../data/data';
import { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { actions } from '../Slices/dataSlice';
function Preloader({ store }) {
  const loader = useSelector(state => state.preloader.loading);
  const startWidth = useSelector(state => state.preloader.value);
  const {data} = useSelector(state=>state.preloader.data);
  const cardData = useSelector(state=>state.preloader.cards);
  const [size, setsize] = useState(0);
  const dispatch = useDispatch();
  let inte,interval;
  let temp = Math.floor(Math.random() * 194);
  const [i, seti] = useState(temp);
  const loading = () => {
    //let startWidth = 0;
    // interval = setInterval(frame, 100);
    inte = setInterval(() => {
      let temp = Math.floor(Math.random() * 194);
      seti(temp);
    }, 4000);
    // function frame() {
    //   if (startWidth.length >= 5 || loader == false) {
    //     for(let val of startWidth){
    //       console.log("n");
    //       setsize(val)
    //     }
    //     console.log("here me");
    //     dispatch(actions.updateLoader());
    //     clearInterval(inte);
    //     clearInterval(interval);
        
    //   }else{
    //     console.log("fuck",startWidth.length);
    //   }
      // setsize(100);
      // } else {
      //   startWidth++;
      //   setsize(startWidth);
      // }
    }
  
  useEffect(() => {
    setTimeout(loading, 1000);
  }, []);
  useEffect(()=>{
    // console.log("changed",startWidth);
    // if(startWidth.length >=12){

    //   for(let val of startWidth){
    //     console.log("n");
    //     setsize(val)
    //   }
    //   setTimeout(()=>{
    //   dispatch(actions.updateLoader());
    //   clearInterval(inte);
    //   clearInterval(interval);
    // },12000)
    // }
    if(startWidth == 0)return;
    setsize(startWidth);
    if(Math.floor((startWidth / 12000) * 100)>=90){
      dispatch(actions.updateLoader());
    }
  },[startWidth])
  return (
    <div className='pre'>
      <div className="loader" onClick={() => seti(Math.floor(Math.random() * 194))}>
        <div className="load"><span id='name' style={{ fontFamily: "General Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif" }}>नमस्ते</span>
        
          <div className="progress">
            <div className="bar" style={{ width: `${Math.floor((size / 12000) * 100)}%` }}>
            </div>
          </div>
          <span id="percent">{Math.floor((size / 12000) * 100)}%</span>
        </div>
        <div id='quote'><span id="blc">"{quote[i].text}"</span>
          <span id="author">~{quote[i].author}</span>
        </div>
      </div>
    </div>
  )
}

export default Preloader;

