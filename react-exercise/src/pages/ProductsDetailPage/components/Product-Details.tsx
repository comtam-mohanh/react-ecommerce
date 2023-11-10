import { Button } from "../../Authentication/components/Button/Button";
import { DetailBottom } from "./Datails-Bottom";
import { DetailTop } from "./Details-Top";
import "./Product-Details.css"

export function ProductDetail() {
    return (
        <div className="product-detail">
            <DetailTop />
            <DetailBottom />
            <Button>Add to cart</Button>
        </div>
    )
}