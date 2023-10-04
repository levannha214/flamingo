import bannerFooter from "../assets/image/Rectangle387.png";
import "../styles/navbar.css";
import "../styles/scrollLoading.css";
import logo from "../assets/image/logo_footer.png";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { useState } from "react";
interface props {
  desktop: boolean;
  mobile: boolean;
  large: boolean;
  windowCroll: number;
}
const Footer: React.FC<props> = ({ desktop, large, mobile, windowCroll }) => {
  const [check, setCheck] = useState(-1);
  const contact = [
    {
      title: " flamingo",
      item: ["About", "Press"],
    },
    {
      title: " Work with us",
      item: ["Referral program", "Creators program"],
    },
    {
      title: "Support",
      item: ["How to play", "Cancel purchase"],
    },
    {
      title: "Download",
      item: ["iOS", "Android"],
    },
    {
      title: "Follow",
      item: ["Instagram", "LinkedIn", "Twitter", "Snapchat", "Tiktok"],
    },
    {
      title: "Browse",
      item: ["Card packs", "Game modes"],
    },
  ];

  return (
    <footer className="col-12 col-sm-12 col-xl-12 col-xxl-12 col-md-12 col-lg-12 p-4  bg-black text-white footer">
      <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12  col-lg-12 p-4 d-flex flex-wrap ">
        {desktop ? (
          mobile ? (
            <div
              className={
                windowCroll > 7200
                  ? "col-12 col-sm-12 col-xl-6 col-xxl-6 col-md-6 col-lg-6 scrollBlackTextRight"
                  : "col-12 col-sm-12 col-xl-6 col-xxl-6 col-md-6 col-lg-6 waiting-line "
              }
            >
              <img
                src={bannerFooter}
                alt="banner footer"
                className="col-12 col-sm-12 col-xl-12 col-xxl-12 col-md-12 col-lg-12"
              />
            </div>
          ) : (
            <div
              className={
                windowCroll > 8400
                  ? "col-12 col-sm-12 col-xl-6 col-xxl-6 col-md-6 col-lg-6 scrollBlackTextRight"
                  : "col-12 col-sm-12 col-xl-6 col-xxl-6 col-md-6 col-lg-6 waiting-line "
              }
            >
              <img
                src={bannerFooter}
                alt="banner footer"
                className="col-12 col-sm-12 col-xl-12 col-xxl-12 col-md-12 col-lg-12"
              />
            </div>
          )
        ) : (
          <div
            className={
              windowCroll > 10000
                ? "col-12 col-sm-12 col-xl-6 col-xxl-6 col-md-6 col-lg-6 scrollBlackTextRight"
                : "col-12 col-sm-12 col-xl-6 col-xxl-6 col-md-6 col-lg-6 waiting-line "
            }
          >
            <img
              src={bannerFooter}
              alt="banner footer"
              className="col-12 col-sm-12 col-xl-12 col-xxl-12 col-md-12 col-lg-12"
            />
          </div>
        )}
        {desktop ? (
          mobile ? (
            <div className="col-12 col-sm-12 col-md-6 col-xl-6 col-xxl-6 col-lg-6  ">
              <div className="col-12 col-sm-12 px-5 py-4  d-flex flex-column bg-muted">
                <div
                  style={
                    windowCroll > 7400
                      ? { color: "#ffffff" }
                      : { color: "#000" }
                  }
                  className={windowCroll > 7400 ? "scrollWhiteTextRight" : ""}
                >
                  <h1
                    style={{
                      fontSize: "2rem",
                      lineHeight: 0.9,
                      textAlign: "center",
                    }}
                  >
                    DOWNLOAD<br></br> FLAMINGO CARDS <br></br>TODAY
                  </h1>
                </div>
                <div
                  style={
                    windowCroll > 7450
                      ? { color: "#ffffff" }
                      : { color: "#000" }
                  }
                  className={windowCroll > 7450 ? "scrollWhiteTextRight" : ""}
                >
                  {" "}
                  <h5
                    style={{
                      fontSize: "1rem",
                      lineHeight: 0.9,
                      textAlign: "center",
                    }}
                  >
                    Available on iOS and Android
                  </h5>
                </div>
                <div className=" col-12 col-sm-12 d-flex justify-content-center">
                  <div
                    className={
                      windowCroll > 7500
                        ? "scrollWhiteTextRight"
                        : "waiting-line"
                    }
                  >
                    <button className="rounded-pill px-2 py-1 my-3 ">
                      get the app
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-12 col-sm-12 col-md-6 col-xl-6 col-xxl-6 col-lg-6  ">
              <div className=" col-sm-12  col-md-12  px-3 py-2 ">
                <div
                  style={
                    windowCroll > 8400
                      ? { color: "#ffffff" }
                      : { color: "#000" }
                  }
                  className={windowCroll > 8400 ? "scrollWhiteTextRight" : ""}
                >
                  <h1
                    style={{
                      fontSize: "2.3rem",
                      lineHeight: 0.8,
                      textAlign: "center",
                    }}
                  >
                    DOWNLOAD<br></br> FLAMINGO CARDS <br></br>TODAY
                  </h1>
                </div>
                <div
                  style={
                    windowCroll > 8450
                      ? { color: "#ffffff" }
                      : { color: "#000" }
                  }
                  className={windowCroll > 8450 ? "scrollWhiteTextRight" : ""}
                >
                  <h5
                    style={
                      mobile
                        ? {
                            fontSize: "1rem",
                            lineHeight: 0.9,
                            textAlign: "center",
                          }
                        : {
                            fontSize: "1.2rem",
                            lineHeight: 0.8,
                            textAlign: "center",
                          }
                    }
                  >
                    Available on iOS and Android
                  </h5>
                </div>
                <div className="col-sm-12 col-sm-12 col-md-12 my-3 d-flex justify-content-center">
                  <div
                    className={
                      windowCroll > 8550
                        ? "scrollWhiteTextRight"
                        : "waiting-line"
                    }
                  >
                    <button className="rounded-pill px-2 py-1 my-3 ">
                      get the app
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        ) : (
          <div
            className={
              large
                ? "col-xl-6 col-md-6 col-lg-6  px-4 py-2"
                : "col-xl-6 col-xxl-6 col-lg-6  p-4"
            }
          >
            <div
              style={
                windowCroll > 10000 ? { color: "#ffffff" } : { color: "#000" }
              }
              className={windowCroll > 10000 ? "scrollWhiteTextRight" : ""}
            >
              <h1
                style={
                  large
                    ? { fontSize: "3rem", lineHeight: 0.9 }
                    : { fontSize: "4rem", lineHeight: 0.8 }
                }
              >
                DOWNLOAD<br></br> FLAMINGO CARDS <br></br>TODAY
              </h1>
            </div>
            <h5
              style={
                windowCroll > 10050 ? { color: "#ffffff" } : { color: "#000" }
              }
              className={windowCroll > 10050 ? "scrollWhiteTextRight" : ""}
            >
              Available on iOS and Android
            </h5>
            <div
              className={
                windowCroll > 10150 ? "scrollWhiteTextRight" : "waiting-line"
              }
            >
              {" "}
              <button className="rounded-pill px-4 py-2 my-5">
                get the app
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="col-12 col-sm-12 col-xl-12 col-xxl-12 col-md-12 col-lg-12 my-5 p-2 d-flex  flex-wrap">
        {large ? (
          <></>
        ) : (
          <div
            className={
              windowCroll > 10400
                ? "col-xxl-2 col-xl-2 col-lg-2 px-4 scrollBlackTextRight"
                : "col-xxl-2 col-xl-2 col-lg-2 px-4  waiting-line "
            }
          >
            <img
              src={logo}
              alt="logo footer"
              className="col-xxl-12 col-lg-12  col-xl-12"
            />
          </div>
        )}
        <div
          className="col-12 col-sm-12 col-xl-9 col-xxl-9 col-md-12 col-lg-12 d-flex flex-wrap contact"
          style={{ color: "rgb(94 94 94)" }}
        >
          {contact.map((res, index) =>
            desktop ? (
              mobile ? (
                <div
                  className="col-sm-12 col-md-12  col-12 d-flex flex-wrap p-2"
                  style={{ borderBottom: "2px solid rgb(94 94 94)" }}
                  onClick={() =>
                    check === index ? setCheck(-1) : setCheck(index)
                  }
                >
                  <div className="col-sm-12 col-md-12  col-12 d-flex justify-content-between">
                    <h5
                      className={
                        windowCroll > 7750 + index * 60
                          ? "scrollWhiteTextRight"
                          : ""
                      }
                      style={
                        windowCroll > 7750 + index * 60
                          ? { marginBottom: 30, color: "#ffffff" }
                          : { marginBottom: 30, color: "#000" }
                      }
                    >
                      {res.title}
                    </h5>
                    {index === check ? (
                      <ArrowUpOutlined />
                    ) : (
                      <ArrowDownOutlined />
                    )}
                  </div>
                  {index === check ? (
                    <div className="col-sm-12 col-md-12  col-12 mx-4">
                      {res.item.map((ret) => (
                        <p className="menuFooter">{ret}</p>
                      ))}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              ) : (
                <div
                  className="col-sm-12 col-md-12  col-12 d-flex flex-wrap p-2"
                  style={{ borderBottom: "2px solid rgb(94 94 94)" }}
                  onClick={() =>
                    check === index ? setCheck(-1) : setCheck(index)
                  }
                >
                  <div className="col-sm-12 col-md-12  col-12 d-flex justify-content-between">
                    <h5
                      className={
                        windowCroll > 8850 + index * 60
                          ? "scrollWhiteTextRight"
                          : ""
                      }
                      style={
                        windowCroll > 8850 + index * 60
                          ? { marginBottom: 30, color: "#ffffff" }
                          : { marginBottom: 30, color: "#000" }
                      }
                    >
                      {res.title}
                    </h5>
                    {index === check ? (
                      <ArrowUpOutlined />
                    ) : (
                      <ArrowDownOutlined />
                    )}
                  </div>
                  {index === check ? (
                    <div className="col-sm-12 col-md-12  col-12 mx-4">
                      {res.item.map((ret) => (
                        <p className="menuFooter">{ret}</p>
                      ))}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              )
            ) : (
              <div className="col-xl-2 col-xxl-2 col-md-2 col-lg-2 p-2">
                <h5
                  className={windowCroll > 10450 ? "scrollWhiteTextRight" : ""}
                  style={
                    windowCroll > 10450
                      ? { marginBottom: 30, color: "#ffffff" }
                      : { marginBottom: 30, color: "#000" }
                  }
                >
                  {res.title}
                </h5>
                {res.item.map((ret) => (
                  <p
                    className={
                      windowCroll > 10500 + index * 50
                        ? "scrollWhiteTextRight menuFooter"
                        : "text-dark"
                    }
                    style={{ marginBottom: 30 }}
                  >
                    {ret}
                  </p>
                ))}
              </div>
            )
          )}
          {large ? (
            desktop ? (
              mobile ? (
                <div
                  className={
                    windowCroll > 8000
                      ? "col-12 col-md-12 d-flex justify-content-center  px-4 scrollBlackTextRight"
                      : " col-12 col-md-12 d-flex justify-content-center  px-4 waiting-line"
                  }
                >
                  <img
                    src={logo}
                    alt="logo footer"
                    className="col-6 col-sm-6"
                  />
                </div>
              ) : (
                <div
                  className={
                    windowCroll > 9300
                      ? " co-sm-12 col-md-12 col-lg-12 d-flex justify-content-center  px-4 scrollBlackTextRight"
                      : " co-sm-12 col-md-12 col-lg-12 d-flex justify-content-center  px-4 waiting-line"
                  }
                >
                  <img
                    src={logo}
                    alt="logo footer"
                    className="col-lg-2  col-xl-2"
                  />
                </div>
              )
            ) : (
              <div
                className={
                  windowCroll > 9900
                    ? " col-xl-12 col-lg-12 d-flex justify-content-center  px-4 scrollBlackTextTop"
                    : " col-xl-12 col-lg-12 d-flex justify-content-center  px-4 aiting-line"
                }
              >
                <img
                  src={logo}
                  alt="logo footer"
                  className="col-lg-2  col-xl-2 col-md-4 col-sm-4"
                />
              </div>
            )
          ) : (
            <></>
          )}
          <div
            className={
              desktop
                ? "col-12 col-sm-12 col-md-12 py-3 d-flex justify-content-between"
                : " col-xl-12 col-xxl-12 col-md-12 col-lg-12 d-flex py-4"
            }
            style={{ borderTop: "2px solid rgb(94 94 94)" }}
          >
            {desktop ? (
              <ArrowDownOutlined />
            ) : (
              <div
                className={
                  windowCroll > 10750
                    ? "col-xl-8 col-xxl-8 col-md-8 col-lg-8 d-flex justify-content-between scrollWhiteTextRight"
                    : "col-xl-8 col-xxl-8 col-md-8 col-lg-8 d-flex justify-content-between"
                }
              >
                <span className="menuFooter">Privacy Policy</span>
                <span className="menuFooter">Terms of Use</span>
                <span className="menuFooter">Purchase Terms</span>
                <span className="menuFooter">Cookies Settings</span>
                <span className="menuFooter"> English (United States)</span>
              </div>
            )}
            <div className="col-6 col-sm-6 col-xl-4 col-xxl-4 col-md-4 col-lg-4 d-flex justify-content-end">
              {desktop ? (
                mobile ? (
                  <span
                    className={
                      windowCroll > 8050
                        ? "scrollWhiteTextRight text-white"
                        : "text-dark"
                    }
                  >
                    {" "}
                    © FLAMINGO CRARDS LLC
                  </span>
                ) : (
                  <span
                    className={
                      windowCroll > 9300
                        ? "scrollWhiteTextRight text-white"
                        : "text-dark"
                    }
                  >
                    {" "}
                    © FLAMINGO CRARDS LLC
                  </span>
                )
              ) : (
                <span
                  className={
                    windowCroll > 10750
                      ? "scrollWhiteTextRight text-white"
                      : "text-dark"
                  }
                >
                  {" "}
                  © FLAMINGO CRARDS LLC
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
