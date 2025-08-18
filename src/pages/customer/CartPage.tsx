import { Box, Divider, Stack, Typography } from "@mui/material";
import DefaultCart from "../../components/molecules/cart/DefaultCart";
import FooterCus from "../../components/organisms/FooterCus";
import { HeaderCustomerCus } from "../../components/organisms/HeaderCustomerCus";
import NavigationBar from "../../components/organisms/NavigationBar";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useEffect, useState } from "react";
import { Cart, CartItem } from "../../apis/dto/Response";
import CartService from "../../apis/services/CartService";
import { ButtonLoginCus } from "../../components/atoms/Form/ButtonLoginCus";
import ConfirmCart from "../../components/molecules/cart/ConfirmCart";
import PaymentCart from "../../components/molecules/cart/PaymentCart";

const CartPage = () => {
  const [page, setPage] = useState(0);
  const [cart, setCard] = useState<Cart>();
  const [items, setItems] = useState<CartItem[]>(cart?.items || []);
  const itemsIsSelect = items.filter((item) => item.selected);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userID = localStorage.getItem("userID");
        userID && setCard(await CartService.get(userID));
      } catch (error) {
        throw error;
      }
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ fontFamily: "sans-serif", bgcolor: "#fff" }}>
      <HeaderCustomerCus />
      <NavigationBar activeIndex={5} />
      <Stack alignItems={"center"}>
        <Box width={1200} mt={5}>
          <HeaderCart indexPage={page} setPage={setPage} />
          {page === 0 && items && (
            <DefaultCart cart={cart} setItems={setItems} />
          )}
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
