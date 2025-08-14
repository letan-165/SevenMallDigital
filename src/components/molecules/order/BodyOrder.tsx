import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import {
  Box,
  Chip,
  Container,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const rows = Array.from({ length: 7 }, (_, i) => ({
  id: i + 1,
  revenue: 590000,
  carrier: "Go ject",
  createdAt: "12/08/2025",
  deliveryAt: "lê minh tân",
  status: ["Chờ xác nhận", "Đang giao đơn", "Đã giao đơn"][i % 3],
}));

const items = [
  { icon: <ArrowBackIcon />, label: "Quay lại", color: "black" },
  { icon: <ShoppingBagIcon />, label: "Xem ", color: "blue" },
  { icon: <ArrowForwardIcon />, label: "Tiếp tục", color: "red" },
];

export default function BodyOrder() {
  return (
    <Container sx={{ py: 1 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", pb: 2 }}>
        Danh sách đơn hàng
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr 2fr 2fr 2fr 2fr 2fr",
          gap: 2,
          px: 2,
        }}
      >
        {[
          "Mã đơn",
          "Doanh thu",
          "Phương thức thanh toán",
          "Ngày tạo",
          "Tên người đặt",
          "Trạng thái",
          "Thao tác",
        ].map((h) => (
          <Typography
            key={h}
            sx={{
              fontWeight: "bold",
              fontSize: 13,
              textAlign: "center",
            }}
          >
            {h}
          </Typography>
        ))}
      </Box>
      <Divider />
      <Stack spacing={1} mt={1}>
        {rows.map((r, i) => (
          <Paper
            key={r.id}
            sx={{
              px: 2,
              py: 2.2,
              bgcolor: i % 2 ? "transparent" : "background.paper",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr 2fr 2fr 2fr 2fr 2fr",
                gap: 2,
              }}
            >
              <Col text={r.id} bold />
              <Col text={fmt(r.revenue)} bold />
              <Col text={r.carrier} bold={undefined} />
              <Col text={r.createdAt} bold={undefined} />
              <Col text={r.deliveryAt} bold={undefined} />
              <Chip
                label={r.status}
                color={color(r.status)}
                size="small"
                sx={{ mx: 1 }}
              />
              <Stack direction="row" justifyContent={"center"}>
                {items.map((item, i) => (
                  <Stack key={i}>
                    <IconButton sx={{ color: item.color, p: 0 }}>
                      {item.icon}
                    </IconButton>
                    <Typography sx={{ px: 1, fontSize: 10 }}>
                      {item.label}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Paper>
        ))}
      </Stack>
    </Container>
  );
}

const color = (s) =>
  s === "Đang giao đơn"
    ? "warning"
    : s === "Đã giao đơn"
      ? "success"
      : "default";
const fmt = (v) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(
    v
  );

const Col = ({ text, bold }) => (
  <Typography
    sx={{
      fontWeight: bold ? 700 : 400,
      fontSize: 14,
      textAlign: "center",
      color: bold ? "inherit" : "text.secondary",
    }}
  >
    {text}
  </Typography>
);
