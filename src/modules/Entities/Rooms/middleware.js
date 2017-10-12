import {ENTITIES_ROOM_ADD} from '../../../actions/entities/rooms';
import Rooms from '../../../models/entities/Rooms';

const middleware = ({dispatch, getState}) => next => action => {
  switch (action.type) {
    case ENTITIES_ROOM_ADD:
      if (action.fromServer) {
        for (const roomId in action.rooms) {
          if (action.rooms.hasOwnProperty(roomId)) {
            Rooms.saveToQueue(action.rooms[roomId]);
          }
        }
      }
      break;
  }
  return next(action);
};

export default middleware;