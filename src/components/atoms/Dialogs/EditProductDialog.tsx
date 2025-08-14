import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Stack,
} from "@mui/material";
import AvatarSection from "../../molecules/profile/form/AvatarSection";
import { TextFieldInfoCus } from "../Form/TextFieldInfoCus";
import ListTextCus from "../ListTextCus";

const EditProductDialog = ({ open, setOpen, product = null }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: { bgcolor: "#fde2c6", borderRadius: 2 },
      }}
    >
      <DialogContent sx={{ display: "flex", gap: 2 }}>
        {/* Ảnh sản phẩm */}
        <AvatarSection />
        {/* Form */}
        <Box flex={1}>
          <Stack spacing={2}>
            <TextFieldInfoCus label="Mã sản phẩm" />
            <TextFieldInfoCus label="Tên sản phẩm" />
            <TextFieldInfoCus label="Giá tiền" />
            <TextFieldInfoCus label="Tag" />
            <TextFieldInfoCus label="Còn lại" />
            <TextFieldInfoCus label="Mô tả" />
            <ListTextCus title="DANH MỤC" items={["Mục 1", "Mục 2", "Mục 3"]} />
          </Stack>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          sx={{ bgcolor: "orange", "&:hover": { bgcolor: "#e66000" } }}
          onClick={() => setOpen(false)}
        >
          Lưu
        </Button>
        <Button
          variant="contained"
          sx={{ bgcolor: "orange", "&:hover": { bgcolor: "#e66000" } }}
          onClick={() => setOpen(false)}
        >
          Hủy
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProductDialog;
