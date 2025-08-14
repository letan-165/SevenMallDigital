import { Add, Remove } from "@mui/icons-material";
import { Box, Checkbox, IconButton, Typography } from "@mui/material";

const ProductCartCard = ({ item, setItems }) => {
  // Chọn / bỏ chọn 1 sản phẩm
  const toggleSelectItem = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  // Tăng / giảm số lượng sản phẩm
  const changeQuantity = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return { ...item, quantity: newQty > 1 ? newQty : 1 };
        }
        return item;
      })
    );
  };
  return (
    <Box
      key={item.id}
      display="flex"
      alignItems="center"
      bgcolor="white"
      boxShadow={1}
      borderRadius={1}
      mb={2}
      p={1}
      gap={2}
    >
      <Checkbox
        checked={item.selected}
        onChange={() => toggleSelectItem(item.id)}
        sx={{
          color: item.selected ? "orange" : undefined,
          "&.Mui-checked": {
            color: "orange",
          },
        }}
      />
      <Box
        component="img"
        src={item.image}
        alt={item.name}
        sx={{ width: 80, height: 80, objectFit: "cover", borderRadius: 1 }}
      />
      <Box flex={1}>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Shop: {item.shop}
        </Typography>
        <Box display="flex" alignItems="center" mt={0.5} gap={1}>
          <Typography
            variant="body2"
            sx={{ textDecoration: "line-through", color: "#999" }}
          >
            {item.oldPrice.toLocaleString()} đ
          </Typography>
          <Typography variant="body2" color="error" fontWeight="bold">
            {item.newPrice.toLocaleString()} đ
          </Typography>
        </Box>
      </Box>

      {/* Số lượng */}
      <Box
        display="flex"
        alignItems="center"
        bgcolor="#ddd"
        borderRadius={1}
        px={1}
      >
        <IconButton
          size="small"
          onClick={() => changeQuantity(item.id, -1)}
          disabled={item.quantity === 1}
        >
          <Remove />
        </IconButton>
        <Typography variant="body2" sx={{ width: 24, textAlign: "center" }}>
          {item.quantity}
        </Typography>
        <IconButton size="small" onClick={() => changeQuantity(item.id, 1)}>
          <Add />
        </IconButton>
      </Box>

      {/* Tổng tiền */}
      <Typography
        variant="body2"
        color="error"
        fontWeight="bold"
        sx={{ ml: 2, minWidth: 80, textAlign: "right" }}
      >
        {(item.newPrice * item.quantity).toLocaleString()} đ
      </Typography>
    </Box>
  );
};

export default ProductCartCard;
