"use client";

import * as React from "react";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import DialogActions from "@mui/joy/DialogActions";
import Divider from "@mui/joy/Divider";
import Stack from "@mui/joy/Stack";
import { Section } from "../section";
import { PropsTable } from "../props-table";
import { CodeBlock } from "../code-block";

/* ── Figma variants ──
  Cards:
    Card Vertical types: Leading image, Full Image
    Card Horizontal types: Leading image, Trailing image
    Card profile types: Cover, Default, Horizontal, Shape, Pattern
    16px border-radius, 1px border, no shadow

  Modal:
    Sizes: Small (440px), Default (560px), Large
    Header types: Simple, With icon, Icon Center
    Footer types: Stretch, Buttons Full Vertical, Basic, Button (Center)
    Danger: True, False
    12px border-radius
*/

export default function CardsModalsPage() {
  const [basicOpen, setBasicOpen] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = React.useState(false);

  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Cards & Modals
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Weaver cards use 16px border-radius with a 1px border and no shadow.
        Modals use 12px border-radius with section-based padding (20px per
        section). Modal sizes: Small (440px), Default (560px), Large.
      </Typography>

      <Section
        title="Card"
        description="Basic card with 16px border-radius and border. Figma card types include Vertical, Horizontal, and Profile."
      >
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <Card sx={{ width: 300 }}>
            <CardContent>
              <Typography level="title-md">Card Title</Typography>
              <Typography level="body-sm">
                Card content goes here. This matches the Figma card component
                with 16px radius and border styling.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: 300 }}>
            <CardContent>
              <Typography level="title-md">Card with Actions</Typography>
              <Typography level="body-sm">
                Cards can include action buttons in the footer area.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="solid" color="primary" size="sm">
                Action
              </Button>
              <Button variant="outlined" color="neutral" size="sm">
                Cancel
              </Button>
            </CardActions>
          </Card>
        </Stack>
      </Section>

      <Section
        title="Basic Modal"
        description="Figma modal with Simple header type and Basic footer. Default size is 560px wide."
      >
        <Button variant="outlined" color="neutral" onClick={() => setBasicOpen(true)}>
          Open Modal
        </Button>
        <Modal open={basicOpen} onClose={() => setBasicOpen(false)}>
          <ModalDialog>
            <ModalClose />
            <DialogTitle>Modal Title</DialogTitle>
            <DialogContent>
              Are you sure you want to proceed with this action? Please review
              your choices before confirming.
            </DialogContent>
            <DialogActions>
              <Button variant="solid" color="primary" onClick={() => setBasicOpen(false)}>
                Confirm
              </Button>
              <Button variant="outlined" color="neutral" onClick={() => setBasicOpen(false)}>
                Cancel
              </Button>
            </DialogActions>
          </ModalDialog>
        </Modal>
      </Section>

      <Section
        title="Danger Modal"
        description="Figma supports a Danger variant (Danger=True) for destructive confirmations."
      >
        <Button variant="solid" color="danger" onClick={() => setConfirmOpen(true)}>
          Delete Item
        </Button>
        <Modal open={confirmOpen} onClose={() => setConfirmOpen(false)}>
          <ModalDialog>
            <ModalClose />
            <DialogTitle>Delete item?</DialogTitle>
            <Divider />
            <DialogContent>
              This action cannot be undone. The item and all associated data will
              be permanently removed.
            </DialogContent>
            <DialogActions>
              <Button variant="solid" color="danger" onClick={() => setConfirmOpen(false)}>
                Delete
              </Button>
              <Button variant="outlined" color="neutral" onClick={() => setConfirmOpen(false)}>
                Cancel
              </Button>
            </DialogActions>
          </ModalDialog>
        </Modal>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import DialogActions from "@mui/joy/DialogActions";

// Card (16px radius, border, no shadow)
<Card>
  <CardContent>
    <Typography level="title-md">Title</Typography>
    <Typography level="body-sm">Content</Typography>
  </CardContent>
</Card>

// Modal (12px radius)
<Modal open={open} onClose={handleClose}>
  <ModalDialog>
    <ModalClose />
    <DialogTitle>Title</DialogTitle>
    <DialogContent>Body text</DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Confirm</Button>
      <Button variant="outlined" onClick={handleClose}>Cancel</Button>
    </DialogActions>
  </ModalDialog>
</Modal>`}</CodeBlock>
      </Section>

      <Section title="Props">
        <Typography level="title-sm" sx={{ mb: 1 }}>Card</Typography>
        <PropsTable
          props={[
            { name: "children", type: "ReactNode", default: "-" },
            { name: "sx", type: "SxProps", default: "-" },
          ]}
        />
        <Typography level="title-sm" sx={{ mt: 3, mb: 1 }}>ModalDialog</Typography>
        <PropsTable
          props={[
            { name: "layout", type: '"center" | "fullscreen"', default: '"center"' },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
            { name: "children", type: "ReactNode", default: "-" },
          ]}
        />
      </Section>
    </Box>
  );
}
