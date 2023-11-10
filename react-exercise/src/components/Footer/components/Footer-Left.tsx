import "./Footer-Left.css"

export function FooterLeft() {
    return (
        <div className="footer-left">
            <div className="logo">
                <h2>Grind</h2>
            </div>
            <div className="links">
                <div className="link one">
                    <h5>Shop</h5>
                    <div className="options">
                        <p>Coffee Cups</p>
                        <p>Tea Cups</p>
                        <p>Plates</p>
                        <p>Bowls</p>
                    </div>
                </div>

                <div className="link two">
                    <h5>Info</h5>
                    <div className="options">
                        <p>Contact Us</p>
                        <p>Privacy</p>
                        <p>Shipping & Returns</p>
                        <p>Payments</p>
                    </div>
                </div>

                <div className="link three">
                    <h5>Social</h5>
                    <div className="options">
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Pinterest</p>
                    </div>
                </div>

            </div>
        </div>
    )
}