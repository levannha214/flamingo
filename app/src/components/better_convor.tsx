import "../styles/component.css";
import image1 from "../assets/image/iPhone_12_04_Standard Mockup_1.png";
import image2 from "../assets/image/iPhone_12_04 Standard Mockup_2_1.png";
import image3 from "../assets/image/iPhone_12_04_Standard Mockup_3_1.png";
import "../styles/component.css";
import "../styles/scrollLoading.css";

interface porps {
  desktop: boolean;
  mobile: boolean;
  large: boolean;
  windowCroll: number;
}
const BetterConvos: React.FC<porps> = ({
  large,
  desktop,
  mobile,
  windowCroll,
}) => {
  const listItem = [
    {
      image: image1,
      button: "LINK TO DOWNLOAD FLAMINGO CARDS",
      title: (
        <h3
          className="better-convos-title"
          style={desktop ? { fontSize: "2rem" } : { fontSize: "3rem" }}
        >
          Download the app <br></br>on the mobile stores
        </h3>
      ),
    },
    {
      image: image2,
      button: undefined,
      title: (
        <h3
          className="better-convos-title"
          style={desktop ? { fontSize: "2rem" } : { fontSize: "3rem" }}
        >
          Add two to <br></br>twelve names
        </h3>
      ),
    },
    {
      image: image3,
      button: "EXPLORE #FLAMINGOCARDS",
      title: (
        <h3
          className="better-convos-title"
          style={desktop ? { fontSize: "2rem" } : { fontSize: "3rem" }}
        >
          Enjoy from a variety <br></br>of card packs themes
        </h3>
      ),
    },
  ];
  const text = [
    "Words are the vibrant heartbeat of our human existence. They",
    "serve as the medium through which we navigate the world,",
    "build connections, understand our surroundings, and find",
    "enjoyment in movies and TV shows. Each day, we are immersed",
    "in a torrent of words, encountering an average of over 30,000+.",
    " At the core of it all, questions play a pivotal role as",
    " conversations would simply halt without them",
  ];
  return (
    <section
      className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-5 text-white better-convos"
      style={{ backgroundColor: "rgb(121 138 161)" }}
    >
      {desktop ? (
        mobile ? (
          <div className="col-12 col-sm-12  col-md-12 ">
            <div className="col-12 col-sm-12 col-md-12 my-5">
              <h1
                className={
                  windowCroll > 850
                    ? "better-convos-title col-12 col-sm-12 col-md-12 scrollWhiteTextTop"
                    : "better-convos-title col-12 col-sm-12 col-md-12"
                }
                style={
                  windowCroll > 850
                    ? {
                        fontSize: "2.5rem",
                        textAlign: "center",
                        color: "#ffffff",
                      }
                    : {
                        fontSize: "2.5rem",
                        textAlign: "center",
                        color: "rgb(121 138 161)",
                      }
                }
              >
                BETTER CONVOS<br></br> MADE EASY
              </h1>
              <h4
                className={
                  windowCroll > 950
                    ? "col-12 col-sm-12 col-md-12 scrollWhiteTextTop"
                    : "col-12 col-sm-12 col-md-12"
                }
                style={
                  windowCroll > 950
                    ? {
                        fontSize: "0.8rem",
                        textAlign: "center",
                        fontWeight: 600,
                        color: "#ffffff",
                      }
                    : {
                        fontSize: "0.8rem",
                        textAlign: "center",
                        fontWeight: 600,
                        color: "rgb(121 138 161)",
                      }
                }
              >
                {text.map((item) => (
                  <>
                    {item}
                    <br></br>
                  </>
                ))}
              </h4>
              <div className="col-12 col-sm-12 col-md-12 my-5 d-flex justify-content-center">
                {mobile ? (
                  <span
                    className={
                      windowCroll > 1000 ? "btnExpore scrollWhiteTextTop" : ""
                    }
                  >
                    get the app
                  </span>
                ) : (
                  <button className="rounded-pill px-5 py-2 ">
                    get the app
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="col-12 col-sm-12  col-md-12 ">
            <div className="col-12 col-sm-12 col-md-12 my-5">
              <h1
                className={
                  windowCroll > 2400
                    ? "better-convos-title col-12 col-sm-12 col-md-12 scrollWhiteTextTop"
                    : "better-convos-title col-12 col-sm-12 col-md-12"
                }
                style={
                  windowCroll > 2400
                    ? {
                        fontSize: "3.5rem",
                        textAlign: "center",
                        color: "#ffffff",
                      }
                    : { color: "rgb(121 138 161)" }
                }
              >
                BETTER CONVOS<br></br> MADE EASY
              </h1>
              <h4
                className={
                  windowCroll > 2500
                    ? "col-12 col-sm-12 col-md-12 scrollWhiteTextTop"
                    : "col-12 col-sm-12 col-md-12 "
                }
                style={
                  windowCroll > 2500
                    ? {
                        fontSize: "1rem",
                        textAlign: "center",
                        fontWeight: 600,
                        color: "#ffffff",
                      }
                    : {
                        fontSize: "1rem",
                        textAlign: "center",
                        fontWeight: 600,
                        color: "rgb(121 138 161)",
                      }
                }
              >
                {text.map((item) => (
                  <>
                    {item}
                    <br></br>
                  </>
                ))}
              </h4>
              <div className="col-12 col-sm-12 col-md-12 my-5 d-flex justify-content-center">
                {mobile ? (
                  <span className="">get the app</span>
                ) : (
                  <button
                    className={
                      windowCroll > 2600
                        ? "rounded-pill px-5 py-2 scrollWhiteTextTop"
                        : "rounded-pill px-5 py-2 "
                    }
                  >
                    get the app
                  </button>
                )}
              </div>
            </div>
          </div>
        )
      ) : (
        <div className=" col-xl-12 col-xxl-12 col-md-12 col-lg-12">
          <div className="col-xl-12 col-xxl-12 col-lg-12 my-5">
            <div
              className={windowCroll > 3500 ? "scrollWhiteTitle " : ""}
              style={
                windowCroll > 3500
                  ? { color: "#ffffff" }
                  : { color: "rgb(121 138 161)" }
              }
            >
              <h1
                className="better-convos-title "
                style={large ? { fontSize: "6rem" } : { fontSize: "7rem" }}
              >
                BETTER CONVOS <br></br>MADE EASY
              </h1>
            </div>
            {text.map((item, index) => (
              <h5
                className={
                  windowCroll > 3700 + index * 30 ? "scrollWhiteTextRight " : ""
                }
                style={
                  windowCroll > 3700 + index * 30
                    ? { lineHeight: 0.8, color: "#ffffff" }
                    : { color: "rgb(121 138 161)" }
                }
              >
                {item}
              </h5>
            ))}
            <div
              className={
                windowCroll > 3900 ? "scrollBlackTextTop" : "waiting-line"
              }
            >
              <button className="rounded-pill px-4 py-2 my-5">
                get the app
              </button>
            </div>
          </div>
        </div>
      )}
      {listItem.map((item, index) =>
        mobile ? (
          <div
            style={{ borderTop: "1px solid #ffffff" }}
            className="col-12 col-sm-12 "
          >
            <div
              className={
                windowCroll > 1150 + index * 300
                  ? "scrollBlackTextRight "
                  : "waiting-line"
              }
            >
              <img src={item.image} alt="" className="col-sm-12 col-12 " />
            </div>
            <div
              className={
                windowCroll > 1300 + index * 300
                  ? "col-12 col-sm-12 p-3 scrollWhiteTextTop"
                  : " col-12 col-sm-12 p-3"
              }
              style={
                windowCroll > 1300 + index * 300
                  ? { lineHeight: 0.8, color: "#ffffff" }
                  : { color: "rgb(121 138 161)" }
              }
            >
              {item.title}
              <div>
                {" "}
                <span className="btnExpore py-1">{item.button}</span>{" "}
              </div>
            </div>
          </div>
        ) : desktop ? (
          <div
            style={{ borderTop: "1px solid #ffffff" }}
            className={
              desktop
                ? "col-12 col-sm-12 d-flex "
                : " col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex"
            }
          >
            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-between flex-column py-3">
              <div
                className={windowCroll > 3000 ? "scrollWhiteTextRight" : ""}
                style={
                  windowCroll > 3000 + index * 300
                    ? { color: "#ffffff" }
                    : { color: "rgb(121 138 161)" }
                }
              >
                {item.title}
              </div>
              <div
                className={
                  windowCroll > 3000 + index * 300
                    ? "scrollWhiteTextRight"
                    : "waiting-line"
                }
              >
                {" "}
                <span
                  style={
                    windowCroll > 3300 + index * 300
                      ? { color: "#ffffff " }
                      : { color: "rgb(121 138 161)" }
                  }
                  className={
                    windowCroll > 3300 + index * 300 ? "btnExpore" : ""
                  }
                >
                  {item.button}
                </span>{" "}
              </div>
            </div>
            <div
              className={
                windowCroll > 3100 + index * 300
                  ? "col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-3 scrollWhiteTextRight"
                  : "col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-3 waiting-line"
              }
            >
              <img
                src={item.image}
                alt=""
                className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 "
              />
            </div>
          </div>
        ) : (
          <div
            style={{ borderTop: "1px solid #ffffff" }}
            className={
              desktop
                ? "col-12 col-sm-12 d-flex "
                : " col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex"
            }
          >
            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-between flex-column py-3">
              <div
                className={windowCroll > 4100 ? "scrollWhiteTextRight" : ""}
                style={
                  windowCroll > 4100 + index * 400
                    ? { color: "#ffffff" }
                    : { color: "rgb(121 138 161)" }
                }
              >
                {item.title}
              </div>
              <div
                className={
                  windowCroll > 4300 + index * 400
                    ? "scrollWhiteTextRight"
                    : "waiting-line"
                }
              >
                {" "}
                <span
                  style={
                    windowCroll > 4300 + index * 400
                      ? { color: "#ffffff " }
                      : { color: "rgb(121 138 161)" }
                  }
                  className="btnExpore"
                >
                  {item.button}
                </span>{" "}
              </div>
            </div>
            <div
              className={
                windowCroll > 4200 + index * 400
                  ? "col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-3 scrollWhiteTextRight"
                  : "col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-3 waiting-line"
              }
            >
              <img
                src={item.image}
                alt=""
                className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 "
              />
            </div>
          </div>
        )
      )}
    </section>
  );
};
export default BetterConvos;
