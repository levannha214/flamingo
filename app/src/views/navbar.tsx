import "../styles/navbar.css";
import { MenuOutlined } from "@ant-design/icons";
interface props {
  desktop: boolean;
  status: boolean;
}
const Narbar: React.FC<props> = ({ desktop, status }) => {
  return (
    <nav
      id={status ? "statusMenuOn" : "statusMenuOff"}
      className="col-12 col-sm-12 col-xl-12 col-xxl-12 col-md-12 col-lg-12 px-4 py-2 d-flex justify-content-between navbar"
      style={
        status
          ? { backgroundColor: "rgba(000, 000, 000, 100%)" }
          : { background: "none" }
      }
    >
      <div
        className=" d-flex justify-content-start logo"
        style={desktop ? { fontSize: "1.5rem" } : { fontSize: "2rem" }}
      >
        flamin<span style={{ color: "rgb(255 124 191)" }}>go</span>
      </div>
      {desktop ? (
        <div className=" d-flex justify-content-end menu">
          <MenuOutlined />
        </div>
      ) : (
        <div className=" d-flex justify-content-end menu">
          <span>About</span>
          <span className="mx-5">Careers</span>
          <span>Support</span>
          <span className="mx-5">Tiktok</span>
          <button className="rounded-pill px-3">get the app</button>
        </div>
      )}
    </nav>
  );
};
export default Narbar;
