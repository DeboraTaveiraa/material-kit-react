// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber, fCurrency, fNumber } from '../../../utils/formatNumber';
// components
import Iconify from '../../../components/iconify';

const StyledIcon = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function AppWidgetSummary({ title, total, icon, color = 'primary', sx, ...other }) {
  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].main,
        ...sx,
      }}
      {...other}
    >
      <StyledIcon
        sx={{
          color: (theme) => theme.palette[color].dark,
          backgroundImage: (theme) =>
            `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
              theme.palette[color].dark,
              0.24
            )} 100%)`,
        }}
      >
        {icon}
      </StyledIcon>

      {title === 'Total de Vendas em R$' ? (
        <Typography variant="h3">{fCurrency(total)}</Typography>
      ) : title === 'Comissão Anterior' ? (
        <Typography variant="h3">{fCurrency(total)}</Typography>
      ) : title === 'Total de Clientes' || title === 'Total de Bilhetes' ? (
        <Typography variant="h3">{(total)}</Typography>
      ) : (
        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
          {title}
        </Typography>
      )}

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}
