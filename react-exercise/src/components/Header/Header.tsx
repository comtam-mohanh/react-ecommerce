import "./Header.css"
export function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <button type="button" >Shop</button>
                <div className="btn-content">
                    <p>Link 1</p>
                    <p>Link 2</p>
                    <p>Link 3</p>
                </div>
                <p>About</p>
            </div>
            <div className="header-mid">
                <h2>Grind</h2>
            </div>
            <div className="header-right">
                <p>Login</p>
                <p>Cart</p>
            </div>
        </div>
    )
}