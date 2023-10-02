import bannerFooter from "../assets/image/background-2-750w.jpg";
import "../styles/navbar.css";
import logo from "../assets/image/logo_footer.png";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { useState } from "react";
interface props {
  desktop: boolean;
  mobile: boolean;
  large: boolean;
}
const Footer: React.FC<props> = ({ desktop, large, mobile }) => {
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
        <div className="col-12 col-sm-12 col-xl-6 col-xxl-6 col-md-6 col-lg-6">
          <img
            src={bannerFooter}
            alt="banner footer"
            className="col-12 col-sm-12 col-xl-12 col-xxl-12 col-md-12 col-lg-12"
          />
        </div>
        {desktop ? (
          <div className="col-12 col-sm-12 col-md-6 col-xl-6 col-xxl-6 col-lg-6  ">
            <div
              className={
                mobile
                  ? "col-12 col-sm-12 px-5 py-4  d-flex flex-column bg-muted"
                  : " col-sm-12  col-md-12  px-3 py-2 "
              }
            >
              <h1
                style={
                  mobile
                    ? { fontSize: "2rem", lineHeight: 0.9, textAlign: "center" }
                    : {
                        fontSize: "2.3rem",
                        lineHeight: 0.8,
                        textAlign: "center",
                      }
                }
              >
                DOWNLOAD<br></br> FLAMINGO CARDS <br></br>TODAY
              </h1>
              <h5
                style={
                  mobile
                    ? { fontSize: "1rem", lineHeight: 0.9, textAlign: "center" }
                    : {
                        fontSize: "1.2rem",
                        lineHeight: 0.8,
                        textAlign: "center",
                      }
                }
              >
                Available on iOS and Android
              </h5>
              <div
                className={
                  mobile
                    ? " col-12 col-sm-12 d-flex justify-content-center"
                    : "col-sm-12 col-sm-12 col-md-12 my-3 d-flex justify-content-center"
                }
              >
                <button className="rounded-pill px-2 py-1 my-3 ">
                  get the app
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={
              large
                ? "col-xl-6 col-md-6 col-lg-6  px-4 py-2"
                : "col-xl-6 col-xxl-6 col-lg-6  p-4"
            }
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
            <h5>Available on iOS and Android</h5>
            <button className="rounded-pill px-4 py-2 my-5">get the app</button>
          </div>
        )}
      </div>
      <div className="col-12 col-sm-12 col-xl-12 col-xxl-12 col-md-12 col-lg-12 my-5 p-2 d-flex  flex-wrap">
        {large ? (
          <></>
        ) : (
          <div className="col-xxl-2 col-xl-2 col-lg-2 px-4">
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
              <div
                className="col-sm-12 col-md-12  col-12 d-flex flex-wrap p-2"
                style={{ borderBottom: "2px solid rgb(94 94 94)" }}
                onClick={() =>
                  check === index ? setCheck(-1) : setCheck(index)
                }
              >
                <div className="col-sm-12 col-md-12  col-12 d-flex justify-content-between">
                  <h5 className="text-white" style={{ marginBottom: 30 }}>
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
                      <p>{ret}</p>
                    ))}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <div className="col-xl-2 col-xxl-2 col-md-2 col-lg-2 p-2">
                <h5 className="text-white" style={{ marginBottom: 30 }}>
                  {res.title}
                </h5>
                {res.item.map((ret) => (
                  <p>{ret}</p>
                ))}
              </div>
            )
          )}
          {large ? (
            <div className="col-md-12 col-xl-12 col-lg-12 d-flex justify-content-center  px-4">
              <img
                src={logo}
                alt="logo footer"
                className="col-lg-2  col-xl-2"
              />
            </div>
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
              <div className="col-xl-8 col-xxl-8 col-md-8 col-lg-8 d-flex justify-content-between">
                <span>Privacy Policy</span>
                <span>Terms of Use</span>
                <span>Purchase Terms</span>
                <span>Cookies Settings</span>
                <span> English (United States)</span>
              </div>
            )}
            <div className="col-6 col-sm-6 col-xl-4 col-xxl-4 col-md-4 col-lg-4 d-flex justify-content-end">
              <span className="text-white"> © FLAMINGO CRARDS LLC</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
