import React, { useState } from "react";
import styles from "./carousel.module.sass";
import nature from "../../assets/nature.jpg";

function Carousel() {
  const [isCarouselOpen, setIsCarouselOpen] = useState(true);

  const scrollChanger = (status) => {
    let currentScroll =
      document.getElementsByClassName("multiimgContainer")[0].scrollLeft;
    console.log(
      "className==>",
      document.getElementsByClassName("multiimgContainer")
    );
    if (status === "increment") {
      let count = currentScroll;
      let prev = 1;
      let countLimit = 100;
      let newScr = 0;
      var timer = setInterval(() => {
        if (prev === newScr) {
          clearInterval(timer);
        }
        prev =
          document.getElementsByClassName("multiimgContainer")[0].scrollLeft;
        document.getElementsByClassName("multiimgContainer")[0].scrollLeft += 4;
        newScr =
          document.getElementsByClassName("multiimgContainer")[0].scrollLeft;
        count++;
        if (count === currentScroll + countLimit) {
          clearInterval(timer);
        }
      }, 0);
    } else {
      let count = currentScroll;
      let prev = 1;
      let countLimit = -100;
      let newScr = 0;
      var timer1 = setInterval(() => {
        if (prev === newScr) {
          clearInterval(timer1);
        }
        prev =
          document.getElementsByClassName("multiimgContainer")[0].scrollLeft;
        document.getElementsByClassName("multiimgContainer")[0].scrollLeft -= 4;
        newScr =
          document.getElementsByClassName("multiimgContainer")[0].scrollLeft;
        count--;
        if (count === currentScroll + countLimit) {
          clearInterval(timer1);
        }
      }, 0);
    }
  };

  return (
    <div className={`container`}>
      <div>
        <div
          className={`d-flex justify-content-center align-items-center cursor-pointer ${styles.carouselOpen}`}
          onClick={() => setIsCarouselOpen(!isCarouselOpen)}
        >
          {!isCarouselOpen ? (
            <i className="fas fa-chevron-up"></i>
          ) : (
            <i className="fas fa-chevron-down"></i>
          )}
        </div>
      </div>
      {isCarouselOpen && (
        <div
          className={`d-flex align-items-center justify-content-between h-100 `}
          //   style={{ minHeight: "200px" }}
        >
          <div
            className="d-flex align-items-center h-100 pe-3"
            style={{
              color: "#ffffffb8",
            }}
            onClick={() => {
              scrollChanger("decrement");
            }}
          >
            <i className="fa fa-chevron-left ps-3 cursor-pointer"></i>
          </div>
          <div className={`p-3 ${styles.multiimgContainer} multiimgContainer`}>
            {Array(50)
              .fill()
              .map((e) => (
                <div
                  className={`${styles.carouselCards} overflow-hidden p-1 ms-3`}
                >
                  <div className={`${styles.carouselCardsHeader} p-1`}>
                    Heading Lorem Ipsum{" "}
                  </div>
                  <div
                    className={`d-flex p-1 ${styles.carouselNewsContainer}`} // flex-column justify-content-between
                  >
                    <div
                      className={`me-2 d-flex bg-light justify-content-center align-items-center overflow-hidden p-1 ${styles.carouselNewsImgContainer}`}
                    >
                      <img src={nature} height={"90px"} />
                    </div>
                    <div className={`${styles.carouselNewsDes}`}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div
            className="d-flex align-items-center h-100 ps-3"
            style={{
              color: "#ffffffb8",
            }}
            onClick={() => {
              scrollChanger("increment");
            }}
          >
            <i className="fa fa-chevron-right pe-3 cursor-pointer"></i>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carousel;
