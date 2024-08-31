import { Paper, useTheme } from "@mui/material";
import React from "react";
import { blue, lightBlue } from "@mui/material/colors";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { IProductStock } from "types/order";

interface IProductStockProps {
  productStock: IProductStock[];
}

const countStocksByStatus = (productStock: IProductStock[]) => {
  const counts: { status: string; count: number }[] = [];
  productStock.forEach((stock) => {
    const existing = counts.find((item) => item.status === stock.estado );
    if (existing) {
      existing.count++;
    } else {
      counts.push({ status: stock.estado, count: 1 });
    }
  });
  return counts;
};

const StockStatusPieChart: React.FC<IProductStockProps> = ({productStock}) => {
  const theme = useTheme();

  const getStateColor = (state: string) => {
    if (state === 'finalizado') return theme.palette.success.main
    if (state === 'entregado') return theme.palette.success.main
    if (state === 'en_stock') return theme.palette.info.main
    if (state === 'listo_para_entregar') return blue[600]
    if (state === 'no_disponible') return theme.palette.error.main
    return theme.palette.secondary.main
  }

  const data = countStocksByStatus(productStock);

  return (
    <Paper sx={{ mt: 1 }}>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="count"
            nameKey="status"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={getStateColor(entry.status)}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default StockStatusPieChart;
