import { Box, Grid, Container, Typography } from '@material-ui/core';
import TotalItems from './dataGridComponents/totalItems'

export default function DashDataGrid() {
  return (
    <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
            <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
                <TotalItems />
            </Grid>
        </Grid>
    </Container>
  );
}