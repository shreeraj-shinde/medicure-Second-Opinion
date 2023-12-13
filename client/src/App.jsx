import "./App.css";
import CreateRoutes from "./Routes/CreateRoutes";

function App() {
  const routes = CreateRoutes();
  return <>{routes}</>;
}

export default App;
