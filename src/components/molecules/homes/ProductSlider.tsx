import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import ProductCard from "../../atoms/Card/ProductCard";

export interface Product {
  img: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  discount: number;
}

export const products: Product[] = [
  {
    img: "/images/product1.png",
    name: "Giày thể thao nữ Jintu 2 phối màu trắng hồng/kem cam vải mềm thoáng chân",
    oldPrice: "590,000₫",
    newPrice: "420,000₫",
    discount: 29,
  },
  {
    img: "/images/product1.png",
    name: "Giày sneaker nam Basic màu trắng phối xanh đen, đế cao su chống trượt aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    oldPrice: "650,000₫",
    newPrice: "480,000₫",
    discount: 26,
  },
  {
    img: "/images/product1.png",
    name: "Dép sandal nữ quai chéo thời trang, đế bệt êm chân",
    oldPrice: "350,000₫",
    newPrice: "245,000₫",
    discount: 30,
  },
  {
    img: "/images/product1.png",
    name: "Giày chạy bộ nam thể thao đen phối lưới thoáng khí",
    oldPrice: "720,000₫",
    newPrice: "540,000₫",
    discount: 25,
  },
  {
    img: "/images/product1.png",
    name: "Giày bata nữ kiểu dáng đơn giản, phối màu xám trắng trẻ trung",
    oldPrice: "480,000₫",
    newPrice: "360,000₫",
    discount: 25,
  },
  {
    img: "/images/product1.png",
    name: "Giày thể thao nam năng động phối cam đen, đế cao su đàn hồi",
    oldPrice: "800,000₫",
    newPrice: "600,000₫",
    discount: 25,
  },
];

export default function ProductSlider() {
  const [index, setIndex] = useState(0);
  const visibleCount = 4;
  const maxIndex = products.length - visibleCount; // max chỉ số có thể trượt

  const prev = () => {
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <Box
      sx={{
        width: 1300,
        position: "relative",
        overflow: "hidden",
        mx: "auto",
      }}
    >
      <IconButton
        onClick={prev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          zIndex: 10,
          transform: "translateY(-50%)",
        }}
      >
        <ArrowBackIosNewIcon sx={{ fontSize: 30, color: "black" }} />
      </IconButton>

      <IconButton
        onClick={next}
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          zIndex: 10,
          transform: "translateY(-50%)",
        }}
      >
        <ArrowForwardIosIcon sx={{ fontSize: 30, color: "black" }} />
      </IconButton>
      <Box
        sx={{
          width: 1200,
          position: "relative",
          overflow: "hidden",
          mx: "auto",
        }}
      >
        {/* Container chứa các item trượt */}

        <Box
          sx={{
            display: "flex",
            gap: 2,
            transition: "transform 0.5s ease",
            transform: `translateX(-${index * 230}px)`,
            mx: "auto", // căn giữa ngang
          }}
        >
          {products.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
