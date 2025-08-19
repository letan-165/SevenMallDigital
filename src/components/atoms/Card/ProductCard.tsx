import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../../Paths";
import { Product } from "../../../apis/dto/Response";
import ProductsService from "../../../apis/services/ProductsService";
import { formatVND } from "../../util/formatVND";
import EditProductDialog from "../Dialogs/EditProductDialog";
import LoadingCus from "../LoadingCus";
const ProductCard = ({
  product,
  isEdit = false,
}: {
  product: Product;
  isEdit?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleDelete = async (productID) => {
    setLoading(true);
    await ProductsService.delete(productID);
    window.location.reload();
  };
  return (
    <>
      <Box
        onClick={() =>
          isEdit ? setOpen(true) : navigate(`${Paths.PRODUCT}/${product._id}`)
        }
        sx={{
          width: 220,
          border: "1px solid #ccc",
          boxShadow: 1,
          p: 1,
          position: "relative",
          bgcolor: "white",
          flexShrink: 0,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          cursor: "pointer",
        }}
      >
        <Box
          component="img"
          src={"/public/images/product1.png"}
          alt={product.name}
          sx={{ width: "100%", height: 220, objectFit: "cover" }}
        />
        {product.haveDiscount && (
          <Box
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              bgcolor: "orange",
              color: "white",
              px: 1,
              borderRadius: "0 0 0 8px",
              fontWeight: "bold",
              fontSize: 12,
            }}
          >
            -{product.discountId?.value}%
          </Box>
        )}

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

        <Box sx={{ mt: 1, display: "flex", gap: 1, alignItems: "center" }}>
          {product.haveDiscount && (
            <Typography
              variant="body2"
              sx={{ textDecoration: "line-through", color: "#999" }}
            >
              {formatVND(product.price)}
            </Typography>
          )}
          <Typography variant="body2" color="error" fontWeight="bold">
            {formatVND(product.finalPrice)}
          </Typography>
          {isEdit && loading ? (
            <LoadingCus />
          ) : (
            <DeleteIcon
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(product._id);
              }}
              sx={{ color: "red" }}
            />
          )}
        </Box>
      </Box>
      {isEdit && (
        <EditProductDialog open={open} setOpen={setOpen} product={product} />
      )}
    </>
  );
};

export default ProductCard;
