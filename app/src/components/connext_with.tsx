import "../styles/component.css";
import { useEffect, useState } from "react";
interface porps {
  desktop: boolean;
  mobile: boolean;
  large: boolean;
}

const ConnextWith: React.FC<porps> = ({ large, desktop, mobile }) => {
  const [animation, setAnimation] = useState(false);
  const listItem = [
    {
      title: (
        <h3
          className="connext-with-text"
          style={desktop ? { fontSize: "2rem" } : { fontSize: "3rem" }}
        >
          Connect with <br></br>old friends
        </h3>
      ),
      button: "DOWNLOAD FLAMINGO CARDS",
      image: "",
    },
    {
      title: (
        <h3
          className="connext-with-text"
          style={desktop ? { fontSize: "2rem" } : { fontSize: "3rem" }}
        >
          Connect with<br></br> new friends
        </h3>
      ),
      button: "DOWNLOAD FLAMINGO CARDS",
      image: "",
    },
    {
      title: (
        <h3
          className="connext-with-text"
          style={desktop ? { fontSize: "2rem" } : { fontSize: "3rem" }}
        >
          Connect with<br></br> your significant other
        </h3>
      ),
      button: "DOWNLOAD FLAMINGO CARDS",
      image: "",
    },
    {
      title: (
        <h3
          className="connext-with-text"
          style={desktop ? { fontSize: "2rem" } : { fontSize: "3rem" }}
        >
          Connect with <br></br>yourself
        </h3>
      ),
      button: "DOWNLOAD FLAMINGO CARDS",
      image: "",
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
  }, [animation]);
  return (
    <section
      className={
        desktop
          ? "col-12 col-sm-12 col-md-12 p-3 connext-with"
          : " col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-5 connext-with "
      }
    >
      {desktop ? (
        <div
          className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex flex-column connext-with-title"
          style={mobile ? { fontSize: "4rem" } : { fontSize: "5rem" }}
        >
          <div className="col-12 col-sm-12 col-md-12 col-lg-12  d-flex justify-content-start ">
            <span className={animation ? "textAnimation" : ""}>CONNECT</span>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12  d-flex ">
            <span className="col-6 col-sm-6 col-md-6 "></span>
            <span className={animation ? "textAnimation2" : ""}>WITH...</span>
          </div>
        </div>
      ) : (
        <div
          className="  col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex flex-column connext-with-title"
          style={large ? { fontSize: "7rem" } : { fontSize: "8rem" }}
        >
          <div className="  col-md-12 col-lg-12 col-xl-12 col-xxl-12  d-flex justify-content-start ">
            <span className={animation ? "textAnimation" : ""}>CONNECT</span>
          </div>
          <div className="  col-md-12 col-lg-12 col-xl-12 col-xxl-12  d-flex ">
            <span className="col-md-6 col-lg-6 col-xl-6 col-xxl-6"></span>
            <span className={animation ? "textAnimation2" : ""}>WITH...</span>
          </div>
        </div>
      )}
      {listItem.map((item) =>
        mobile ? (
          <div
            style={{ borderBottom: "1px solid #000" }}
            className="col-12 col-sm-12 my-3"
          >
            <div
              className="col-12 col-sm-12 p-3"
              style={{ height: 100, backgroundColor: "lightgray" }}
            ></div>
            <div className="col-12 col-sm-12 p-3">
              {item.title}
              <div>
                {" "}
                <span className="connext-with-span">{item.button}</span>{" "}
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{ borderBottom: "1px solid #000" }}
            className={
              desktop
                ? "col-12 col-sm-12 py-2 d-flex my-3"
                : " col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 py-2 d-flex my-2"
            }
          >
            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-3 ">
              {" "}
              <div
                className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                style={
                  desktop
                    ? { height: 150, backgroundColor: "lightgray" }
                    : { height: 200, backgroundColor: "lightgray" }
                }
              ></div>
            </div>
            <div
              className={
                desktop
                  ? "co-6 col-sm-6 col-md-6 px-3 d-flex justify-content-between flex-column py-3"
                  : " col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 px-5 d-flex justify-content-between flex-column py-3"
              }
            >
              {item.title}
              <div>
                {" "}
                <span className="connext-with-span">{item.button}</span>{" "}
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
};
export default ConnextWith;
