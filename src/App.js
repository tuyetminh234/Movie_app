import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import { LoadingProvider } from "./contexts/loading/LoadingContext";
import BackToTopButton from "components/backToTopButton";

function App() {
  
  return (
    <BrowserRouter>
      <LoadingProvider>
        <Router />
        <BackToTopButton/>
      </LoadingProvider>
    </BrowserRouter>
  );
}

export default App;




