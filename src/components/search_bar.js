import React, {Component} from 'react';
import { connect } from 'react-redux';
import searchInput from '../actions/action_serachBar';

class SerchBar extends Component {

    onInputChange(term){
        this.props.searchInput(term);
        this.props.onSearchTermChange(term);
    }

    render(){
        return (
            <div className="input-group col-md-6">
                <input
                    placeholder="Buscar"
                    className="form-control"
                    value={this.props.term} 
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

const mapStateToProps = (state) => {
    return {
        term: state.search.term
    }
}
  
export default connect(
    mapStateToProps, 
    {
        searchInput
    }
)(SerchBar);