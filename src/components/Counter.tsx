import React from 'react';
import { ChangeEvent, useState } from 'react';
import './counter.scss';
import ThankYou from './ThankYou';

const inc = (count: number) => count + 1;
const dec = (count: number) => count - 1;

const Counter = () => {
  const [count, setCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const changeCount = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(+event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return <ThankYou />;
  }

  return (
    <main className="counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => setCount(inc)}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(dec)}>Decrement</button>
      </section>
      <section className="controls">
        <form onSubmit={handleSubmit}>
          <label htmlFor="set-to">Set Count</label>
          <input
            id="set-to"
            type="number"
            value={count}
            onChange={changeCount}
          />
          <input
            id="set-to"
            type="number"
            value={count}
            onChange={(e) => setCount(+e.target.value)}
          />
          <input type="submit" />
        </form>
      </section>
    </main>
  );
};

export default Counter;

// classbased component version
// class Counter extends Component<CounterProps, CounterState> {
//     state: CounterState = {
//       count: 0
//     };
  
//     increment = () => {
//       this.setState(({ count }) => ({ count: count + 1 }));
//     };
  
//     decrement = () => {
//       this.setState(({ count }) => ({ count: count - 1 }));
//     };
  
//     reset = () => {
//       this.setState({ count: 0 });
//     };
  
//     changeCount = (event: ChangeEvent<HTMLInputElement>) => {
//       this.setState({ count: +event.target.value });
//     };
  
//     render() {
//       const { incident } = this.props;
//       const { count } = this.state;
  
//       return (
//         <main className="Counter">
//           <h1>Days Since Last {incident}</h1>
//           <p className="count">{count}</p>
//           <section className="controls">
//             <button onClick={this.increment}>Increment</button>
//             <button onClick={this.reset}>Reset</button>
//             <button onClick={this.decrement}>Decrement</button>
//           </section>
//           <section className="controls">
//             <form
//               onSubmit={(event) => {
//                 event.preventDefault();
//               }}
//             >
//               <label htmlFor="set-to">Set Count</label>
//               <input
//                 id="set-to"
//                 type="number"
//                 value={count}
//                 onChange={(e) => this.changeCount}
//               />
//             </form>
//           </section>
//         </main>
//       );
//     }
// }
  
// class Application extends Component {
//     render() {
//       return <Counter incident={'Coffee Spill'} />;
//     }
// }