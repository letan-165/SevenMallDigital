import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
const CardDiscount = ({ item, onClick }) => {
  return (
    <Stack
      key={item.id}
      direction="row"
      alignItems="center"
      spacing={2}
      sx={{
        p: 1.25,
        border: "1px solid #ffd9b8",
        borderRadius: 1,
        bgcolor: "white",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ sm: "center" }}
          justifyContent="space-between"
          spacing={1}
        >
          <Typography sx={{ fontSize: 14 }}>
            <b>Tên: </b>
            {item.name}
          </Typography>
          <Typography sx={{ fontSize: 14 }}>
            <b>Giá trị:</b> {item.value}
          </Typography>
          <Typography sx={{ fontSize: 14 }}>
            <b>Số lượng:</b> {item.qty}
          </Typography>
          <Typography sx={{ fontSize: 14 }}>
            <b>Ngày tạo:</b> {item.createdAt}
          </Typography>
        </Stack>
      </Box>

      <Stack direction="row" spacing={1} sx={{ ml: 1 }}>
        <Button
          variant="contained"
          size="small"
          startIcon={<EditIcon />}
          onClick={onClick}
          sx={{ backgroundColor: "#ff7a00" }}
        >
          Sửa
        </Button>
        <IconButton
          sx={{ bgcolor: "#ffeceb", color: "#ff5a3a" }}
          onClick={() => {
            // TODO: Gọi API xóa
          }}
        >
          <DeleteOutlineIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default CardDiscount;
