import "../styles/component.css";
import img from "../assets/image/how-to-design-landing-pages-750w.jpg";
import { useEffect, useState } from "react";
import hero1 from "../assets/image/hero-portrait-500w.jpg";
import hero2 from "../assets/image/hero-portrait-500w1.jpg";
import hero3 from "../assets/image/hero-portrait-500w2.jpg";
interface porps {
  desktop: boolean;
  mobile: boolean;
  large: boolean;
}
const Impactpul: React.FC<porps> = ({ large, desktop, mobile }) => {
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
        <div
          className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex flex-column connext-with-title"
          style={mobile ? { fontSize: "3rem" } : { fontSize: "4.5rem" }}
        >
          <div className="col-12 col-sm-12 col-md-12 col-lg-12  d-flex justify-content-end ">
            <span className={animation ? "textAnimation" : ""}>IMPACTFUL</span>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12  d-flex  justify-content-center">
            <span className={animation ? "textAnimation2" : ""}>
              {" "}
              CONVERSATIONS
            </span>
          </div>
        </div>
      ) : (
        <div
          className="  col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex flex-column connext-with-title"
          style={large ? { fontSize: "8rem" } : { fontSize: "9rem" }}
        >
          <div className="  col-md-12 col-lg-12 col-xl-12 col-xxl-12  d-flex justify-content-end ">
            <span className={animation ? "textAnimation" : ""}>IMPACTFUL</span>
          </div>
          <div className="  col-md-12 col-lg-12 col-xl-12 col-xxl-12  d-flex justify-content-center">
            <span className={animation ? "textAnimation2" : ""}>
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
          <div className="col-12 col-sm-12 p-3">
            <img src={img} alt=" " className="col-12 col-sm-12" />
          </div>
          <div className="col-12 col-sm-12 p-3">
            <h3 className="connext-with-text">
              {" "}
              Convos with <br></br>flamingo cards
            </h3>
            <div>
              {" "}
              <span className="connext-with-text">
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
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <img src={img} alt=" " className="col-12 col-sm-12" />
            </div>
          </div>
          <div
            className={
              desktop
                ? "co-6 col-sm-6 col-md-6  py-5 px-2"
                : " col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 px-5  p-5"
            }
          >
            <h3
              className="connext-with-text"
              style={desktop ? { fontSize: "2.8rem" } : { fontSize: "3.5rem" }}
            >
              {" "}
              Convos with <br></br>flamingo cards
            </h3>
            <div>
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
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div
          className={
            mobile
              ? "col-12 col-sm-12 col-md-12 d-flex justify-content-center"
              : "col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 my-5"
          }
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
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex flex-wrap">
        {hero.map((hero) => (
          <div
            className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 p-3"
            style={mobile ? { borderBottom: "1px solid #000" } : {}}
          >
            <div
              className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12  p-2 "
              id={hero.id}
            >
              <img
                src={hero.avatar}
                alt={hero.name}
                className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 "
              />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
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
        ))}
      </div>
    </section>
  );
};
export default Impactpul;
