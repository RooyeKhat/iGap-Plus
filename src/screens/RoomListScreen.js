import React, {Component} from 'react';
import RoomListComponent from '../components/RoomList';
import {ClientGetRoomList} from '../modules/Proto/index';
import {CLIENT_GET_ROOM_LIST} from '../constants/methods/index';
import Api from '../modules/Api/index';
import {connect} from 'react-redux';
import {goRoomHistory} from '../navigators/SecondaryNavigator';

class RoomListScreen extends Component {

  state = {
    loading: true,
  };

  async componentDidMount() {
    const clientGetRoomList = new ClientGetRoomList();
    await Api.invoke(CLIENT_GET_ROOM_LIST, clientGetRoomList);
    this.setState({loading: false});
  }

  render() {
    const {roomList} = this.props;
    const {loading} = this.state;

    return (
      <RoomListComponent loading={loading} goRoom={goRoomHistory} roomList={roomList}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    roomList: state.methods.roomList,
  };
};
export default connect(
  mapStateToProps,
)(RoomListScreen);