import "./assets/fonts/stylesheet.css";
import "./assets/fonts/style.css";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner, faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faSpinner, faStar);

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
