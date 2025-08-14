import { Box, Stack } from "@mui/material";
import { useState } from "react";
import ProfileForm from "../../components/molecules/profile/form/ProfileForm";
import LocationProfile from "../../components/molecules/profile/location/LocationProfile";
import Sidebar from "../../components/molecules/profile/Sidebar";
import FooterCus from "../../components/organisms/FooterCus";
import { HeaderCustomerCus } from "../../components/organisms/HeaderCustomerCus";

export default function ProfilePage() {
  const [page, setPage] = useState(0);
  return (
    <Stack>
      <HeaderCustomerCus />
      <Stack direction={"row"} gap={3} justifyContent={"center"} p={3}>
        <Box width={"15%"}>
          <Sidebar activeIndex={page} setPage={setPage} />
        </Box>
        <Box sx={{ width: "70%" }}>
          {page === 0 && <ProfileForm />}
          {page === 1 && <LocationProfile />}
        </Box>
      </Stack>
      <FooterCus />
    </Stack>
  );
}
