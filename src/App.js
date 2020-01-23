import React, {Fragment, Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { Robots } from './Robots';
import './index.css';

class App extends Component  {

    constructor() {
        super();
        this.state = {
            Robots : Robots,
            searchField : '',
        }
    }

    onSearchChange = (event) =>  {
        this.setState({searchField : event.target.value})
        // console.log(filteredRobots); 
    }

    render() {

        const filteredRobots = this.state.Robots.filter(Robot =>{
            return Robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })        
        return (
            <Fragment>
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList Robots={filteredRobots}/>
                </div>
            </Fragment>
            );
    }
   
}

export default App;