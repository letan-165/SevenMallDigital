import { Google } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { ButtonLoginCus } from "../../atoms/Form/ButtonLoginCus";
import TextFieldCus from "../../atoms/Form/TextFieldCus";

export function SignUpForm({ setPage }: { setPage: (page) => void }) {
  return (
    <>
      <Typography fontSize={30} fontWeight="bold" gutterBottom>
        Đăng Ký
      </Typography>
      <TextFieldCus label="Tên tài khoản" />
      <TextFieldCus label="Email" type="email" />
      <TextFieldCus label="SĐT" type="number" />
      <TextFieldCus label="Mật khẩu" type={"password"} />
      <TextFieldCus label="Nhập lại mật khẩu" type={"password"} />
      <Stack direction={"row"} justifyContent={"space-between"}>
        <ButtonLoginCus bgcolor="black" name={"Đăng Kí"} />
        <ButtonLoginCus name={"Quay về"} onClick={() => setPage("login")} />
      </Stack>

      <Button
        sx={{ bgcolor: "white", color: "black", textAlign: "center" }}
        startIcon={<Google />}
        fullWidth
      >
        Đăng ký bằng Google
      </Button>
    </>
  );
}
