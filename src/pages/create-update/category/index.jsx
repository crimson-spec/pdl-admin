import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SelectLabel from '../../../components/select-label';
import InputLabel from '../../../components/input-label';
import RadioButtonLabel from '../../../components/radio-button-label';
import Button from '../../../components/button';
import api from '../../../services/api';
import * as C from './styles';

const CreateUpdateCategory = () => {
  let { id } = useParams();

  const navigate = useNavigate();

  const [sector, setSector] = useState(null);
  const [sectors, setSectors] = useState([]);
  const [description, setDescription] = useState('');

  useEffect(() => {
    const index = async () => {
      const { data } = await api.get('/sectors');

      const _sectors = data.map((sector) => ({
        value: sector.id,
        label: sector.description,
      }));

      setSectors(_sectors);

      if (id) {
        const { data } = await api.get(`/categories/${id}`);
        const _sector = _sectors.find(
          (sector) => sector.value == data.sector_id
        );
        setSector(_sector);
        setDescription(data.description);
      }
    };
    index();
  }, []);

  const handleSubmit = async () => {
    if (!description | !sector) {
      // toast.error('Preencha os campos!');
      return;
    }
    try {
      if (id) {
        await api.put(`/categories/${id}`, {
          description,
          sector_id: sector.value,
        });
      } else {
        await api.post('/categories', {
          description,
          sector_id: sector.value,
        });
      }
      // toast.success('Inserido com sucesso!');
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <C.ScreenArea>
      <C.Container>
        <h2>{id ? 'Atualizar' : 'Cadastrar'} Categoria</h2>
        <hr />
        {id ? (
          <InputLabel title={'Id'} disabled={true} value={id} />
        ) : undefined}
        <SelectLabel
          title={'Setor*'}
          defaultValue={sector}
          options={sectors}
          isMulti={false}
          onChange={setSector}
        />
        <InputLabel
          title={'Descrição*'}
          type={'text'}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <hr />
        <div className="actions">
          <Button
            type={2}
            onClick={() => {
              navigate(-1);
            }}
          >
            voltar
          </Button>
          <Button type={0} onClick={handleSubmit}>
            salvar
          </Button>
        </div>
      </C.Container>
    </C.ScreenArea>
  );
};

export default CreateUpdateCategory;
