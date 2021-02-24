import React, { useEffect, useState } from 'react';
import Editor from "rich-markdown-editor";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Category from '../services/Category';
import ArrayUtils from '../services/ArrayUtils';
import Product from '../services/Product';
import FileUtils from '../services/FileUtils';
import ImageUploader from "react-images-upload";

function ProductManager({ onClose }) {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    Category.getAll()
      .then(({ data }) => ArrayUtils.getFlatten(data, 'categories'))
      .then(value => setCategories(value));
  }, []);

  function create() {
    const imagesPromise = images.map(value => FileUtils.toBase64(value));
    return Promise.all(imagesPromise)
      .then(images => Product.create({ name, price, images, category, description }))
      .then(() => onClose());
  }

  return (
    <>
      <h2 className="text-center">Criação de Produto</h2>
      <div className="row no-gutters">
        <div className="col-12">
          <ImageUploader
            onChange={images => setImages(images)} withPreview={true}
            withIcon={true} buttonText="Escolher imagens" label="Tamanho máximo: 5mb"
            fileSizeError="Arquivo muito grande" fileTypeError="Tipo de arquivo não suportado"
            imgExtension={[".jpg", ".png"]}
          />
        </div>
        <div className="col-lg-4 p-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Nome</span>
            </div>
            <input type="text" className="form-control"
              onChange={event => setName(event.target.value)} />
          </div>
        </div>
        <div className="col-lg-4 p-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Preço</span>
            </div>
            <input type="number" className="form-control"
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
        <div className="col-12 p-3">
          <div className="text-center mb-3"><h3>Descrição</h3></div>
          <Editor placeholder="Detalhes do produto" onChange={value => setDescription(value())} />
        </div>
        <div className="col-6">
          <button className="btn btn-outline-dark btn-lg" onClick={() => onClose()}>Cancelar</button>
        </div>
        <div className="col-6 text-right">
          <button className="btn btn-dark btn-lg" onClick={() => create()}>Criar Produto</button>
        </div>
      </div>
    </>
  );
}

export default ProductManager;