import "../styles/component.css";

interface porps {
  desktop: boolean;
  mobile: boolean;
  large: boolean;
}
const Howto: React.FC<porps> = ({ desktop }) => {
  const text = [
    "Download the app",
    "Make a post using #flamingocards",
    "Check out what others use flamingo cards",
  ];
  return (
    <section className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-5 howto">
        <h1 className="connext-with-text">
          How to join the <br></br>convos that matter.
        </h1>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 my-5"></div>
        {text.map((item) => (
          <div
            style={{ borderTop: "2px solid lightgray" }}
            className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 py-5"
          >
            <p
              className="connext-with-text"
              style={desktop ? { fontSize: "1rem" } : { fontSize: "1.3rem" }}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
      <div
        className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-5 question"
        style={{ height: 500 }}
      >
        <h1 className="connext-with-text">
          We’ve go you covered<br></br>with the best question.
        </h1>
      </div>
    </section>
  );
};
export default Howto;
