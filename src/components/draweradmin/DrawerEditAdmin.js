import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSpring } from 'react-spring';
import {
    styled,
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EditAdmin from '../forms/administradores/EditAdmin';
import clienteService from '../../services/clienteService';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        width: '100%',
    },
}));

function DrawerEditAdmin({ isOpen, clientId, onClose }) {
    const [adminData, setClienteData] = useState(null);
    const [loginEnabled, setLoginEnabled] = useState(false);
    const [statusEnabled, setStatusEnabled] = useState(false);
    const navigate = useNavigate();

    // Use useRef to store the timer ID
    const fetchTimerRef = useRef(null);

    // Defina a função fetchData
    const fetchData = async () => {
        try {
            const response = await clienteService.listarClientePorId(clientId);
            console.log('Dados do cliente:', response.cliente);
            setClienteData(response.cliente);
        } catch (error) {
            console.error('Erro ao obter dados do cliente:', error);
        }
    };

    useEffect(() => {
        if (isOpen && !fetchTimerRef.current) {
            fetchTimerRef.current = setTimeout(() => {
                fetchData();
                fetchTimerRef.current = null;
            }, 500);
        }

        // Função de limpeza para cancelar o timer se o componente for desmontado ou as dependências mudarem
        return () => {
            if (fetchTimerRef.current) {
                clearTimeout(fetchTimerRef.current);
            }
        };
    }, [isOpen, clientId]);

    const handleClose = () => {
        setClienteData(null);
        setLoginEnabled(false);
        setStatusEnabled(false);
        onClose();
        navigate('/dashboard/administradores');
    };

    const handleCheckboxChange = (event, setterFunction) => {
        setterFunction(event.target.checked);
    };

    return (
        <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isOpen}>
            <DialogTitle sx={{ p: 2, border: 0, fontSize: 14, color: '#33ffc2', backgroundColor: '#023047', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} id="customized-dialog-title">
                Editar Administrador
            </DialogTitle>

            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 2,
                    mr: 2,
                    mt: 1,
                    color: '#33ffc2',
                }}
            >
                <CloseIcon />
            </IconButton>

            <DialogContent>
                {adminData && (
                    <EditAdmin
                        clienteData={adminData}
                        loginEnabled={loginEnabled}
                        statusEnabled={statusEnabled}
                        onLoginCheckboxChange={(event) => handleCheckboxChange(event, setLoginEnabled)}
                        onStatusCheckboxChange={(event) => handleCheckboxChange(event, setStatusEnabled)}
                        onCloseDrawer={onClose}
                        fetchData={fetchData}
                    />
                )}
            </DialogContent>
        </BootstrapDialog>
    );
}

export default DrawerEditAdmin;
