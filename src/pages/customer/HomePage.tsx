import { Box, Container, Stack, Typography } from "@mui/material";

import ListProduct from "../../components/atoms/ListProduct";
import BannerCus from "../../components/molecules/homes/BannerCus";
import ProductSlider, {
  products,
} from "../../components/molecules/homes/ProductSlider";
import FooterCus from "../../components/organisms/FooterCus";
import { HeaderCustomerCus } from "../../components/organisms/HeaderCustomerCus";
import NavigationBar from "../../components/organisms/NavigationBar";
export function HomePage() {
  const listProduct = products;
  return (
    <Box sx={{ fontFamily: "sans-serif", bgcolor: "#fff" }}>
      <HeaderCustomerCus />
      <NavigationBar activeIndex={0} />
      <Stack alignItems={"center"}>
        <BannerCus />

        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: 20,
            color: "#FF6600",
          }}
        >
          NỔI BẬC HÔM NAY
        </Typography>
        <Container sx={{ height: 4, bgcolor: "#FF6600" }} />

        <ProductSlider />

        <Container sx={{ mt: 5, height: 4, bgcolor: "black" }} />
        <Typography
          sx={{
            mt: 2,
            width: 1200,
            textAlign: "left",
            fontWeight: "bold",
            fontSize: 20,
            color: "black",
          }}
        >
          CÁC SẢN PHẨM TRONG CHƯƠNG TRÌNH GIẢM GIÁ
        </Typography>

        <ListProduct products={products} width={1200} />
      </Stack>
      <FooterCus />
    </Box>
  );
}
