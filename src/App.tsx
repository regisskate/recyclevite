import { useState } from 'react';
import { ButtonAglutinado } from './components/ButtonAglutinador';
import { Header } from './components/Header';
import { ProductionSpreadsheet } from './components/ProductionSpreadsheet';
import Modal from "react-modal";
import './global.css';
import { FormAglutinador } from './components/FormAglutinador';
function App() {

  const [newProductionRecordOpenModal, setNewProductionRecordOpenModal] = useState(false);
  function handleOpenNewProductionRecordModal() {
    setNewProductionRecordOpenModal(true);
  }

  function handleCloseNewProductionRecordModal() {
    setNewProductionRecordOpenModal(false)
  }

  return (
    <>
      <Header />
      <div>
        <ButtonAglutinado onOpenModal={handleOpenNewProductionRecordModal} />
      </div>

      <FormAglutinador
        isOpen={newProductionRecordOpenModal}
        onRequestClose={handleCloseNewProductionRecordModal}
      />

      <ProductionSpreadsheet />
    </>
  )
}

export default App
