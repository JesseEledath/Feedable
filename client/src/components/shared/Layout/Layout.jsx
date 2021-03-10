import Navbar from "../Nav/Navbar";
import Footer from "../Footer/Footer";
import "./Layout.css";

export default function Layout(props) {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
}
