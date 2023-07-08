import { useState } from "react";
import Modal from "react-modal";
import close from '../../assets/close.svg';
import { Container } from "./styles";

interface NewFormModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function FormAglutinador({ isOpen, onRequestClose }: NewFormModalProps) {



  // const [date, setDate] = useState('');
  const [category, setCategory] = useState('cores');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <button type="button" onClick={onRequestClose} className="react-modal-close">
          <img src={close} alt="fechar modal" />
        </button>

        <main>
          <form>

            <h1>AGLUTINADOR</h1><br />


            <h2>tipo de material</h2>

            <section>
              <button
                type="button"
                className={category === 'cores' ? 'active' : ''}
                onClick={() => { setCategory('cores'); }}

              >
                <span>Cores</span>
              </button>
              <button
                type="button"
                className={category === 'strech' ? 'active' : ''}
                onClick={() => { setCategory('strech'); }}
              >
                <span>Strech</span>
              </button>

              <button
                type="button"
                className={category === 'azul' ? 'active' : ''}
                onClick={() => { setCategory('azul'); }}
                >
                <span>Azul</span>
              </button>
              <button
                type="button"
                className={category === 'pvdc' ? 'active' : ''}
                onClick={() => { setCategory('pvdc'); }}
                >

                <span>Pvdc</span>
              </button>
            </section>
            <span>Inicio</span>
            
            <div>
              <input
                type="time"
                value={startTime}
                onChange={event => setStartTime(event.target.value)}
                />
              <span>Fim</span>
              <input
                type="time"
                value={endTime}
                onChange={event => setEndTime(event.target.value)}
                />
              <input
                type="number"
                placeholder="Peso"
                value={amount}
                onChange={event => setAmount(Number(event.target.value))}
                />
              </div>
            <button type="submit">Enviar</button>

          </form>
        </main>

      </Container>
    </Modal>
  )
}

// onClick={handleCloseNewProductionRecordModal}
{/* <span>Data: </span> */ }
{/* <input
type="date"
className="form-control"
value={date}
onChange={event => setDate(event.target.value)}
/><br></br> */}