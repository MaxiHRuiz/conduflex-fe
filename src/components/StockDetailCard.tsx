import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import OrderStockState from './OrderStockState'; // Asegúrate de importar el componente OrderStockState
import styled from 'styled-components';
import QR from './actions/QR';
import { IStock } from 'types/stock';
import { generateURL } from 'utils/helpers';

interface Data {
    id: string;
    product_id: string;
    descripcion: string;
    cantidad_metros: number;
    cantidad_metros_vendidos: number;
    cantidad_metros_restantes: number;
    disponible: boolean;
    estado: string;
    detalle: string;
}

interface IStockDetailCardProps {
    data?: IStock;
    stockId: string;
    productId: string;
}

const StockDetailCard: React.FC<IStockDetailCardProps> = ({ data, stockId, productId }) => {
    const FormGrid = styled(Grid)(() => ({
        display: "flex",
        flexDirection: "column",
    }));
    return (
        <Paper
            sx={{
                p: 2,
                display: 'grid',
                gridRowGap: '10px',
            }}
        >
            {data?.estado === 'no_available' && (
                <>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'end',
                            justifyItems: 'center',
                        }}
                    >
                        <Button variant="contained" color="success" size="small">
                            Aprobar
                        </Button>
                    </Box>
                    <Divider />
                </>
            )}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography component="span" variant="h6">
                    Id: {data?.id}
                </Typography>
                <QR stockId={stockId} value={generateURL(productId, stockId)} />
            </Box>
            <Grid container spacing={1}>
                <FormGrid item xs={12} md={6}>
                    <Typography component="span" variant="h6">
                        Descripción: {`${data?.product_id} - ${data?.descripcion}`}
                    </Typography>
                </FormGrid>
                <FormGrid item xs={12} md={6}>
                    <Typography component="span" variant="h6">
                        Metros iniciales: {data?.cantidad_metros}
                    </Typography>
                </FormGrid>
                <FormGrid item xs={12} md={6}>
                    <Typography component="span" variant="h6">
                        Metros vendidos: {data?.cantidad_metros_vendidos}
                    </Typography>
                </FormGrid>
                <FormGrid item xs={12} md={6}>
                    <Typography component="span" variant="h6">
                        Metros restantes: {data?.cantidad_metros_restantes}
                    </Typography>
                </FormGrid>
                <FormGrid item xs={12} md={6}>
                    <Typography component="span" variant="h6">
                        Disponible: {data?.disponible ? 'Sí' : 'No'}
                    </Typography>
                </FormGrid>
                <FormGrid item xs={12} md={6}>
                    <OrderStockState state={data?.estado || ''} />
                </FormGrid>
                <FormGrid item xs={12} md={6}>
                    <Typography component="span" variant="h6">
                        Detalle: {data?.detalle}
                    </Typography>
                </FormGrid>
            </Grid>
        </Paper>
    );
};

export default StockDetailCard;