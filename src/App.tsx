import { useState } from 'react';
import { ButtonAglutinado } from './components/ButtonAglutinador';
import { Header } from './components/Header';
import { ProductionSpreadsheet } from './components/ProductionSpreadsheet';
import './global.css';
import { FormAglutinador } from './components/FormAglutinador';

const records = [
  {
    id: '1',
    category: 'cores',
    // type: 'cores',
    startTime: new Date('2022-02-02'),
    endTime: new Date('2022-02-02'),
    amount: 640,
    createdAt: new Date('2022-02-02 10:00:55')
  },
  {
    id: '2',
    category: 'strech',
    startTime: new Date('2022-02-02'),
    endTime: new Date('2022-02-02'),
    amount: 7000,
    createdAt: new Date('2022-02-02 09:00:55')
  }
]

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
        <ButtonAglutinado 
          onOpenModal={handleOpenNewProductionRecordModal} 
        />
      </div>

      <FormAglutinador
        isOpen={newProductionRecordOpenModal}
        onRequestClose={handleCloseNewProductionRecordModal}
      />
      <main>
        {records.map(record => {

          return <ProductionSpreadsheet />
        })}
      </main>
    </>
  )
}

export default App
