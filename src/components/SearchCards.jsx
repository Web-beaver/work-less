import Searchcontainer from "./Searchcontainer";
import { Suspense, useEffect, useState } from "react";
import WorkCards from "./WorkCards";
import data from "../data/cards_data.json";
import "./Cards.css"
import InfiniteScroll from "react-infinite-scroller";
import LazySpinnerLoader from "../LazyComponents/LazySpinnerLoader";
import { lazy } from "react";

function SearchCards() {

  const chunckSize = 4;

  const [cards, setCards] = useState(data.slice(0, chunckSize));
  const navigateNext = (idx) => {


    let sidx = ((chunckSize * (idx))) % data.length;
    let eidx = Math.min(data.length - 1, sidx + chunckSize - 1);

    const splicedArray = data.slice(sidx, eidx + 1);
    setCards(splicedArray);


  }
  useEffect(() => {
    const pagesBtn = document.querySelectorAll(".pagination-ul li");
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
  }, [])
  return (
    <div className="App-header">
      <Searchcontainer></Searchcontainer>
      <div className="projects-card-container">
        <div className="skill-card-show">
            <div class="container">
              {cards?.map(card => {
                return (
                  <WorkCards title={card.title} para={card.para} imageurl={card.image} cardText={card.desc} backcolor={card.bgcolor}></WorkCards>
                )
              })}
              
            </div>

        </div>

      </div>
      <div className="pagination-content">
        <ul class="pagination-ul">
          {Array.from({ length: Math.ceil(data.length / chunckSize) }, () => Math.random()).map((ele, idx) => {

            return (
              <li role="presentation" onClick={() => navigateNext(idx)}><button></button></li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default SearchCards;
