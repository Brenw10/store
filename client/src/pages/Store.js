import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import CategorySelector from "../components/CategorySelector";
import ProductManager from "../components/ProductManager";
import Logo from "../components/Logo";
import '../styles/store.css';
import { useState } from "react";
import Modal from 'react-modal';
import { useHistory } from "react-router-dom";

function Store() {
	const [category, setCategory] = useState();
	const [modal, setModal] = useState();
	const history = useHistory();

	return (
		<>
			<Header />
			<Logo title="Store" description="Você precisa, nós vendemos" />
			<div className="row no-gutters">
				<div className="col-lg-3 justify-content-center d-none d-lg-flex">
					<div className="category-container-desktop shadow-sm">
						<CategorySelector setCategory={setCategory} />
					</div>
				</div>
				<div className="col-lg-3 d-lg-none shadow-sm">
					<CategorySelector setCategory={setCategory} />
				</div>
				<div className="col-xl-6 col-lg-8">
					<ProductGrid category={category} onClickProduct={product => history.push('/product/' + product._id)} />
				</div>
			</div>
			<Footer />
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