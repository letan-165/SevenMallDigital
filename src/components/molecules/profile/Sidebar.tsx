import { Person } from "@mui/icons-material";
import {
  Avatar,
  Box,
  ButtonBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

export default function Sidebar({ activeIndex, setPage }) {
  const sidebarItems = ["Hồ sơ", "Địa chỉ", "Đổi mật khẩu"];

  return (
    <Paper sx={{ p: 2 }}>
      {/* Header */}
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar sx={{ mr: 2 }}>
          <Person />
        </Avatar>
        <Box>
          <Typography fontWeight="bold">Letan</Typography>
          <Typography
            variant="caption"
            color="primary"
            sx={{ cursor: "pointer" }}
          >
            ✏️ Sửa hồ sơ
          </Typography>
        </Box>
      </Box>
      <Stack direction={"row"} gap={1}>
        <Person />
        <Typography sx={{ fontWeight: "bold" }}>Tài khoản của tôi</Typography>
      </Stack>
      {/* Menu Items */}
      <Box display="flex" flexDirection="column" gap={0.5}>
        {sidebarItems.map((text, i) => (
          <ButtonBase
            key={i}
            onClick={() => setPage(i)}
            sx={{
              justifyContent: "flex-start",
              color: activeIndex === i ? "#ff6600" : "black",
              pt: 1,
              pl: 1,
            }}
          >
            <Typography variant="body2">{text}</Typography>
          </ButtonBase>
        ))}
      </Box>
      <Typography sx={{ fontWeight: "bold", pt: 1 }}>Đơn mua</Typography>
    </Paper>
  );
}
