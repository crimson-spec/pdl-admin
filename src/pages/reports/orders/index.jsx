import React, { useState, useEffect } from 'react';
import Table from '../../../components/table';
import api from '../../../services/api';
import { AreaReport } from './styles';
const Details = ({ data }) => {
  return (
    <div>
      <table>
        <tr>
          <th>Produto</th>
          <th>Quantidade</th>
          <th>Observação</th>
        </tr>
        {data.map((_data) => {
          // console.log(_data);
          return (
            <tr>
              <td>{_data.product.description}</td>
              <td>{_data.quantity}</td>
              <td>{_data.observation}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

const OrdersReport = () => {
  const [data, setData] = useState([]);
  const table = {
    title: 'Pedidos',
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
        title: 'Número do Pedido',
        field: 'internal_number',
      },
      {
        title: 'Cancelado',
        field: 'cancelled',
        lookup: {
          false: 'Não',
          true: 'Sim',
        },
      },
      {
        title: 'Observação do Pedido',
        field: 'description',
      },
      {
        title: 'Realizado em',
        field: 'created_at',
      },
    ],
    detailPanel: ({ order_products }) => {
      return <Details data={order_products} />;
    },
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('reports/orders');
        setData(data);
      } catch (error) {
        console.log('Deu erro!');
        console.log(error);
      }
    })();
  }, []);

  return (
    <AreaReport>
      <Table tableConfig={table} data={data} />
    </AreaReport>
  );
};

export default OrdersReport;
