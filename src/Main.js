import React, { Component } from 'react';
import { connect } from 'react-redux';
import FetchCoinData from './Redux/Actions/FetchCoinData';

class Main extends Component {


    componentDidMount() {
        this.getLatestData()
    }

    renderCoinCards() {
        const { crypto } = this.props;
        return crypto.data.map((coin, i) =>
            <div key={i}>
                <div style={{ backgroundColor: 'whitesmoke' }}>
                    <p>{coin.name}</p>
                    <p>{coin.name}</p>
                    <p>{coin.symbol}</p>
                    <p>{coin.price_usd}</p>
                    <p>{coin.percent_change_24h}</p>
                    <p>{coin.percent_change_7d}</p>
                </div>
                <br />
            </div>
        )
    }


    render() {

        const { crypto } = this.props;
        if (crypto.isFetching) {
            return (
                <div>
                    <h1>Loading</h1>
                </div>
            )
        }

        return (
            <div style={{ overflowY: 'auto' }}>
                <button onClick={()=>this.getLatestData()} >RefreshData</button>

                {this.renderCoinCards()}
            </div>
        )


    }

    getLatestData() {
        console.log('called');
        
        this.props.FetchCoinData('asda')
    }
};


function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(Main)