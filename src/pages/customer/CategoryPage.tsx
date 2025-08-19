import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Category, Product } from "../../apis/dto/Response";
import CategoryService from "../../apis/services/CategoryService";
import ProductsService from "../../apis/services/ProductsService";
import ListCheckBoxTestCus from "../../components/atoms/ListCheckBoxTextCus";
import ListProduct from "../../components/atoms/ListProduct";
import ListTextCus from "../../components/atoms/ListTextCus";
import FooterCus from "../../components/organisms/FooterCus";
import { HeaderCustomerCus } from "../../components/organisms/HeaderCustomerCus";
import NavigationBar from "../../components/organisms/NavigationBar";

const CategoryPage = () => {
  const items1 = ["Sắp hết giảm giá", "Giảm sâu", "10%", "30%", "15%"];
  const items2 = [
    { id: "1", text: "Mới nhất" },
    { id: "2", text: "Phổ biến" },
    { id: "3", text: "Giá tăng dần" },
    { id: "4", text: "Giá giảm dần" },
  ];

  const [products, setProducts] = useState<Product[]>();
  const [categories, setCategories] = useState<Category[]>();
  const categoriesTags = categories?.flatMap((c) => c.tags) || [];
  const categoriesName =
    categories?.map((c) => ({
      id: c._id,
      text: c.name,
    })) || [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setProducts((await ProductsService.findAll(1, 30)).products);
        setCategories((await CategoryService.findAll(1, 10)).categories);
      } catch (e) {
        console.error(e);
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
          <ListTextCus title="DANH MỤC" items={categoriesName} />
          <ListCheckBoxTestCus title={"Dịch vụ khuyến mãi"} items={items1} />
          <ListCheckBoxTestCus title={"Gợi ý thẻ hot"} items={categoriesTags} />
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
