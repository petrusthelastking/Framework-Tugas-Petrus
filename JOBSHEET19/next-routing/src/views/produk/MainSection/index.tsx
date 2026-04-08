const produkList = [
  { id: 1, nama: "Produk A", harga: "Rp 100.000", deskripsi: "Deskripsi produk A yang berkualitas tinggi." },
  { id: 2, nama: "Produk B", harga: "Rp 200.000", deskripsi: "Deskripsi produk B pilihan terbaik." },
  { id: 3, nama: "Produk C", harga: "Rp 150.000", deskripsi: "Deskripsi produk C dengan harga terjangkau." },
];

const MainSection = () => {
  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Daftar Produk</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {produkList.map((produk) => (
          <div
            key={produk.id}
            className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white"
          >
            <h3 className="text-xl font-bold text-blue-600 mb-2">{produk.nama}</h3>
            <p className="text-gray-500 text-sm mb-4">{produk.deskripsi}</p>
            <span className="text-green-600 font-semibold">{produk.harga}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSection;
