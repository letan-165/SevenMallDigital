import { Box } from "@mui/material";
import { Product } from "../../apis/dto/Response";
import ProductCard from "../atoms/Card/ProductCard";

const ListProduct = ({
  products,
  paddingTop,
  width = "100%",
}: {
  products: Product[];
  paddingTop?: number;
  width?: number | string;
}) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: 2,
        paddingTop: paddingTop,
        width: width,
      }}
    >
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </Box>
  );
};

export default ListProduct;
