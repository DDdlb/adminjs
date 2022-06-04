import './App.css';
import {useRoutes} from "react-router";
import {routes} from './router/index'

function App() {
  const element = useRoutes(routes)
  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
