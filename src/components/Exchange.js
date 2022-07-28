import React from "react";
import { useEffect, useState } from "react";

const Exchange = (props) => {
  // console.log("HEY", props.currencyFirst);

  const [exchange, setExchange] = useState("");
  const currencyOne = props.currencyFirst;
  const currencyTwo = props.currencySecond;

  // send exchange value once set to App.js
  const Message = (currencyOne, currencyTwo) => {
    console.log(`This much of ${currencyOne} gets you ${currencyTwo}`);
  };
  props.func(Message, exchange);

  //fetch exchange rate and store it
  useEffect(() => {
    fetch(
      `https://free.currconv.com/api/v7/convert?q=${currencyOne}_${currencyTwo}&compact=ultra&apiKey=0a6fa1f6b3600e490794`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)

        const exchangeHolder =
          data[`${props.currencyFirst}_${props.currencySecond}`];
        setExchange(exchangeHolder);
        //console.log(exchangeHolder)
      })
      .catch((error) => console.error(error));
  }, [currencyOne, currencyTwo]);

  //create new Date() and fetch 7 days worth of exchange rates for the chosen currencies

  return (
    <>
      <div>
        <p>Exchange Rate:</p>
        <p>
          {exchange} {props.currencySecond} to 1 {props.currencyFirst}
        </p>
      </div>
    </>
  );
};

export default Exchange;
