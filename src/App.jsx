import "./styles/App.css";
import logo from "./assets/logo.svg";
import icon from "./assets/icon.svg";
import projectOverlay from "./assets/projectOverlay.png";
function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="logoArea">
            <img src={logo} alt="Logo Condelandia" />
          </div>
          <div className="menuArea">
            <ul>
              <li>
                <a href="#">meu github</a>
              </li>
              <li>
                <a href="#">entrar na comunidade</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <section className="sectionText">
          <div className="container">
            <div className="text">
              <h2>comunidade dev</h2>
              <h1>Projetos da comunidade Codelândia</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                felis ligula, accumsan nec cursus in, eleifend sit amet dui.
              </p>
            </div>
          </div>
        </section>
        <section className="cards">
          <div className="container">
            <div className="card">
              <div className="card-image">
                <img src={projectOverlay} alt="Project Image" />
              </div>
              <span className="title">Nome do projeto 1</span>
              <span className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                felis ligula, accumsan nec cursus in, eleifend sit amet dui.
              </span>
              <div className="btnsArea">
                <a href="#" className="btn">
                  demo
                </a>
                <a href="#" className="btn">
                  github
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={projectOverlay} alt="Project Image" />
              </div>
              <span className="title">Nome do projeto 1</span>
              <span className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                felis ligula, accumsan nec cursus in, eleifend sit amet dui.
              </span>
              <div className="btnsArea">
                <a href="#" className="btn">
                  demo
                </a>
                <a href="#" className="btn">
                  github
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={projectOverlay} alt="Project Image" />
              </div>
              <span className="title">Nome do projeto 1</span>
              <span className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                felis ligula, accumsan nec cursus in, eleifend sit amet dui.
              </span>
              <div className="btnsArea">
                <a href="#" className="btn">
                  demo
                </a>
                <a href="#" className="btn">
                  github
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={projectOverlay} alt="Project Image" />
              </div>
              <span className="title">Nome do projeto 1</span>
              <span className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                felis ligula, accumsan nec cursus in, eleifend sit amet dui.
              </span>
              <div className="btnsArea">
                <a href="#" className="btn">
                  demo
                </a>
                <a href="#" className="btn">
                  github
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="icon">
            <img src={icon} alt="Icon Condelandia" />
          </div>
          <div className="text">
            <span>© 2022 - Vinicios Ragazzi</span>
            <span>Codelândia</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
