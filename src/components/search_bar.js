import React, {Component} from 'react';

class SerchBar extends Component {

    constructor(props){
        super(props);
        this.state = {term: ''};
    }

    onInputChange(term){
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }

    render(){
        return (
            <div className="input-group col-md-6">
                <input
                    placeholder="Buscar"
                    className="form-control"
                    value={this.state.term} 
                    onChange={event => this.onInputChange(event.target.value)} />
                <div className="input-group-append">
                    <button className="btn btn-secondary" type="button">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default SerchBar;