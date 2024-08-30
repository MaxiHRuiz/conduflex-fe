import React from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

interface LoadingButtonProps {
  isLoading?: boolean;
  text: string;
  onClick: () => void;
  disabled?: boolean;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  variant?: 'text' | 'outlined' | 'contained';
  size?: 'small' | 'medium' | 'large';
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading,
  text,
  onClick,
  disabled = false,
  color = 'primary',
  variant = 'contained',
  size = 'medium',
}) => {
  return (
    <Button
      fullWidth
      onClick={onClick}
      disabled={disabled || isLoading}
      color={color}
      variant={variant}
      size={size}
      endIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : null}
    >
      {text}
    </Button>
  );
};

export default LoadingButton;
