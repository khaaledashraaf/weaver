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

const cardVariants = ["outlined", "soft", "plain", "solid"] as const;

export default function CardsModalsPage() {
  const [basicOpen, setBasicOpen] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = React.useState(false);

  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Cards & Modals
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Cards are surfaces that display content and actions about a single
        subject. Weaver cards use 16px border-radius with a 1px border and no
        shadow. Modals use 12px border-radius with section-based padding (20px
        per section). Both provide consistent, Figma-matched styling.
      </Typography>

      {/* Card sections */}
      <Section
        title="Card Variants"
        description="Cards support outlined, soft, plain, and solid variants."
      >
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          {cardVariants.map((variant) => (
            <Card key={variant} variant={variant} sx={{ width: 240 }}>
              <CardContent>
                <Typography level="title-md" sx={{ textTransform: "capitalize" }}>
                  {variant} Card
                </Typography>
                <Typography level="body-sm">
                  This card uses the {variant} variant with Weaver theme styling.
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Section>

      <Section
        title="Card with Actions"
        description="Cards can include action buttons."
      >
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <Card sx={{ width: 280 }}>
            <CardContent>
              <Typography level="title-md">Project Alpha</Typography>
              <Typography level="body-sm">
                A brief description of the project with relevant details for the
                team.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="solid" size="sm">
                View
              </Button>
              <Button variant="outlined" size="sm" color="neutral">
                Edit
              </Button>
            </CardActions>
          </Card>
          <Card variant="soft" sx={{ width: 280 }}>
            <CardContent>
              <Typography level="title-md">Team Update</Typography>
              <Typography level="body-sm">
                Weekly sync summary with action items and next steps.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="soft" size="sm" color="primary">
                Read More
              </Button>
            </CardActions>
          </Card>
        </Stack>
      </Section>

      <Section
        title="Card Colors"
        description="Cards with solid variant support color themes."
      >
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <Card variant="solid" color="primary" sx={{ width: 200 }}>
            <CardContent>
              <Typography level="title-sm">Primary</Typography>
              <Typography level="body-xs">Solid primary card.</Typography>
            </CardContent>
          </Card>
          <Card variant="solid" color="success" sx={{ width: 200 }}>
            <CardContent>
              <Typography level="title-sm">Success</Typography>
              <Typography level="body-xs">Solid success card.</Typography>
            </CardContent>
          </Card>
          <Card variant="solid" color="danger" sx={{ width: 200 }}>
            <CardContent>
              <Typography level="title-sm">Danger</Typography>
              <Typography level="body-xs">Solid danger card.</Typography>
            </CardContent>
          </Card>
          <Card variant="solid" color="warning" sx={{ width: 200 }}>
            <CardContent>
              <Typography level="title-sm">Warning</Typography>
              <Typography level="body-xs">Solid warning card.</Typography>
            </CardContent>
          </Card>
        </Stack>
      </Section>

      {/* Modal sections */}
      <Section
        title="Basic Modal"
        description="A simple modal dialog with title, content, and actions."
      >
        <Button onClick={() => setBasicOpen(true)}>Open Modal</Button>
        <Modal open={basicOpen} onClose={() => setBasicOpen(false)}>
          <ModalDialog>
            <ModalClose />
            <DialogTitle>Modal Title</DialogTitle>
            <Divider />
            <DialogContent>
              This is a modal dialog styled by the Weaver theme. It
              demonstrates the ModalDialog, DialogTitle, DialogContent, and
              DialogActions composition.
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
        title="Confirmation Modal"
        description="Use modals for destructive or important actions."
      >
        <Button color="danger" onClick={() => setConfirmOpen(true)}>
          Delete Item
        </Button>
        <Modal open={confirmOpen} onClose={() => setConfirmOpen(false)}>
          <ModalDialog variant="outlined" color="danger">
            <DialogTitle>Confirm Deletion</DialogTitle>
            <Divider />
            <DialogContent>
              Are you sure you want to delete this item? This action cannot be
              undone.
            </DialogContent>
            <DialogActions>
              <Button variant="solid" color="danger" onClick={() => setConfirmOpen(false)}>
                Delete
              </Button>
              <Button variant="plain" color="neutral" onClick={() => setConfirmOpen(false)}>
                Cancel
              </Button>
            </DialogActions>
          </ModalDialog>
        </Modal>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import DialogActions from "@mui/joy/DialogActions";

// Card
<Card variant="outlined">
  <CardContent>
    <Typography level="title-md">Title</Typography>
    <Typography level="body-sm">Description</Typography>
  </CardContent>
  <CardActions>
    <Button size="sm">Action</Button>
  </CardActions>
</Card>

// Modal
const [open, setOpen] = useState(false);
<Button onClick={() => setOpen(true)}>Open</Button>
<Modal open={open} onClose={() => setOpen(false)}>
  <ModalDialog>
    <ModalClose />
    <DialogTitle>Title</DialogTitle>
    <DialogContent>Content here.</DialogContent>
    <DialogActions>
      <Button onClick={() => setOpen(false)}>OK</Button>
    </DialogActions>
  </ModalDialog>
</Modal>`}</CodeBlock>
      </Section>

      <Section title="Props">
        <Typography level="title-sm" sx={{ mb: 1 }}>Card</Typography>
        <PropsTable
          props={[
            { name: "variant", type: '"outlined" | "soft" | "plain" | "solid"', default: '"outlined"' },
            { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: '"neutral"' },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
            { name: "orientation", type: '"vertical" | "horizontal"', default: '"vertical"' },
          ]}
        />
        <Typography level="title-sm" sx={{ mt: 3, mb: 1 }}>Modal</Typography>
        <PropsTable
          props={[
            { name: "open", type: "boolean", default: "false" },
            { name: "onClose", type: "(event, reason) => void", default: "-" },
          ]}
        />
        <Typography level="title-sm" sx={{ mt: 3, mb: 1 }}>ModalDialog</Typography>
        <PropsTable
          props={[
            { name: "variant", type: '"outlined" | "soft" | "plain" | "solid"', default: '"outlined"' },
            { name: "color", type: '"primary" | "neutral" | "danger" | "success" | "warning"', default: '"neutral"' },
            { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
            { name: "layout", type: '"center" | "fullscreen"', default: '"center"' },
          ]}
        />
      </Section>
    </Box>
  );
}
