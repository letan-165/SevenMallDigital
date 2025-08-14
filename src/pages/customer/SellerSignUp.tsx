import { Box, Stack, Typography } from "@mui/material";
import { ButtonLoginCus } from "../../components/atoms/Form/ButtonLoginCus";
import TextFieldCus from "../../components/atoms/Form/TextFieldCus";
import FooterCus from "../../components/organisms/FooterCus";
import { HeaderCustomerCus } from "../../components/organisms/HeaderCustomerCus";
import NavigationBar from "../../components/organisms/NavigationBar";

const SellerSignUp = () => {
  return (
    <Box sx={{ fontFamily: "sans-serif", bgcolor: "#fff" }}>
      <HeaderCustomerCus />
      <NavigationBar activeIndex={3} />
      <Stack alignItems={"center"} height={800}>
        <Stack
          width={600}
          bgcolor={"#FFEAD5"}
          padding={5}
          alignItems={"center"}
          gap={4}
          m={10}
          borderRadius={1}
        >
          <Typography fontSize={30} fontWeight="bold" gutterBottom>
            Bạn muốn kiếm tiền
          </Typography>
          <TextFieldCus label="Tên shop" />
          <TextFieldCus label="Địa chỉ" />
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <ButtonLoginCus name={"Đăng kí bán ngay"} width={"100%"} />
          </Stack>
        </Stack>
      </Stack>
      <FooterCus />
    </Box>
  );
};

export default SellerSignUp;
