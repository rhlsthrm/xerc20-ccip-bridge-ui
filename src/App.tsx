import { ConnectButton } from "./components/ConnectButton";
import { Box, Divider, Stack } from "@mui/joy";
import { BridgeUI } from "./components/BridgeUI";

function App() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={2}
        sx={{ width: "100%" }}
      >
        <ConnectButton />
      </Stack>
      <Divider />
      <Box>
        <BridgeUI />
      </Box>
    </Stack>
  );
}

export default App;
