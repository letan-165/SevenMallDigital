import {
  Box,
  Card,
  CardContent,
  Chip,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ConfirmCartCard from "../../atoms/Card/ConfirmCartCard";
import { ButtonLoginCus } from "../../atoms/Form/ButtonLoginCus";

const PaymentCart = ({ items, setPage }) => {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
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
  const shippingMethods = [
    {
      title: "Phương thức vận chuyển bình thường",
      description:
        "Giao hàng nhanh - Nhận hàng chỉ sau 1-2 ngày kể từ khi đơn được xác nhận. Phí vận chuyển sẽ được tính theo khoảng cách và trọng lượng đơn hàng.",
    },
    {
      title: "Phương thức vận chuyển nhanh",
      description:
        "Giao hàng từ 3-7 ngày kể từ khi đơn được xác nhận. Phù hợp khi bạn không cần gấp và muốn tiết kiệm chi phí vận chuyển.",
    },
  ];

  const paymentMethods = [
    "Chuyển khoản ngân hàng",
    "VNPay",
    "MOMO",
    "Trả khi nhận hàng",
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

      <Box sx={{ maxWidth: 1200, mx: "auto", p: 3 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="stretch"
        >
          {/* Phương thức vận chuyển */}
          <Paper sx={{ p: 5, bgcolor: "#ffeccd", borderRadius: 2, flex: 1 }}>
            <Typography sx={{ fontWeight: 600, mb: 2, fontSize: "1.1rem" }}>
              Phương thức vận chuyển
            </Typography>
            {shippingMethods.map((method, index) => (
              <Card
                key={index}
                sx={{
                  bgcolor: "#ffbb5d",
                  boxShadow: "none",
                  border: "none",
                  mb: 2,
                }}
              >
                <CardContent sx={{ p: 2 }}>
                  <Typography sx={{ fontWeight: 600 }}>
                    {method.title}
                  </Typography>
                  <Typography>{method.description}</Typography>
                </CardContent>
              </Card>
            ))}
          </Paper>

          {/* Phương thức thanh toán */}
          <Paper sx={{ p: 5, bgcolor: "#ffeccd", borderRadius: 2, flex: 1 }}>
            <Typography sx={{ fontWeight: 600, mb: 2, fontSize: "1.1rem" }}>
              Phương thức thanh toán
            </Typography>
            <Stack spacing={1} pt={1}>
              {paymentMethods.map((method) => (
                <Chip
                  key={method}
                  label={method}
                  onClick={() => setSelectedPayment(method)}
                  sx={{
                    bgcolor: selectedPayment === method ? "#ff9900" : "#ffd190", // cam nếu chọn
                    fontWeight: 500,
                    height: 40,
                    width: "100%",
                    fontSize: "0.9rem",
                    mb: 0.5,
                    borderRadius: 1,
                    cursor: "pointer",
                  }}
                />
              ))}
            </Stack>
          </Paper>
        </Stack>
      </Box>

      <Stack
        alignItems={"center"}
        justifyContent={"flex-end"}
        mt={5}
        direction={"row"}
        gap={3}
      >
        <Typography>Tổng cộng: </Typography>
        <Typography
          sx={{
            color: "#f44336",
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          {`${finalTotal.toLocaleString()} đ`}{" "}
        </Typography>
        <ButtonLoginCus
          name="Đặt hàng"
          width={"15%"}
          onClick={() => setPage(2)}
        />
      </Stack>
    </Stack>
  );
};

export default PaymentCart;
