import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import SearchField from './SearchField';
import { RootStateType } from '../../../setupStore';
import { onSearchPress } from '../sagaActions';


function mapStateToProps(state: RootStateType) {
  return {

  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({
    onSearchPress,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
