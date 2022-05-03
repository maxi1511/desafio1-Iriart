 export default function Navbar() {

     const headerStyles = {
         display: "flex",
         flexWrap: "wrap",
         justifyContent: "space-between",
         listStyle: "none"
     }

    return(
        <header className="header">
            <div className="logo">Logo</div>
            <h1>Wine Shop</h1>
            <ul className="links" style={headerStyles}>
                <li>Inicio</li>
                <li>Vinos</li>
                <li>Bodegas</li>
                <li>Contacto</li>
            </ul>
        </header>

    );
}