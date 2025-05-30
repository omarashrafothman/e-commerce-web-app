import React from "react";
import ProductCard from "../product/ProductCard";
import { Product } from "../../types/types";

type ProductListProps = {
    title: string;
    products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ title, products }) => {
    return (
        <section>
            <h2 className="text-2xl font-bold mb-6">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductList;
