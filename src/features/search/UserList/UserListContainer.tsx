import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import UserList from './UserList';
import { RootStateType } from '../../../setupStore';
import { getUserIds } from '../selectors';

function mapStateToProps(state: RootStateType) {
  return {
    userIds: getUserIds(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
