import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function createData(info, description) {
    return { info, description };
}

// Decide cómo mostrar cada valor según su tipo
const renderValue = (value) => {
    if (value === null || value === undefined || value === '') return '—';
    if (typeof value === 'boolean') return value ? 'true' : 'false';

    if (typeof value === 'string') {
        if (/^https?:\/\//.test(value)) {
            return <a href={value} target="_blank" rel="noreferrer">{value}</a>;
        }
        return value;
    }

    if (typeof value === 'object') {
        const isArray = Array.isArray(value);
        const size = Object.keys(value).length;
        return (
            <details>
                <summary style={{ cursor: 'pointer' }}>
                    {isArray ? `Array (${size})` : `Object (${size})`}
                </summary>
                <pre style={{ textAlign: 'left', whiteSpace: 'pre-wrap', maxHeight: 300, overflow: 'auto' }}>
                    {JSON.stringify(value, null, 2)}
                </pre>
            </details>
        );
    }

    return String(value); // números
};

export const Detail = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState(null);

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then((response) => {
                if (!response.ok) throw new Error('Error en la respuesta del servidor');
                return response.json();
            })
            .then((data) => setCoin(data))
            .catch((err) => console.log(err.message));
    }, [id]);

    if (!coin) return <div>Loading...</div>;

    // Una fila por cada propiedad de la moneda
    const rows = Object.entries(coin).map(([key, value]) =>
        createData(key, value)
    );

    return (
        <>
            {/* Encabezado: nombre grande + imagen abajo */}
            <Box sx={{ textAlign: 'center', my: 4 }}>
                <Typography variant="h2" component="h1" sx={{ fontWeight: 700 }}>
                    {coin.name}
                    <Typography
                        component="span"
                        variant="h5"
                        color="text.secondary"
                        sx={{ ml: 1, textTransform: 'uppercase' }}
                    >
                        ({coin.symbol})
                    </Typography>
                </Typography>

                <Box
                    component="img"
                    src={coin.image?.large}
                    alt={coin.name}
                    sx={{
                        width: 150,      // <- cambia aquí el tamaño
                        height: 150,
                        mt: 2,
                        borderRadius: '50%',
                        boxShadow: 3,
                    }}
                />
            </Box>

            <TableContainer component={Paper} sx={{ maxWidth: 1000, mx: 'auto', mb: 4 }}>
                <Table sx={{ minWidth: 650 }} aria-label="coin details">
                    <TableHead>
                        <TableRow>
                            <TableCell>Info</TableCell>
                            <TableCell align="right">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.info}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.info}</TableCell>
                                <TableCell align="right" sx={{ maxWidth: 800, wordBreak: 'break-word' }}>
                                    {renderValue(row.description)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
};