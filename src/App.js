import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={"¡¡Bienvenidos a nuestra tienda de vinos!!"}/>
    
    </div>
  );
}

export default App;