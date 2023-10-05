import "../styles/component.css";
import "../styles/scrollLoading.css";

import fame175 from "../assets/image/connet_with/Frame_175_1.png";
import fame176 from "../assets/image/connet_with/Frame_176_1.png";
import fame170 from "../assets/image/connet_with/Frame 170-1_1.png";
import fame171 from "../assets/image/connet_with/Frame 171-2_1.png";
import fame172 from "../assets/image/connet_with/Frame_172_1.png";
import fame173 from "../assets/image/connet_with/Frame_173_1.png";
import fame172_r from "../assets/image/connet_with/Frame 172_r.png";
import fame172_l from "../assets/image/connet_with/Frame_172-l.png";
interface porps {
  desktop: boolean;
  mobile: boolean;
  large: boolean;
  windowCroll: number;
  pc: boolean;
}

const ConnextWith: React.FC<porps> = ({
  large,
  desktop,
  mobile,
  windowCroll,
  pc,
}) => {
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
      fameleft: fame175,
      fameRight: fame176,
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
      fameleft: fame170,
      fameRight: fame171,
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
      fameleft: fame173,
      fameRight: fame172,
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
      fameleft: fame172_l,
      fameRight: fame172_r,
    },
  ];

  return (
    <section
      className={
        desktop
          ? "col-12 col-sm-12 col-md-12 p-3 connext-with"
          : " col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-5 connext-with "
      }
    >
      {desktop ? (
        mobile ? (
          <div
            className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex flex-column connext-with-title"
            style={mobile ? { fontSize: "4rem" } : { fontSize: "5rem" }}
          >
            <div
              className={
                windowCroll > 2300
                  ? "col-12 col-sm-12 col-md-12 col-lg-12  d-flex justify-content-start scrollBlackTitle"
                  : "col-12 col-sm-12 col-md-12 col-lg-12  d-flex justify-content-start "
              }
              style={
                windowCroll > 2300
                  ? { color: "#000" }
                  : { color: "rgb(240 235 227)" }
              }
            >
              <span>CONNECT</span>
            </div>
            <div
              className={
                windowCroll > 2350
                  ? "col-12 col-sm-12 col-md-12 col-lg-12  d-flex scrollBlackTitle"
                  : "col-12 col-sm-12 col-md-12 col-lg-12  d-flex "
              }
              style={
                windowCroll > 2350
                  ? { color: "#000" }
                  : { color: "rgb(240 235 227)" }
              }
            >
              <span className="col-6 col-sm-6 col-md-6 "></span>
              <span>WITH...</span>
            </div>
          </div>
        ) : (
          <div
            className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex flex-column connext-with-title"
            style={mobile ? { fontSize: "4rem" } : { fontSize: "5rem" }}
          >
            <div
              className={
                windowCroll > 4000
                  ? "col-12 col-sm-12 col-md-12 col-lg-12  d-flex justify-content-start scrollWhiteTitle"
                  : "col-12 col-sm-12 col-md-12 col-lg-12  d-flex justify-content-start "
              }
              style={
                windowCroll > 4000
                  ? { color: "#000" }
                  : { color: "rgb(240 235 227)" }
              }
            >
              <span>CONNECT</span>
            </div>
            <div
              className={
                windowCroll > 4050
                  ? "col-12 col-sm-12 col-md-12 col-lg-12  d-flex scrollWhiteTitle"
                  : "col-12 col-sm-12 col-md-12 col-lg-12  d-flex "
              }
              style={
                windowCroll > 4050
                  ? { color: "#000" }
                  : { color: "rgb(240 235 227)" }
              }
            >
              <span className="col-6 col-sm-6 col-md-6 "></span>
              <span>WITH...</span>
            </div>
          </div>
        )
      ) : pc ? (
        <div
          className="  col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex flex-column connext-with-title"
          style={large ? { fontSize: "7rem" } : { fontSize: "8rem" }}
        >
          <div
            className={
              windowCroll > 7000
                ? "col-md-12 col-lg-12 col-xl-12 col-xxl-12  d-flex justify-content-start scrollBlackTitle"
                : "col-md-12 col-lg-12 col-xl-12 col-xxl-12  d-flex justify-content-start "
            }
          >
            <span
              style={
                windowCroll > 7000
                  ? { color: "#000" }
                  : { color: "rgb(240 235 227)" }
              }
            >
              CONNECT
            </span>
          </div>
          <div
            className={
              windowCroll > 7100
                ? "col-md-12 col-lg-12 col-xl-12 col-xxl-12  d-flex scrollBlackTitle"
                : "col-md-12 col-lg-12 col-xl-12 col-xxl-12  d-flex "
            }
          >
            <span className="col-md-6 col-lg-6 col-xl-6 col-xxl-6"></span>
            <span
              style={
                windowCroll > 7100
                  ? { color: "#000" }
                  : { color: "rgb(240 235 227)" }
              }
            >
              WITH...
            </span>
          </div>
        </div>
      ) : (
        <div
          className="  col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex flex-column connext-with-title"
          style={large ? { fontSize: "7rem" } : { fontSize: "8rem" }}
        >
          <div
            className={
              windowCroll > 5400
                ? "col-md-12 col-lg-12 col-xl-12 col-xxl-12  d-flex justify-content-start scrollBlackTitle"
                : "col-md-12 col-lg-12 col-xl-12 col-xxl-12  d-flex justify-content-start "
            }
          >
            <span
              style={
                windowCroll > 5400
                  ? { color: "#000" }
                  : { color: "rgb(240 235 227)" }
              }
            >
              CONNECT
            </span>
          </div>
          <div
            className={
              windowCroll > 5500
                ? "col-md-12 col-lg-12 col-xl-12 col-xxl-12  d-flex scrollBlackTitle"
                : "col-md-12 col-lg-12 col-xl-12 col-xxl-12  d-flex "
            }
          >
            <span className="col-md-6 col-lg-6 col-xl-6 col-xxl-6"></span>
            <span
              style={
                windowCroll > 5500
                  ? { color: "#000" }
                  : { color: "rgb(240 235 227)" }
              }
            >
              WITH...
            </span>
          </div>
        </div>
      )}
      {listItem.map((item, index) =>
        mobile ? (
          <div
            style={{ borderBottom: "1px solid #000" }}
            className="col-12 col-sm-12 my-3"
          >
            <div className="col-12 col-sm-12  d-flex">
              <div className="col-6 col-sm-6   p-3">
                <img src={item.fameleft} alt="" className="col-12 col-sm-12 " />
              </div>
              <div className="col-6 col-sm-6  p-3">
                <img src={item.fameRight} alt="" className="col-12 col-sm-12" />
              </div>
            </div>
            <div
              className={
                windowCroll > 2500 + index * 350
                  ? "col-12 col-sm-12 p-3 scrollBlackTextTop"
                  : "col-12 col-sm-12 p-3"
              }
              style={
                windowCroll > 2500 + index * 350
                  ? { color: "#000" }
                  : { color: "rgb(240 235 227)" }
              }
            >
              {item.title}
              <div>
                {" "}
                <span
                  className={
                    windowCroll > 2550 + index * 350
                      ? " scrollBlackTextTo connext-with-span "
                      : " "
                  }
                >
                  {item.button}
                </span>{" "}
              </div>
            </div>
          </div>
        ) : desktop ? (
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
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex">
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6  p-3">
                  <img
                    src={item.fameleft}
                    alt=""
                    className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                  />
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-3">
                  <img
                    src={item.fameRight}
                    alt=""
                    className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                  />
                </div>
              </div>
            </div>
            <div
              className={
                desktop
                  ? "co-6 col-sm-6 col-md-6 px-3 d-flex justify-content-between flex-column py-3"
                  : " col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 px-5 d-flex justify-content-between flex-column py-3"
              }
            >
              <div
                className={
                  windowCroll > 4000 + index * 300 ? "scrollBlackTextTop" : ""
                }
                style={
                  windowCroll > 4000 + index * 300
                    ? { color: "#000" }
                    : { color: "rgb(240 235 227)" }
                }
              >
                {item.title}
              </div>
              <div
                className={
                  windowCroll > 4250 + index * 300 ? "scrollBlackTextTop" : ""
                }
              >
                {" "}
                <span
                  style={
                    windowCroll > 4250 + index * 300
                      ? { color: "#000" }
                      : { color: "rgb(240 235 227)" }
                  }
                  className={
                    windowCroll > 4250 + index * 300 ? "connext-with-span" : ""
                  }
                >
                  {item.button}
                </span>{" "}
              </div>
            </div>
          </div>
        ) : pc ? (
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
              <div className="scrollBlackTextRight col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex">
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6  p-3">
                  <img
                    src={item.fameleft}
                    alt=""
                    className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                  />
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-3">
                  <img
                    src={item.fameRight}
                    alt=""
                    className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                  />
                </div>
              </div>
            </div>
            <div
              className={
                desktop
                  ? "co-6 col-sm-6 col-md-6 px-3 d-flex justify-content-between flex-column py-3"
                  : " col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 px-5 d-flex justify-content-between flex-column py-3"
              }
            >
              <div
                className={
                  windowCroll > 7300 + index * 550 ? "scrollBlackTextTop" : ""
                }
                style={
                  windowCroll > 7300 + index * 550
                    ? { color: "#000" }
                    : { color: "rgb(240 235 227)" }
                }
              >
                {item.title}
              </div>
              <div
                className={
                  windowCroll > 7700 + index * 550 ? "scrollBlackTextTop" : ""
                }
              >
                {" "}
                <span
                  style={
                    windowCroll > 7700 + index * 550
                      ? { color: "#000" }
                      : { color: "rgb(240 235 227)" }
                  }
                  className={
                    windowCroll > 7700 + index * 550
                      ? "connext-with-span"
                      : "waiting-line"
                  }
                >
                  {item.button}
                </span>{" "}
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
              <div className="scrollBlackTextRight col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex">
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6  p-3">
                  <img
                    src={item.fameleft}
                    alt=""
                    className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                  />
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-3">
                  <img
                    src={item.fameRight}
                    alt=""
                    className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                  />
                </div>
              </div>
            </div>
            <div
              className={
                desktop
                  ? "co-6 col-sm-6 col-md-6 px-3 d-flex justify-content-between flex-column py-3"
                  : " col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 px-5 d-flex justify-content-between flex-column py-3"
              }
            >
              <div
                className={
                  windowCroll > 5600 + index * 450 ? "scrollBlackTextTop" : ""
                }
                style={
                  windowCroll > 5600 + index * 400
                    ? { color: "#000" }
                    : { color: "rgb(240 235 227)" }
                }
              >
                {item.title}
              </div>
              <div
                className={
                  windowCroll > 6000 + index * 400 ? "scrollBlackTextTop" : ""
                }
              >
                {" "}
                <span
                  style={
                    windowCroll > 6000 + index * 400
                      ? { color: "#000" }
                      : { color: "rgb(240 235 227)" }
                  }
                  className={
                    windowCroll > 6000 + index * 400 ? "connext-with-span" : ""
                  }
                >
                  {item.button}
                </span>{" "}
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
};
export default ConnextWith;
