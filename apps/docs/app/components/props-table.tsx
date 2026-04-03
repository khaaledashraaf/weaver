import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

interface PropDef {
  name: string;
  type: string;
  default: string;
}

export function PropsTable({ props }: { props: PropDef[] }) {
  return (
    <Sheet variant="outlined" sx={{ borderRadius: "md", overflow: "auto" }}>
      <Table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          {props.map((p) => (
            <tr key={p.name}>
              <td><Typography level="body-xs" fontFamily="monospace">{p.name}</Typography></td>
              <td><Typography level="body-xs" fontFamily="monospace">{p.type}</Typography></td>
              <td><Typography level="body-xs" fontFamily="monospace">{p.default}</Typography></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
  );
}
