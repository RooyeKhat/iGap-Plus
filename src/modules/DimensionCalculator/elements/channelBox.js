/*
+----------------------------------------------------------------------+
|                                 25                                   |
| +----------------------------------------------------------------+   |
| | +--45--+                                                       |   |
| | 45     |                   layout header                       |   |
| | |      |                                                       |   |
| | +------+                       2                               |   |
| +----------------------------------------------------------------+   |
|   +--------------------------------------------------------------+   |
|   | +----------------------------------------------------------+ |   |
|   | |                                                          | |   |
|   | |                    message box                           | |   |
|   | |                                                          | |   |
|20 | +----------------------------------------------------------+ | 15|
|   | +----------------------------------------------------------+ |   |
|   | |                         text                             | |   |
|   | |                                                          | |   |
|   | +----------------------------------------------------------+ |   |
|   +--------------------------------------------------------------+   |
|                                  8                                   |
|   +--------------------------------------------------------------+   |
|   |                                                              |   |
|   22                     layout channel info                     |   |
|   |                                                              |   |
|   +--------------------------------------------------------------+   |
|                                                                      |
|                                  5                                   |
+----------------------------------------------------------------------+



+----------------------------------------------------------------------+
|                                 25                                   |
| +----------------------------------------------------------------+   |
| | +--45--+                                                       |   |
| | 45     |                   layout header                       |   |
| | |      |                                                       |   |
| | +------+                       2                               |   |
| +----------------------------------------------------------------+   |
|   +--------------------------------------------------------------+   |
|   | +----------------------+   +-------------------------------+ |   |
|   | |                      |   |                               | |   |
|   | |                      |   |                               | |   |
|   | |    message box       | 2 |         text                  | |   |
|20 | |                      |   |                               | | 15|
|   | |                      |   |                               | |   |
|   | |                      |   |                               | |   |
|   | |                      |   |                               | |   |
|   | +----------------------+   +-------------------------------+ |   |
|   +--------------------------------------------------------------+   |
|                                  8                                   |
|   +--------------------------------------------------------------+   |
|   |                                                              |   |
|   22                     layout channel info                     |   |
|   |                                                              |   |
|   +--------------------------------------------------------------+   |
|                                                                      |
|                                  5                                   |
+----------------------------------------------------------------------+

*/


import messageBoxCalculator from './messageBox/index';
import {estimateTextHeight} from '../util';

/**
 * @type dimensionCalculatorFunction
 */
const calculator = (maxWidth, outer, roomMessage, boxType, forwarded) => {
  /**
   * Padding : 20+15
   * Margin : 0
   * Components : 0
   * @type {number}
   */
  const xSpace = 35;

  const dimension = messageBoxCalculator(maxWidth - xSpace, outer, roomMessage, boxType, forwarded);

  if (outer) {
    if (roomMessage.message) {
      // TODO [Amerehie] - 2017-12-23 12:00 PM - add possible padding
      dimension.height += estimateTextHeight(
        roomMessage.message,
        maxWidth - xSpace
      );
    }

    /**
     * Padding : 25+2+5
     * Margin : 8
     * Components : 45+23
     * @type {number}
     */
    const ySpace = 108;

    dimension.width += xSpace;
    dimension.height += ySpace;
  }

  return dimension;
};

export default calculator;