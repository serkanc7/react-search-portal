import React, { useEffect, useState } from "react";
import "./Pagination.scss";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/searchSlice";

function Pagination({pages}) {

  const dispatch = useDispatch();
  const numOfPages = [];
  


  for (let i = 1; i <= pages; i++) {
    numOfPages.push(i);
  }

  const [currentButton, setCurrentButton] = useState(1);
  

  useEffect(() => {

    dispatch(setCurrentPage(currentButton));
  },[currentButton,dispatch])



  return (
    <div className="pagination">
      <button
        className="pagination__button"
        onClick={() =>
          setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
        }
      >
        Previous
      </button>
      {numOfPages.map((page, i) => {
        return (
          <button
            key={i}
            className={
              currentButton === page
                ? "pagination__button active"
                : "pagination__button"
            }
            onClick={() => {
              setCurrentButton(page);
            }}
          >
            {page}
          </button>
        );
      })}
      <button
        className="pagination__button"
        onClick={() =>
          setCurrentButton((prev) =>
            prev === numOfPages.length ? prev : prev + 1
          )
        }
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
