import React from 'react';
import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../../../components/table';
import tableIcons from '../../../components/table/MaterialTableIcons';
import api from '../../../services/api';

import { AreaList } from './styles';

const ListProducts = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const table = {
    title: 'Produtos',
    options: {
      search: false,
      draggable: false,
    },
    columns: [
      {
        title: 'Id',
        field: 'id',
        hidden: true,
        // hiddenByColumnsButton: true,
      },
      {
        title: 'Descrição',
        field: 'name',
      },
      {
        title: 'Categoria',
        field: 'category.name',
      },
      {
        title: 'Valor',
        field: 'value',
      },
      {
        title: 'Status',
        field: 'status',
        lookup: {
          true: 'Em estoque',
          false: 'Sem estoque',
        },
      },
    ],
    actions: [
      {
        icon: tableIcons.Edit,
        tooltip: 'Editar Produto',
        onClick: (event, rowData) => {
          navigate(`/update/product/${rowData.id}`);
        },
      },
      {
        icon: tableIcons.Delete,
        tooltip: 'Deletar Produto',
        onClick: (event, rowData) => {
          console.log(`Deletando item`);
          console.log(rowData);
        },
      },
      {
        icon: tableIcons.Add,
        tooltip: 'Adicionar Produto',
        isFreeAction: true,
        onClick: () => navigate('/create/product'),
      },
    ],
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('products');
        setData(data);
      } catch (error) {
        console.log('Deu erro!');
        console.log(error);
      }
    })();
  }, []);
  return (
    <AreaList>
      {/* <h3>Tela de produtos</h3> */}
      <Table tableConfig={table} data={data} />
    </AreaList>
  );
};

export default ListProducts;
