import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {Rebots} from '../Rebots';
import ErrorBoundry from '../components/ErrorBoundry';
import '../containers/App.css';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor(){
        super()
        this.state ={
            Rebots: Rebots,
            Searchfield: ''
        }
    }
    onSearchChange=(event)=> {
        this.setState({ Searchfield: event.target.value})
    }
    
    render(){
        const {Rebots, Searchfield} = this.state;
        const filterRebots = Rebots.filter(rebot => {
            return rebot.name.toLocaleLowerCase().includes(Searchfield.toLocaleLowerCase());
        })
         return !Rebots.length ?
             <h1>Loading..</h1> : 
             (
                <div className='tc'>
                   <h1 className='f2'>Robot Freinds</h1>
                   <SearchBox searchChange={this.onSearchChange}/>
                   <Scroll>
                      <ErrorBoundry>
                         <CardList Rebots ={filterRebots} />
                      </ErrorBoundry>
                   </Scroll>
                  
                </div>
                
            );
      
   
 }

}

export default App;