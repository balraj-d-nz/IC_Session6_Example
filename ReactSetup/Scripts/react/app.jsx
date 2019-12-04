import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ArtistTable from './ArtistTable';
import { debug } from 'util';

export class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.GetArtist = this.GetArtist.bind(this);
        this.DeleteArtist = this.DeleteArtist.bind(this);
    }

    GetArtist() {
        var self = this;
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/Home/GetArtist',
            success: function (response) {
                debugger;
                self.setState({ artistData: response }),
                    console.log("artistData", self.state.artistData);
            }
        });
    };

    DeleteArtist(id) {
        debugger;
        var self = this;
        $.ajax({
            type: 'POST',
            url: `/Home/DeleteArtist?id=${id}`,
            success: function (response) {
                self.setState({ artistData:response });
            }
        });
    };

    render() {
        debugger;
        return (
            <ArtistTable
                getArtist={this.GetArtist}
                data={this.state.artistData}
                deleteArtist={this.DeleteArtist}
            />
        )
    }
}

const root = document.getElementById("root")
ReactDOM.render(<Demo />, root)