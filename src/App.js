import Home from "./component/Home/Home";
import About from "./component/About/About";
import Resume from "./component/Resume/Resume";
import Work from "./component/Work/Work";
import Contact from "./component/Contact/Contact";
import ContextBtnState from "./container/ContextApi/Contextapi"
import "./App.css"

const index = () => {
  return (
    <div className="body">
      <ContextBtnState>
        <Home />
        <About />
        <Resume />
        <Work />
        <Contact />
      </ContextBtnState>
    </div>
  );
}

export default index;