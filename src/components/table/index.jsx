import React from 'react';
import MaterialTable from 'material-table';
import tableIcons from './MaterialTableIcons';
import { ThemeProvider, createTheme } from '@mui/material';

const Table = ({ tableConfig, data }) => {
  const defaultMaterialTheme = createTheme();
  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable
        title={tableConfig.title}
        icons={tableIcons}
        columns={tableConfig.columns}
        data={data}
        detailPanel={tableConfig.detailPanel}
        options={{
          columnsButton: true,
          headerStyle: {
            // border: '1px solid red',
            fontWeight: 'bold',
            backgroundColor: '#e9e3e6',
            padding: '12px 15px',
          },
          rowStyle: {
            color: '#621708',
            borderRight: '1px solid red',
            fontSize: '16px',
            // backgroundColor: '#ddd',
            padding: '12px 15px',
          },
          ...tableConfig.options,
        }}
        actions={tableConfig.actions}
      />
    </ThemeProvider>
  );
};

export default Table;
