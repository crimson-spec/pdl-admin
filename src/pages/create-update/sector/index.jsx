import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SelectLabel from '../../../components/select-label';
import InputLabel from '../../../components/input-label';
import Button from '../../../components/button';
import api from '../../../services/api';
import * as C from './styles';

const CreateUpdateSector = () => {
  let { id } = useParams();

  const navigate = useNavigate();

  const [description, setDescription] = useState('');

  useEffect(() => {
    const index = async () => {
      if (id) {
        const { data } = await api.get(`/sectors/${id}`);
        setDescription(data.description);
      }
    };
    index();
  }, []);

  const handleSubmit = async () => {
    if (!description) {
      // toast.error('Preencha os campos!');
      return;
    }
    try {
      if (id) {
        await api.put(`/sectors/${id}`, {
          description,
        });
      } else {
        await api.post('/sectors', {
          description,
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
        <h2>{id ? 'Atualizar' : 'Cadastrar'} Setor</h2>
        <hr />
        {id ? (
          <InputLabel title={'Id'} disabled={true} value={id} />
        ) : undefined}
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

export default CreateUpdateSector;
