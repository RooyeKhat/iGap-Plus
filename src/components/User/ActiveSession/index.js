import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text, View} from 'react-native';
import {DialogModal, FlatList, Toolbar} from '../../BaseUI/index';
import i18n from '../../../i18n/index';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import {MemoizeResponsiveStyleSheet} from '../../../modules/Responsive';
import styleSheet from './index.style';
import SubListComponent from './SubListComponent';

class ActiveSessionComponent extends Component {

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet);
  };

  onTermanateAllClick = (activeList, onTerminate) => {
    for (let i = 0; i < activeList.length; i++) {
      onTerminate(activeList[i].getSessionId());
    }
  };

  render() {
    const {intl, currentSession, activeSessionList, terminateSession, goBack} = this.props;
    const list = Object.values(activeSessionList);
    const styles = this.getStyles();
    let showTerminateAll = false;

    if (list.length > 0) {
      showTerminateAll = true;
    }

    return (
      <ScrollView style={styles.scroll}>
        <View>
          <Toolbar
            leftElement="arrow-back"
            onLeftElementPress={goBack}
            centerElement={intl.formatMessage(i18n.activeSessionActiveSession)}/>
          {Object.keys(currentSession).length > 0 && <View>
            <Text style={styles.status}> {intl.formatMessage(i18n.activeSessionCurrentSession)} </Text>
            <SubListComponent
              terminateSession={terminateSession}
              item={currentSession}
              showTerminate={false}
            />
          </View>}
          {showTerminateAll && <View>
            <View style={{backgroundColor: '#eee'}}>
              <Text onPress={() => {
                this.dialog.open();
              }}
              style={styles.terminateAll}> {intl.formatMessage(i18n.activeSessionTerminateAllOtherActiveSession)} </Text>
              <Text
                style={styles.textLogsOut}> {intl.formatMessage(i18n.activeSessionLogsOutAllDevice)} </Text>
            </View>
            <Text style={styles.status}> {intl.formatMessage(i18n.activeSessionActiveSession)} </Text>
            <FlatList
              data={list}
              renderItem={({item}) => <SubListComponent
                terminateSession={terminateSession}
                item={item}
                showTerminate={true}/>}
              keyExtractor={(item, index) => ('sh-' + index)}
            />
            <View style={{backgroundColor: '#eee', padding: 10}}>
              <Text
                style={styles.textLogsOut}> {intl.formatMessage(i18n.activeSessionTapOnSessionToTerminate)} </Text>
            </View>
          </View>}
        </View>

        <DialogModal control={(dialog) => {
          this.dialog = dialog;
        }}
        title={<FormattedMessage {...i18n.activeSessionAreYouSure}/>}
        content={<FormattedMessage {...i18n.activeSessionCloseAllSession} />}
        actions={[
          {
            label: intl.formatMessage(i18n.ok),
            onPress: () => {
              this.onTermanateAllClick(list, terminateSession);
            },
          },
          {
            label: intl.formatMessage(i18n.cancel),
            onPress: () => {
            },
          },
        ]}/>
      </ScrollView>
    );
  }
}

ActiveSessionComponent.propTypes = {
  goBack: PropTypes.func.isRequired,
  terminateSession: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(ActiveSessionComponent);