import "./styles.css";
import Login from "./components/login/login.jsx";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Content from "./components/content/content.jsx";

export default function App() {
  return (
    <div className="App">
      <span className="bubble bubble1"></span>
      <span className="bubble bubble2"></span>
      <div className="header">
        <Header />
      </div>
      <div className="main-body">
        <div className="left">
          <Login />
        </div>
        <div className="design">
          <Content />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
