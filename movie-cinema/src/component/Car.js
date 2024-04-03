import petik from "./petik.png";

const Car = (props) => {
    const { merk, harga, isNew, colors,beli } = props; 
    return (
      <>
      <img src={petik} alt="foto-mobil" width={264}/>
      <h3>Merk Mobil : {merk}</h3>
      <h4>Harga Mobil : {harga} Miliyar</h4>
      <h5>Keadaan Mobil : {isNew ? "Baru" : "Bekas"}</h5> 
      <h5>Varian Warna : {colors.map((color) => color + ",")}</h5>
      <button onClick={beli}>Beli</button>
      </>
    );
  };

  export default Car;