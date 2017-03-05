import React, {Component} from 'react';
import '../style/App.css';
import Partido from './partido'
class Leagues extends Component {

    constructor(props)
    {
        super(props)
        this.state = {}
    }



    postGuess(home,away,date)
    {

        console.log('entro');
        console.log(home+' '+away+' '+date);

    }

    render() {
        var i = 0;
        return (
            <div>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>Partidos de la semana</h1>
                    </div>
                </div>
                <hr className="content-divider"></hr>
                <div className='row'>
                    <div className='col-md-6'>
                        <h3>Selecciona la competencia</h3>
                    </div>
                    <div className='col-md-6'></div>
                </div>
                <hr className="content-divider"></hr>
                <div className='row'>
                {this.props.ligaBBVA.map(partido =>{
                  i++;
                  return <Partido key={i} partido={partido} />
                })}
                </div>
            </div>
        );
    }
}
export default Leagues;
