import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

const LoginFormLazy = lazy<FC<LoginFormProps>>(() => import('./LoginForm'));

export default LoginFormLazy;
