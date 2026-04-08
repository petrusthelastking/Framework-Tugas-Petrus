import DetailProduk from "../../views/DetailProduct";
import { produkType } from "@/types/Product.type";

const HalamanProduk = ({ product }: { product: produkType }) => {
  // digunakan client-side rendering
  // const router = useRouter();
  // const { data, error, isLoading } = useSWR(`/api/produk/${router.query.id}`, fetcher);
  // return (
  //   <div>
  //     <DetailProduk product={isLoading ? ({} as produkType) : data.data} />
  //   </div>
  // );

  return (
    <div>
      <DetailProduk product={product} />
    </div>
  );
};

export default HalamanProduk;

// digunakan server-side rendering
export async function getServerSideProps({ params }: { params: { id: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produk/${params?.id}`);
  const response: { data: produkType } = await res.json();
  // console.log("Data produk yang diambil dari API:", response);
  return {
    props: {
      product: response.data, // Pastikan untuk memberikan nilai default jika data tidak tersedia
    },
  };
}

// digunakan static-site generation
// export async function getStaticPaths() {
//   const products = (await retrieveProducts("products")) as produkType[];

//   const paths = products.map((product) => ({
//     params: { id: product.id },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }: { params: { id: string } }) {
//   const product = await retrieveDataById("products", params.id);

//   if (!product) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       product: {
//         id: params.id,
//         ...product,
//       },
//     },
//   };
// }
