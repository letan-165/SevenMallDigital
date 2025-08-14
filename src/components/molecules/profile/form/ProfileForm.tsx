import {
  Box,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ButtonLoginCus } from "../../../atoms/Form/ButtonLoginCus";
import { TextFieldInfoCus } from "../../../atoms/Form/TextFieldInfoCus";
import AvatarSection from "./AvatarSection";

export default function ProfileForm() {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Hồ sơ của tôi
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        Quản lý thông tin hồ sơ để bảo mật tài khoản
      </Typography>

      <Stack direction={"row"} justifyContent={"space-between"}>
        <Box width={"80%"}>
          <TextFieldInfoCus label="Tên đăng nhập" />
          <TextFieldInfoCus label="Tên người dùng" />
          <TextFieldInfoCus label="Số điện thoại" />
          <TextFieldInfoCus label="Email" type="email" />
          <TextFieldInfoCus label="Địa chỉ" />

          {/* Gender */}
          <Stack direction={"row"} mb={3} alignItems={"center"} gap={12}>
            <Typography variant="body2" fontWeight="medium" mb={1}>
              Giới tính:
            </Typography>
            <RadioGroup row>
              {["Nam", "Nữ", "Khác"].map((g) => (
                <FormControlLabel
                  key={g}
                  value={g}
                  control={<Radio size="small" />}
                  label={g}
                />
              ))}
            </RadioGroup>
          </Stack>

          {/* Birth Date */}
          <Stack direction={"row"} mb={3} alignItems={"center"} gap={12}>
            <Typography variant="body2" fontWeight="medium" mb={1}>
              Ngày sinh;
            </Typography>
            <TextField type="date" size="small" fullWidth />
          </Stack>

          <ButtonLoginCus name="Lưu" width={"15%"} />
        </Box>
        <AvatarSection />
      </Stack>
    </Paper>
  );
}
