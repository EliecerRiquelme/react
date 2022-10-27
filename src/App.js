import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";


export default function App(){
  return(
    <div>
        <Navbar />
        <ItemListContainer greeting={"Iniciando react Entrega 1"} />
        <Footer />

    </div>
  )
}
