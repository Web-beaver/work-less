import Searchcontainer from "./Searchcontainer";
import { Suspense, useEffect, useState } from "react";
import WorkCards from "./WorkCards";
// import data from "../data/cards_data.json";
import "./Cards.css"
import LazySpinnerLoader from "../LazyComponents/LazySpinnerLoader";
import Page from "./Page";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../Slices/dataSlice";
import { Loader } from "rsuite";
import NoRecord from "./NoRecordsFound/NoRecord";
function SearchCards({chunckSize}) {
  const dispatch = useDispatch();
  const data = useSelector(state => state.preloader.fdata);
  const searchStatus = useSelector(state => state.preloader.searchingStatus);

  const response = { status: "pending", data: null }
  const sleep = (time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, time);
    })
  }
  const suspend = (fn) => {
    const suspender = fn().then(
      (res) => {
        response.status = 'success';
        response.data = res;
      },
      (error) => {
        response.status = 'error';
        response.data = error;
      }
    );

    switch (response.status) {
      case 'pending':
        throw suspender;
      case 'error':
        throw response.data;
      default:
        return response.data;
    }
  }



  const [cards, setCards] = useState(data.slice(0, Math.min(data.length, chunckSize)));


  

  const Temporary = () => {
    if (searchStatus) {

      const data = suspend(async () => {
        await sleep(500);
        return 10;
      })

      dispatch(actions.updateSearchStatus({ val: false }));
    }

  }

  useEffect(() => {
    setCards(data.slice(0, Math.min(data.length, chunckSize)))
  }, [data])
  return (
    <div className="App-header">
      <Searchcontainer chunckSize={chunckSize}></Searchcontainer>
      <div className="projects-card-container">
        <div className="skill-card-show">
          <div class="container">
            {
              cards?.length != 0 ?
                (
                  <Suspense fallback={<LazySpinnerLoader></LazySpinnerLoader>}>

                    {searchStatus === false ?
                      (cards?.map(card => {
                        return (

                          <WorkCards title={card?.attributes?.Title} para={card?.attributes?.para} imageurl={card?.attributes?.imageUrl?.data?.attributes?.url} cardText={card?.attributes?.shortdesc} backcolor={card?.attributes?.buttoncolor} tags={card?.attributes?.tags} desc={card?.attributes?.Description} previewlink={card?.attributes?.previewlink} sourcecodelink={card?.attributes?.sourcecodelink}></WorkCards>

                        )
                      })) :
                      (
                        <Temporary></Temporary>
                      )
                    }

                    {/* <LazySpinnerLoader></LazySpinnerLoader> */}
                  </Suspense>)
                // (
                //   <LazySpinnerLoader></LazySpinnerLoader>
                // )
                :
                (
                  <NoRecord></NoRecord>
                )
             
            }
          </div>



        </div>

      </div>
      <div className="pagination-content">
        <ul class="pagination-ul">
          <Page data={data} cards={cards} setCards={setCards} chunckSize={chunckSize}></Page>
        </ul>
      </div>
    </div>
  );
}

export default SearchCards;
