import React, { useState } from 'react';

import Card from '../card/card.component';

const UseStateExample = () => {
  const [name, setName] = useState('Yihua');
  const [address, setAddress] = useState('Amsterdam');

  return (
    <Card>
      <h1>{name}</h1>
      <h1>{address}</h1>
      <button onClick={() => setName('Andrei')}>Set Name to Andrei</button>
      <button onClick={() => setAddress('Canada')}>
        Set Address to Canada
      </button>
    </Card>
  );
};

// export class StateClassComponent extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       name: 'Yihua'
//     };
//   }

//   render() {
//     return (
//       <Card>
//         <h1> {this.state.name} </h1>
//         <button onClick={this.setState({ name: 'Andrei' })}>
//           Set Name to Andrei
//         </button>
//       </Card>
//     );
//   }
// }

export default UseStateExample;
