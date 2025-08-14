import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { ButtonLoginCus } from "../../../atoms/Form/ButtonLoginCus";

const markerIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
});

export default function LocationProfile() {
  const [pos, setPos] = useState<[number, number] | null>(null);
  const [addr, setAddr] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const defaultCenter: [number, number] = [21.0285, 105.8542];

  const getAddr = async (lat: number, lon: number) => {
    try {
      const res = await axios.get(
        `https://photon.komoot.io/reverse?lat=${lat}&lon=${lon}`
      );
      const p = res.data?.features?.[0]?.properties || {};
      return (
        [p.name, p.street, p.city, p.country].filter(Boolean).join(", ") ||
        "Không xác định"
      );
    } catch {
      return "Không xác định";
    }
  };

  const searchAddr = async (q: string) => {
    if (!q.trim()) {
      setSuggestions([]);
      return;
    }
    try {
      const res = await axios.get(
        `https://photon.komoot.io/api/?q=${encodeURIComponent(q)}`
      );
      setSuggestions(res.data.features || []);
    } catch {
      setSuggestions([]);
    }
  };

  const selectSuggestion = async (feature: any) => {
    const [lon, lat] = feature.geometry.coordinates;
    setPos([lat, lon]);
    const address = await getAddr(lat, lon);
    setAddr(address);
    setInput(address);
    setSuggestions([]);
    setDialogOpen(false);
  };

  const ClickMarker = () => {
    useMapEvents({
      click: async (e) => {
        const p: [number, number] = [e.latlng.lat, e.latlng.lng];
        setPos(p);
        const address = await getAddr(...p);
        setAddr(address);
        setInput(address);
        setSuggestions([]);
      },
    });
    return null;
  };

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(async (pos) => {
      const p: [number, number] = [pos.coords.latitude, pos.coords.longitude];
      setPos(p);
      const address = await getAddr(...p);
      setAddr(address);
      setInput(address);
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (dialogOpen) searchAddr(input);
    }, 300);
    return () => clearTimeout(timer);
  }, [input, dialogOpen]);

  const MapCenter = ({ position }: { position: [number, number] | null }) => {
    const map = useMap();
    useEffect(() => {
      if (position) map.setView(position, 15);
    }, [position]);
    return null;
  };

  return (
    <Paper sx={{ p: 2 }}>
      <ButtonLoginCus
        name=" + Thêm địa chỉ"
        onClick={() => setDialogOpen(true)}
        width={"15%"}
      />

      <Box sx={{ height: 400, mt: 3 }}>
        <MapContainer
          center={pos ?? defaultCenter}
          zoom={13}
          style={{ height: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {pos && <Marker position={pos} icon={markerIcon} />}
          <ClickMarker />
          <MapCenter position={pos} />
        </MapContainer>
      </Box>

      {addr && (
        <Typography sx={{ mt: 2 }}>
          📍 <b>Địa chỉ hiện tại:</b> {addr}
        </Typography>
      )}

      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Nhập địa chỉ</DialogTitle>
        <DialogContent>
          <TextField
            label="Nhập địa chỉ"
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoComplete="off"
            margin="normal"
          />
          {suggestions.length > 0 && (
            <List
              sx={{
                maxHeight: 200,
                overflowY: "auto",
                border: "1px solid #ccc",
                borderRadius: 1,
              }}
            >
              {suggestions.map((item, i) => (
                <ListItem key={i} disablePadding>
                  <ListItemButton onClick={() => selectSuggestion(item)}>
                    {item.properties.name ||
                      item.properties.street ||
                      item.properties.city ||
                      "Không tên"}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Lưu</Button>
          <Button onClick={() => setDialogOpen(false)}>Hủy</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
