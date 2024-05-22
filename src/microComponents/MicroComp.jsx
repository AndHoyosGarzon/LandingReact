export function Title({ title, size}) {
    return <h2 className={size}>{title}</h2>;
  }
  
export function Text({ text }) {
    return <p>{text}</p>;
  }
  
export function Button({ textBtn, colorBtn }) {
    return (
      <button className={colorBtn} type="button">
        {textBtn}
      </button>
    );
  }


  