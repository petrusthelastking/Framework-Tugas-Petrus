import { produkType } from "@/types/Product.type";
import styles from "./detailProduct.module.scss";

const TampilanDetailProduk = ({ product }: { product: produkType }) => {
    return (
        <>
            <h1 className={styles.title}>Detail Produk</h1>
            <div className={styles.produkdetail}>
                <div className={styles.produkdetail__image}>
                    <img src={product.image} alt={product.name} width={300} />
                </div>

                <div className={styles.produkdetail__info}>
                    <h1 className={styles.produkdetail__name}>{product.name}</h1>
                    <p className={styles.produkdetail__category}>{product.category}</p>
                    <p className={styles.produkdetail__price}>
                        Rp {product.price?.toLocaleString("id-ID")}
                    </p>
                </div>
            </div>
        </>
    );
};

export default TampilanDetailProduk;