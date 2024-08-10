function Button({
  text = "This is a default prop",
  color = "green",
  fontSize = 12,
  backgroundColor = "lightgrey",
  handleClick,
}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
    backgroundColor: backgroundColor,
  };

  return (
    <button onClick={()=>handleClick("https://www.theodinproject.com")} style={buttonStyle}>
      {text}
    </button>
  );
}

export default function App() {
    const handleButtonClick = (url) => {
        window.location.href = url;
    }

  return (
    <div>
      <Button handleClick={handleButtonClick}/>
      <Button
        text="Don't click Me!"
        color="red"
        fontSize={20}
        backgroundColor="pink"
      />
      <Button handleClick={handleButtonClick}/>
    </div>
  );
}
