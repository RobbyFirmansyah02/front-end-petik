const User = ({ nama, alamat, angkatan, hobi, isGraduate, message, gambar }) => {
    return (
      <div>
        <ul>
            <img src="{gambar}" alt=""/>
          <li>Nama : {nama} </li>
          <li>Alamat : {alamat} </li>
          <li>Angkatan Ke- : {angkatan} </li>
          <li>Hobi : {hobi} </li>
          <li>Status : {isGraduate} </li>
          <button onClick={message}>Message</button>
        </ul>
      </div>
    )
  }

  export default User;