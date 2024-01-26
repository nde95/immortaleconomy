import "./App.css";
import Home from "./components/Home";
import { ItemProvider } from "./context/ItemContext";

function App() {
  return (
    <>
      <ItemProvider>
        <div className="h-full w-full">
          <Home />
        </div>
      </ItemProvider>
    </>
  );
}

export default App;
