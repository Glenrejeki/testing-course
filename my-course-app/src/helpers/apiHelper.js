const apiHelper = {
  getAccessToken() {
    return localStorage.getItem("accessToken");
  },

  putAccessToken(token) {
    localStorage.setItem("accessToken", token);
  },

  async fetchData(url, options = {}) {
    const token = this.getAccessToken();
    const headers = {
      ...options.headers,
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json",
    };

    const response = await fetch(url, { ...options, headers });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Fetch error");
    }
    return response.json();
  },
};

export default apiHelper;
