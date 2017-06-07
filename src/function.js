import React from 'react';
import axios from '../node_modules/axios/index';

class Apps extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        let th = this;
        this.serverRequest = axios.get(this.props.source)
            .then(function(event) {
                th.setState({
                    data: event.data
                });
            })
    }

    // componentWillUnmount() {
    //     this.serverRequest.abort();
    // }

    number(is) {
        return is + 1;
    }

    render() {
        let dataEvent = [];
        this.state.data.forEach(item => {
            dataEvent.push(
                <div className={item.type}>
                    <div className="number">{this.number(dataEvent.length)}</div>
                    <div className="type">{item.field_type}</div>
                    <div className="hover-div">
                        <div className={'titleBox' + '-' + item.type}>
                            <h3 className="title">{item.title.replace(/(<([^>]+)>)/ig,"")}</h3>
                        </div>
                        <img src={'http://api.dev.loc' + item.field_avatar}/>
                        <p className="body">{item.body.replace(/(<([^>]+)>)/ig,"")}</p>
                    </div>
                </div>
            );
        });
        return (
            <div className="containerAll">
                {dataEvent}
            </div>
  );
 }
}

export default Apps;


