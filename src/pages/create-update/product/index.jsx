import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SelectLabel from '../../../components/select-label';
import InputLabel from '../../../components/input-label';
import RadioButtonLabel from '../../../components/radio-button-label';
import Button from '../../../components/button';
import api from '../../../services/api';
import * as C from './styles';

const CreateUpdateProduct = () => {
  let { id } = useParams();

  const navigate = useNavigate();

  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [quantity, setQuantity] = useState('');
  const [measurement, setMeasurement] = useState('');
  const [status, setStatus] = useState(true);

  let product_image = null;

  useEffect(() => {
    const index = async () => {
      const { data } = await api.get('/categories');

      const _categories = data.map((category) => ({
        value: category.id,
        label: category.description,
      }));

      setCategories(_categories);

      if (id) {
        const { data } = await api.get(`/products/${id}`);
        const _category = _categories.find(
          (category) => category.value == data.category_id
        );
        setCategory(_category);
        setDescription(data.description);
        setValue(data.value);
        setQuantity(data.quantity);
        setMeasurement(data.measurement);
        setStatus(data.status);
      }
    };
    index();
  }, []);

  const handleSubmit = async () => {
    if (!description | !category | !value) {
      // toast.error('Preencha os campos!');
      return;
    }
    try {
      const formData = new FormData();

      formData.append('image', product_image);
      formData.append('description', description);
      formData.append('category_id', category.value);
      formData.append('value', value);
      formData.append('quantity', quantity);
      formData.append('measurement', measurement);
      formData.append('status', status);

      if (id) {
      } else {
        await api.post('/products', formData, {
          headers: {
            'Content-type': 'multipart/form-data',
          },
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
        <h2>{id ? 'Atualizar' : 'Cadastrar'} Produto</h2>
        <hr />
        {id ? (
          <InputLabel title={'Id'} disabled={true} value={id} />
        ) : undefined}
        <SelectLabel
          title={'Categoria*'}
          defaultValue={category}
          options={categories}
          isMulti={false}
          onChange={setCategory}
        />
        <InputLabel
          title={'Descrição*'}
          type={'text'}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <InputLabel
          title={'Valor*'}
          type={'number'}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <InputLabel
          title={'Quantidade*'}
          type={'number'}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <InputLabel
          title={'Medida*'}
          type={'text'}
          value={measurement}
          onChange={(e) => setMeasurement(e.target.value)}
        />
        <InputLabel
          title={'Imagem'}
          type={'file'}
          accept={'image/*'}
          onChange={(e) => {
            product_image = e.target.files[0];
          }}
        />
        <div>
          <RadioButtonLabel
            onChange={() => setStatus(true)}
            value={status === true}
            label={'Em estoque'}
          />
          <RadioButtonLabel
            onChange={() => setStatus(false)}
            value={status === false}
            label={'Sem estoque'}
          />
        </div>
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

export default CreateUpdateProduct;
