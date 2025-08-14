import { Google } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../../Paths";
import { ButtonLoginCus } from "../../atoms/Form/ButtonLoginCus";
import TextFieldCus from "../../atoms/Form/TextFieldCus";

export function LoginForm({ setPage }: { setPage: (page) => void }) {
  const navigate = useNavigate();
  return (
    <>
      <Typography fontSize={30} fontWeight="bold" gutterBottom>
        Đăng Nhập
      </Typography>
      <TextFieldCus label="Tên tài khoản" />
      <TextFieldCus mb={0} label="Mật khẩu" type={"password"} />
      <FormControlLabel
        control={<Checkbox />}
        label="Ghi nhớ mật khẩu"
        sx={{
          ".MuiFormControlLabel-label": {
            fontSize: 14,
          },
        }}
      />
      <Stack direction={"row"} justifyContent={"space-between"}>
        <ButtonLoginCus
          bgcolor="black"
          name={"Đăng nhập"}
          onClick={() => navigate(Paths.HOME)}
        />
        <ButtonLoginCus name={"Đăng kí"} onClick={() => setPage("signup")} />
      </Stack>

      <Box width={"100%"} display="flex" justifyContent={"center"}>
        <ButtonLoginCus
          width="40%"
          name={"Quên mật khẩu"}
          onClick={() => setPage("forgot")}
        />
      </Box>
      <Button
        sx={{ bgcolor: "white", color: "black", textAlign: "center" }}
        startIcon={<Google />}
        fullWidth
      >
        Đăng nhập bằng Google
      </Button>
    </>
  );
}
