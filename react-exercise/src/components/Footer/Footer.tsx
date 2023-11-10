import "./Footer.css"
import { RooterBottom } from "./components/Footer-Bottom"
import { FooterLeft } from "./components/Footer-Left"
import { FooterRight } from "./components/Footer-Right"

export function Footer() {
    return (
        <div className="footer">
            <div className="top">
                <FooterLeft />
                <FooterRight />
            </div>
            <div className="bottom">
                <RooterBottom />
            </div>
        </div>
    )
}