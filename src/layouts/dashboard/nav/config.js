// component
import SvgColor from '../../../components/svg-color';
// import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Dashboard',
    path: '/dashboard/app',
    icon: icon('ic_user'),
  },
  {
    title: 'Usuários',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Relatórios',
    path: '/dashboard/relatorios',
    icon: icon('ic_user'),
  },
  {
    title: 'Apostas',
    path: '/dashboard/apostas',
    icon: icon('ic_cart'),
  },
  {
    title: 'Caixa',
    path: '/dashboard/caixa',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
