import * as React from 'react';
import './Hello.css';


export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

/**
 * using class component will cause the following error
 *   ERROR in [at-loader] ./src/components/app.tsx:10:17
     TS2322: Type '{}' is not assignable to type 'IntrinsicAttributes & IntrinsicClassAttributes<Component<Pick<InputProps, "onFormSubmit" | "input...'.
     Type '{}' is not assignable to type 'Readonly<Pick<InputProps, "onFormSubmit" | "input" | "placeholder"> & Object>'.
     Property 'onFormSubmit' is missing in type '{}'.
 *******************************************************
 * Without typescript the fix would adding those code in Hello container:
 * export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
    }
 *
 * and adding mergeProps to connect function
 * *******************************************************
 * With typescript the fix would be something like this:
 *
 * const NewHello:any = Hello
 *
 * and bind NewHello using connect function
 */
class Hello extends React.Component<Props, object> {
    render() {
        const { name, enthusiasmLevel = 1, onIncrement, onDecrement } = this.props;

        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
                <div>
                    <button onClick={onDecrement}>-</button>
                    <button onClick={onIncrement}>+</button>
                </div>
            </div>
        );
    }
}

// function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
//     if (enthusiasmLevel <= 0) {
//         throw new Error('You could be a little more enthusiastic. :D');
//     }
//
//     return (
//         <div className="hello">
//             <div className="greeting">
//                 Hello {name + getExclamationMarks(enthusiasmLevel)}
//             </div>
//             <div>
//                 <button onClick={onDecrement}>-</button>
//                 <button onClick={onIncrement}>+</button>
//             </div>
//         </div>
//     );
// }

export default Hello;

function getExclamationMarks(numberOfMarks: number) {
  return Array(numberOfMarks + 1).join('!');
}
