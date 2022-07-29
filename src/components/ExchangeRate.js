const ExchangeRate = ({exchangeData}) => {
    return (
      <div className="exchange-rate">
        <h2>Exchange Rate</h2>
        <h1>{exchangeData.exchangeRate}</h1>
        <p>1{exchangeData.primaryCurrency} to {exchangeData.secondaryCurrency}</p>
      </div>
    )
  }
  
  export default ExchangeRate