import Button from './Button.jsx';
import ReusableModalWindow from './ReusableModalWindow.jsx';
 
function ConfirmationModalWindow({onClick}) {
  return <ReusableModalWindow title="confirmation modal" onClick={onClick}>
    <p>Are you sure you proceed? its cannot be undone</p>
    <Button text='Cancel' variant='inactive' onClick={onClick}/>
    <Button text='Yes, I agree' onClick={()=> alert('You confirm this action.')} />
  </ReusableModalWindow>;
}

export default ConfirmationModalWindow;
