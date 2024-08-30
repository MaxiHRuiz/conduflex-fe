import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Paper, useTheme } from '@mui/material';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../../lib/api';
import { useEffect } from 'react';
import { useAuth } from '../../context/Auth';
import {  useNavigate } from 'react-router-dom';

export default function Login() {
  const {palette} = useTheme()
  const {userSession} = useAuth()
  const navigate = useNavigate()

  useEffect(()=> {
    if (userSession?.user) navigate('/')
  }, [userSession])

  return (
      <>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Paper sx={{
            marginTop: 8,
            padding: 3,
          }}>

            <Typography component="h1" variant="h5" justifyContent="center" color="secondary" align="center">
              ¡Hola! ingresa tus datos para ingresar a la aplicación
            </Typography>
            <Auth supabaseClient={supabase} appearance={{
              theme: ThemeSupa, variables: {
                default: {
                  colors: {
                    brand: palette.primary.main,
                    brandAccent: palette.secondary.main,
                  }
                }
              }
            }} providers={[]} showLinks={false}  localization={{
              variables: {
                sign_in: {
                  button_label: 'Iniciar sesión',
                  email_label: 'Email',
                  email_input_placeholder: 'Ingresar email',
                  loading_button_label: 'Cargando...',
                  password_label: 'Contraseña',
                  password_input_placeholder: 'Ingresar contraseña',
                },
              }
            }
            } />
          </Paper>
        </Container>
      </>
  );
}