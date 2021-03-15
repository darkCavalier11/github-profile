import Header from "./Header";
import { useStateValue } from "./StateProvider";
import './App.css'

function App() {
  const [{ msg }, dispatch] = useStateValue();
  return (
    <div className="app">
      <Header></Header>
    </div>
  );
}

export default App;
