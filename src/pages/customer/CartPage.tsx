import { Box, Divider, Stack, Typography } from "@mui/material";
import DefaultCart from "../../components/molecules/cart/DefaultCart";
import FooterCus from "../../components/organisms/FooterCus";
import { HeaderCustomerCus } from "../../components/organisms/HeaderCustomerCus";
import NavigationBar from "../../components/organisms/NavigationBar";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useState } from "react";
import { ButtonLoginCus } from "../../components/atoms/Form/ButtonLoginCus";
import ConfirmCart from "../../components/molecules/cart/ConfirmCart";
import PaymentCart from "../../components/molecules/cart/PaymentCart";
interface Item {
  id: number;
  name: string;
  shop: string;
  oldPrice: number;
  newPrice: number;
  quantity: number;
  image: string;
  selected: boolean;
}

const CartPage = () => {
  const [page, setPage] = useState(0);
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      name: "Giày thể thao nữ Jintu 2 phối màu trắng hồng/kem cam vải mềm thoáng chân",
      shop: "Lê Minh Tân - Đa cấp",
      oldPrice: 590000,
      newPrice: 420000,
      quantity: 1,
      image: "/images/product1.png",
      selected: false,
    },
    {
      id: 2,
      name: "Giày thể thao nữ Jintu 2 phối màu trắng hồng/kem cam vải mềm thoáng chân",
      shop: "Lê Minh Tân - Đa cấp",
      oldPrice: 590000,
      newPrice: 420000,
      quantity: 1,
      image: "/images/product1.png",
      selected: false,
    },
    {
      id: 3,
      name: "Giày thể thao nữ Jintu 2 phối màu trắng hồng/kem cam vải mềm thoáng chân",
      shop: "Lê Minh Tân - Đa cấp",
      oldPrice: 590000,
      newPrice: 420000,
      quantity: 1,
      image: "/images/product1.png",
      selected: false,
    },
  ]);
  const itemsIsSelect = items.filter((item) => item.selected);
  return (
    <Box sx={{ fontFamily: "sans-serif", bgcolor: "#fff" }}>
      <HeaderCustomerCus />
      <NavigationBar activeIndex={5} />
      <Stack alignItems={"center"}>
        <Box width={1200} mt={5}>
          <HeaderCart indexPage={page} setPage={setPage} />
          {page === 0 && <DefaultCart items={items} setItems={setItems} />}
          {page === 1 && (
            <ConfirmCart items={itemsIsSelect} setPage={setPage} />
          )}
          {page === 2 && (
            <PaymentCart items={itemsIsSelect} setPage={setPage} />
          )}
        </Box>
      </Stack>
      <FooterCus />
    </Box>
  );
};

const HeaderCart = ({ indexPage, setPage }) => {
  return (
    <Stack direction={"row"} alignItems={"center"} gap={10}>
      <Stack
        onClick={() => {
          if (indexPage != 0) {
            setPage(indexPage - 1);
          }
        }}
        direction={"row"}
        sx={{
          alignItems: "center",
          bgcolor: "#f9c659",
          p: 1,
          gap: 2,
          cursor: "pointer",
        }}
      >
        <ShoppingBagIcon sx={{ fontSize: 60, color: "black", p: 1 }} />
        <Divider
          orientation="vertical"
          flexItem
          sx={{ bgcolor: "black", width: 3 }}
        />
        <Typography sx={{ color: "black", p: 0, fontWeight: "bold" }}>
          {indexPage === 0 ? "Giỏ hàng" : "Quay lại"}
        </Typography>
      </Stack>
      {indexPage === 0 && (
        <ButtonLoginCus
          name="Đặt hàng"
          width={"12%"}
          onClick={() => setPage(1)}
        />
      )}
      {indexPage === 2 && (
        <Stack>
          <Stack direction={"row"} gap={20}>
            <Typography sx={{ color: "black", p: 0 }}>
              <b>Tên:</b> abc
            </Typography>
            <Typography sx={{ color: "black", p: 0 }}>
              <b>Số điện thoại:</b> 0123
            </Typography>
          </Stack>
          <Typography sx={{ color: "black", p: 0 }}>
            <b>Địa chỉ:</b> abc@ads
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};

export default CartPage;
