import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../../Paths";
import { Product } from "../../../apis/dto/Response";

const ProductCard = ({ product }: { product: Product }) => {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => navigate(Paths.PRODUCT)}
      sx={{
        width: 220,
        border: "1px solid #ccc",
        boxShadow: 1,
        p: 1,
        position: "relative",
        bgcolor: "white",
        flexShrink: 0,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        cursor: "pointer",
      }}
    >
      <Box
        component="img"
        src={"/public/images/product1.png"}
        alt={product.name}
        sx={{ width: "100%", height: 220, objectFit: "cover" }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          bgcolor: "orange",
          color: "white",
          px: 1,
          borderRadius: "0 0 0 8px",
          fontWeight: "bold",
          fontSize: 12,
        }}
      >
        -{product.stock}%
      </Box>

      <Typography
        variant="body2"
        sx={{
          mt: 1,
          height: 60,
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          textOverflow: "ellipsis",
        }}
      >
        {product.name}
      </Typography>

      <Box sx={{ mt: 1, display: "flex", gap: 1, alignItems: "center" }}>
        <Typography
          variant="body2"
          sx={{ textDecoration: "line-through", color: "#999" }}
        >
          {product.price}
        </Typography>
        <Typography variant="body2" color="error" fontWeight="bold">
          {product.price}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;
