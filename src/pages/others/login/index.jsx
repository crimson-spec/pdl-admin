import React, { useState } from 'react';
import Logo from '../../../assets/images/logo.png';
import { Wrapper, Leftside, Rightside, AreaLogin } from './style';
import Button from '../../../components/button';
import InputLabel from '../../../components/input-label';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useAuth } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!username | !password) {
      setError('*Preencha todos os campos');
      return;
    }

    await signin({ username, password });
    navigate('/');
  };

  return (
    <Wrapper>
      <Leftside />
      <Rightside>
        <h3>Painel administrativo. Autentique-se para continuar.</h3>
        <AreaLogin>
          <div className="logo">
            <img src={Logo} alt="Logo" />
            <hr />
          </div>
          <div className="title">
            <AccountBoxIcon fontSize="large" />
            <h3>iniciar sessão</h3>
          </div>
          <div>
            <InputLabel
              title={'usuário'}
              value={username}
              placeholder={'Digite o usuário'}
              onChange={(e) => [setUsername(e.target.value), setError('')]}
            />
          </div>
          <div>
            <InputLabel
              title={'senha'}
              type={'password'}
              value={password}
              placeholder={'Digite a senha'}
              onChange={(e) => [setPassword(e.target.value), setError('')]}
            />
          </div>
          <span>{error}</span>
          <div>
            <Button fullWidth onClick={handleLogin}>
              entrar
            </Button>
          </div>
        </AreaLogin>
        <span>
          Esta página só pode ser acessada por usuários administradores!
        </span>
      </Rightside>
    </Wrapper>
  );
};

export default Login;
