import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/font/stylesheet.css";
import { useEffect, useState, memo } from "react";
import Narbar from "./views/navbar";
import Header from "./views/header";
import Footer from "./views/footer";
import MakeMemories from "./components/make_memories";
import Explore from "./components/explore";
import BetterConvos from "./components/better_convor";
import ConnextWith from "./components/connext_with";
import Impactpul from "./components/impactpul";
import Howto from "./components/howto";
function App() {
  const [desktop, setDestktop] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [large, setLarge] = useState(false);
  const [windowDimention, setWindowDimention] = useState({
    windowWidth: window.innerWidth,
  });
  const [windowCroll, setWindowCroll] = useState({
    windowScroll: window.scrollY,
  });

  const detectSize = () => {
    setWindowDimention({
      windowWidth: window.innerWidth,
    });
    if (windowDimention.windowWidth < 1200) {
      setLarge(true);
    } else {
      setLarge(false);
    }

    if (windowDimention.windowWidth < 992) {
      setDestktop(true);
    } else {
      setDestktop(false);
    }
    if (windowDimention.windowWidth < 576) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };
  const handleScroll = () => {
    setWindowCroll({
      windowScroll: window.scrollY,
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", detectSize);
    if (windowDimention.windowWidth < 1200) {
      setLarge(true);
    } else {
      setLarge(false);
    }
    if (windowDimention.windowWidth < 992) {
      setDestktop(true);
    } else {
      setDestktop(false);
    }
    if (windowDimention.windowWidth < 576) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    console.log(windowCroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimention, windowCroll, mobile, desktop, large]);
  return (
    <>
      <Narbar desktop={desktop} />

      <Header desktop={desktop} large={large} mobile={mobile} />
      {mobile ? (
        <div className="col-12 col-sm-12 p-2 getTheAppMobile">
          <button className=" col-12 col-sm-12 rounded-pill px-5 py-2 ">
            get the app
          </button>
        </div>
      ) : (
        <></>
      )}
      {mobile ? (
        <></>
      ) : (
        <MakeMemories
          desktop={desktop}
          large={large}
          windowCroll={windowCroll.windowScroll}
        />
      )}
      <Explore
        desktop={desktop}
        large={large}
        mobile={mobile}
        windowCroll={windowCroll.windowScroll}
      />
      <BetterConvos
        desktop={desktop}
        large={large}
        mobile={mobile}
        windowCroll={windowCroll.windowScroll}
      />
      <ConnextWith
        desktop={desktop}
        large={large}
        mobile={mobile}
        windowCroll={windowCroll.windowScroll}
      />
      <Impactpul
        desktop={desktop}
        large={large}
        mobile={mobile}
        windowCroll={windowCroll.windowScroll}
      />
      <Howto
        desktop={desktop}
        large={large}
        mobile={mobile}
        windowCroll={windowCroll.windowScroll}
      />
      <Footer
        desktop={desktop}
        large={large}
        mobile={mobile}
        windowCroll={windowCroll.windowScroll}
      />
    </>
  );
}

export default memo(App);
