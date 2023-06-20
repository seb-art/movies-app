import React, { Component } from 'react';

class  extends Component {
    state = {  } 
    render() { 
        const { data, columns } = this.props;
        return <tbody>
            {data.map(item => {<tr>
                {columns.map(column => <td></td>)}
            </tr>})}
        </tbody>;
    }
}
 
export default ;
