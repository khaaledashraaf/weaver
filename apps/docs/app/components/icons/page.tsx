"use client";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Alert from "@mui/joy/Alert";
import Chip from "@mui/joy/Chip";
import ChipDelete from "@mui/joy/ChipDelete";
import {
  RiHomeLine, RiHome2Line, RiSearchLine, RiAddLine, RiCloseLine,
  RiCheckLine, RiArrowLeftLine, RiArrowRightLine, RiArrowUpLine, RiArrowDownLine,
  RiEditLine, RiDeleteBinLine, RiMoreLine, RiMore2Line,
  RiSettingsLine, RiSettings3Line, RiUserLine, RiUser3Line,
  RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine,
  RiNotificationLine, RiBellLine, RiHeartLine, RiStarLine,
  RiDownloadLine, RiUploadLine, RiShareLine, RiLinksLine,
  RiFilterLine, RiSortAsc, RiCalendarLine, RiTimeLine,
  RiFileTextLine, RiFolderLine, RiImageLine, RiAttachmentLine,
  RiErrorWarningFill, RiCheckboxCircleFill, RiAlertFill, RiInformationFill,
  RiErrorWarningLine, RiCheckboxCircleLine, RiAlertLine, RiInformationLine,
  RiLogoutBoxLine, RiLoginBoxLine, RiRefreshLine, RiExternalLinkLine,
  RiMenuLine, RiCloseCircleLine, RiFileCopyLine, RiPrinterLine,
  RiPhoneLine, RiMapPinLine, RiGlobalLine, RiChat1Line,
} from "@remixicon/react";
import { Section } from "../section";
import { CodeBlock } from "../code-block";

const iconGroups = [
  {
    name: "Navigation",
    icons: [
      { component: RiHomeLine, name: "RiHomeLine" },
      { component: RiHome2Line, name: "RiHome2Line" },
      { component: RiArrowLeftLine, name: "RiArrowLeftLine" },
      { component: RiArrowRightLine, name: "RiArrowRightLine" },
      { component: RiArrowUpLine, name: "RiArrowUpLine" },
      { component: RiArrowDownLine, name: "RiArrowDownLine" },
      { component: RiMenuLine, name: "RiMenuLine" },
      { component: RiExternalLinkLine, name: "RiExternalLinkLine" },
    ],
  },
  {
    name: "Actions",
    icons: [
      { component: RiSearchLine, name: "RiSearchLine" },
      { component: RiAddLine, name: "RiAddLine" },
      { component: RiCloseLine, name: "RiCloseLine" },
      { component: RiCheckLine, name: "RiCheckLine" },
      { component: RiEditLine, name: "RiEditLine" },
      { component: RiDeleteBinLine, name: "RiDeleteBinLine" },
      { component: RiMoreLine, name: "RiMoreLine" },
      { component: RiMore2Line, name: "RiMore2Line" },
      { component: RiRefreshLine, name: "RiRefreshLine" },
      { component: RiFileCopyLine, name: "RiFileCopyLine" },
      { component: RiDownloadLine, name: "RiDownloadLine" },
      { component: RiUploadLine, name: "RiUploadLine" },
      { component: RiShareLine, name: "RiShareLine" },
      { component: RiFilterLine, name: "RiFilterLine" },
      { component: RiSortAsc, name: "RiSortAsc" },
      { component: RiPrinterLine, name: "RiPrinterLine" },
    ],
  },
  {
    name: "User & Account",
    icons: [
      { component: RiUserLine, name: "RiUserLine" },
      { component: RiUser3Line, name: "RiUser3Line" },
      { component: RiSettingsLine, name: "RiSettingsLine" },
      { component: RiSettings3Line, name: "RiSettings3Line" },
      { component: RiLoginBoxLine, name: "RiLoginBoxLine" },
      { component: RiLogoutBoxLine, name: "RiLogoutBoxLine" },
      { component: RiLockLine, name: "RiLockLine" },
      { component: RiEyeLine, name: "RiEyeLine" },
      { component: RiEyeOffLine, name: "RiEyeOffLine" },
    ],
  },
  {
    name: "Communication",
    icons: [
      { component: RiMailLine, name: "RiMailLine" },
      { component: RiNotificationLine, name: "RiNotificationLine" },
      { component: RiBellLine, name: "RiBellLine" },
      { component: RiChat1Line, name: "RiChat1Line" },
      { component: RiPhoneLine, name: "RiPhoneLine" },
      { component: RiLinksLine, name: "RiLinksLine" },
      { component: RiGlobalLine, name: "RiGlobalLine" },
    ],
  },
  {
    name: "Content & Files",
    icons: [
      { component: RiFileTextLine, name: "RiFileTextLine" },
      { component: RiFolderLine, name: "RiFolderLine" },
      { component: RiImageLine, name: "RiImageLine" },
      { component: RiAttachmentLine, name: "RiAttachmentLine" },
      { component: RiCalendarLine, name: "RiCalendarLine" },
      { component: RiTimeLine, name: "RiTimeLine" },
      { component: RiMapPinLine, name: "RiMapPinLine" },
    ],
  },
  {
    name: "Feedback",
    icons: [
      { component: RiHeartLine, name: "RiHeartLine" },
      { component: RiStarLine, name: "RiStarLine" },
      { component: RiCloseCircleLine, name: "RiCloseCircleLine" },
    ],
  },
  {
    name: "Status (Filled)",
    icons: [
      { component: RiErrorWarningFill, name: "RiErrorWarningFill" },
      { component: RiCheckboxCircleFill, name: "RiCheckboxCircleFill" },
      { component: RiAlertFill, name: "RiAlertFill" },
      { component: RiInformationFill, name: "RiInformationFill" },
    ],
  },
  {
    name: "Status (Line)",
    icons: [
      { component: RiErrorWarningLine, name: "RiErrorWarningLine" },
      { component: RiCheckboxCircleLine, name: "RiCheckboxCircleLine" },
      { component: RiAlertLine, name: "RiAlertLine" },
      { component: RiInformationLine, name: "RiInformationLine" },
    ],
  },
];

export default function IconsPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 1 }}>
        Icons
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, color: "text.secondary" }}>
        Weaver uses <strong>Remix Icon</strong> (remixicon.com) as its icon
        library. Install <code>@remixicon/react</code> and import icons by name.
        Icons come in Line (outlined) and Fill (solid) variants. Use{" "}
        <code>size</code> prop to control dimensions.
      </Typography>

      <Section
        title="Installation"
        description="Add @remixicon/react to your project."
      >
        <CodeBlock>{`npm install @remixicon/react`}</CodeBlock>
      </Section>

      <Section
        title="Basic Usage"
        description="Import icons individually for tree-shaking. Use the size prop to match component context."
      >
        <CodeBlock>{`import { RiSearchLine, RiAddLine, RiDeleteBinLine } from "@remixicon/react";

// Standalone icon
<RiSearchLine size={20} />

// In a Button
<Button startDecorator={<RiAddLine size={18} />}>
  Add Item
</Button>

// In an IconButton
<IconButton>
  <RiDeleteBinLine size={20} />
</IconButton>

// In an Input
<Input startDecorator={<RiSearchLine size={18} />} placeholder="Search..." />`}</CodeBlock>
      </Section>

      <Section
        title="Sizing Guide"
        description="Recommended icon sizes for each component context."
      >
        <Sheet variant="outlined" sx={{ borderRadius: "md", overflow: "auto" }}>
          <Box component="table" sx={{ width: "100%", borderCollapse: "collapse", "& td, & th": { p: 1.5, textAlign: "left", borderBottom: "1px solid", borderColor: "divider" }, "& th": { fontWeight: 500, fontSize: "0.875rem" } }}>
            <thead>
              <tr>
                <th>Context</th>
                <th>Icon Size</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Typography level="body-sm">IconButton (sm)</Typography></td>
                <td><Typography level="body-sm" fontFamily="monospace">16</Typography></td>
                <td><IconButton size="sm" variant="outlined" color="neutral"><RiAddLine size={16} /></IconButton></td>
              </tr>
              <tr>
                <td><Typography level="body-sm">IconButton (md)</Typography></td>
                <td><Typography level="body-sm" fontFamily="monospace">20</Typography></td>
                <td><IconButton size="md" variant="outlined" color="neutral"><RiAddLine size={20} /></IconButton></td>
              </tr>
              <tr>
                <td><Typography level="body-sm">IconButton (lg)</Typography></td>
                <td><Typography level="body-sm" fontFamily="monospace">24</Typography></td>
                <td><IconButton size="lg" variant="outlined" color="neutral"><RiAddLine size={24} /></IconButton></td>
              </tr>
              <tr>
                <td><Typography level="body-sm">Button decorator</Typography></td>
                <td><Typography level="body-sm" fontFamily="monospace">18</Typography></td>
                <td><Button size="md" startDecorator={<RiAddLine size={18} />}>Button</Button></td>
              </tr>
              <tr>
                <td><Typography level="body-sm">Input decorator</Typography></td>
                <td><Typography level="body-sm" fontFamily="monospace">18</Typography></td>
                <td><Input size="md" startDecorator={<RiSearchLine size={18} />} placeholder="Search" sx={{ maxWidth: 200 }} /></td>
              </tr>
              <tr>
                <td><Typography level="body-sm">Alert icon</Typography></td>
                <td><Typography level="body-sm" fontFamily="monospace">20</Typography></td>
                <td><Alert color="primary" startDecorator={<RiInformationFill size={20} />} sx={{ py: 0.5 }}>Info</Alert></td>
              </tr>
              <tr>
                <td><Typography level="body-sm">Chip close</Typography></td>
                <td><Typography level="body-sm" fontFamily="monospace">14–18</Typography></td>
                <td><Chip endDecorator={<ChipDelete><RiCloseLine size={16} /></ChipDelete>}>Tag</Chip></td>
              </tr>
            </tbody>
          </Box>
        </Sheet>
      </Section>

      <Section
        title="Icon Library"
        description="Common icons grouped by category. Browse all 2800+ icons at remixicon.com."
      >
        <Stack spacing={4}>
          {iconGroups.map((group) => (
            <Box key={group.name}>
              <Typography level="title-sm" sx={{ mb: 1.5 }}>
                {group.name}
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {group.icons.map(({ component: Icon, name }) => (
                  <Sheet
                    key={name}
                    variant="outlined"
                    sx={{
                      width: 80,
                      py: 1.5,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 0.5,
                      borderRadius: "md",
                    }}
                    title={name}
                  >
                    <Icon size={22} />
                    <Typography level="body-xs" sx={{ color: "text.tertiary", fontSize: "0.6rem" }}>
                      {name.replace("Ri", "").replace("Line", "").replace("Fill", "F")}
                    </Typography>
                  </Sheet>
                ))}
              </Box>
            </Box>
          ))}
        </Stack>
      </Section>

      <Section
        title="Line vs Fill"
        description="Most icons come in Line (outlined) and Fill (solid) variants. Use Line for default UI, Fill for active/selected states or status indicators."
      >
        <Stack direction="row" spacing={3}>
          <Stack spacing={1} alignItems="center">
            <Stack direction="row" spacing={1}>
              <RiErrorWarningLine size={24} />
              <RiCheckboxCircleLine size={24} />
              <RiAlertLine size={24} />
              <RiInformationLine size={24} />
            </Stack>
            <Typography level="body-xs">Line (default)</Typography>
          </Stack>
          <Stack spacing={1} alignItems="center">
            <Stack direction="row" spacing={1}>
              <RiErrorWarningFill size={24} />
              <RiCheckboxCircleFill size={24} />
              <RiAlertFill size={24} />
              <RiInformationFill size={24} />
            </Stack>
            <Typography level="body-xs">Fill (emphasis)</Typography>
          </Stack>
        </Stack>
      </Section>
    </Box>
  );
}
