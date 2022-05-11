import CartWidget from "../CartWidget/CartWidget";

 export default function Navbar() {

     const headerStyles = {
         display: "flex",
         flexWrap: "wrap",
         justifyContent: "space-between",
         listStyle: "none"
     }

    return(
        <header className="header">
            <img className="logo" src="../Logo/WineMendoza.png" alt="Logo"/>
            <h1>Wine mendoza</h1>
            <ul className="links" style={headerStyles}>
                <li>Inicio</li>
                <li>Vinos</li>
                <li>Bodegas</li>
                <li>Contacto</li>
            </ul>
            <CartWidget/>
        </header>

    );
}