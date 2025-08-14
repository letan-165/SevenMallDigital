import { Add, Remove } from "@mui/icons-material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import {
  Box,
  Card,
  Chip,
  Divider,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ButtonLoginCus } from "../../atoms/Form/ButtonLoginCus";

const productData = {
  name: "Giày thể thao nữ Jintu 2 phối màu trắng hồng/kem cam vải mềm thoáng chân",
  rating: 5,
  reviews: 3,
  sold: 3,
  discount: "-20%",
  oldPrice: "590.000đ",
  newPrice: "420.000 đ",
  postDate: "11/03/2025",
  description: [
    "Giày thể thao nữ Jintu 2 là lựa chọn hoàn hảo cho những có nàng yêu thích phong cách năng động nhưng vẫn muốn giữ nét nữ tính. Sản phẩm được thiết kế với hai phối màu thời trang trắng - hồng và kem - cam, mang lại vẻ ngoại tươi trẻ, dễ dàng kết hợp với nhiều trang phục khác nhau.",
  ],
  quantityAvailable: "Còn hàng",
  tags: ["Giày thể thao", "Nữ", "Thời trang"],
};

export const DetailProduct = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  return (
    <Card sx={{ m: 2, p: 2, overflow: "visible" }}>
      <Stack direction={"row"} sx={{ gap: 3 }}>
        <Stack flex={2}>
          <Box
            component="img"
            src={"/public/images/product1.png"}
            sx={{ width: "100%" }}
          />
        </Stack>
        <Stack flex={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {productData.name}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Rating value={productData.rating} readOnly size="small" />
            <Typography variant="body2" color="text.secondary">
              {productData.reviews} Đánh giá
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Đã bán {productData.sold}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Chip
              label={productData.discount}
              size="small"
              sx={{ bgcolor: "#ff5722", color: "white", fontWeight: 600 }}
            />
            <Typography
              variant="body2"
              sx={{ textDecoration: "line-through", color: "#999" }}
            >
              {productData.oldPrice}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#ff5722",
                fontWeight: 700,
                bgcolor: "#fff3e0",
                px: 2,
                py: 0.5,
              }}
            >
              {productData.newPrice}
            </Typography>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            <strong>Ngày đăng:</strong> {productData.postDate}
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Thông tin sản phẩm
            </Typography>
            {productData.description.map((desc, i) => (
              <Typography
                key={i}
                variant="body2"
                color="text.secondary"
                sx={{ lineHeight: 1.6, mb: 1 }}
              >
                {desc}
              </Typography>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 3 }}>
            <Typography variant="body2">Số lượng</Typography>
            <IconButton
              size="small"
              onClick={() => handleQuantityChange(-1)}
              sx={{ border: "1px solid #ddd" }}
            >
              <Remove fontSize="small" />
            </IconButton>
            <Typography sx={{ textAlign: "center" }}>{quantity}</Typography>
            <IconButton
              size="small"
              onClick={() => handleQuantityChange(1)}
              sx={{ border: "1px solid #ddd" }}
            >
              <Add fontSize="small" />
            </IconButton>
            <Typography variant="body2" sx={{ ml: 2 }}>
              {productData.quantityAvailable}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
            <Typography variant="body2" sx={{ mr: 1 }}>
              Tag
            </Typography>
            {productData.tags.map((tag, i) => (
              <Chip key={i} label={tag} size="small" variant="outlined" />
            ))}
          </Box>

          <ButtonLoginCus
            name="Thêm vào giỏ hàng"
            bgcolor="#F9C659"
            width={"35%"}
            color="black"
            icon={<ShoppingBagIcon />}
          />
        </Stack>
      </Stack>
    </Card>
  );
};
