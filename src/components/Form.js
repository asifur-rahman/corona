import React, { Component } from 'react'
import axios from 'axios'
import './Form.css'
import {Box} from "@material-ui/core"
import Checkbox from '@material-ui/core/Checkbox'
import Navbar from './Navbar';
export class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
     result: 0,
     fever: 0,
     feverscore:0,
     age:0,
     sex:'',  
     checker1:false,
     checker2:false,
     checker3:false,
     checker4:false,
     checker5:false,
     checkerscore:0,
     check1:false,
     check2:false,
     check3:false,
     check4:false,
     check5:false,
     check6:false,
     check7:false,
     check8:false,
     score:0,
     assessmentScore:0,
     finalresult:'',
     advice:'',
     number:''
    };
    this.onCheckerChange=this.onCheckerChange.bind(this)
    this.onCheckChange=this.onCheckChange.bind(this)
  }

//For Step 1
handleFever=(event)=>{
  this.setState({
      fever: Number(event.target.value)
      
  })
}
handleSex=(event)=>{
this.setState({
    sex: (event.target.value)
})
}
handleaAge=(event)=>{
this.setState({
    age: Number(event.target.value)
})
}
addAction =(event)=> {
  let t = this.state.fever;
  if(t>100.9){
    this.setState({result: 2 })
    let x = 2+this.state.checkerscore+this.state.score
  this.setState({assessmentScore: x })
  if(x<5){
    this.setState({finalresult:'Negative'})
    this.setState({advice:'Congrats you are not affected'})
  }
  if(x>=5){
    this.setState({finalresult:'Positive'})
    this.setState({advice:'Possibly affected, Please isolate yourself and contact a Doctor'})
  }
  if(x<7 && x>5.5){
    this.setState({finalresult:'Positive'})
    this.setState({advice:'High chance of being affected, Please isolate yourself and contact a Doctor immediately'})
  }
  if(7<x){
    this.setState({finalresult:'Positive'})
    this.setState({advice:'Almost Confirmed that you are affected, Please isolate yourself and get yourself admitted to a Hospital and contact a Doctor immediately for emergncy call the number given below'})
    this.setState({number:'017xxxxxxxx, 018xxxxxxxx'})
  }
  
  }else{
    this.setState({result: 0 })
    let x = 0+this.state.checkerscore+this.state.score
  this.setState({assessmentScore: x })
  if(x<5){
    this.setState({finalresult:'Negative'})
    this.setState({advice:'Congrats you are not affected'})
  }
  if(x>=5){
    this.setState({finalresult:'Positive'})
    this.setState({advice:'Possibly affected, Please isolate yourself and contact a Doctor'})
  }
  if(x<7 && x>5.5){
    this.setState({finalresult:'Positive'})
    this.setState({advice:'High chance of being affected, Please isolate yourself and contact a Doctor immediately'})
  }
  if(7<x){
    this.setState({finalresult:'Positive'})
    this.setState({advice:'Almost Confirmed that you are affected, Please isolate yourself and get yourself admitted to a Hospital and contact a Doctor immediately for emergncy call the number given below'})
    this.setState({number:'017xxxxxxxx, 018xxxxxxxx'})
  }

  }
  
}

//For Step 2
  onCheckerChange(event){
    let secondcheck=event.target.checked
    let secondcheckscore =this.state.checkerscore
    console.log(secondcheck);
    if(secondcheck===true){
      if(secondcheckscore===0){
        this.setState({checkerscore: secondcheckscore+3 })
      }else{
        this.setState({checkerscore: secondcheckscore+1 })
      }
    }if(secondcheck===false){
      if(secondcheckscore===3){
        this.setState({checkerscore: secondcheckscore-3 })
      }else{
        this.setState({checkerscore: secondcheckscore-1 })
      }
    }
    this.setState({
    [event.target.name]:event.target.checked
    })
  }

  //For Step 3
  onCheckChange(event){
    let firstcheck=event.target.checked
    let firstcheckscore =this.state.score+2
    console.log(firstcheck);
    if(firstcheck===true){
      this.setState({score: firstcheckscore })
    }if(firstcheck===false){
      this.setState({score: firstcheckscore-4 })
    }
    this.setState({
    [event.target.name]:event.target.checked
    })
  }
  

  render() {
    return (
      < >
      <Box component="div" style={{background:"#233"}}>
<Navbar/>

<h4 style={{
     color:"tan",
     textAlign:"center",
     marginTop:"20px",
     marginBottom:"30px"
     }}>Check and Fill Everything To Know The Result </h4>

     {/*Step 1 render */}

     <div className="step1" >
    <div className="inputstyles">
        <label >Age</label>
        <input type="number" onChange={this.handleaAge} />
    </div>
    <div >
        <label>Sex</label>
        <input type="text" onChange={this.handleSex} />
    </div>
    <div >
        <label>Body Temperature</label>
        <input type="number" onChange={this.handleFever} />
    </div>

       
      
   </div>

   {/*Step 2 render */}
   <h4 style={{
     color:"tan",
     textAlign:"center",
     marginTop:"10px",
     marginBottom:"20px"
     }}>Check The Below Symptoms</h4>
   <div className="step3">
    <div >
        <Checkbox color="secondary" name="checker1"
        checked={this.state.checker1} 
        onChange={this.onCheckerChange}/>
        <label>Breathing Problem</label>
        <br/>
    </div>
    <div >
        <Checkbox color="secondary"name="checker2"
        checked={this.state.checker2} 
        onChange={this.onCheckerChange}/>
        <label>Dry Cough</label>
        <br/>
    </div>
    <div >
          <Checkbox color="secondary"name="checker3"
          checked={this.state.checker3} 
          onChange={this.onCheckerChange}/>
          <label>Sore Throat</label>
          <br/>
    </div>
    <div >
            <Checkbox color="secondary"name="checker4"
            checked={this.state.checker4} 
            onChange={this.onCheckerChange}/>
            <label>Weakness</label>
            <br/>
    </div>
    <div >
            <Checkbox color="secondary"name="checker5"
            checked={this.state.checker5} 
            onChange={this.onCheckerChange}/>
            <label>Runny Nose</label>
            <br/>
    </div>
    </div>

      {/*Step 3 render */}
   <h4 style={{
     color:"tan",
     textAlign:"center",
     marginTop:"20px",
     marginBottom:"20px"
     }}>Check The Related Symptoms</h4>
  <div className="step3">
    <div >
        <Checkbox color="secondary" name="check1"
        checked={this.state.check1} 
        onChange={this.onCheckChange}/>
        <label>Abdominal pain</label>
    </div>
    <div >
        <Checkbox color="secondary"name="check2"
        checked={this.state.check2} 
        onChange={this.onCheckChange}/>
        <label>Vomiting </label>
        <br/>
    </div>
    <div >
          <Checkbox color="secondary"name="check3"
          checked={this.state.check3} 
          onChange={this.onCheckChange}/>
          <label>Diarrhoea </label>
          <br/>
    </div>
    <div >
            <Checkbox color="secondary"name="check4"
            checked={this.state.check4} 
            onChange={this.onCheckChange}/>
            <label>Chest pain or pressure  </label>
            <br/>
    </div>
    <div >
            <Checkbox color="secondary"name="check5"
            checked={this.state.check5} 
            onChange={this.onCheckChange}/>
            <label>Muscle pain  </label>
            <br/>
    </div>
    <div >
            <Checkbox color="secondary"name="check6"
            checked={this.state.check6} 
            onChange={this.onCheckChange}/>
             <label>Loss of taste or smell  </label>
            <br/>
        </div>
    
    <div >
        <Checkbox color="secondary"name="check7"
        checked={this.state.check7} 
        onChange={this.onCheckChange}/>
        <label>Rash on skin, or discoloration of fingers or toes  </label>
        <br/>
    </div>
    <div >
        <Checkbox color="secondary"name="check8"
        checked={this.state.check8} 
        onChange={this.onCheckChange}/>
        <label>Loss of speech or movement  </label>
        <br/>
    </div>
     
   </div>
   <div className="step3">
   <textarea type='text'
    value={this.state.finalresult} readOnly/>
   <textarea type='text'
    placeholder="Your result will appear here"
    value={this.state.advice} readOnly />
    <textarea type='text'
    value={this.state.number} readOnly/>
   </div>
    <div className="btndiv">
    <button type="submit" onClick={this.addAction}> Submit </button>
    </div>
    <div className="footer">
      <p>“This COVID-19 Self Assessment System is only for software
development purpose and may not yield actual result. Any
information given by users of this system will not be disclosed
or store to anywhere.”</p>
    </div>

    </Box>
    </>
    )
  }
}

export default Form
