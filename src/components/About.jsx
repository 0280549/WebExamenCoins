import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import { useContext } from 'react';
import { ContextAutor } from '../context/ContextAutor.jsx';

export const About = () => {
  const { autor } = useContext(ContextAutor);
  const tecnologias = ['React', 'Material UI', 'React Router', 'CoinGecko API'];

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h3" component="h1" sx={{ fontWeight: 700, textAlign: 'center', mb: 3 }}>
        About
      </Typography>

      <Card sx={{ borderRadius: 3, mb: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            ¿Qué es esta app?
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Coins es una aplicación que muestra las principales criptomonedas del mercado
            con su precio actual y su cambio en las últimas 24 horas. Al entrar al detalle
            de cada moneda puedes ver toda su información: descripción, categorías,
            enlaces, datos de mercado y más.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ borderRadius: 3, mb: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            ¿De dónde salen los datos?
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Toda la información viene de la API pública de{' '}
            <Link href="https://www.coingecko.com" target="_blank" rel="noreferrer">
              CoinGecko
            </Link>
            . Los precios cambian constantemente, así que pueden variar al recargar la página.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ borderRadius: 3, mb: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            Tecnologías usadas
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {tecnologias.map((tec) => (
              <Chip key={tec} label={tec} color="primary" variant="outlined" />
            ))}
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            Hecho por
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {autor}, estudiante de Ingeniería en Sistemas y Gráficas Computacionales
            en la Universidad Panamericana.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}