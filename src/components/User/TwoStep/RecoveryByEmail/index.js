import * as _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, DialogModal, Toolbar} from '../../../BaseUI/index';
import DimensionLimiter from '../../../BaseUI/DimensionLimiter/index';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import styleSheet from './index.styles';
import i18n from '../../../../i18n/index';
import {NORMAL_HEIGHT, NORMAL_WIDTH} from '../../../../constants/screenBreakPoints';
import {View} from 'react-native';
import Form from '../../../BaseUI/Form/index';
import TextInputField from '../../../BaseUI/Form/fields/TextInputField';
import {MemoizeResponsiveStyleSheet} from '../../../../modules/Responsive';

const uniqueId = _.uniqueId();

class UserTwoStepRecoveryByEmailComponent extends Component {

  static contextTypes = {
    uiTheme: PropTypes.object.isRequired,
  };

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet(this.context.uiTheme.UserTwoStepRecoveryByEmail));
  };

  render() {
    const {intl, formRules, resendToken, handleFormData, tokenError, emailPattern, goBack} = this.props;
    const styles = this.getStyles();

    return (
      <DimensionLimiter id={uniqueId} width={NORMAL_WIDTH} height={NORMAL_HEIGHT} layoutStyle={styles.layout}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={goBack}
          rightElement="info"
          onRightElementPress={() => {
            this.dialog.open();
          }}
          centerElement={intl.formatMessage(i18n.twoStepRecoveryByEmailTitle)}/>
        <Form style={styles.panel} control={(form) => {
          this.form = form;
        }}>
          <View style={styles.formGroup}>
            <TextInputField
              isField={true}
              rules={formRules.token}
              name="token"
              label={intl.formatMessage(i18n.twoStepRecoveryByEmailTokenLabel)}
              defaultValue=""
              defaultError={tokenError}
              underlineColorAndroid="#eee"
              placeholder={intl.formatMessage(i18n.twoStepRecoveryByEmailTokenLabel)}
              help={emailPattern ? (
                <FormattedMessage {...i18n.twoStepRecoveryByEmailTokenHelp} values={{email: emailPattern}}/>) : ''}
            />
          </View>

          <View style={styles.btnWrap}>
            <Button raised primary text={intl.formatMessage(i18n.twoStepRecoveryByEmailSubmitFormBtnTitle)}
              onPress={async () => {
                try {
                  this.form.loadingOn();
                  const data = await this.form.submit();
                  await handleFormData(data);
                } finally {
                  this.form.loadingOff();
                }
              }}/>
            <Button upperCase={false} accent={false} primary style={styles.resendBtn}
              onPress={
                async () => {
                  try {
                    this.form.loadingOn();
                    await resendToken();
                  } finally {
                    this.form.loadingOff();
                  }
                }}
              text={intl.formatMessage(i18n.twoStepRecoveryByEmailResendBtnTitle)}/>
          </View>
        </Form>

        <DialogModal control={(dialog) => {
          this.dialog = dialog;
        }}
        title={<FormattedMessage {...i18n.twoStepRecoveryByEmailInfoTitle} />}
        content={<FormattedMessage {...i18n.twoStepRecoveryByEmailInfoContent} />}/>

      </DimensionLimiter>
    );
  }
}

UserTwoStepRecoveryByEmailComponent.propTypes = {
  intl: intlShape.isRequired,
  goBack: PropTypes.func.isRequired,
  handleFormData: PropTypes.func.isRequired,
  resendToken: PropTypes.func.isRequired,
  tokenError: PropTypes.string,
  emailPattern: PropTypes.string,
};
export default injectIntl(UserTwoStepRecoveryByEmailComponent);