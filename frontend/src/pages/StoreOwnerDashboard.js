import { Typography, Container, Box } from "@mui/material";
import { useAuth } from "../context/AuthContext";

export default function StoreOwnerDashboard() {
  const { user } = useAuth();

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Store Owner Dashboard
        </Typography>
        <Typography variant="body1">
          Welcome, {user?.name} (Store Owner)
        </Typography>
        {/* Add store owner-specific content here */}
      </Box>
    </Container>
  );
}
