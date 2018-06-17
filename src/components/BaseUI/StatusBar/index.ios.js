import React from 'react';
import {uniqueId} from 'lodash';
import {View} from 'react-native';
import {MemoizeResponsiveStyleSheet, responsive} from '../../../modules/Responsive';
import {ORIENTATION_PORTRAIT} from '../../../constants/screenBreakPoints';

const uId = uniqueId();
const styleSheet = [
  uId,
  () => [
    {
      query: ORIENTATION_PORTRAIT,
      style: {
        container: {
          height: 20,
          backgroundColor: '#e5e5e5',
        },
      },
    },
  ],
  true,
];

class StatusBar extends React.Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  render() {
    const styles = this.getStyles();
    return (<View style={styles.container}/>);
  }
}

export default responsive(StatusBar);