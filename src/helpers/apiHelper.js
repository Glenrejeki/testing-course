export async function fetchData(url, options = {}) {
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Terjadi kesalahan");
    }
    return data;
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
}
