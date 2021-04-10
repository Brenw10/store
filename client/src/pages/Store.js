import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import ProductGridAdmin from "../components/ProductGridAdmin";
import ProductManager from "../components/ProductManager";
import Logo from "../components/Logo";
import Modal from 'react-modal';
import { useUser } from '../contexts/User';
import TreeSelector from "../components/TreeSelector";
import Category from '../services/Category';
import '../styles/store.css';

function Store() {
	const [categories, setCategories] = useState();
	const [category, setCategory] = useState();
	const [modal, setModal] = useState();
	const { user } = useUser();

	useEffect(() => {
		Category.getAll()
			.then(({ data }) => setCategories(data));
	}, []);

	function renderAdmin() {
		return (
			<>
				<button type="button" onClick={() => setModal(true)}
					className="btn btn-danger rounded-circle position-fixed float-right-button m-3">+</button>
				<Modal isOpen={modal} style={customStyles}>
					<button type="button"
						onClick={() => setModal(false)}
						className="btn position-absolute close-button">x</button>
					<ProductManager onClose={() => setModal(false)} />
				</Modal>
			</>
		);
	}

	return (
		<>
			<Header />
			<Logo title="Store" description="Você precisa, nós vendemos" />
			<div className="row no-gutters">
				<div className="col-lg-3 justify-content-center d-none d-lg-flex">
					<div className="category-container-desktop shadow-sm">
						{
							categories &&
							<TreeSelector onSelect={setCategory} items={categories} display='name' children='categories' />
						}
					</div>
				</div>
				<div className="col-lg-3 d-lg-none shadow-sm">
					{
						categories &&
						<TreeSelector onSelect={setCategory} items={categories} display='name' children='categories' />
					}
				</div>
				<div className="col-xl-6 col-lg-8">
					{user?.isAdmin ? <ProductGridAdmin category={category} /> : <ProductGrid category={category} />}
				</div>
			</div>
			<Footer />
			{user?.isAdmin && renderAdmin()}
		</>
	);
}

const customStyles = {
	content: {
		width: '70%',
		height: '70%',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		margin: 'auto',
	},
};

export default Store;