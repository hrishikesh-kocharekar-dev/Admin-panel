import './navbar.scss'
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <span>AdminDash</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="/profile.svg" alt="" />
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
}
