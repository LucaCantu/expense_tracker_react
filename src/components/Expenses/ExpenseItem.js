import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


const ExpenseItem= (props)=> {

 const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('updated!');
  };

  return  (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2> {title} </h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;

// state -> serve per far effettvamente cambiare qualcosa nel DOM, da la possibilità di avere effettivamente una ui dinamica. React di base esegue il codice, ma non considera i cambiamenti. State si importa come a linea 1. Si usa la funzione nel componente, deve essere chiamato nella funione principale del componente. con useState creiamo una variabile speciale che permette la riesecuzione del codice per rendere effettivi i cambiamenti. useState ritorna un array dove il primo valore è il valore della variabile e il secondo è la funione aggiornarta. Title nell'array è props.title, setTitle è una funzione che chiameremo per settare un nuovo title. useState lavora su ogni elemento in modo indipendente. Si crea uno state per ogni componente che creiamo. per ora nel nostro caso abbiamo 4 componenti ExpenseItem, ognuno con il suo State. Usiamo const anche se assegniamo nuovo valore erchè usiamo funzioni per cambiare elementi e non il segno = .
