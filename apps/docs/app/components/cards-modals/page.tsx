"use client";

import * as React from "react";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import DialogActions from "@mui/joy/DialogActions";
import Stack from "@mui/joy/Stack";
import Divider from "@mui/joy/Divider";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography level="title-lg" sx={{ mb: 2 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export default function CardsModalsPage() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box>
      <Typography level="h2" sx={{ mb: 3 }}>
        Cards & Modals
      </Typography>

      <Section title="Cards">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Card sx={{ width: 280 }}>
            <CardContent>
              <Typography level="title-md">Card Title</Typography>
              <Typography level="body-sm">
                This is a card with the Weaver theme applied. It uses the
                default card styling with rounded corners and subtle shadow.
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ width: 280 }}>
            <CardContent>
              <Typography level="title-md">Outlined Card</Typography>
              <Typography level="body-sm">
                An outlined variant of the card component.
              </Typography>
            </CardContent>
          </Card>
          <Card variant="soft" sx={{ width: 280 }}>
            <CardContent>
              <Typography level="title-md">Soft Card</Typography>
              <Typography level="body-sm">
                A soft variant with a subtle background.
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Section>

      <Section title="Modal">
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog>
            <ModalClose />
            <DialogTitle>Modal Title</DialogTitle>
            <Divider />
            <DialogContent>
              This is a modal dialog with the Weaver theme. It demonstrates
              the styled modal, dialog title, content, and actions.
            </DialogContent>
            <DialogActions>
              <Button variant="solid" color="primary" onClick={() => setOpen(false)}>
                Confirm
              </Button>
              <Button variant="outlined" color="neutral" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </DialogActions>
          </ModalDialog>
        </Modal>
      </Section>
    </Box>
  );
}
