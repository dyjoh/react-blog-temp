import "./TopBar.css";
export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcons fa-brands fa-github"></i>
        <i className="topIcons fa-brands fa-linkedin"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write</li>
          <li className="topListItem">Log Out</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ash-pikachu-pokemon-ultimate-journeys-1668187026.jpg?crop=0.551xw:0.980xh;0.346xw,0.0184xh&resize=640:*" alt=""/>
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
