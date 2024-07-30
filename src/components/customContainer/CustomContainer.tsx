import { Box, Container, useTheme } from "@mui/material";
import BreadCrumbs from "../BreadCrumbs";
import { ICustomContainerProps } from "./ICustomContainerProps";

const CustomContainer = ({ breadCrumbs, children }: ICustomContainerProps) => {
    const theme = useTheme();

    return (
        <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                flexGrow: 1,
                overflow: 'auto',
            }}
        >
            <Container maxWidth='md' sx={{
                padding: 2
            }}>
                {breadCrumbs && <BreadCrumbs />}
                {children}
            </Container>
        </Box>);
}

export default CustomContainer;