import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";
import LoadingCus from "../atoms/LoadingCus";

export default function ListTextCus({
  title,
  items,
}: {
  title: string;
  items?: string[];
}) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return !items ? (
    <LoadingCus />
  ) : (
    <List sx={{ width: 170, bgcolor: "#ff6600", p: 0 }}>
      <ListItemButton onClick={handleClick}>
        <ListItemText
          primary={title}
          primaryTypographyProps={{
            style: { fontSize: 14, color: "black", fontWeight: "bold" },
          }}
        />
        {open ? (
          <ExpandLessIcon sx={{ color: "white" }} />
        ) : (
          <ExpandMoreIcon sx={{ color: "white" }} />
        )}
      </ListItemButton>

      <Collapse in={open}>
        <List component="div" disablePadding>
          {items.map((text, index) => (
            <ListItemButton key={index} sx={{ pl: 4, bgcolor: "#f9c659" }}>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ style: { color: "#000000" } }}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
}
