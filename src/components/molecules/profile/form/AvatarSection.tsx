import { Person, PhotoCamera } from "@mui/icons-material";
import { Avatar, Box, Button, Divider, Typography } from "@mui/material";

export default function AvatarSection() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ pl: { md: 4 } }}
    >
      <Divider
        orientation="vertical"
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          left: 0,
          height: "100%",
        }}
      />
      <Avatar sx={{ width: 100, height: 100, bgcolor: "grey.300", mb: 2 }}>
        <Person sx={{ fontSize: 50 }} />
      </Avatar>
      <Button
        variant="outlined"
        component="label"
        startIcon={<PhotoCamera />}
        sx={{ mb: 2 }}
      >
        Chọn ảnh
        <input type="file" hidden accept="image/*" />
      </Button>
      <Typography variant="caption" color="text.secondary" textAlign="center">
        Dung lượng tối đa 1 MB
        <br />
        Định dạng: .JPEG, .PNG
      </Typography>
    </Box>
  );
}
