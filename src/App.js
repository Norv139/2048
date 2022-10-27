import './App.css';
import { useState } from 'react';

function App() {
  
  class clearTable{
    constructor(){
        return [[],[],[],[]]
    }
  }

  const [field, setField] = useState(
    [
      [0, 2, 4, 8], // 0
      [0, 0, 0, 0], // 1
      [0, 2, 2, 8], // 2
      [0, 2, 2, 2], // 3
    ]
  )

  const fnUp = () =>{
    let chngeArray = new clearTable()
    for( let index = 0; index < 4; index++){
      let newColum = [
                      field[0][index], 
                      field[1][index], 
                      field[2][index], 
                      field[3][index]
                    ].filter(num => num !== 0).concat([0,0,0,0]).slice(0, 4)

      for(let i=0; i<4; i++){
        if(newColum[i] === newColum[i+1]){
          newColum[i] = newColum[i] + newColum[i+1]
          newColum[i+1] = 0
        }
      }
      newColum = newColum.filter(num => num !== 0).concat([0,0,0,0]).slice(0, 4)
      for(let i=0; i<4; i++){
        chngeArray[i][index] = newColum[i]
      }
    }
    setField(chngeArray)
  }

  const FnDown = () =>{
    let chngeArray = new clearTable()
    for( let index = 3; index !== -1; index--){
      let newColum = [
                      field[0][index], 
                      field[1][index], 
                      field[2][index], 
                      field[3][index]
                    ].filter(num => num !== 0).concat([0,0,0,0]).slice(0, 4).reverse()
      for(let i=3; i!==-1; i--){
        if(newColum[i] === newColum[i-1]){
          newColum[i] = newColum[i] + newColum[i-1]
          newColum[i-1] = 0
        }
      }
      newColum = newColum.filter(num => num !== 0).concat([0,0,0,0]).slice(0, 4).reverse()
      for(let i=3; i!==-1; i--){
        chngeArray[i][index] = newColum[i]
      }
    }
    setField(chngeArray)
  }

  const fnRight = () =>{
    let chngeArray = new clearTable()
    for(let index = 0; index !== 4; index++){
      let newRow = [0,0,0,0].concat( field[index].filter(num => num !== 0)).slice(-4)
      for(let i = 3; i !== -1;i--){
        if(newRow[i] === newRow[i-1]){
          newRow[i] = newRow[i] + newRow[i-1]
          newRow[i-1] = 0
        }
      }
      newRow = [0,0,0,0].concat( newRow.filter(num => num !== 0)).slice(-4)
      chngeArray[index] = newRow
    }
    setField(chngeArray)
  }

  const fnLeft = () =>{
    let chngeArray = new clearTable()
    for(let index = 0; index !== 4; index++){
      let newRow = [0,0,0,0].concat( field[index].filter(num => num !== 0)).slice(-4)
      for(let i = 3; i !== -1;i--){
        if(newRow[i] === newRow[i-1]){
          newRow[i] = newRow[i] + newRow[i-1]
          newRow[i-1] = 0
        }
      }
      newRow = newRow.filter(num => num !== 0).concat([0,0,0,0]).slice(0, 4)
      chngeArray[index] = newRow
    }
    setField(chngeArray)
  }

  return (
    <div className="App">

        <Table field={field} />
        
        <div className='controls'>
          <button onClick={fnUp} >Up</button>
          <button onClick={fnLeft}>Left</button>
          <button onClick={fnRight}>Right</button>
          <button onClick={FnDown}>Down</button>
        </div>
    </div> 
  );
}

function Table({field}){
  return (
    <div className='table'>
    {
      field.map( (row, i)=>{ return ( 
        <div className='row' key={i}>
          { 
            row.map((box, i)=>{ return( 
              <div className={`box`} key={i}> { box === 0 ? (""):(box) } </div> 
            )}) 
          }
        </div>
      )})
    }
    </div>
  )
}

export default App;