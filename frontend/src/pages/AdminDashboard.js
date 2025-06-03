import { Typography, Container, Box } from "@mui/material";
import { useAuth } from "../context/AuthContext";

export default function AdminDashboard() {
  const { user } = useAuth();

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Admin Dashboard
        </Typography>
        <Typography variant="body1">Welcome, {user?.name} (Admin)</Typography>
        {/* Add admin-specific content here */}
      </Box>
    </Container>
  );
}
