import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Product } from "../../molecules/homes/ProductSlider";
import EditProductDialog from "../Dialogs/EditProductDialog";

export const ProductCardEdit = ({
  key,
  product,
}: {
  key?: any;
  product: Product;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box
        onClick={() => setOpen(true)}
        key={key}
        sx={{
          width: 220,
          border: "1px solid #ccc",
          boxShadow: 1,
          p: 1,
          bgcolor: "white",
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
        }}
      >
        <Box
          component="img"
          src={product.img}
          alt={product.name}
          sx={{ width: "100%", height: 220, objectFit: "cover" }}
        />

        <Typography
          variant="body2"
          sx={{
            mt: 1,
            height: 60,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            textOverflow: "ellipsis",
          }}
        >
          {product.name}
        </Typography>

        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ mt: 1, gap: 1, alignItems: "center" }}
        >
          <Typography fontWeight="bold">{product.newPrice}</Typography>
          <DeleteIcon sx={{ color: "red" }} />
        </Stack>
      </Box>

      <EditProductDialog open={open} setOpen={setOpen} />
    </>
  );
};
