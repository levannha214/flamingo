import "../styles/component.css";
import "../styles/scrollLoading.css";
import video from "../assets/video/video_flamingo.mp4";
import { useEffect, useState } from "react";
import hero1 from "../assets/image/Frame167.png";
import hero2 from "../assets/image/Frame168.png";
import hero3 from "../assets/image/Frame169.png";
interface porps {
  desktop: boolean;
  mobile: boolean;
  large: boolean;
  windowCroll: number;
}
const Impactpul: React.FC<porps> = ({
  large,
  desktop,
  mobile,
  windowCroll,
}) => {
  const [animation, setAnimation] = useState(false);
  const hero = [
    {
      name: "",
      follow: "TikTok",
      title: "Trends and Creators",
      id: "hero1",
      avatar: hero1,
    },
    {
      name: "",
      follow: "X",
      id: "hero2",
      title: "Tweets and AU",
      avatar: hero2,
    },

    {
      name: "",
      follow: "Instagram",
      title: "Slides and Tags",
      id: "hero3",
      avatar: hero3,
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
          ? "col-12 col-sm-12 col-md-12 p-3 impactful"
          : " col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-5 impactful "
      }
    >
      {desktop ? (
        mobile ? (
          <div
            className="col-12 col-sm-12  d-flex flex-column connext-with-title"
            style={{ fontSize: "3rem" }}
          >
            <div
              className={
                windowCroll > 4050
                  ? "col-12 col-sm-12  d-flex justify-content-end scrollBlackTitle"
                  : "col-12 col-sm-12  d-flex justify-content-end "
              }
            >
              <span
                style={
                  windowCroll > 4050 ? { color: "#000" } : { color: "#f8f8f9" }
                }
                className={animation ? "textAnimation" : ""}
              >
                IMPACTFUL
              </span>
            </div>
            <div
              className={
                windowCroll > 4100
                  ? "col-12 col-sm-12 d-flex  justify-content-center scrollBlackTitle"
                  : "col-12 col-sm-12 d-flex  justify-content-center"
              }
            >
              <span
                className={animation ? "textAnimation2" : ""}
                style={
                  windowCroll > 4100 ? { color: "#000" } : { color: "#f8f8f9" }
                }
              >
                {" "}
                CONVERSATIONS
              </span>
            </div>
          </div>
        ) : (
          <div
            className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex flex-column connext-with-title"
            style={{ fontSize: "4.5rem" }}
          >
            <div
              className={
                windowCroll > 5550
                  ? "col-12 col-sm-12 col-md-12 col-lg-12  d-flex justify-content-end  scrollBlackTitle"
                  : "col-12 col-sm-12 col-md-12 col-lg-12  d-flex justify-content-end "
              }
            >
              <span
                className={animation ? "textAnimation" : ""}
                style={
                  windowCroll > 5550 ? { color: "#000" } : { color: "#f8f8f9" }
                }
              >
                IMPACTFUL
              </span>
            </div>
            <div
              className={
                windowCroll > 5600
                  ? "col-12 col-sm-12 col-md-12 col-lg-12  d-flex  justify-content-center scrollBlackTitle"
                  : "col-12 col-sm-12 col-md-12 col-lg-12  d-flex  justify-content-center"
              }
            >
              <span
                className={animation ? "textAnimation2" : ""}
                style={
                  windowCroll > 5600 ? { color: "#000" } : { color: "#f8f8f9" }
                }
              >
                {" "}
                CONVERSATIONS
              </span>
            </div>
          </div>
        )
      ) : (
        <div
          className="  col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex flex-column connext-with-title"
          style={large ? { fontSize: "8rem" } : { fontSize: "9rem" }}
        >
          <div
            style={
              windowCroll > 7450 ? { color: "#000" } : { color: "#f8f8f9" }
            }
            className={
              windowCroll > 7450
                ? "col-md-12 col-lg-12 col-xl-12 col-xxl-12  d-flex justify-content-end scrollBlackTitle"
                : "col-md-12 col-lg-12 col-xl-12 col-xxl-12  d-flex justify-content-end "
            }
          >
            <span className={animation ? "textAnimation" : ""}>IMPACTFUL</span>
          </div>
          <div
            className={
              windowCroll > 7500
                ? "col-md-12 col-lg-12 col-xl-12 col-xxl-12  d-flex justify-content-center scrollBlackTitle"
                : "col-md-12 col-lg-12 col-xl-12 col-xxl-12  d-flex justify-content-center"
            }
          >
            <span
              style={
                windowCroll > 7500 ? { color: "#000" } : { color: "#f8f8f9" }
              }
              className={animation ? "textAnimation2" : ""}
            >
              CONVERSATIONS
            </span>
          </div>
        </div>
      )}
      {mobile ? (
        <div
          className="col-12 col-sm-12 my-3"
          style={{ borderBottom: "1px solid #000" }}
        >
          <div
            className={
              windowCroll > 4100
                ? "col-12 col-sm-12 p-3 scrollBlackTextTop"
                : "waiting-line col-12 col-sm-12 p-3"
            }
          >
            <video muted autoPlay controls className="col-12 col-sm-12">
              <source src={video} type="video/mp4"></source>
            </video>
          </div>
          <div className="col-12 col-sm-12 p-3">
            <h3
              className={
                windowCroll > 4200
                  ? "connext-with-text scrollBlackTextRight"
                  : "connext-with-text "
              }
              style={
                windowCroll > 4200 ? { color: "#000" } : { color: "#f8f8f9" }
              }
            >
              {" "}
              Convos with <br></br>flamingo cards
            </h3>
            <div
              className={windowCroll > 4300 ? "scrollBlackTextRight" : ""}
              style={
                windowCroll > 4300 ? { color: "#000" } : { color: "#f8f8f9" }
              }
            >
              {" "}
              <span className="connext-with-text">
                Get a feel with #flamingocards across<br></br>
                several social media platforms.
              </span>{" "}
            </div>
          </div>
        </div>
      ) : desktop ? (
        <div
          className={
            desktop
              ? "col-12 col-sm-12 py-2 d-flex my-3"
              : " col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 py-2 d-flex my-2"
          }
        >
          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-3 ">
            {" "}
            <div
              className={
                windowCroll > 5700
                  ? "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 scrollBlackTextRight"
                  : "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 waiting-line"
              }
            >
              <video
                muted
                autoPlay
                controls
                className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
              >
                <source src={video} type="video/mp4"></source>
              </video>
            </div>
          </div>
          <div
            className={
              desktop
                ? "co-6 col-sm-6 col-md-6  py-5 px-2"
                : " col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 px-5  p-5"
            }
          >
            <div
              className={windowCroll > 5700 ? "scrollBlackTextTop" : ""}
              style={
                windowCroll > 5700 ? { color: "#000" } : { color: "#f8f8f9" }
              }
            >
              <h3
                className="connext-with-text"
                style={
                  desktop ? { fontSize: "2.8rem" } : { fontSize: "3.5rem" }
                }
              >
                {" "}
                Convos with <br></br>flamingo cards
              </h3>
            </div>
            <div
              className={windowCroll > 5750 ? "scrollBlackTextTop" : ""}
              style={
                windowCroll > 5750 ? { color: "#000" } : { color: "#f8f8f9" }
              }
            >
              {" "}
              <span
                className="connext-with-text"
                style={desktop ? { fontSize: "1rem" } : { fontSize: "1.4rem" }}
              >
                Get a feel with #flamingocards across<br></br>
                several social media platforms.
              </span>{" "}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={
            desktop
              ? "col-12 col-sm-12 py-2 d-flex my-3"
              : " col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 py-2 d-flex my-2"
          }
        >
          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-3 ">
            {" "}
            <div
              className={
                windowCroll > 7750
                  ? "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 scrollBlackTextRight"
                  : "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 waiting-line"
              }
            >
              <video
                muted
                autoPlay
                controls
                className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
              >
                <source src={video} type="video/mp4"></source>
              </video>
            </div>
          </div>
          <div
            className={
              desktop
                ? "co-6 col-sm-6 col-md-6  py-5 px-2"
                : " col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 px-5  p-5"
            }
          >
            <div
              className={windowCroll > 7750 ? "scrollBlackTextTop" : ""}
              style={
                windowCroll > 7750 ? { color: "#000" } : { color: "#f8f8f9" }
              }
            >
              <h3
                className="connext-with-text"
                style={
                  desktop ? { fontSize: "2.8rem" } : { fontSize: "3.5rem" }
                }
              >
                {" "}
                Convos with <br></br>flamingo cards
              </h3>
            </div>
            <div
              className={windowCroll > 7800 ? "scrollBlackTextTop" : ""}
              style={
                windowCroll > 7800 ? { color: "#000" } : { color: "#f8f8f9" }
              }
            >
              {" "}
              <span
                className="connext-with-text"
                style={desktop ? { fontSize: "1rem" } : { fontSize: "1.4rem" }}
              >
                Get a feel with #flamingocards across<br></br>
                several social media platforms.
              </span>{" "}
            </div>
          </div>
        </div>
      )}
      {desktop ? (
        mobile ? (
          <div
            className={
              windowCroll > 4500
                ? "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12  scrollBlackTextTop"
                : "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
            }
          >
            <div
              style={
                windowCroll > 4500 ? { color: "#000" } : { color: "#f8f8f9" }
              }
              className="col-12 col-sm-12 col-md-12 d-flex justify-content-center"
            >
              <h1
                className="connext-with-text"
                style={
                  mobile
                    ? { fontSize: "1rem", textAlign: "center" }
                    : { fontSize: "3rem " }
                }
              >
                Explore how others<br></br> interact with<br></br> flamingo
                cards
              </h1>
            </div>
          </div>
        ) : (
          <div
            className={
              windowCroll > 5900
                ? "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12  scrollBlackTextTop"
                : "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
            }
          >
            <div
              style={
                windowCroll > 5900 ? { color: "#000" } : { color: "#f8f8f9" }
              }
              className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 my-5"
            >
              <h1
                className="connext-with-text"
                style={
                  mobile
                    ? { fontSize: "1rem", textAlign: "center" }
                    : { fontSize: "3rem " }
                }
              >
                Explore how others<br></br> interact with<br></br> flamingo
                cards
              </h1>
            </div>
          </div>
        )
      ) : (
        <div
          className={
            windowCroll > 8050
              ? "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12  scrollBlackTextTop"
              : "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
          }
        >
          <div
            style={
              windowCroll > 8050 ? { color: "#000" } : { color: "#f8f8f9" }
            }
            className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 my-5"
          >
            <h1
              className="connext-with-text"
              style={
                mobile
                  ? { fontSize: "1rem", textAlign: "center" }
                  : { fontSize: "3rem " }
              }
            >
              Explore how others<br></br> interact with<br></br> flamingo cards
            </h1>
          </div>
        </div>
      )}
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex flex-wrap">
        {hero.map((hero, index) =>
          desktop ? (
            mobile ? (
              <div
                className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 p-3"
                style={mobile ? { borderBottom: "1px solid #000" } : {}}
              >
                <div
                  className={
                    windowCroll > 4600 + index * 500
                      ? " col-12 col-sm-12  p-3 p scrollBlackTextRight"
                      : "col-12 col-sm-12  p-3 waiting-line "
                  }
                >
                  <img
                    src={hero.avatar}
                    alt={hero.name}
                    className="col-12 col-sm-12  "
                  />
                </div>
                <div
                  style={
                    windowCroll > 4900 + index * 500
                      ? { color: "#000" }
                      : { color: "#f8f8f9" }
                  }
                  className={
                    windowCroll > 4900 + index * 500
                      ? "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  scrollBlackTextTop"
                      : "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                  }
                >
                  <p
                    className="connext-with-text"
                    style={
                      desktop ? { fontSize: "1.2rem" } : { fontSize: "1.4rem" }
                    }
                  >
                    {hero.follow}
                  </p>
                  <p
                    className="connext-with-text"
                    style={
                      desktop ? { fontSize: "1.2rem" } : { fontSize: "1.4rem" }
                    }
                  >
                    {hero.title}
                  </p>
                </div>
              </div>
            ) : (
              <div
                className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 p-3"
                style={mobile ? { borderBottom: "1px solid #000" } : {}}
              >
                <div
                  className={
                    windowCroll > 6400
                      ? " col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12  p-5 p scrollBlackTextRight"
                      : "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12  p-5 waiting-line "
                  }
                >
                  <img
                    src={hero.avatar}
                    alt={hero.name}
                    className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 "
                  />
                </div>
                <div
                  style={
                    windowCroll > 6400
                      ? { color: "#000" }
                      : { color: "#f8f8f9" }
                  }
                  className={
                    windowCroll > 6400
                      ? "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  scrollBlackTextTop"
                      : "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                  }
                >
                  <p
                    className="connext-with-text"
                    style={
                      desktop ? { fontSize: "1.2rem" } : { fontSize: "1.4rem" }
                    }
                  >
                    {hero.follow}
                  </p>
                  <p
                    className="connext-with-text"
                    style={
                      desktop ? { fontSize: "1.2rem" } : { fontSize: "1.4rem" }
                    }
                  >
                    {hero.title}
                  </p>
                </div>
              </div>
            )
          ) : (
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 p-3"
              style={mobile ? { borderBottom: "1px solid #000" } : {}}
            >
              <div
                className={
                  windowCroll > 8400
                    ? " col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12  p-5 p scrollBlackTextRight"
                    : "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12  p-5 waiting-line "
                }
              >
                <img
                  src={hero.avatar}
                  alt={hero.name}
                  className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 "
                />
              </div>
              <div
                style={
                  windowCroll > 8500 ? { color: "#000" } : { color: "#f8f8f9" }
                }
                className={
                  windowCroll > 8500
                    ? "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  scrollBlackTextTop"
                    : "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                }
              >
                <p
                  className="connext-with-text"
                  style={
                    desktop ? { fontSize: "1.2rem" } : { fontSize: "1.4rem" }
                  }
                >
                  {hero.follow}
                </p>
                <p
                  className="connext-with-text"
                  style={
                    desktop ? { fontSize: "1.2rem" } : { fontSize: "1.4rem" }
                  }
                >
                  {hero.title}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
export default Impactpul;
