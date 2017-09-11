import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DimensionLimiter from '../../../BaseUI/DimensionLimiter/index';
import {Button} from '../../../BaseUI/index';
import styleSheet from './index.styles';
import * as _ from 'lodash';
import {NORMAL_HEIGHT, NORMAL_WIDTH} from '../../../../constants/screenBreakPoints';
import {MemoizeResponsiveStyleSheet, responsive} from '../../../../modules/Responsive';
import i18n from '../../../../i18n/index';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';
import Form from '../../../BaseUI/Form/index';
import {Text, View} from 'react-native';
import TextInputField from '../../../BaseUI/Form/fields/TextInputField';

const uniqueId = _.uniqueId();

class TwoStepVerificationComponent extends Component {

  static contextTypes = {
    uiTheme: PropTypes.object.isRequired,
  };

  getStyles = () => {
    return MemoizeResponsiveStyleSheet(styleSheet(this.context.uiTheme.UserTwoStepVerification));
  };

  render() {
    const {intl, handleFormData, formRules, hint, passwordError, forgetPassword} = this.props;
    const styles = this.getStyles();

    return (
      <DimensionLimiter id={uniqueId} width={NORMAL_WIDTH} height={NORMAL_HEIGHT} layoutStyle={styles.layout}>

        <Form style={styles.panel} control={(form) => {
          this.form = form;
        }}>

          <View style={styles.TWStepTitleWrap}>
            <Text style={styles.TWStepTitle}>
              <FormattedMessage {...i18n.twoStepVerificationTitle}/>
            </Text>

            <Text style={styles.TWStepSubTitle}>
              <FormattedMessage {...i18n.twoStepVerificationHintTitle} values={{hint: hint}}/>
            </Text>

            <View style={styles.inputRow}>
              <TextInputField
                isField={true}
                rules={formRules.password}
                name="password"
                underlineColorAndroid="#eee"
                defaultValue=""
                defaultError={passwordError}
                secureTextEntry={true}
                label={intl.formatMessage(i18n.twoStepVerificationPasswordLabel)}
                placeholder={intl.formatMessage(i18n.twoStepVerificationPasswordLabel)}
              />
            </View>

            <View style={styles.btnWrap}>
              <Button text={intl.formatMessage(i18n.twoStepVerificationBtnTitle)}
                raised primary
                onPress={async () => {
                  try {
                    this.form.loadingOn();
                    const data = await this.form.submit();
                    await handleFormData(data);
                  } finally {
                    this.form.loadingOff();
                  }
                }}/>
              <Button upperCase={false} primary style={styles.forgetBtnColor} onPress={forgetPassword}
                text={intl.formatMessage(i18n.twoStepVerificationForgetBtnTitle)}/>
            </View>

          </View>
        </Form>

      </DimensionLimiter>

    );
  }
}

TwoStepVerificationComponent.propTypes = {
  intl: intlShape.isRequired,
  handleFormData: PropTypes.func.isRequired,
  forgetPassword: PropTypes.func.isRequired,
  passwordError: PropTypes.string,
  hint: PropTypes.string,
};
export default injectIntl(responsive(TwoStepVerificationComponent));