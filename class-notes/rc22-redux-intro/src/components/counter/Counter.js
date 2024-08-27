import "./Counter.css"


const Counter = () => {

  return (
    <div className="app">
      <h2 className="counter-header"> Counter with Redux</h2>
      <h1>{} </h1>
      {/* sayac */}
      <h2>{} </h2>
      {/* text1 */}
      <div>
        <button
          className="counter-button positive"
          // arttır fonksiyonu
        >
          ARTTIR
        </button>

        <button className='counter-button zero'
          // sıfırla fonksiyonu
          >RESET</button>
        <button className='counter-button negative'
          // azalt fonksiyonu
          >AZALT</button>
      </div>
    </div>
  );
}

export default Counter