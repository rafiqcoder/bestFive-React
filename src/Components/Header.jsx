import HeaderContent from "./HeaderContent";
import Button from "./UiElements/Button";
import Nav from "./UiElements/Nav";

const Header = () => {
  // we can pass dynamic values with curly braces {}

  return (
    <header
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "1200px",
      }}
    >
      <h1>LOGO</h1>
      <Nav />
      <Button text="Login" />
    </header>
  );
};
export default Header;
