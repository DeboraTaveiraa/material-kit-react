import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    }
}));

function ModalConfirmBet({ data, isOpen, onClose }) {
    const [animatedIconStyle, setAnimatedIconStyle] = useSpring(() => ({
        transform: 'scale(0)',
    }));

    React.useEffect(() => {
        if (isOpen) {
            setAnimatedIconStyle({ transform: 'scale(1)' });
        }
    }, [isOpen, setAnimatedIconStyle]);

    const handleClose = () => {
        onClose();
    };

    return (
        <animated.div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={isOpen}
            >
                <DialogTitle sx={{ m: 0, p: 2, fontSize: 14 }} id="customized-dialog-title">
                    Aposta realizada!
                </DialogTitle>

                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>

                <DialogContent dividers>
                    <animated.div style={animatedIconStyle}>
                        <animated.div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: 128,
                                color: '#33ffc2',
                                width: '100%',
                            }}
                        >
                            <CheckCircleTwoToneIcon sx={{
                                fontSize: 120,
                            }} />
                        </animated.div>
                    </animated.div>
                </DialogContent>

                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Alterações salvas!
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </animated.div>
    );
}

export default ModalConfirmBet;
