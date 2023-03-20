import aglutinador from '../../assets/aglutinador.svg';
import { ButtonContainer } from './Aglutinador';
import prensa from '../../assets/prensa.svg';

interface ModalProps {
  onOpenModal: () => void;
}

export function ButtonAglutinado({ onOpenModal }: ModalProps) {

  return (
    <ButtonContainer>
      <button type="button" onClick={onOpenModal}>
        <img src={aglutinador} alt="" />
        <span>Aglutinador</span>
      </button>
      <button>
        <img src={prensa} alt="" />
        <span>Prensa</span>
      </button>


    </ButtonContainer>
  )
}