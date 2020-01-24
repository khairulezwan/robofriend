import React, {Fragment, Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../index.css';

class App extends Component  {

    constructor() {
        super();
        this.state = {
            Robots : [],
            searchField : '',
        }
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
        .then(users => this.setState({Robots : users}));
    }

    onSearchChange = (event) =>  {
        this.setState({})
        // console.log(filteredRobots); 
    }

    render() {

        const {Robots, searchField} = this.state;

        const filteredRobots = Robots.filter(Robot =>{
            return Robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !Robots.length ? <h1>Loading</h1>
        :(
            <Fragment>
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList Robots={filteredRobots}/>
                    </Scroll>
                </div>
            </Fragment>
            );
    }
   
}

export default App;