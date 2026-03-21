import TampilanProduk from "../../views/product";
import { produkType } from "../../types/Product.type";
import { retrieveProducts } from "../../utils/db/servicefirebase";

const HalamanProdukStatic = (props:{products: produkType[]}) => {
    const { products } = props;
    return (
        <div>
            <h1>Halaman Produk Static</h1>
                <TampilanProduk products={products} />
        </div>
    );
};

export default HalamanProdukStatic;

export async function getStaticProps() {
    const data = await retrieveProducts("products");

    return {
        props: {
            products: data,
        },
    };
}