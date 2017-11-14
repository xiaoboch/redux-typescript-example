import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions';
import Hello from '../components/Hello';

const HO: any = Hello;

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
    return {
        enthusiasmLevel,
        name: languageName,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HO);