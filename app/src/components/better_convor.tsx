import "../styles/component.css";
import image1 from "../assets/image/sell-anything-ecommerce-2-750w.jpg";
import image2 from "../assets/image/sell-anything-scheduling-2-750w.jpg";
import image3 from "../assets/image/sell-anything-memberships-2-1000w.jpg";
interface porps {
  desktop: boolean;
  mobile: boolean;
  large: boolean;
}
const BetterConvos: React.FC<porps> = ({ large, desktop, mobile }) => {
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
  return (
    <section
      className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-5 text-white better-convos"
      style={{ backgroundColor: "rgb(121 138 161)" }}
    >
      {desktop ? (
        <div className="col-12 col-sm-12  col-md-12 ">
          <div className="col-12 col-sm-12 col-md-12 my-5">
            <h1
              className="better-convos-title col-12 col-sm-12 col-md-12"
              style={
                mobile
                  ? { fontSize: "2.5rem", textAlign: "center" }
                  : { fontSize: "3.5rem", textAlign: "center" }
              }
            >
              BETTER CONVOS<br></br> MADE EASY
            </h1>
            <h4
              className="col-12 col-sm-12 col-md-12"
              style={
                mobile
                  ? { fontSize: "0.8rem", textAlign: "center", fontWeight: 600 }
                  : { fontSize: "1rem", textAlign: "center", fontWeight: 600 }
              }
            >
              Words are the vibrant heartbeat of our human existence. They
              <br></br>
              serve as the medium through which we navigate the world,<br></br>
              build connections, understand our surroundings, and find <br></br>
              enjoyment in movies and TV shows. Each day, we are immersed
              <br></br>
              in a torrent of words, encountering an average of over 30,000+.{" "}
              <br></br>
              At the core of it all, questions play a pivotal role as <br></br>
              conversations would simply halt without them
            </h4>
            <div className="col-12 col-sm-12 col-md-12 my-5 d-flex justify-content-center">
              {mobile ? (
                <span className="">get the app</span>
              ) : (
                <button className="rounded-pill px-5 py-2 ">get the app</button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className=" col-xl-12 col-xxl-12 col-md-12 col-lg-12">
          <div className="col-xl-12 col-xxl-12 col-lg-12 my-5">
            <h1
              className="better-convos-title "
              style={large ? { fontSize: "6rem" } : { fontSize: "7rem" }}
            >
              BETTER CONVOS <br></br>MADE EASY
            </h1>
            <h5>
              Words are the vibrant heartbeat of our human existence. They
              <br></br>
              serve as the medium through which we navigate the world,<br></br>
              build connections, understand our surroundings, and find <br></br>
              enjoyment in movies and TV shows. Each day, we are immersed
              <br></br>
              in a torrent of words, encountering an average of over 30,000+.{" "}
              <br></br>
              At the core of it all, questions play a pivotal role as <br></br>
              conversations would simply halt without them
            </h5>
            <button className="rounded-pill px-4 py-2 my-5">get the app</button>
          </div>
        </div>
      )}
      {listItem.map((item) =>
        mobile ? (
          <div
            style={{ borderTop: "1px solid #ffffff" }}
            className="col-12 col-sm-12 "
          >
            <div className="col-12 col-sm-12 p-3">
              <img src={item.image} alt="" className="col-sm-12 col-12 " />
            </div>
            <div className="col-12 col-sm-12 p-3">
              {item.title}
              <div>
                {" "}
                <span>{item.button}</span>{" "}
              </div>
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
              {item.title}
              <div>
                {" "}
                <span>{item.button}</span>{" "}
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-3">
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
