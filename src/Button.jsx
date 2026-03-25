function Button({ text, variant = 'active', onClick}) {
  return (
    <button onClick = {onClick} className={`button ${variant ? `button--${variant}` : ''}`}>
      {text}
    </button>
  );
}

export default Button;
