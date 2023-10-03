import { useEffect, useState } from "react";
import "../styles/component.css";
import video from "../assets/video/steps-animation-3.mp4";
interface porps {
  desktop: boolean;
  large: boolean;
  windowCroll: number;
}
//1320
const MakeMemories: React.FC<porps> = ({ large, desktop, windowCroll }) => {
  const [animation, setAnimation] = useState(false);
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
  }, [animation]);
  return (
    <div
      className={
        desktop
          ? "make-menories  col-sm-12 col-md-12   bg-white p-3 "
          : "make-menories  col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 bg-white p-5"
      }
    >
      {desktop ? (
        <div
          className="col-sm-12 col-md-12 col-lg-12 d-flex flex-column"
          style={{ fontSize: "3.5rem" }}
        >
          <div className=" col-sm-12 col-md-12 col-lg-12  d-flex justify-content-start ">
            <span className={animation ? "textAnimation" : ""}>
              MAKE MEMORIES
            </span>
          </div>
          <div className=" col-sm-12 col-md-12 col-lg-12  d-flex justify-content-end">
            <span className={animation ? "textAnimation2" : ""}>
              ONE CARD AT
            </span>
          </div>
          <div className=" col-sm-12 col-md-12 col-lg-12   d-flex ">
            <span className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 "></span>
            <span className={animation ? "textAnimation3" : ""}> A TIME.</span>
          </div>
        </div>
      ) : (
        <div
          className="  col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex flex-column"
          style={large ? { fontSize: "6rem" } : { fontSize: "7rem" }}
        >
          <div className="  col-md-12 col-lg-12 col-xl-12 col-xxl-12  d-flex justify-content-start ">
            <span className={animation ? "textAnimation" : ""}>
              MAKE MEMORIES
            </span>
          </div>
          <div className="  col-md-12 col-lg-12 col-xl-12 col-xxl-12  d-flex justify-content-end">
            <span className={animation ? "textAnimation2" : ""}>
              ONE CARD AT
            </span>
          </div>
          <div className="  col-md-12 col-lg-12 col-xl-12 col-xxl-12  d-flex ">
            <span className=" col-md-2 col-lg-2 col-xl-2 col-xxl-2 "></span>
            <span className={animation ? "textAnimation3" : ""}> A TIME.</span>
          </div>
        </div>
      )}
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex ">
        <div
          className={
            desktop
              ? "col-sm-6 col-md-6 py-5 px-2"
              : " col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-5"
          }
        >
          <video
            className={
              desktop
                ? "col-sm-12 col-md-12   my-5"
                : "col-md-12 col-lg-12 col-xl-12 col-xxl-12  "
            }
            controls
            autoPlay
            muted
            loop
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div
          className={
            desktop
              ? "col-sm-6 col-md-6 py-5 text-make-memories"
              : "col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-5 text-make-memories"
          }
        >
          <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex flex-wrap">
            <h1
              className="col-md-12 col-lg-2 col-xl-2 col-xxl-2"
              style={desktop ? { fontSize: "3rem" } : { fontSize: "7rem" }}
            >
              1
            </h1>
            <div className="col-md-12 col-lg-10 col-xl-10 col-xxl-10">
              <h3
                style={desktop ? { fontSize: "1.5rem" } : { fontSize: "2rem" }}
              >
                Perception
              </h3>
              <h5
                style={
                  desktop ? { fontSize: "0.8rem" } : { fontSize: "1.2rem" }
                }
              >
                We all make assumptions about each other but how often do we
                ever put them to the test? Level 1 allows you to see what first
                impression you give off and how well you read others..
              </h5>
            </div>
          </div>
          <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex flex-wrap my-3">
            <h1
              className="col-md-12 col-lg-2 col-xl-2 col-xxl-2"
              style={desktop ? { fontSize: "3rem" } : { fontSize: "7rem" }}
            >
              2
            </h1>
            <div className="col-md-12 col-lg-10 col-xl-10 col-xxl-10">
              <h3
                style={desktop ? { fontSize: "1.5rem" } : { fontSize: "2rem" }}
              >
                Connection
              </h3>
              <h5
                style={
                  desktop ? { fontSize: "0.8rem" } : { fontSize: "1.2rem" }
                }
              >
                This level digs a bit deeper. 50 rarely asked questions, but
                warning emotions may arise..
              </h5>
            </div>
          </div>
          <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex flex-wrap my-3">
            <h1
              className="col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-2"
              style={desktop ? { fontSize: "3rem" } : { fontSize: "7rem" }}
            >
              3
            </h1>
            <div className="col-md-12 col-lg-10 col-xl-10 col-xxl-10 ">
              <h3
                style={desktop ? { fontSize: "1.5rem" } : { fontSize: "2rem" }}
              >
                Reflection
              </h3>
              <h5
                style={
                  desktop ? { fontSize: "0.8rem" } : { fontSize: "1.2rem" }
                }
              >
                Time to reflect.
              </h5>
              <button className=" bg-white my-5 buttonComponent">
                DOWNLOAD FLAMINGO CARDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MakeMemories;
