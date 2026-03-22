import TampilanProduk from "../../views/product";
import { produkType } from "../../types/Product.type";
import { retrieveProducts } from "../../utils/db/servicefirebase";

const HalamanProdukStatic = (props: { products: produkType[] }) => {
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
    const response = (await retrieveProducts("products")) as produkType[];

    return {
        props: {
            products: response,
        },
        revalidate: 10, // Revalidate data setiap 10 detik
    };
}
