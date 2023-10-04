import "../styles/navbar.css";
import banner from "../assets/image/explore_banner.png";
interface props {
  desktop: boolean;
  mobile: boolean;
  large: boolean;
}
const Header: React.FC<props> = ({ desktop, large, mobile }) => {
  return desktop ? (
    <div className="col-12 col-sm-12  col-md-12  p-5 header">
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
        <div className="col-12 col-sm-12 col-md-12 my-5 d-flex justify-content-center">
          {mobile ? (
            <img src={banner} alt="" className="col-12 col-sm-12" />
          ) : (
            <button className="rounded-pill px-5 py-2 ">get the app</button>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className=" col-xl-12 col-xxl-12 col-md-12 col-lg-12 p-5 header">
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
    </div>
  );
};
export default Header;
