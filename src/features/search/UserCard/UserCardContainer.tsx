import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import UserCard from './UserCard';
import { RootStateType } from '../../../setupStore';
import { getUserById } from '../selectors';

function mapStateToProps(state: RootStateType, ownProps: { userId: string }) {
  const { id, name } = getUserById(state, ownProps.userId);
  return {
    id,
    name,
    jobTitle: 'engineer',
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
