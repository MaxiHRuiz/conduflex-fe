import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import logo from '../../assets/images/logo-conduflex-logo.png';

export const Footer = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 8,
            mb: 4
        }}>
            <img src={logo} alt="logo" style={{ height: '15%', width: '15%' }} />
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1, mb: 4 }}>
                Angel Pini 4980, (1678) Caseros, 3 de Febrero. Buenos Aires, Argentina. | Derechos Reservados © 2020
            </Typography>
        </Box>
    );
}