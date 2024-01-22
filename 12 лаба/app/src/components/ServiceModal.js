import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogTitle from "@mui/material/DialogTitle";

function ServiceModal({ open, service, onClose }) {
  const { name, description, duration, banner } = service;
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: 600,
          bgcolor: "background.paper",
          borderRadius: "5px",
          boxShadow: 24,
          p: 2,
          overflowY: "auto",
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {name}
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <img
          src={banner}
          alt={name}
          style={{ width: "100%", height: "auto" }}
        />
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          {description}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1, marginBottom: 2 }}>
          Продолжительность: {duration}
        </Typography>
      </Box>
    </Modal>
  );
}

export default ServiceModal;
