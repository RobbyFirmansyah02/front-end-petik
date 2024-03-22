import { Component} from "react";

function App() {
  return (
    <div className="App">
      <Header />
<h1>Hello World</h1>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum enim voluptate, aliquam reprehenderit quas ea, consequuntur inventore unde quasi veniam nulla officia est amet, fuga nobis ratione laudantium necessitatibus at nam optio laboriosam ad quibusdam molestiae? Ratione cupiditate amet assumenda. Consectetur, fuga vitae nisi architecto voluptatem consequuntur mollitia assumenda asperiores.</p>
<Footer />
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
}

class Footer extends Component {
  render() {
    return (
      <footer>
        <h3>Copyright &copy;2024 Developed by Robby Firmansyah</h3>
        <span>Make with &#10084</span>
      </footer>
    );
  }
}

export default App;
