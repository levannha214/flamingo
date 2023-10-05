import "../styles/component.css";
import "../styles/scrollLoading.css";
interface porps {
  desktop: boolean;
  mobile: boolean;
  large: boolean;
  pc: boolean;
  windowCroll: number;
}
const Howto: React.FC<porps> = ({ desktop, windowCroll, mobile, pc }) => {
  const text = [
    "Download the app",
    "Make a post using #flamingocards",
    "Check out what others use flamingo cards",
  ];
  return (
    <section className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-5 howto">
        {desktop ? (
          mobile ? (
            <div>
              {" "}
              <h1
                className={
                  windowCroll > 6000
                    ? "connext-with-text scrollBlackTextTop"
                    : "connext-with-text"
                }
                style={
                  windowCroll > 6000 ? { color: "#000" } : { color: "#e8e8e9" }
                }
              >
                How to join the <br></br>convos that matter.
              </h1>
            </div>
          ) : (
            <div>
              {" "}
              <h1
                className={
                  windowCroll > 7300
                    ? "connext-with-text scrollBlackTextTop"
                    : "connext-with-text"
                }
                style={
                  windowCroll > 7300 ? { color: "#000" } : { color: "#e8e8e9" }
                }
              >
                How to join the <br></br>convos that matter.
              </h1>
            </div>
          )
        ) : pc ? (
          <div>
            {" "}
            <h1
              className={
                windowCroll > 11400
                  ? "connext-with-text scrollBlackTextTop"
                  : "connext-with-text"
              }
              style={
                windowCroll > 11400 ? { color: "#000" } : { color: "#e8e8e9" }
              }
            >
              How to join the <br></br>convos that matter.
            </h1>
          </div>
        ) : (
          <div>
            {" "}
            <h1
              className={
                windowCroll > 8900
                  ? "connext-with-text scrollBlackTextTop"
                  : "connext-with-text"
              }
              style={
                windowCroll > 8900 ? { color: "#000" } : { color: "#e8e8e9" }
              }
            >
              How to join the <br></br>convos that matter.
            </h1>
          </div>
        )}
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 my-5"></div>
        {text.map((item, index) =>
          desktop ? (
            mobile ? (
              <div
                style={
                  windowCroll > 6200
                    ? { color: "#000", borderTop: "2px solid lightgray" }
                    : { color: "#e8e8e9", borderTop: "2px solid lightgray" }
                }
                className="col-12 col-sm-12  py-5"
              >
                <div
                  style={
                    windowCroll > 6200 + index * 100
                      ? { color: "#000" }
                      : { color: "#e8e8e9" }
                  }
                >
                  <p
                    className={
                      windowCroll > 6200 + index * 100
                        ? "connext-with-text scrollBlackTextTop"
                        : "connext-with-text"
                    }
                    style={
                      desktop ? { fontSize: "1rem" } : { fontSize: "1.3rem" }
                    }
                  >
                    {item}
                  </p>
                </div>
              </div>
            ) : (
              <div
                style={
                  windowCroll > 7500
                    ? { color: "#000", borderTop: "2px solid lightgray" }
                    : { color: "#e8e8e9", borderTop: "2px solid lightgray" }
                }
                className="col-12 col-sm-12 col-md-12 col-lg-12  py-5"
              >
                <div
                  style={
                    windowCroll > 7500 + index * 100
                      ? { color: "#000" }
                      : { color: "#e8e8e9" }
                  }
                >
                  <p
                    className={
                      windowCroll > 7500 + index * 100
                        ? "connext-with-text scrollBlackTextTop"
                        : "connext-with-text"
                    }
                    style={
                      desktop ? { fontSize: "1rem" } : { fontSize: "1.3rem" }
                    }
                  >
                    {item}
                  </p>
                </div>
              </div>
            )
          ) : pc ? (
            <div
              style={
                windowCroll > 11500 + index * 150
                  ? { color: "#000", borderTop: "2px solid lightgray" }
                  : { color: "#e8e8e9", borderTop: "2px solid lightgray" }
              }
              className=" col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 py-5"
            >
              <div
                style={
                  windowCroll > 11500 + index * 150
                    ? { color: "#000" }
                    : { color: "#e8e8e9" }
                }
              >
                <p
                  className={
                    windowCroll > 11500 + index * 150
                      ? "connext-with-text scrollBlackTextTop"
                      : "connext-with-text"
                  }
                  style={
                    desktop ? { fontSize: "1rem" } : { fontSize: "1.3rem" }
                  }
                >
                  {item}
                </p>
              </div>
            </div>
          ) : (
            <div
              style={
                windowCroll > 8900
                  ? { color: "#000", borderTop: "2px solid lightgray" }
                  : { color: "#e8e8e9", borderTop: "2px solid lightgray" }
              }
              className=" col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 py-5"
            >
              <div
                style={
                  windowCroll > 9000 + index * 100
                    ? { color: "#000" }
                    : { color: "#e8e8e9" }
                }
              >
                <p
                  className={
                    windowCroll > 9000 + index * 100
                      ? "connext-with-text scrollBlackTextTop"
                      : "connext-with-text"
                  }
                  style={
                    desktop ? { fontSize: "1rem" } : { fontSize: "1.3rem" }
                  }
                >
                  {item}
                </p>
              </div>
            </div>
          )
        )}
      </div>
      {desktop ? (
        mobile ? (
          <div
            className="col-12 col-sm-12  p-5 question"
            style={
              windowCroll > 6600
                ? { height: 500, color: "#000" }
                : { color: "#ffffff" }
            }
          >
            <h1
              className={
                windowCroll > 6600
                  ? "scrollBlackTextTop connext-with-text"
                  : "connext-with-text"
              }
            >
              We’ve go you covered<br></br>with the best question.
            </h1>
          </div>
        ) : (
          <div
            className="col-12 col-sm-12 col-md-12 col-lg-12 p-5 question"
            style={
              windowCroll > 7900
                ? { height: 500, color: "#000" }
                : { color: "#ffffff" }
            }
          >
            <h1
              className={
                windowCroll > 7900
                  ? "scrollBlackTextTop connext-with-text"
                  : "connext-with-text"
              }
            >
              We’ve go you covered<br></br>with the best question.
            </h1>{" "}
          </div>
        )
      ) : pc ? (
        <div
          className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-5 question"
          style={
            windowCroll > 12000
              ? { height: 500, color: "#000" }
              : { color: "#ffffff" }
          }
        >
          <h1
            className={
              windowCroll > 12000
                ? "scrollBlackTextTop connext-with-text"
                : "connext-with-text"
            }
          >
            We’ve go you covered<br></br>with the best question.
          </h1>
        </div>
      ) : (
        <div
          className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-5 question"
          style={
            windowCroll > 9400
              ? { height: 500, color: "#000" }
              : { color: "#ffffff" }
          }
        >
          <h1
            className={
              windowCroll > 9400
                ? "scrollBlackTextTop connext-with-text"
                : "connext-with-text"
            }
          >
            We’ve go you covered<br></br>with the best question.
          </h1>
        </div>
      )}
    </section>
  );
};
export default Howto;
