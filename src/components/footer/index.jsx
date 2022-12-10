import React from 'react';

import { AreaFooter } from './style';

const Footer = () => {
  return (
    <AreaFooter>
      Desenvolvido por{' '}
      <a href="https://github.com/crimson-spec" target={'_blank'}>
        Matheus
      </a>{' '}
      e Douglas. Protótipo de um sistema de controle de pedidos para um
      condomínio de Cerquilho-SP. Todos os direitos reservados.
    </AreaFooter>
  );
};

export default Footer;
