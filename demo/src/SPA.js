import {Component} from 'react'
import {Discuss} from 'react-loader-spinner'
import './App.css'
export default class Ko extends Component{

    state={d:''}

    
    componentDidMount(){
    setTimeout(this.fet,3000)
    
    }

 fet= async ()=>{
    console.log(Date())
        let k=await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc ')
        const l=await k.json()
         k=await l.results[0]
this.setState(()=>({d:k}))
    }
Rendersuc=()=>{
    const {d}=this.state
console.log(d.city)
            return <div className='ssd'>
                <div className='mpd'>
                    <div className='imga'>
                        <img src={d.picture.large} className='im'/>
                    </div>
                    <div className='content'>
                        <div className='con'>
                        <p><span>FirstName: </span> {d.name.first}</p>
                        <p><span>LastName: </span>{d.name.last}</p>
                        </div>
                        <div className='Gen'>
                        <p><span>Gender: </span> {d.gender}</p>
                        </div>
                        <div className='Gen'>
                        <p><span>Telephone: </span> {d.phone}</p>
                        <p><span>mobile: </span> {d.cell}</p>
                        </div>
                        
                        <div>
                        <h4>Address</h4>
                        <address className='con1'>
                            <p>{d.location.city}</p>
                       <p> State: {d.location.state}</p><p>{d.location.country}</p><p>{d.location.postcode}</p></address>
                       </div>
                    </div>
                </div>
                </div>
    } 
    

    render(){
        const {d}=this.state

       
     
        
console.log(d)
        return <div>
            {d!==''?this.Rendersuc():<Discuss/>}
            </div>
    }

}