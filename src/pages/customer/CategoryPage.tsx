import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Product } from "../../apis/dto/Response";
import ProductsService from "../../apis/services/ProductsService";
import ListCheckBoxTestCus from "../../components/atoms/ListCheckBoxTextCus";
import ListProduct from "../../components/atoms/ListProduct";
import ListTextCus from "../../components/atoms/ListTextCus";
import FooterCus from "../../components/organisms/FooterCus";
import { HeaderCustomerCus } from "../../components/organisms/HeaderCustomerCus";
import NavigationBar from "../../components/organisms/NavigationBar";

const CategoryPage = () => {
  const items = ["Mục 1", "Mục 2", "Mục 3"];
  const items2 = ["Mới nhất", "Phổ biến", "Giá tăng dần", "Giá giảm dần"];
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setProducts((await ProductsService.findAll(1)).products);
      } catch (e) {
        throw e;
      }
    };

    fetchData();
  }, []);
  return (
    <Box sx={{ fontFamily: "sans-serif", bgcolor: "#fff" }}>
      <HeaderCustomerCus />
      <NavigationBar activeIndex={1} />
      <Stack height={1300} direction="row" pt={1}>
        <Stack
          p={1}
          width={"20%"}
          borderRight={"3px solid grey"}
          alignItems={"center"}
        >
          <ListTextCus title="DANH MỤC" items={items} />
          <ListCheckBoxTestCus title={"Dịch vụ khuyến mãi"} items={items} />
          <ListCheckBoxTestCus title={"Gợi ý thẻ hot"} items={items} />
        </Stack>
        <Stack width="80%" p={1} sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", top: 0, right: 0, zIndex: 999 }}>
            <ListTextCus title="Xếp theo" items={items2} />
          </Box>
          <ListProduct products={products} paddingTop={6} />
        </Stack>
      </Stack>

      <FooterCus />
    </Box>
  );
};

export default CategoryPage;
