import "./assets/fonts/stylesheet.css";
import "./assets/fonts/style.css";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSpinner,
  faStar,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
library.add(faSpinner, faStar, faPlus, faMinus);

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
