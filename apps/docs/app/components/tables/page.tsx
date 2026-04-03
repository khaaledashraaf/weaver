import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";

export default function TablesPage() {
  return (
    <Box>
      <Typography level="h2" sx={{ mb: 3 }}>
        Tables
      </Typography>

      <Sheet variant="outlined" sx={{ borderRadius: "md", overflow: "auto" }}>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ahmed Hassan</td>
              <td>Designer</td>
              <td>ahmed@example.com</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Sara Ali</td>
              <td>Developer</td>
              <td>sara@example.com</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Omar Khaled</td>
              <td>PM</td>
              <td>omar@example.com</td>
              <td>Inactive</td>
            </tr>
            <tr>
              <td>Nour Ibrahim</td>
              <td>Designer</td>
              <td>nour@example.com</td>
              <td>Active</td>
            </tr>
          </tbody>
        </Table>
      </Sheet>
    </Box>
  );
}
