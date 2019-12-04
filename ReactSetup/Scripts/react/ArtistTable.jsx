import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export class ArtistTable extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        debugger;
        this.state = {
            data: this.props.data,
            firstName:""
        }
        this.handleInput = this.handleInput.bind(this);
        this.restOperator = this.restOperator.bind(this)
        this.combineArray = this.combineArray.bind(this);
    }

    componentDidMount() {
        this.props.getArtist();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps.data })
    }
    alertDemo(id) {
        debugger;
        alert("This is a test alert for Id" + " " + id);
    }

    handleInput(e) {
        
        const name = e.target.name;
        const value = e.target.value;
        debugger;
        if (name == "firstName") {
            this.setState({ firstName: value });
        }
    };

    restOperator() {
        let scores = ['98', '90', '87', '76']
        let [first, second, third, ...restOfScores] = scores
        console.log("first",first);
        console.log("restofscores",restOfScores);
    };

    combineArray(e) {
        let array1 = ['1', '2']
        let array2 = ['3', '4']

        let combinedArray = [...array1, ...array2];
        console.log("combineArray",combinedArray);
    }



    render() {
        let firstName = this.state.firstName != undefined ? this.state.firstName : null;
        let tableData = null;
        if (this.state.data != null || this.state.data != undefined) {
            debugger;
            tableData = this.state.data.map(item =>
                <tr key={item.ArtistId}>
                    <td>{item.ArtistId}</td>
                    <td>{item.Name}</td>

                    <td><button onClick={() => this.alertDemo(item.ArtistId)}>Alert</button></td>
                    <td><button onClick={() => this.props.deleteArtist(item.ArtistId)}>Delete</button></td>
                </tr>
            );
        }
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData}
                    </tbody>

                </table>
                <input
                    type="text"
                    name="firstName"
                    onChange={this.handleInput}
                />
                <p>{firstName}</p>
                <button onClick={() => this.restOperator()}>rest operator</button>
                <button onClick={() => this.combineArray()}>combine array</button>
            </div>
        )
    }
}

export default ArtistTable