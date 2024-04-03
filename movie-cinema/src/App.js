import { Component} from "react";
import Header from "./component/Header.js";
import Car from "./component/Car.js";
import User from "./component/User.js";
import Footer from "./component/Footer.js";
import imgProfile from "./component/petik.png";

function App() {
  return (
    <div className="App">
      <Header />
<h1>Hello World</h1>
{/* <Car
 merk="Ferrari" 
 harga={5} 
 isNew={true} 
 colors={["Hitam", "Putih", "Abu-abu"]} 
 beli={() => alert("Sudah dibeli")}
 /> */}
 <User nama="Bambang" alamat="Bandung" angkatan={10} hobi={["Ngoding", "Memancing"]} isGraduate={false} gambar={imgProfile} message={() => alert("Profil nama telah dibuka")} 
 />
<Footer nama="Robby Firmansyah" />
    </div>
  );
}

const Header = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
      </ul>
    </nav>
  )
};

const Car = (props) => {
  const { merk, harga, isNew, colors,beli } = props; 
  return (
    <>
    <h3>Merk Mobil : {merk}</h3>
    <h4>Harga Mobil : {harga} Miliyar</h4>
    <h5>Keadaan Mobil : {isNew ? "Baru" : "Bekas"}</h5> 
    <h5>Varian Warna : {colors.map((color) => color + ",")}</h5>
    <button onClick={beli}>Beli</button>
    </>
  );
};



class Footer extends Component {
  render() {
    return (
      <footer>
        <h3>Copyright &copy;2024 Developed by {this.props.nama}</h3>
        <span>Make with &#10084</span>
      </footer>
    );
  }
}

const User = ({ nama, alamat, angkatan, hobi, isGraduate, gambar, message }) => {
  return (
    <div>
      <ul>
        <img src="{gambar}" alt=""/>
        <li>Nama : {nama} </li>
        <li>Alamat : {alamat} </li>
        <li>Angkatan Ke- : {angkatan} </li>
        <li>Hobi : {hobi} </li>
        <li>Status : {isGraduate} </li>
        <button>Message</button>
      </ul>
    </div>
  )
}

export default App;
