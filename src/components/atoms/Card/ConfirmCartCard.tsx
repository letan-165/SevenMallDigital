import { Box, Stack, Typography } from "@mui/material";

const ConfirmCartCard = ({ item }) => {
  return (
    <Stack
      direction={"row"}
      key={item.id}
      alignItems="center"
      bgcolor="white"
      boxShadow={1}
      borderRadius={1}
      p={2}
      pr={10}
      mb={5}
      gap={2}
    >
      {/* Ảnh */}
      <Box
        component="img"
        src={item.image}
        alt={item.name}
        sx={{ width: 80, height: 80, objectFit: "cover", borderRadius: 1 }}
      />

      {/* thông tin */}
      <Box flex={5}>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          {item.name}
        </Typography>
        <Stack
          direction="row"
          justifyContent={"space-between"}
          mt={0.5}
          gap={1}
        >
          <Typography variant="body2" color="text.secondary">
            Shop: {item.shop}
          </Typography>
          <Stack direction={"row"} gap={5}>
            <Typography
              variant="body2"
              sx={{ textDecoration: "line-through", color: "#999" }}
            >
              {item.oldPrice.toLocaleString()} đ
            </Typography>
            <Typography variant="body2" color="error" fontWeight="bold">
              {item.newPrice.toLocaleString()} đ
            </Typography>
          </Stack>
        </Stack>
      </Box>

      {/* Số lượng */}
      <Typography
        flex={2}
        variant="body2"
        sx={{ width: 50, textAlign: "center", fontSize: 20 }}
      >
        SL: {item.quantity}
      </Typography>

      {/* Tổng tiền */}
      <Typography
        flex={2}
        variant="body2"
        color="error"
        fontWeight="bold"
        sx={{ ml: 2, minWidth: 80, textAlign: "right" }}
      >
        Tổng: {(item.newPrice * item.quantity).toLocaleString()} đ
      </Typography>
    </Stack>
  );
};

export default ConfirmCartCard;
