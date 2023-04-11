import BodyComponent from "./components/Body/BodyComponent";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="dictionary-app">
      <Header/>
      <BodyComponent/>
      <Footer/>
    </div>
  )
}

export default App;
