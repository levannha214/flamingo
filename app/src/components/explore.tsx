import { useEffect, useState } from "react";
import "../styles/component.css";
import "../styles/scrollLoading.css";
import banner from "../assets/image/explore_banner.png";

import img1 from "../assets/image/Frame_181.png";
import img2 from "../assets/image/Frame_182.png";
import img3 from "../assets/image/Frame_183.png";
import img4 from "../assets/image/Frame_184.png";
import img5 from "../assets/image/Frame_185.png";
import img6 from "../assets/image/Frame_186.png";
import mixed_with from "../assets/image/mixed_with_tiktok.png";

interface porps {
  desktop: boolean;
  mobile: boolean;
  large: boolean;
  windowCroll: number;
  pc: boolean;
}
const Explore: React.FC<porps> = ({
  large,
  desktop,
  mobile,
  windowCroll,
  pc,
}) => {
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
    if (menuTime) {
      setTimeout(() => {
        if (img === 5) {
          setImg(0);
        } else {
          setImg(img + 1);
        }
      }, 3000);
    }
  }, [img]);
  return (
    <section className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 bg-black explore">
      {desktop ? (
        mobile ? (
          <div className="col-sm-12 col-12 col-md-12  p-4 better-convos-title ">
            <div
              className={
                windowCroll > 150
                  ? "col-md-12 col-12 col-sm-12  d-flex scrollWhiteTitle "
                  : "col-md-12 col-12 col-sm-12  d-flex "
              }
              style={{ fontSize: "2.5rem" }}
            >
              <span
                style={
                  windowCroll > 150 ? { color: "#ffffff" } : { color: "#000" }
                }
              >
                EXPLORE
              </span>
            </div>
            <div
              className={
                windowCroll > 200
                  ? "col-md-12 col-12 col-sm-12  d-flex scrollWhiteTitle "
                  : "col-md-12 col-12 col-sm-12  d-flex "
              }
              style={{ fontSize: "2.5rem" }}
            >
              <span className="col-md-2 col-2 col-sm-2"></span>
              <span
                style={
                  windowCroll > 200 ? { color: "#ffffff" } : { color: "#000" }
                }
              >
                FLAMINGO CARDS
              </span>
            </div>
          </div>
        ) : (
          <div className="col-sm-12 col-12 col-md-12  p-4 better-convos-title ">
            <div
              className={
                windowCroll > 1000
                  ? "col-md-12 col-12 col-sm-12  d-flex scrollWhiteTitle "
                  : "col-md-12 col-12 col-sm-12  d-flex "
              }
              style={{ fontSize: "3.4rem" }}
            >
              <span
                style={
                  windowCroll > 1000 ? { color: "#ffffff" } : { color: "#000" }
                }
              >
                EXPLORE
              </span>
            </div>
            <div
              className={
                windowCroll > 1100
                  ? "col-md-12 col-12 col-sm-12  d-flex scrollWhiteTitle "
                  : "col-md-12 col-12 col-sm-12  d-flex "
              }
              style={{ fontSize: "3.4rem" }}
            >
              <span className="col-md-2 col-2 col-sm-2"></span>
              <span
                style={
                  windowCroll > 1100 ? { color: "#ffffff" } : { color: "#000" }
                }
              >
                FLAMINGO CARDS
              </span>
            </div>
          </div>
        )
      ) : pc ? (
        <div className="col-md-12 col-xl-12 col-lg-12 col-xxl-12 p-5">
          <div
            className={
              windowCroll > 1700
                ? "col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex text-white scrollWhiteTitle"
                : "col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex waiting-line"
            }
            style={
              large
                ? { fontSize: "5.5rem", fontWeight: 600, lineHeight: 1 }
                : { fontSize: "7rem", fontWeight: 600, lineHeight: 1 }
            }
          >
            <span>EXPLORE</span>
          </div>
          <div
            className={
              windowCroll > 1800
                ? "col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex text-white scrollWhiteTitle"
                : "col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex waiting-line"
            }
            style={
              large
                ? { fontSize: "5.5rem", fontWeight: 600, lineHeight: 1 }
                : { fontSize: "7rem", fontWeight: 600, lineHeight: 1 }
            }
          >
            <span className="col-md-2 col-lg-2 col-xl-2 col-xxl-2"></span>
            <span>FLAMINGO CARDS</span>
          </div>
        </div>
      ) : (
        <div className="col-md-12 col-xl-12 col-lg-12 col-xxl-12 p-5">
          <div
            className={
              windowCroll > 1350
                ? "col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex text-white scrollWhiteTitle"
                : "col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex waiting-line"
            }
            style={
              large
                ? { fontSize: "5.5rem", fontWeight: 600, lineHeight: 1 }
                : { fontSize: "7rem", fontWeight: 600, lineHeight: 1 }
            }
          >
            <span>EXPLORE</span>
          </div>
          <div
            className={
              windowCroll > 1400
                ? "col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex text-white scrollWhiteTitle"
                : "col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex waiting-line"
            }
            style={
              large
                ? { fontSize: "5.5rem", fontWeight: 600, lineHeight: 1 }
                : { fontSize: "7rem", fontWeight: 600, lineHeight: 1 }
            }
          >
            <span className="col-md-2 col-lg-2 col-xl-2 col-xxl-2"></span>
            <span>FLAMINGO CARDS</span>
          </div>
        </div>
      )}
      {mobile ? (
        <></>
      ) : desktop ? (
        <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 bg-back text-white p-5 d-flex justify-content-center">
          <div className="col-sm-12 col-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
            <img
              src={banner}
              alt=""
              className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
            />
          </div>
        </div>
      ) : (
        <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 bg-back text-white p-5 d-flex justify-content-center">
          <div className="col-sm-12 col-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 ">
            <img
              src={banner}
              alt=""
              className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
            />
          </div>
        </div>
      )}
      {mobile ? (
        <div className="col-12 col-md-12  bg-back text-white p-3">
          <div className="col-12 col-md-12 d-flex justify-content-center">
            {" "}
            <h1
              className={
                windowCroll > 250 ? " scrollWhiteTextRight" : "text-black"
              }
              style={{ textAlign: "center" }}
            >
              Question packs<br></br> for every purpose
            </h1>
          </div>
          <div className="col-12 col-md-12 d-flex justify-content-center">
            <h5
              className={
                windowCroll > 300 ? " scrollWhiteTextRight" : "text-black"
              }
              style={{ textAlign: "center", fontSize: "0.8rem" }}
            >
              Questions are an integral part of our lives.<br></br>
              Forming the bedrock of our ability to connect.<br></br>
              That is why we made flamingo cards.
            </h5>
          </div>
          <div className="col-12 col-md-12 d-flex justify-content-center">
            <button
              className={
                windowCroll > 350
                  ? "text-white my-3 btnExpore scrollWhiteTextRight"
                  : " my-3 "
              }
            >
              EXPLORE ALL CARD DECKS
            </button>
          </div>
        </div>
      ) : desktop ? (
        <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 bg-back text-white p-5">
          <div
            className={
              windowCroll > 1600 ? " scrollWhiteTextRight" : "text-black"
            }
          >
            <h1>
              Question packs<br></br> for every purpose
            </h1>
          </div>
          <div
            className={
              windowCroll > 1700 ? " scrollWhiteTextRight" : "text-black"
            }
          >
            <h5>
              Questions are an integral part of our lives.<br></br>
              Forming the bedrock of our ability to connect.<br></br>
              That is why we made flamingo cards.
            </h5>
          </div>
        </div>
      ) : pc ? (
        <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 bg-back text-white p-5">
          <div
            className={
              windowCroll > 2900 ? " scrollWhiteTextRight" : "text-black"
            }
          >
            <h1>
              Question packs<br></br> for every purpose
            </h1>
          </div>
          <div
            className={
              windowCroll > 3000 ? " scrollWhiteTextRight" : "text-black"
            }
          >
            <h5>
              Questions are an integral part of our lives.<br></br>
              Forming the bedrock of our ability to connect.<br></br>
              That is why we made flamingo cards.
            </h5>
          </div>
        </div>
      ) : (
        <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 bg-back text-white p-5">
          <div
            className={
              windowCroll > 2200 ? " scrollWhiteTextRight" : "text-black"
            }
          >
            <h1>
              Question packs<br></br> for every purpose
            </h1>
          </div>
          <div
            className={
              windowCroll > 2300 ? " scrollWhiteTextRight" : "text-black"
            }
          >
            <h5>
              Questions are an integral part of our lives.<br></br>
              Forming the bedrock of our ability to connect.<br></br>
              That is why we made flamingo cards.
            </h5>
          </div>
        </div>
      )}

      {mobile ? (
        <div className=" col-12 col-sm-12 p-3">
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
                {desktop ? (
                  <div
                    className={
                      windowCroll > 1800 + index * 40
                        ? " scrollWhiteTextRight"
                        : "text-black "
                    }
                  >
                    <span
                      className={index === img ? "nextImgHover" : "nullImg"}
                      onMouseOver={() => {
                        setMenutime(false);
                        setImg(index);
                        setTimeout(() => {
                          setMenutime(true);
                        }, 3000);
                      }}
                      style={
                        index === img
                          ? { color: "#ffffff" }
                          : { color: "#999999" }
                      }
                    >
                      {item.title}
                    </span>
                  </div>
                ) : pc ? (
                  <div
                    className={
                      windowCroll > 3100 + index * 50
                        ? " scrollWhiteTextRight"
                        : "text-black "
                    }
                  >
                    <span
                      className={index === img ? "nextImgHover" : "nullImg"}
                      onMouseOver={() => {
                        setMenutime(false);
                        setImg(index);
                        setTimeout(() => {
                          setMenutime(true);
                        }, 3000);
                      }}
                      style={
                        index === img
                          ? { color: "#ffffff" }
                          : { color: "#999999" }
                      }
                    >
                      {item.title}
                    </span>
                  </div>
                ) : (
                  <div
                    className={
                      windowCroll > 2350 + index * 50
                        ? " scrollWhiteTextRight"
                        : "text-black "
                    }
                  >
                    <span
                      className={index === img ? "nextImgHover" : "nullImg"}
                      onMouseOver={() => {
                        setMenutime(false);
                        setImg(index);
                        setTimeout(() => {
                          setMenutime(true);
                        }, 3000);
                      }}
                      style={
                        index === img
                          ? { color: "#ffffff" }
                          : { color: "#999999" }
                      }
                    >
                      {item.title}
                    </span>
                  </div>
                )}
              </div>
            ))}
            {desktop ? (
              <div
                className={
                  windowCroll > 2100 ? " scrollWhiteTextRight" : "waiting-line "
                }
              >
                <button className="text-white my-3 btnExpore">
                  EXPLORE ALL CARD DECKS
                </button>
              </div>
            ) : (
              <div
                className={
                  windowCroll > 2800 ? " scrollWhiteTextRight" : "waiting-line "
                }
              >
                <button className="text-white my-3 btnExpore">
                  EXPLORE ALL CARD DECKS
                </button>
              </div>
            )}
          </div>
          <div
            className={
              desktop
                ? "col-sm-6 col-md-6 py-3"
                : " col-md-6 col-lg-6 col-xl-6 col-xxl-6"
            }
          >
            {desktop ? (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
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
            ) : (
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
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
            )}
          </div>
        </div>
      )}
      {mobile ? (
        <></>
      ) : desktop ? (
        <div
          className={
            desktop
              ? "col-sm-12 col-md-12 bg-back text-white p-3 d-flex"
              : "col-md-12 col-lg-12 col-xl-12 col-xxl-12 bg-back text-white p-5 d-flex"
          }
        >
          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <img
              src={mixed_with}
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
            <div
              className={
                windowCroll > 2100 ? " scrollWhiteTextRight" : "waiting-line "
              }
            >
              <h1 style={desktop ? { fontSize: "2rem" } : { fontSize: "3rem" }}>
                Mixed with <br></br>TikTok Slideshows
              </h1>
            </div>
            <div
              className={
                windowCroll > 2150 ? " scrollWhiteTextRight" : "waiting-line "
              }
            >
              <h5
                style={desktop ? { fontSize: "1rem" } : { fontSize: "1.2rem" }}
              >
                Get inspired by a collection of questions<br></br>
                compiled on TikTok slideshow reels.
              </h5>
            </div>
            <div
              className={
                windowCroll > 2200 ? " scrollWhiteTextRight" : "waiting-line "
              }
            >
              <button className="text-white my-3 btnExpore">
                EXPLORE FLAMINGO’S TIKTOK
              </button>
            </div>
          </div>
        </div>
      ) : pc ? (
        <div
          className={
            desktop
              ? "col-sm-12 col-md-12 bg-back text-white p-3 d-flex"
              : "col-md-12 col-lg-12 col-xl-12 col-xxl-12 bg-back text-white p-5 d-flex"
          }
        >
          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
            <img
              src={mixed_with}
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
            <div
              className={
                windowCroll > 3900 ? " scrollWhiteTextRight" : "waiting-line "
              }
            >
              <h1 style={desktop ? { fontSize: "2rem" } : { fontSize: "3rem" }}>
                Mixed with <br></br>TikTok Slideshows
              </h1>
            </div>
            <div
              className={
                windowCroll > 3950 ? " scrollWhiteTextRight" : "waiting-line "
              }
            >
              <h5
                style={desktop ? { fontSize: "1rem" } : { fontSize: "1.2rem" }}
              >
                Get inspired by a collection of questions<br></br>
                compiled on TikTok slideshow reels.
              </h5>
            </div>
            <div
              className={
                windowCroll > 4000 ? " scrollWhiteTextRight" : "waiting-line "
              }
            >
              <button className="text-white my-3 btnExpore">
                EXPLORE FLAMINGO’S TIKTOK
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={
            desktop
              ? "col-sm-12 col-md-12 bg-back text-white p-3 d-flex"
              : "col-md-12 col-lg-12 col-xl-12 col-xxl-12 bg-back text-white p-5 d-flex"
          }
        >
          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
            <img
              src={mixed_with}
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
            <div
              className={
                windowCroll > 3000 ? " scrollWhiteTextRight" : "waiting-line "
              }
            >
              <h1 style={desktop ? { fontSize: "2rem" } : { fontSize: "3rem" }}>
                Mixed with <br></br>TikTok Slideshows
              </h1>
            </div>
            <div
              className={
                windowCroll > 3050 ? " scrollWhiteTextRight" : "waiting-line "
              }
            >
              <h5
                style={desktop ? { fontSize: "1rem" } : { fontSize: "1.2rem" }}
              >
                Get inspired by a collection of questions<br></br>
                compiled on TikTok slideshow reels.
              </h5>
            </div>
            <div
              className={
                windowCroll > 3100 ? " scrollWhiteTextRight" : "waiting-line "
              }
            >
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
