import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/font/stylesheet.css";
import { useEffect, useState } from "react";
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
  const [pc, setPc] = useState(false);
  const screenHeight = window.screen.availHeight;
  const [windowDimention, setWindowDimention] = useState({
    windowWidth: window.innerWidth,
  });
  const [windowCroll, setWindowCroll] = useState({
    windowScroll: window.scrollY,
  });
  const [statusmenu, setStatusmenu] = useState(false);

  const detectSize = () => {
    setWindowDimention({
      windowWidth: window.innerWidth,
    });
    if (windowDimention.windowWidth > 1400) {
      setPc(true);
    } else {
      setLarge(false);
    }
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
    if (window.scrollY > 50) {
      setStatusmenu(true);
    } else {
      setStatusmenu(false);
    }

    if (windowCroll.windowScroll < window.scrollY) {
      setWindowCroll({
        windowScroll: window.scrollY,
      });
    } else {
      setWindowCroll(windowCroll);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    window.addEventListener("resize", detectSize);

    if (windowDimention.windowWidth > 1400) {
      setPc(true);
    } else {
      setLarge(false);
    }
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
  }, [windowDimention, windowCroll, mobile, desktop, large, pc]);
  return (
    <>
      <Narbar desktop={desktop} status={statusmenu} />

      <Header
        desktop={desktop}
        large={large}
        mobile={mobile}
        screenHeight={screenHeight}
      />
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
        pc={pc}
        windowCroll={windowCroll.windowScroll}
      />
      <BetterConvos
        desktop={desktop}
        large={large}
        mobile={mobile}
        pc={pc}
        windowCroll={windowCroll.windowScroll}
      />
      <ConnextWith
        desktop={desktop}
        large={large}
        mobile={mobile}
        pc={pc}
        windowCroll={windowCroll.windowScroll}
      />
      <Impactpul
        desktop={desktop}
        large={large}
        mobile={mobile}
        pc={pc}
        windowCroll={windowCroll.windowScroll}
      />
      <Howto
        desktop={desktop}
        large={large}
        mobile={mobile}
        pc={pc}
        windowCroll={windowCroll.windowScroll}
      />
      <Footer
        desktop={desktop}
        large={large}
        mobile={mobile}
        pc={pc}
        windowCroll={windowCroll.windowScroll}
      />
    </>
  );
}

export default App;
