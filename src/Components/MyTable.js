import {React,useState,useEffect} from "react"

const MyTabel = () =>{

    const  myTableData = [
        {'id':1,1:'',2:'Class1',3:'Class2',4:'Class3',5:'Class4',6:'Class5',7:'Class6'},
        {'id':2,1:'MONDAY',2:'1',3:'2',4:'3',5:'4',6:'5',7:'6'},
        {'id':3,1:'TUESDAY',2:'1',3:'2',4:'3',5:'4',6:'5',7:'6'},
        {'id':4,1:'WEDNESDAY',2:'1',3:'2',4:'3',5:'4',6:'5',7:'6'},
        {'id':5,1:'THURSDAY',2:'1',3:'2',4:'3',5:'4',6:'5',7:'6'},
        {'id':6,1:'FRIDAY',2:'1',3:'2',4:'3',5:'4',6:'5',7:'6'}
   ];

   const [data,setData] = useState([])
   const [errorInput,setErrorInput] = useState('')
   useEffect(()=>{setData(myTableData)},[])

  const submitStepSignupForm=(id,value)=>{
    //console.log(this.props,'signup4');
      let newArray = data.slice();
      newArray.push({'id':id,'value':value});
    setData(newArray)
}

// append column to the HTML table
const appendColumn=()=> {
         let obj =  data.map((p) => {
              let size = Object.keys(p).length;
              p[size+1] = '-';
              return p;
         });
         setData(obj)

     }
// edit Column
const editColumn=(p,k,e)=> {
   let inputValue = e.target.innerText;
     let obj = p.p;
    let objId = obj.id;
    let position = k.k;
    let values = Object.values(obj);
    if(values.indexOf(inputValue) == -1){
         obj[position] = inputValue;
         let stateCopy = data;
         stateCopy.map((object,index) =>{
              if(object.id == objId){
                   object = obj[position];
              }
         })
         setData(stateCopy)
         setErrorInput('')
         console.log(stateCopy,'stateCopystateCopy');
    }else{
        setErrorInput('This period is also available in your list');
         return false;
    }
     }

   
         let tableStyle = {
              align:"center"
         };
         let list = data.map(p =>{
              return (
                   <tr className="grey2" key={p.id}>
                        {Object.keys(p).filter(k => k !== 'id').map(k => {
                              return (<td className="grey1" key={p.id+''+k}><div suppressContentEditableWarning="true" contentEditable="true"
                             value={k} onInput={editColumn.bind(this,{p},{k})}>{p[k]}</div></td>);
                        })}
                   </tr>
              );
         });
         return (
              <fieldset className="step-4">
                   <div className="heading">
                        <h3>Tell us about your schedule</h3>
                        <p>Dynamic Data Table by Rohan Arihant </p>
                   </div>
                   <div className="schedule padd-lr">
                        <table cellSpacing="3" id="mytable" style={tableStyle}>
                             <tbody>{list}</tbody>
                        </table>

                   </div>

                   
              </fieldset>
    )
}

export default MyTabel;
