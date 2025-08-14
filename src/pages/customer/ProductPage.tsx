import { Box, Container, Stack, Typography } from "@mui/material";
import ProductSlider from "../../components/molecules/homes/ProductSlider";
import { DetailProduct } from "../../components/molecules/product/DetailProduct";
import { InfoShop } from "../../components/molecules/product/InfoShop";
import FooterCus from "../../components/organisms/FooterCus";
import { HeaderCustomerCus } from "../../components/organisms/HeaderCustomerCus";
import NavigationBar from "../../components/organisms/NavigationBar";

const ProductPage = () => {
  return (
    <Stack sx={{ fontFamily: "sans-serif", bgcolor: "#fff" }}>
      <HeaderCustomerCus />
      <NavigationBar activeIndex={0} />
      <Stack width={"100%"} alignItems={"center"}>
        <Box width={1200}>
          <DetailProduct />
          <InfoShop />
        </Box>
        <Typography
          sx={{
            mt: 2,
            fontWeight: "bold",
            fontSize: 20,
            color: "#FF6600",
          }}
        >
          NỔI BẬC HÔM NAY
        </Typography>
        <Container sx={{ height: 4, bgcolor: "#FF6600" }} />
        <ProductSlider />
      </Stack>
      <FooterCus />
    </Stack>
  );
};

export default ProductPage;
