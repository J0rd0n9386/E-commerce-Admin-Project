Jab user search box mein type kare toh products filter karo. Agar input khali ho toh sab products wapas lao.

const SearchProduct = async (event) => {
  // event = input box se aata hai

  let key = event.target.value;
  // user ne jo type kiya woh key mein save kiya
  // "Nokia" type kiya → key = "Nokia"
  // sab clear kiya  → key = ""

  if (key) {
  // agar key khali nahi hai

    let result = await axios.get(`/search/${key}`);
    // backend ko request bhejo
    // /search/Nokia → Nokia wale products aao

    setProducts(result.data);
    // jo products aaye unhe screen pe dikhaao

  } else {
  // agar key khali hai (user ne clear kiya)

    getProducts();
    // sab products wapas lao
  }
}

// FLOW
// User "N" type kare  →  /search/N  →  Nokia, Nothing...
// User "Nokia" type kare  →  /search/Nokia  →  sirf Nokia ✅
// User sab clear kare  →  getProducts()  →  sab products ✅


// event.target.value — input box ki current value
// if (key) — khali string false hoti hai, kuch bhi ho toh true
// getProducts() — useEffect ke bahar hona chahiye tabhi yahan call hoga