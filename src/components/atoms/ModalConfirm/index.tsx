import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TitleText from "../TitleText";
import { Divider } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: 15,
  textAlign: "center",
};

interface ModalConfirmProps {
  open: boolean;
  handleClose: () => void;
  clickConfirm: () => void;
  title?: string
  text?: string
}

export default function ModalConfirm({
  open,
  handleClose,
  clickConfirm,
  text,
  title
}: ModalConfirmProps) {
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <TitleText color="primary.main" variant="body1">
            <b>{title?.toUpperCase()}</b>
          </TitleText>
          <Divider />
          <br />
          <TitleText color="secondary.contrastText" variant="body1">
            <b>{text}</b>
          </TitleText>
          <br />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              onClick={handleClose}
              variant="text"
              color="error"
              fullWidth
            >
              NÃO
            </Button>
            <Divider orientation="vertical" flexItem />
            <Button
              variant="text"
              fullWidth
              color="success"
              onClick={clickConfirm}
            >
              SIM
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
