export default function MyButton() {

  function buttonClicked() {
    alert("button clicked");
  }

  return (
    <button onClick={buttonClicked}>
      i'm button
    </button>
  );
}
