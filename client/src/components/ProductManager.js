import React, { useEffect, useState } from 'react';
import Editor from "rich-markdown-editor";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Category from '../services/Category';
import ArrayUtils from '../services/ArrayUtils';
import Product from '../services/Product';
import FileUtils from '../services/FileUtils';
import ImageUploader from "react-images-upload";
import { TrashIcon, PlusCircleIcon } from './Icons';
import { useUser } from '../contexts/User';
// todo: improve code
function ProductManager({ onClose, product }) {
  const [name, setName] = useState(product && product.name);
  const [price, setPrice] = useState(product && product.price);
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();
  const [description, setDescription] = useState(product && product.description);
  const [sizes, setSizes] = useState(product ? product.sizes : [{}]);
  const { user } = useUser();

  useEffect(() => {
    Category.getAll()
      .then(({ data }) => ArrayUtils.getFlatten(data, 'categories'))
      .then(value => setCategories(value));
  }, []);

  useEffect(() => {
    if (!product || !categories.length) return;
    const currentCategory = categories.find(value => value._id === product.category._id);
    setCategory(currentCategory._id);
  }, [product, categories]);

  function create() {
    const imagesPromise = images.map(value => FileUtils.toBase64(value));
    return Promise.all(imagesPromise)
      .then(images => Product.create(user.tokenId, { name, price, images, category, description, sizes }))
      .then(() => onClose());
  }

  function update() {
    return Product.update(user.tokenId, product._id, { name, price, category, description, sizes })
      .then(() => onClose());
  }

  function onChangeSizes(field, value, index) {
    const items = [...sizes];
    const item = { ...sizes[index], [field]: value };
    items[index] = item;
    setSizes(items);
  }

  function onRemoveSize(index) {
    const items = [...sizes];
    items.splice(index, 1);
    setSizes(items);
  }

  function renderSizes() {
    return sizes.map((value, i) =>
      <tr key={i}>
        <td>
          <input type="text" className="form-control" value={value.name || ''}
            onChange={event => onChangeSizes('name', event.target.value, i)} />
        </td>
        <td>
          <input type="number" className="form-control" min="0" step="1" value={value.quantity || 0}
            onChange={event => onChangeSizes('quantity', event.target.value, i)} />
        </td>
        <td className="text-center">
          <button className="btn btn-danger btn-sm" onClick={() => onRemoveSize(i)}>
            <TrashIcon width={"20px"} />
          </button>
        </td>
      </tr>
    );
  }

  return (
    <>
      <h2 className="text-center">{product ? 'Editar Produto' : 'Criar Produto'}</h2>
      <div className="row no-gutters">
        {
          !product &&
          <div className="col-12">
            <ImageUploader
              onChange={images => setImages(images)} withPreview={true}
              withIcon={true} buttonText="Escolher imagens" label="Tamanho máximo: 5mb"
              fileSizeError="Arquivo muito grande" fileTypeError="Tipo de arquivo não suportado"
              imgExtension={[".jpg", ".png"]}
            />
          </div>
        }
        <div className="col-lg-4 p-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Nome</span>
            </div>
            <input type="text" className="form-control" value={name}
              onChange={event => setName(event.target.value)} />
          </div>
        </div>
        <div className="col-lg-4 p-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Preço</span>
            </div>
            <input type="number" className="form-control" min="0" value={price}
              onChange={event => setPrice(event.target.value)} />
          </div>
        </div>
        <div className="col-lg-4 p-3">
          <Dropdown
            options={categories.map(val => ({ value: val._id, label: val.name }))}
            onChange={({ value }) => setCategory(value)}
            value={category} placeholder="Selecione uma Categoria"
          />
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Tipos</h5>
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th className="text-center">Nome</th>
                    <th className="text-center">Quantidade</th>
                    <th className="text-center">Deletar</th>
                  </tr>
                </thead>
                <tbody>
                  {renderSizes()}
                </tbody>
              </table>
              <div className="text-center">
                <button className="btn btn-dark btn-sm" onClick={() => setSizes([...sizes, {}])}>
                  <PlusCircleIcon width={"20px"} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 p-3">
          <div className="text-center mb-3"><h3>Descrição</h3></div>
          <Editor placeholder="Detalhes do produto" defaultValue={description}
            onChange={value => setDescription(value())} />
        </div>
        <div className="col-6">
          <button className="btn btn-outline-dark btn-lg" onClick={() => onClose()}>Cancelar</button>
        </div>
        <div className="col-6 text-right">
          {
            product
              ?
              <button className="btn btn-dark btn-lg" onClick={() => update()}>Editar Produto</button>
              :
              <button className="btn btn-dark btn-lg" onClick={() => create()}>Criar Produto</button>
          }
        </div>
      </div>
    </>
  );
}

export default ProductManager;