import "./App.css";
import { useState } from "react";
import PropTypes from "prop-types";

function ShowAll({
  numText = 5,
  text = "hkgfskjdhgfjyregfyu iufrhyushfr eyrf iuwtyeryi swiutyer bw7t4r s 7tr87swetrfuiysgfjhgsdjyt sdtfyuisdguyft v   u7ytfuysdtufy usyytdfuytswuhufsd fiusdhyfk skjudfhfkjs sdkfjhskjd sdoufhsdb sdukfhousd sdifuo8ew soiuhnf osifr-0ui 98fiohsdf o97foishfj 09uidhf ffu n09s09uf 0fuse0uf 08 gfkjgg;od ufsdoif oisd gjsduf 089sd fsd9gusdp9f upsd9uf p9sduf g",
}) {
  const [hiddenText, setHiddenText] = useState(true);

  let content = text;
  const arr = content.split(" ");
  const shortText = arr.slice(0, numText).join(" ");

  function handleHiddenSection() {
    setHiddenText(!hiddenText);
  }

  return (
    <>
      <p style={{ padding: "1rem", backgroundColor: "yellow", margin: "0" }}>
        {hiddenText ? `${shortText}...` : content}
      </p>
      <button
        style={{
          border: "none",
          color: "blue",
          backgroundColor: "transparent",
        }}
        onClick={handleHiddenSection}
      >
        {hiddenText ? "Show more..." : "Show less..."}
      </button>
    </>
  );
}
ShowAll.propTypes = {
  numText: PropTypes.number,
  text: PropTypes.string,
};

function App() {
  return (
    <div>
      <ShowAll
        numText={3}
        text="hgsjfd sduhf sdofyuu98 soidduf sduf lkjfd nij sdoif8o df hio dso sfyuf sofd f 8fy98ysdof 8fy fd ug j fy hf sf9ug jf 98g"
      />
    </div>
  );
}

export default App;
