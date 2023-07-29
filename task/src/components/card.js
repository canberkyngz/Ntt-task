import { Button, Stack, Box } from "@mui/material";
import React, { useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Grid from "@mui/material/Grid";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import ProductCard from "./productCard";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  setLiked,
  setShowLikedProducts,
  showMoreCards,
} from "../features/productSlice";

function CardPage() {
  const dispatch = useDispatch();
  const { products, isLoading, cardsToShow, isLiked, showLikedProducts } =
    useSelector((state) => state.products);

  useEffect(() => {
    axios
      .get("https://honey-badgers-ecommerce.glitch.me/products")
      .then((response) => {
        dispatch(setProducts(response.data));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [dispatch]);

  useEffect(() => {
    const likedProductCount = isLiked.filter((liked) => liked).length;
    document.getElementById(
      "likedProductCount"
    ).textContent = `${likedProductCount} ürün`;
    const buttonLabel = showLikedProducts
      ? "Tüm Ürünleri Göster"
      : "Beğenilenler";
    const buttonElement = document.getElementById("showLikedProductsButton");
    if (buttonElement) {
      buttonElement.textContent = buttonLabel;
    }
  }, [isLiked,showLikedProducts]);

  const handleLikeClick = (index) => {
    dispatch(setLiked({ index }));
  };

  const handleShowLikedProducts = () => {
    dispatch(setShowLikedProducts());
    
  };

  const handleShowMore = () => {
    dispatch(showMoreCards());
  };
  console.log("yükleme", isLoading);
  console.log(isLiked);
  return (
    <div className="container m-16 ">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h1 className="text-4xl">Content title goes here</h1>
        </Grid>
        <Grid item xs={4}>
          <Stack
            direction={"row"}
            spacing={3}
            alignItems="center"
            justifyContent="center"
            style={{ height: "80px" }}
          >
            <Stack direction={"row"} spacing={1} alignItems="center">
              <FavoriteBorderIcon />
              <p id="likedProductCount">0 ürün</p>
            </Stack>
            <Button
              variant="contained"
              onClick={handleShowLikedProducts}
              id="showLikedProductsButton"
            >
             'Beğenilenler'
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <div className="card container w-11/12">
        <Grid container spacing={2}>
          {isLoading ? (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </Box>
          ) : (
            products
              // Eğer showLikedProducts değeri true ise, ürünün isLiked[product.id] değeri true olmalıdır ki bu ürünün beğenildiği anlamına gelir ve bu ürünü filtrelemede tutar. Eğer showLikedProducts değeri false ise, her zaman true döndürülür, bu da tüm ürünlerin filtrelemede tutulacağı anlamına gelir.
              .filter((product, index) =>
                showLikedProducts ? isLiked[product.id] : true
              )
              .slice(0, cardsToShow)
              .map((product, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                  <ProductCard
                    product={product}
                    isLiked={isLiked[product.id]}
                    onLikeClick={() => handleLikeClick(product.id)}
                  />
                </Grid>
              ))
          )}
        </Grid>
      </div>
      {/* beğenilen ürün yoksa ve aynı zamanda gösterilen ürün sayım toplam ürün sayısından küçükse show more butonu gözükür */}
      {!showLikedProducts && cardsToShow < products.length && (
        <div className="text-center mt-4">
          <Button variant="contained" onClick={handleShowMore}>
            Show More
          </Button>
        </div>
      )}
    </div>
  );
}
export default CardPage;
