import { create } from "zustand";

// const [state, setState] = useState([]); // eto local state

//eto global which means we can use in any components sa app
export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
