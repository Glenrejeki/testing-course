// src/helpers/apiHelper.js

// 🔹 Fungsi utama untuk melakukan request ke API menggunakan fetch()
async function fetchData(url, options = {}) {
  try {
    // Melakukan request ke server
    const res = await fetch(url, options);

    // Mengambil isi response dalam bentuk teks (karena belum tahu pasti JSON atau bukan)
    const text = await res.text();
    let data;

    // 🔹 Coba parse hasil response ke JSON
    // Jika gagal (bukan JSON), maka gunakan teks mentahnya
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }

    // 🔹 Jika response tidak OK (misal 404, 500), lempar error
    if (!res.ok) {
      throw new Error(data?.message || `Terjadi kesalahan (${res.status})`);
    }

    // 🔹 Kembalikan data hasil fetch
    return data;
  } catch (error) {
    // 🔹 Tampilkan error di console agar mudah debug
    console.error("API Error:", error.message);
    throw error; // lempar ulang error agar bisa ditangani di luar
  }
}

// 🔹 Buat objek apiHelper berisi semua fungsi API
// Tujuannya: jika nanti kamu tambah fungsi lain (misal postData, deleteData), bisa ditaruh di sini juga
const apiHelper = {
  fetchData,
};

// 🔹 Export default berarti hanya satu hal utama yang diekspor
// Jadi di file lain kamu pakai: import apiHelper from "@/helpers/apiHelper";
export default apiHelper;
