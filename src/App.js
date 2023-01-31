import "./App.css";
import { Box } from "@mui/system";
import grdiantImage from "./Assets/Images/bg-main-desktop.png";
import Inputs from "./Components/Inputs";
import Cards from "./Components/Cards";

function App() {
  const style = {
    mainCon: {
      display: "flex",
    },
    gradiantImg: {
      backgroundImage: `url(${grdiantImage})`,
      width: "484px",
      height: "100vh",
    },
    inputsCon: {
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
  return (
    <div>
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap"
          rel="stylesheet"
        />
      </header>
      <Box sx={style.mainCon}>
        <Box>
          <Box sx={style.gradiantImg} component="img"></Box>
        </Box>
        <Box sx={style.inputsCon}>
          <Inputs></Inputs>
        </Box>
      </Box>
    </div>
  );
}

export default App;
