import React from 'react';

import {
    Typography,
    Container,
    Grid,
    Box,
    Tabs,
    Tab
} from '@mui/material';


const marketsData = [
    { id: 1, label: 'Principais mercados', color: 'primary' },
    { id: 2, label: 'Resultado Final', color: 'primary' },
    { id: 3, label: 'Dupla Chance', color: 'primary' },
    { id: 4, label: 'Total de Gols mais/menos', color: 'primary' },
    { id: 5, label: 'Próximo Gol', color: 'primary' },
    { id: 6, label: 'Empate Anula', color: 'primary' },
    { id: 7, label: 'Totais de gols mais/menos 1º tempo', color: 'primary' },
    { id: 8, label: 'Escanteios Mais/Menos', color: 'primary' },
];

const rows = [
    {
        id: 1,
        tempoJogo: '15',
        timeCasa: 'Fortaleza',
        timeFora: 'São Paulo',
        placarCasa: 2,
        placarFora: 1,
        oddCasa: 2.16,
        oddEmpate: 3.03,
        oddFora: 2.5,
    },
    {
        id: 2,
        tempoJogo: '25',
        timeCasa: 'América MG',
        timeFora: 'Vasco',
        placarCasa: 0,
        placarFora: 0,
        oddCasa: 1.8,
        oddEmpate: 2.8,
        oddFora: 3.2,
    },
    {
        id: 3,
        tempoJogo: '35',
        timeCasa: 'Time da Casa 3',
        timeFora: 'Time de Fora 3',
        placarCasa: 1,
        placarFora: 3,
        oddCasa: 3.5,
        oddEmpate: 3.0,
        oddFora: 2.0,
    },
    {
        id: 4,
        tempoJogo: '10',
        timeCasa: 'Time da Casa 4',
        timeFora: 'Time de Fora 4',
        placarCasa: 1,
        placarFora: 2,
        oddCasa: 2.0,
        oddEmpate: 2.5,
        oddFora: 2.8,
    },
    {
        id: 5,
        tempoJogo: '60',
        timeCasa: 'Time da Casa 5',
        timeFora: 'Time de Fora 5',
        placarCasa: 3,
        placarFora: 0,
        oddCasa: 1.5,
        oddEmpate: 3.2,
        oddFora: 4.0,
    },
    {
        id: 6,
        tempoJogo: '30',
        timeCasa: 'Time da Casa 6',
        timeFora: 'Time de Fora 6',
        placarCasa: 2,
        placarFora: 2,
        oddCasa: 2.2,
        oddEmpate: 2.9,
        oddFora: 3.0,
    },
    {
        id: 7,
        tempoJogo: '75',
        timeCasa: 'Time da Casa 7',
        timeFora: 'Time de Fora 7',
        placarCasa: 0,
        placarFora: 1,
        oddCasa: 2.8,
        oddEmpate: 2.7,
        oddFora: 2.2,
    },
    {
        id: 8,
        tempoJogo: '80',
        timeCasa: 'Time da Casa 8',
        timeFora: 'Time de Fora 8',
        placarCasa: 1,
        placarFora: 0,
        oddCasa: 1.7,
        oddEmpate: 2.8,
        oddFora: 3.5,
    },
    {
        id: 9,
        tempoJogo: '20',
        timeCasa: 'Time da Casa 9',
        timeFora: 'Time de Fora 9',
        placarCasa: 0,
        placarFora: 0,
        oddCasa: 2.5,
        oddEmpate: 2.5,
        oddFora: 2.5,
    },
    {
        id: 10,
        tempoJogo: '45',
        timeCasa: 'Time da Casa 10',
        timeFora: 'Time de Fora 10',
        placarCasa: 1,
        placarFora: 2,
        oddCasa: 3.03,
        oddEmpate: 2.8,
        oddFora: 2.2,
    },
    {
        id: 11,
        tempoJogo: '70',
        timeCasa: 'Time da Casa 11',
        timeFora: 'Time de Fora 11',
        placarCasa: 2,
        placarFora: 0,
        oddCasa: 1.65,
        oddEmpate: 3.0,
        oddFora: 3.8,
    },
    {
        id: 12,
        tempoJogo: '50',
        timeCasa: 'Time da Casa 12',
        timeFora: 'Time de Fora 12',
        placarCasa: 0,
        placarFora: 1,
        oddCasa: 2.94,
        oddEmpate: 2.6,
        oddFora: 2.3,
    },
    {
        id: 13,
        tempoJogo: '85',
        timeCasa: 'Time da Casa 13',
        timeFora: 'Time de Fora 13',
        placarCasa: 2,
        placarFora: 2,
        oddCasa: 2.13,
        oddEmpate: 2.9,
        oddFora: 3.1,
    },
    {
        id: 14,
        tempoJogo: '40',
        timeCasa: 'Time da Casa 14',
        timeFora: 'Time de Fora 14',
        placarCasa: 1,
        placarFora: 0,
        oddCasa: 1.91,
        oddEmpate: 2.8,
        oddFora: 3.2,
    },
    {
        id: 15,
        tempoJogo: '55',
        timeCasa: 'Time da Casa 15',
        timeFora: 'Time de Fora 15',
        placarCasa: 0,
        placarFora: 0,
        oddCasa: 2.86,
        oddEmpate: 2.7,
        oddFora: 2.2,
    },
    {
        id: 16,
        tempoJogo: '75',
        timeCasa: 'Time da Casa 16',
        timeFora: 'Time de Fora 16',
        placarCasa: 1,
        placarFora: 1,
        oddCasa: 2.2,
        oddEmpate: 2.8,
        oddFora: 2.9,
    },
    {
        id: 17,
        tempoJogo: '60',
        timeCasa: 'Time da Casa 17',
        timeFora: 'Time de Fora 17',
        placarCasa: 0,
        placarFora: 1,
        oddCasa: 3.0,
        oddEmpate: 2.7,
        oddFora: 2.0,
    },
    {
        id: 18,
        tempoJogo: '30',
        timeCasa: 'Time da Casa 18',
        timeFora: 'Time de Fora 18',
        placarCasa: 1,
        placarFora: 0,
        oddCasa: 2.0,
        oddEmpate: 3.0,
        oddFora: 3.5,
    },
    {
        id: 19,
        tempoJogo: '45',
        timeCasa: 'Time da Casa 19',
        timeFora: 'Time de Fora 19',
        placarCasa: 0,
        placarFora: 2,
        oddCasa: 3.2,
        oddEmpate: 2.8,
        oddFora: 2.0,
    },
    {
        id: 20,
        tempoJogo: '20',
        timeCasa: 'Time da Casa 20',
        timeFora: 'Time de Fora 20',
        placarCasa: 1,
        placarFora: 0,
        oddCasa: 1.8,
        oddEmpate: 2.7,
        oddFora: 3.5,
    },
    {
        id: 21,
        tempoJogo: '10',
        timeCasa: 'Time da Casa 21',
        timeFora: 'Time de Fora 21',
        placarCasa: 0,
        placarFora: 1,
        oddCasa: 2.5,
        oddEmpate: 2.7,
        oddFora: 2.5,
    },
    {
        id: 22,
        tempoJogo: '85',
        timeCasa: 'Time da Casa 22',
        timeFora: 'Time de Fora 22',
        placarCasa: 2,
        placarFora: 1,
        oddCasa: 2.0,
        oddEmpate: 2.8,
        oddFora: 3.2,
    },
    {
        id: 23,
        tempoJogo: '50',
        timeCasa: 'Time da Casa 23',
        timeFora: 'Time de Fora 23',
        placarCasa: 1,
        placarFora: 2,
        oddCasa: 3.5,
        oddEmpate: 3.0,
        oddFora: 2.0,
    },
    {
        id: 24,
        tempoJogo: '75',
        timeCasa: 'Time da Casa 24',
        timeFora: 'Time de Fora 24',
        placarCasa: 0,
        placarFora: 0,
        oddCasa: 2.2,
        oddEmpate: 2.9,
        oddFora: 3.1,
    },
    {
        id: 25,
        tempoJogo: '70',
        timeCasa: 'Time da Casa 25',
        timeFora: 'Time de Fora 25',
        placarCasa: 1,
        placarFora: 0,
        oddCasa: 1.9,
        oddEmpate: 2.8,
        oddFora: 3.2,
    },
    {
        id: 26,
        tempoJogo: '55',
        timeCasa: 'Time da Casa 26',
        timeFora: 'Time de Fora 26',
        placarCasa: 1,
        placarFora: 1,
        oddCasa: 2.0,
        oddEmpate: 3.0,
        oddFora: 3.5,
    },
    {
        id: 27,
        tempoJogo: '40',
        timeCasa: 'Time da Casa 27',
        timeFora: 'Time de Fora 27',
        placarCasa: 0,
        placarFora: 1,
        oddCasa: 2.5,
        oddEmpate: 2.5,
        oddFora: 2.5,
    },
    {
        id: 28,
        tempoJogo: '65',
        timeCasa: 'Time da Casa 28',
        timeFora: 'Time de Fora 28',
        placarCasa: 1,
        placarFora: 2,
        oddCasa: 3.0,
        oddEmpate: 2.8,
        oddFora: 2.2,
    },
    {
        id: 29,
        tempoJogo: '80',
        timeCasa: 'Time da Casa 29',
        timeFora: 'Time de Fora 29',
        placarCasa: 0,
        placarFora: 0,
        oddCasa: 2.8,
        oddEmpate: 2.7,
        oddFora: 2.2,
    },
    {
        id: 30,
        tempoJogo: '60',
        timeCasa: 'Time da Casa 30',
        timeFora: 'Time de Fora 30',
        placarCasa: 1,
        placarFora: 2,
        oddCasa: 2.0,
        oddEmpate: 2.9,
        oddFora: 3.0,
    },
    {
        id: 31,
        tempoJogo: '25',
        timeCasa: 'Time da Casa 31',
        timeFora: 'Time de Fora 31',
        placarCasa: 0,
        placarFora: 0,
        oddCasa: 2.8,
        oddEmpate: 2.7,
        oddFora: 2.2,
    },
    {
        id: 32,
        tempoJogo: '45',
        timeCasa: 'Time da Casa 32',
        timeFora: 'Time de Fora 32',
        placarCasa: 1,
        placarFora: 1,
        oddCasa: 2.2,
        oddEmpate: 2.8,
        oddFora: 2.9,
    },
    {
        id: 33,
        tempoJogo: '85',
        timeCasa: 'Time da Casa 33',
        timeFora: 'Time de Fora 33',
        placarCasa: 0,
        placarFora: 2,
        oddCasa: 3.0,
        oddEmpate: 2.7,
        oddFora: 2.0,
    },
    {
        id: 34,
        tempoJogo: '30',
        timeCasa: 'Time da Casa 34',
        timeFora: 'Time de Fora 34',
        placarCasa: 2,
        placarFora: 0,
        oddCasa: 1.6,
        oddEmpate: 3.0,
        oddFora: 3.8,
    },
    {
        id: 35,
        tempoJogo: '55',
        timeCasa: 'Time da Casa 35',
        timeFora: 'Time de Fora 35',
        placarCasa: 0,
        placarFora: 1,
        oddCasa: 2.9,
        oddEmpate: 2.6,
        oddFora: 2.3,
    },
    {
        id: 36,
        tempoJogo: '70',
        timeCasa: 'Time da Casa 36',
        timeFora: 'Time de Fora 36',
        placarCasa: 2,
        placarFora: 1,
        oddCasa: 2.1,
        oddEmpate: 2.9,
        oddFora: 3.1,
    },
    {
        id: 37,
        tempoJogo: '40',
        timeCasa: 'Time da Casa 37',
        timeFora: 'Time de Fora 37',
        placarCasa: 1,
        placarFora: 0,
        oddCasa: 1.9,
        oddEmpate: 2.8,
        oddFora: 3.2,
    },
    {
        id: 38,
        tempoJogo: '25',
        timeCasa: 'Time da Casa 38',
        timeFora: 'Time de Fora 38',
        placarCasa: 0,
        placarFora: 0,
        oddCasa: 2.8,
        oddEmpate: 2.7,
        oddFora: 2.2,
    },
    {
        id: 39,
        tempoJogo: '65',
        timeCasa: 'Time da Casa 39',
        timeFora: 'Time de Fora 39',
        placarCasa: 1,
        placarFora: 0,
        oddCasa: 2.0,
        oddEmpate: 3.0,
        oddFora: 3.5,
    },
    {
        id: 40,
        tempoJogo: '50',
        timeCasa: 'Time da Casa 40',
        timeFora: 'Time de Fora 40',
        placarCasa: 0,
        placarFora: 2,
        oddCasa: 3.2,
        oddEmpate: 2.8,
        oddFora: 2.0,
    },
    {
        id: 41,
        tempoJogo: '15',
        timeCasa: 'Time da Casa 41',
        timeFora: 'Time de Fora 41',
        placarCasa: 2,
        placarFora: 1,
        oddCasa: 2.1,
        oddEmpate: 3.0,
        oddFora: 2.5,
    },
    {
        id: 42,
        tempoJogo: '60',
        timeCasa: 'Time da Casa 42',
        timeFora: 'Time de Fora 42',
        placarCasa: 3,
        placarFora: 0,
        oddCasa: 1.5,
        oddEmpate: 3.2,
        oddFora: 4.0,
    },
    {
        id: 43,
        tempoJogo: '30',
        timeCasa: 'Time da Casa 43',
        timeFora: 'Time de Fora 43',
        placarCasa: 2,
        placarFora: 2,
        oddCasa: 2.2,
        oddEmpate: 2.9,
        oddFora: 3.0,
    },
    {
        id: 44,
        tempoJogo: '75',
        timeCasa: 'Time da Casa 44',
        timeFora: 'Time de Fora 44',
        placarCasa: 0,
        placarFora: 1,
        oddCasa: 2.8,
        oddEmpate: 2.7,
        oddFora: 2.2,
    },
    {
        id: 45,
        tempoJogo: '80',
        timeCasa: 'Time da Casa 45',
        timeFora: 'Time de Fora 45',
        placarCasa: 1,
        placarFora: 0,
        oddCasa: 1.7,
        oddEmpate: 2.8,
        oddFora: 3.5,
    },
    {
        id: 46,
        tempoJogo: '20',
        timeCasa: 'Time da Casa 46',
        timeFora: 'Time de Fora 46',
        placarCasa: 0,
        placarFora: 0,
        oddCasa: 2.5,
        oddEmpate: 2.5,
        oddFora: 2.5,
    },
    {
        id: 47,
        tempoJogo: '45',
        timeCasa: 'Time da Casa 47',
        timeFora: 'Time de Fora 47',
        placarCasa: 1,
        placarFora: 2,
        oddCasa: 3.0,
        oddEmpate: 2.8,
        oddFora: 2.2,
    },
    {
        id: 48,
        tempoJogo: '70',
        timeCasa: 'Time da Casa 48',
        timeFora: 'Time de Fora 48',
        placarCasa: 2,
        placarFora: 0,
        oddCasa: 1.6,
        oddEmpate: 3.0,
        oddFora: 3.8,
    },
    {
        id: 49,
        tempoJogo: '50',
        timeCasa: 'Time da Casa 49',
        timeFora: 'Time de Fora 49',
        placarCasa: 0,
        placarFora: 1,
        oddCasa: 2.9,
        oddEmpate: 2.6,
        oddFora: 2.3,
    },
    {
        id: 50,
        tempoJogo: '85',
        timeCasa: 'Time da Casa 50',
        timeFora: 'Time de Fora 50',
        placarCasa: 2,
        placarFora: 2,
        oddCasa: 2.1,
        oddEmpate: 2.9,
        oddFora: 3.1,
    },
];

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function AppStadingsLeague() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Container maxWidth="xl">
                <Grid spacing={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12}>
                            <Box sx={{ backgroundColor: '#001D3D' }}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    variant="scrollable"
                                    scrollButtons="auto"
                                    aria-label="scrollable auto tabs example"
                                >
                                    <Tab label="Informações" />
                                    <Tab label="H2H" />
                                    <Tab label="Classificação" />
                                    <Tab label="Calendário" />
                                    <Tab label="Jogadores" />
                                    <Tab label="Item Five" />
                                    <Tab label="Item Six" />
                                    <Tab label="Item Seven" />
                                </Tabs>
                            </Box>

                            <TabPanel value={value} index={0}>
                                Conteúdo da guia 'Informações'
                            </TabPanel>

                            <TabPanel value={value} index={1}>
                                Conteúdo da guia 'H2H'
                            </TabPanel>

                            <TabPanel value={value} index={2}>
                                Conteúdo da guia 'Classificação'
                            </TabPanel>

                            <TabPanel value={value} index={3}>
                                Conteúdo da guia 'Calendário'
                            </TabPanel>

                            <TabPanel value={value} index={4}>
                                Conteúdo da guia 'Jogadores'
                            </TabPanel>

                            <TabPanel value={value} index={5}>
                                Conteúdo da guia 'Item Five'
                            </TabPanel>

                            <TabPanel value={value} index={6}>
                                Conteúdo da guia 'Item Six'
                            </TabPanel>

                            <TabPanel value={value} index={7}>
                                Conteúdo da guia 'Item Seven'
                            </TabPanel>
                        </Grid>
                    </Grid>
                </Grid>

            </Container>
        </>
    );
}