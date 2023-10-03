import { useEffect, useState } from "react";
import "../styles/component.css";
import img1 from "../assets/image/altaloma-2-1500w.jpg";
import img2 from "../assets/image/emmeline-1500w.jpg";
import img3 from "../assets/image/matsuya-2-1500w.jpg";
import img4 from "../assets/image/idrah-750w.jpg";
import img5 from "../assets/image/loam-750w.jpg";
import img6 from "../assets/image/growwell-1500w.jpg";

interface porps {
  desktop: boolean;
  mobile: boolean;
  large: boolean;
  windowCroll: number;
}
const Explore: React.FC<porps> = ({ large, desktop, mobile, windowCroll }) => {
  const [animation, setAnimation] = useState(false);
  const [menuTime, setMenutime] = useState(true);
  const [img, setImg] = useState(0);
  const listImage = [
    {
      url: img1,
      title: "Couple Convos",
      color: "yellow",
    },
    {
      url: img2,
      title: "Deep Questions",
      color: "red",
    },
    {
      url: img3,
      title: "Party Challenges",
      color: "orange",
    },
    {
      url: img4,
      title: "Pregame Dares",
      color: "blue",
    },
    {
      url: img5,
      title: "Self-Reflection",
      color: "pink",
    },
    {
      url: img6,
      title: "Friend Convos",
      color: "green",
    },
  ];

  useEffect(() => {
    if (animation) {
      setTimeout(() => {
        setAnimation(false);
      }, 5000);
    } else {
      setTimeout(() => {
        setAnimation(true);
      }, 5000);
    }
    if (menuTime) {
      setTimeout(() => {
        if (img === 5) {
          setImg(0);
        } else {
          setImg(img + 1);
        }
      }, 3000);
    }
  }, [animation, img]);
  return (
    <section className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 bg-black explore">
      {desktop ? (
        <div className="col-sm-12 col-12 col-md-12  p-4">
          <div
            className="col-md-12 col-12 col-sm-12  d-flex text-white"
            style={mobile ? { fontSize: "2.5rem" } : { fontSize: "3.4rem" }}
          >
            <span className={animation ? "textAnimation4" : ""}>EXPLORE</span>
          </div>
          <div
            className="col-md-12 col-12 col-sm-12 d-flex text-white"
            style={mobile ? { fontSize: "2.5rem" } : { fontSize: "3.4rem" }}
          >
            <span className="col-md-2 col-2 col-sm-2"></span>
            <span className={animation ? "textAnimation5" : ""}>
              FLAMINGO CARDS
            </span>
          </div>
        </div>
      ) : (
        <div className="col-md-12 col-xl-12 col-lg-12 col-xxl-12 p-5">
          <div
            className="col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex text-white"
            style={large ? { fontSize: "5.5rem" } : { fontSize: "7rem" }}
          >
            <span className={animation ? "textAnimation4" : ""}>EXPLORE</span>
          </div>
          <div
            className="col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex text-white"
            style={large ? { fontSize: "5.5rem" } : { fontSize: "7rem" }}
          >
            <span className="col-md-2 col-lg-2 col-xl-2 col-xxl-2"></span>
            <span className={animation ? "textAnimation5" : ""}>
              FLAMINGO CARDS
            </span>
          </div>
        </div>
      )}
      {mobile ? (
        <></>
      ) : (
        <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 bg-back text-white p-5 d-flex justify-content-center">
          <div
            className="col-sm-12 col-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8"
            style={
              desktop
                ? { height: 400, backgroundColor: "lightgray" }
                : { height: 500, backgroundColor: "lightgray" }
            }
          ></div>
        </div>
      )}
      {mobile ? (
        <div className="col-12 col-md-12  bg-back text-white p-3">
          <div className="col-12 col-md-12 d-flex justify-content-center">
            {" "}
            <h1 style={{ textAlign: "center" }}>
              Question packs<br></br> for every purpose
            </h1>
          </div>
          <div className="col-12 col-md-12 d-flex justify-content-center">
            <h5 style={{ textAlign: "center", fontSize: "0.8rem" }}>
              Questions are an integral part of our lives.<br></br>
              Forming the bedrock of our ability to connect.<br></br>
              That is why we made flamingo cards.
            </h5>
          </div>
          <div className="col-12 col-md-12 d-flex justify-content-center">
            <button className="text-white my-3 btnExpore">
              EXPLORE ALL CARD DECKS
            </button>
          </div>
        </div>
      ) : (
        <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 bg-back text-white p-5">
          <h1>
            Question packs<br></br> for every purpose
          </h1>
          <h5>
            Questions are an integral part of our lives.<br></br>
            Forming the bedrock of our ability to connect.<br></br>
            That is why we made flamingo cards.
          </h5>
        </div>
      )}
      {mobile ? (
        <div className="col-12 col-sm-12 p-3">
          {listImage.map((item, index) =>
            index === img ? (
              <img
                src={item.url}
                alt={item.title}
                className="col-sm-12 col-12 redImg"
              />
            ) : (
              <></>
            )
          )}
          <div className="col-12 col-sm-12 d-flex justify-content-center p-2 ">
            {listImage.map((item, index) => (
              <button
                className="m-2 redImg"
                style={
                  img === index
                    ? { backgroundColor: item.color, border: "none" }
                    : { backgroundColor: "lightgray", border: "none" }
                }
              ></button>
            ))}
            ;
          </div>
        </div>
      ) : (
        <div
          className={
            desktop
              ? "col-sm-12 col-md-12 p-3 bg-back text-white d-flex"
              : "col-md-12 col-lg-12 col-xl-12 col-xxl-12 bg-back text-white p-5 d-flex"
          }
        >
          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex flex-column">
            {listImage.map((item, index) => (
              <div
                style={
                  desktop ? { fontSize: "1.5rem" } : { fontSize: "2.5rem" }
                }
              >
                <span
                  className={index === img ? "nextImg" : "nullImg"}
                  onMouseOver={() => {
                    setMenutime(false);
                    setImg(index);
                    setTimeout(() => {
                      setMenutime(true);
                    }, 3000);
                  }}
                  style={
                    index === img ? { color: "#ffffff" } : { color: "#999999" }
                  }
                >
                  {item.title}
                </span>
              </div>
            ))}
            <div>
              <button className="text-white my-3 btnExpore">
                EXPLORE ALL CARD DECKS
              </button>
            </div>
          </div>
          <div
            className={
              desktop
                ? "col-sm-6 col-md-6 py-3"
                : " col-md-6 col-lg-6 col-xl-6 col-xxl-6"
            }
          >
            {listImage.map((item, index) =>
              index === img ? (
                <img
                  src={item.url}
                  alt={item.title}
                  className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 retImg my-2"
                />
              ) : (
                <></>
              )
            )}
          </div>
        </div>
      )}
      {mobile ? (
        <></>
      ) : (
        <div
          className={
            desktop
              ? "col-sm-12 col-md-12 bg-back text-white p-3 d-flex"
              : "col-md-12 col-lg-12 col-xl-12 col-xxl-12 bg-back text-white p-5 d-flex"
          }
        >
          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <img
              src={img1}
              alt=""
              className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
            />
          </div>
          <div
            className={
              desktop
                ? "col-sm-6 col-md-6 px-4 "
                : "col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex p-5 flex-column"
            }
          >
            <h1 style={desktop ? { fontSize: "2rem" } : { fontSize: "3rem" }}>
              Mixed with <br></br>TikTok Slideshows
            </h1>
            <h5 style={desktop ? { fontSize: "1rem" } : { fontSize: "1.2rem" }}>
              Get inspired by a collection of questions<br></br>
              compiled on TikTok slideshow reels.
            </h5>
            <div>
              <button className="text-white my-3 btnExpore">
                EXPLORE FLAMINGO’S TIKTOK
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default Explore;
