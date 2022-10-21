import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import { Loading } from "./components/Loading";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <Routes />
      <Loading />
      <ToastContainer />
    </div>
  );
};

export default App;
