import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Stack,
} from "@mui/material";
import { TextFieldInfoCus } from "../Form/TextFieldInfoCus";
import ListTextCus from "../ListTextCus";

const EditDiscountDialog = ({ open, setOpen }) => {
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
        {/* Form */}
        <Box flex={1}>
          <Stack spacing={2}>
            <TextFieldInfoCus label="ID" />
            <TextFieldInfoCus label="Mã" />
            <TextFieldInfoCus label="Giá trị" />
            <TextFieldInfoCus label="Số lượng" />
            <TextFieldInfoCus label="Giảm giá tối đa" />
            <TextFieldInfoCus label="Đơn hàng thấp nhất" />
            <TextFieldInfoCus label="Ngày hết hạn" />
            <ListTextCus
              title="Trạng thái"
              items={["Mục 1", "Mục 2", "Mục 3"]}
            />
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

export default EditDiscountDialog;
