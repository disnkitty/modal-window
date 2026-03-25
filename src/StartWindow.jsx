import Button from './Button.jsx';

function StartWindow({onClick}) {
  
  return (
    <div className="start-window-content">
      <p className='start-window-content__title'>Universal Modal Component</p>
      <Button text="Open Modal" onClick={onClick} />
    </div>
  );
}

export default StartWindow;
