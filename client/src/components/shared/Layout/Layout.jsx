import Navbar from "../Nav/Navbar";
import Footer from "../Footer/Footer";
import "./Layout.css";

export default function Layout(props) {
  // console.log("Layout", props.user)
  return (
    <div className="layout">
      <Navbar user={props.user}/>
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
}
