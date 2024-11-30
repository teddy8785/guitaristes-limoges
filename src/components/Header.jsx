import "../styles/header.css";

function Header({children}) {
  return (
    <header className="header">
      {children}
    </header>
  );
}

export default Header;
