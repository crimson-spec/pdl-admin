import React from 'react';
import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../../../components/table';
import tableIcons from '../../../components/table/MaterialTableIcons';
import api from '../../../services/api';

import { AreaList } from './styles';

const ListCategories = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const table = {
    title: 'Categorias',
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
        field: 'description',
      },
      {
        title: 'Setor',
        field: 'sector.description',
      },
      {
        title: 'Criado em',
        field: 'created_at',
      },
      {
        title: 'Alterado em',
        field: 'updated_at',
      },
    ],
    actions: [
      {
        icon: tableIcons.Edit,
        tooltip: 'Editar Categoria',
        onClick: (event, rowData) => {
          navigate(`/update/category/${rowData.id}`);
        },
      },
      {
        icon: tableIcons.Delete,
        tooltip: 'Deletar Categoria',
        onClick: (event, rowData) => {
          console.log(`Deletando item`);
          console.log(rowData);
        },
      },
      {
        icon: tableIcons.Add,
        tooltip: 'Adicionar Categoria',
        isFreeAction: true,
        onClick: () => navigate('/create/category'),
      },
    ],
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('categories');
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

export default ListCategories;
