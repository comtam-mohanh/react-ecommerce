import { Layout } from "../../layout/Layout"
import { LeftMenu } from "./components/LeftMenu"
import { OnSale } from "./components/OnSaleText"
import { ProductOption } from "./components/ProductOption"
import "./ProductsPage.css"

export function ProductsPage() {
    return (
        <Layout>
            <div className="page-container">
                <div className="header">
                    <h2>Bim Nu Tam Com To Ong Ba Ngoai</h2>
                    <p>The perk-friendly stackable cup that brings the cafe to any terrain.
                        Fits under most espresso machines.
                        Stackable for easy storage.
                        Splash resistant.
                        Dishwasher safe.</p>
                </div>
                <div className="page-body">
                    <LeftMenu />
                    <div className="product-options">
                        <div className="sale">
                            <OnSale />
                            <ProductOption />
                        </div>
                        <div className="sale">
                            <OnSale />
                            <ProductOption />
                        </div>
                        <ProductOption />
                        <ProductOption />
                        <ProductOption />
                        <ProductOption />
                        <ProductOption />
                        <ProductOption />
                        <ProductOption />
                        <ProductOption />
                    </div>
                </div>
                <div className="pages">
                    <p>1 2 3 4</p>
                </div>
            </div>
        </Layout>
    )
}