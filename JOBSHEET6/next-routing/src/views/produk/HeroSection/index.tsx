const HeroSection = () => {
  return (
    <div className="bg-blue-600 text-white py-16 px-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Selamat Datang di Halaman Produk</h1>
      <p className="text-lg text-blue-100 max-w-xl mx-auto">
        Temukan berbagai produk pilihan terbaik kami dengan kualitas terjamin dan harga terjangkau.
      </p>
      <button className="mt-6 bg-white text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-blue-50 transition">
        Lihat Semua Produk
      </button>
    </div>
  );
};

export default HeroSection;
