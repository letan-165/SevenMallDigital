import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { User } from "../../apis/dto/Response";
import UserService from "../../apis/services/UserService";
import LoadingCus from "../../components/atoms/LoadingCus";
import ProfileForm from "../../components/molecules/profile/form/ProfileForm";
import LocationProfile from "../../components/molecules/profile/location/LocationProfile";
import Sidebar from "../../components/molecules/profile/Sidebar";
import FooterCus from "../../components/organisms/FooterCus";
import { HeaderCustomerCus } from "../../components/organisms/HeaderCustomerCus";

export default function ProfilePage() {
  const [page, setPage] = useState(0);
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userID = localStorage.getItem("userID");
        userID && setUser(await UserService.findById(userID));
      } catch (e) {
        throw e;
      }
    };

    fetchData();
  }, []);

  return !user ? (
    <LoadingCus />
  ) : (
    <Stack>
      <HeaderCustomerCus />
      <Stack direction={"row"} gap={3} justifyContent={"center"} p={3}>
        <Box width={"15%"}>
          <Sidebar activeIndex={page} setPage={setPage} />
        </Box>
        <Box sx={{ width: "70%" }}>
          {page === 0 && <ProfileForm user={user} />}
          {page === 1 && <LocationProfile />}
        </Box>
      </Stack>
      <FooterCus />
    </Stack>
  );
}
