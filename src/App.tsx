import "./App.css";
import { SearchInputs } from "./components/@molecules/SearchInputs";

function App() {
  return (
    <div className="bg-gray-100">
      <div className=" h-screen container mx-auto">
        <h1 className="font-head text-blue-500  font-semibold container text-center text-4xl py-10">
          Component test page
        </h1>

        <SearchInputs />
      </div>
    </div>
  );
}

export default App;
