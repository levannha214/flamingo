import "../styles/navbar.css";
import group from "../assets/image/Group_34_2.png";
interface props {
  desktop: boolean;
  mobile: boolean;
  large: boolean;
  screenHeight: number;
}
const Header: React.FC<props> = ({ desktop, large, mobile, screenHeight }) => {
  return desktop ? (
    <div
      className="col-12 col-sm-12  col-md-12  p-5 header"
      style={{ height: screenHeight }}
    >
      <div className="col-12 col-sm-12 col-md-12 my-5">
        <h1
          className="headerTitle col-12 col-sm-12 col-md-12"
          style={
            mobile
              ? { fontSize: "2rem", textAlign: "center" }
              : { fontSize: "3rem", textAlign: "center" }
          }
        >
          LIVELY <span className="dares">DARES</span> <br></br> AND CONVOS
        </h1>
        <h4
          className="col-12 col-sm-12 col-md-12"
          style={
            mobile
              ? { fontSize: "1rem", textAlign: "center" }
              : { fontSize: "1.2rem", textAlign: "center" }
          }
        >
          For every occasion.<br></br> Thousands of questions.<br></br> All at
          your fingertips.
        </h4>
        <div className="col-xl-12 col-xxl-12 col-md-12 col-lg-12 col-12 col-sm-12 d-flex justify-content-center header-derktop">
          <div className="col-xl-5 col-xxl-5 col-md-5 col-lg-5 col-6 col-md-5 col-sm-6">
            <img
              src={group}
              alt=""
              className="col-xl-12 col-xxl-12 col-md-12 col-lg-12 col-12 col-sm-12"
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className=" col-xl-12 col-xxl-12 col-md-12 col-lg-12 p-5 header"
      style={{ height: screenHeight }}
    >
      <div className="col-xl-12 col-xxl-12 col-lg-12 my-5">
        <h1
          className="headerTitle"
          style={large ? { fontSize: "4rem" } : { fontSize: "5rem" }}
        >
          LIVELY <span className="dares">DARES</span> <br></br> AND CONVOS
        </h1>
        <h4>
          For every occasion.<br></br> Thousands of questions.<br></br> All at
          your fingertips.
        </h4>
        <button className="rounded-pill px-4 py-2 my-5">get the app</button>
      </div>
      <div className="col-xl-12 col-xxl-12 col-md-12 col-lg-12 col-12 col-sm-12 d-flex header-group">
        <div className="col-xl-5 col-xxl-5 col-md-5 col-lg-5 col-5"></div>
        <div className="col-xl-4 col-xxl-4 col-md-4 col-lg-4 col-sm-4 ">
          <img
            src={group}
            alt=""
            className="col-xl-12 col-xxl-12 col-md-12 col-lg-12 col-12 col-sm-12"
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
