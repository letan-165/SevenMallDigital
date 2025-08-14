import { Box, Stack, Typography } from "@mui/material";
import ConfirmCartCard from "../../atoms/Card/ConfirmCartCard";
import { ButtonLoginCus } from "../../atoms/Form/ButtonLoginCus";

const ConfirmCart = ({ items, setPage }) => {
  const totalPrice = items.reduce(
    (sum, item) => sum + item.oldPrice * item.quantity,
    0
  );
  const discount = items.reduce(
    (sum, item) => sum + (item.oldPrice - item.newPrice) * item.quantity,
    0
  );

  const voucher = 0;
  const saved = discount + voucher;
  const finalTotal = totalPrice - saved;

  const summaryData = [
    { label: "Tổng tiền hàng", value: `${totalPrice.toLocaleString()} đ` },
    { label: "Voucher giảm giá", value: `${voucher.toLocaleString()} đ` },
    { label: "Giảm giá sản phẩm", value: `${discount.toLocaleString()} đ` },
    { label: "Tiết kiệm", value: `${saved.toLocaleString()} đ` },
    { label: "Tổng số tiền", value: `${finalTotal.toLocaleString()} đ` },
  ];

  return (
    <Stack>
      <Box bgcolor={"#fffcb2"} m={5} p={5} borderRadius={5}>
        {items.length === 0 ? (
          <Typography>Không có sản phẩm nào được chọn.</Typography>
        ) : (
          items.map((item) => <ConfirmCartCard key={item.id} item={item} />)
        )}
      </Box>
      {/* Thông tin giá tiền */}
      <Stack
        direction={"row"}
        sx={{
          p: 3,
          border: "1px solid black",
          bgcolor: "#F5F5F5",
          justifyContent: "space-between",
          alignItems: "flex-end",
          mx: 10,
        }}
      >
        <Stack flex={1}>
          {summaryData.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 1.5,
              }}
            >
              <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                {item.label}
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                {item.value}
              </Typography>
            </Box>
          ))}
        </Stack>

        <Stack flex={1}>
          <Box sx={{ textAlign: "center", pb: 4 }}>
            <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
              Số tiền cuối cùng thanh toán
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#f44336",
                fontWeight: "bold",
                fontSize: 40,
              }}
            >
              {summaryData[4].value}
            </Typography>
          </Box>
        </Stack>
      </Stack>

      <Stack alignItems={"flex-end"} mt={5} mr={5}>
        <ButtonLoginCus
          name="Đặt hàng"
          width={"15%"}
          onClick={() => setPage(2)}
        />
      </Stack>
    </Stack>
  );
};

export default ConfirmCart;
