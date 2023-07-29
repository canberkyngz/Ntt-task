import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: true,
  cardsToShow: 4,
  isLiked: [],
  showLikedProducts: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;//ürünleri güncelle
      state.isLoading = false; //ürünler geldiği zaman loading iconu gider
      state.isLiked = new Array(action.payload.length).fill(false);
    },
    setLiked(state, action) {
      state.isLiked[action.payload.index] =
        !state.isLiked[action.payload.index]; //burda isLiked durumu true olanları false,false olanları true yapar
    },
    setShowLikedProducts(state, action) {
      state.showLikedProducts = !state.showLikedProducts;// burda beğenilen ürünler açıksa yari true ise false yapar,false ise true yapar.Yani benim beğenilen ürünlerimi gösterir.
    },
    showMoreCards(state) {
      state.cardsToShow += 4;
    },
  },
});

export const { setProducts, setLiked, setShowLikedProducts, showMoreCards } = productSlice.actions;

export default productSlice.reducer;