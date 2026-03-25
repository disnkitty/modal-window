import ConfirmationModalWindow from './ConfirmationModalWindow.jsx';
import StartWindow from './StartWindow.jsx';
import { useState } from 'react';
import './App.css'
function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  function openModal() {
    setIsOpenModal(true);
  }
  function closeModal() {
    setIsOpenModal(false);
  }

  return (
    <div>
      {isOpenModal ? (
        <ConfirmationModalWindow onClick={closeModal} isOpenModal={isOpenModal}/>
      ) : (
        <StartWindow onClick={openModal} />
      )}
    </div>
  );
}

export default App;
