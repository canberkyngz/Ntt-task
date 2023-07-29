import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton, Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";

function ProductCard({ product, isLiked, onLikeClick }) {
  const handleCardClick = (event) => {
    // Eğer kalp ikonuna tıklanırsa, kalp ikonuna tıklamayı durdur ve sadece onLikeClick fonksiyonunu çağır.
    if (event.target.tagName === "svg") {
      event.stopPropagation();
    } else {
      // Kalp ikonuna tıklanmamışsa, kartın üzerine tıklandığında google.com'a yönlendir.
      window.open("https://www.google.com", "_blank");
    }
  };
  return (
    <Card sx={{ maxWidth: 345, height: "100%", position: "relative" }} onClick={handleCardClick}>
      <Box sx={{ height: 140 }}>
        <CardMedia
          component="img"
          sx={{ objectFit: "cover", height: "100%" }}
          image={product.imageUrl}
          title="green iguana"
        />
        <Box sx={{ position: "absolute", top: 8, right: 8 }}>
          <IconButton
            sx={{
              color: isLiked ? "red" : "#D1D1D1",
              backgroundColor: "#fff",
              borderRadius: "50%",
              border: "2px solid #fff",
              padding: "4px",
              "&:hover": {
                backgroundColor: "#fff",
              },
            }}
            onClick={onLikeClick} //onLikeClick propsunu onClick fonksiyonuna eşitledik böylelikle card.js dosyası içindeki productCard objesinin içindeki onLikeclick propsunu çağırığ fonksionu çalıştırdık
          >
            {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardContent>
        <div>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            className="bg-indigo-100"
          >
            {product.price} TL
          </Typography>
          <Typography
            gutterBottom
            component="div"
            variant="h6"
            sx={{ fontWeight: "bold", fontSize: "15px" }}
          >
            Description
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </div>
        <div>
          <Typography variant="body2" color="black">
            {product.shippingMethod}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;

