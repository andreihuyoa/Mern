import { create } from "zustand";

/*
// const [state, setState] = useState([]); // eto local state
* eto global which means we can use in #any! components sa app
*/
export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please fill in all fields." };
    }
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
    const data = await res.JSON();
    set((state) => ({ products: [...state.products, data.data] }));
  },
}));
