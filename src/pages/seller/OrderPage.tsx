import { Box, Stack } from "@mui/material";
import { useState } from "react";
import BodyOrder from "../../components/molecules/order/BodyOrder";
import OrderNav from "../../components/molecules/order/OrderNav";
import FooterCus from "../../components/organisms/FooterCus";
import { HeaderCustomerCus } from "../../components/organisms/HeaderCustomerCus";
import NavigationBar from "../../components/organisms/NavigationBar";

const OrderPage = () => {
  const [page, setPage] = useState(0);
  return (
    <Box sx={{ fontFamily: "sans-serif", bgcolor: "#fff" }}>
      <HeaderCustomerCus />
      <NavigationBar activeIndex={2} role="ADMIN" />
      <Stack alignItems={"center"}>
        <Stack width={1200}>
          <OrderNav
            title={"QUẢN LÍ ĐƠN HÀNG"}
            justifyContent="space-evenly"
            page={page}
            setPage={setPage}
            nav={["Tất cả", "Đang đợi", "Xác nhận", "Đang giao", "Đã giao"]}
          />
          <BodyOrder />
        </Stack>
      </Stack>
      <FooterCus />
    </Box>
  );
};

export default OrderPage;
