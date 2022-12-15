
import "./main.css";
import metamaskItem from "../images/metamaskItem.gif";

function NavBar() {
  return (
    <div className="navBar">
      <div className="navItem"> Hetse and Gretse</div>
      <button className="navItem"> Service</button>
      <button className="navItem"> SideBar2</button>
      <button className="navItem"> SideBar3</button>
      <img className="fox" src={metamaskItem} alt="metamaskItem"/>
    </div>
  );
}
export default NavBar;
