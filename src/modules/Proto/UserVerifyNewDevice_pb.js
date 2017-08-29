/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var Request_pb = require('./Request_pb.js');
var Response_pb = require('./Response_pb.js');
var Global_pb = require('./Global_pb.js');
goog.exportSymbol('proto.proto.UserVerifyNewDevice', null, global);
goog.exportSymbol('proto.proto.UserVerifyNewDeviceResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.UserVerifyNewDevice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.UserVerifyNewDevice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.UserVerifyNewDevice.displayName = 'proto.proto.UserVerifyNewDevice';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.UserVerifyNewDevice.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.UserVerifyNewDevice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.UserVerifyNewDevice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.UserVerifyNewDevice.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && Request_pb.Request.toObject(includeInstance, f),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.UserVerifyNewDevice}
 */
proto.proto.UserVerifyNewDevice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.UserVerifyNewDevice;
  return proto.proto.UserVerifyNewDevice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.UserVerifyNewDevice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.UserVerifyNewDevice}
 */
proto.proto.UserVerifyNewDevice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Request_pb.Request;
      reader.readMessage(value,Request_pb.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.UserVerifyNewDevice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.UserVerifyNewDevice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.UserVerifyNewDevice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.UserVerifyNewDevice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Request_pb.Request.serializeBinaryToWriter
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Request request = 1;
 * @return {?proto.proto.Request}
 */
proto.proto.UserVerifyNewDevice.prototype.getRequest = function() {
  return /** @type{?proto.proto.Request} */ (
    jspb.Message.getWrapperField(this, Request_pb.Request, 1));
};


/** @param {?proto.proto.Request|undefined} value */
proto.proto.UserVerifyNewDevice.prototype.setRequest = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.UserVerifyNewDevice.prototype.clearRequest = function() {
  this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.UserVerifyNewDevice.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.proto.UserVerifyNewDevice.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.proto.UserVerifyNewDevice.prototype.setToken = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.UserVerifyNewDeviceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.UserVerifyNewDeviceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.UserVerifyNewDeviceResponse.displayName = 'proto.proto.UserVerifyNewDeviceResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.UserVerifyNewDeviceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.UserVerifyNewDeviceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.UserVerifyNewDeviceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && Response_pb.Response.toObject(includeInstance, f),
    appName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    appId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    appBuildVersion: jspb.Message.getFieldWithDefault(msg, 4, 0),
    appVersion: jspb.Message.getFieldWithDefault(msg, 5, ""),
    platform: jspb.Message.getFieldWithDefault(msg, 6, 0),
    platformVersion: jspb.Message.getFieldWithDefault(msg, 7, ""),
    device: jspb.Message.getFieldWithDefault(msg, 8, 0),
    deviceName: jspb.Message.getFieldWithDefault(msg, 9, ""),
    twoStepVerification: jspb.Message.getFieldWithDefault(msg, 10, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.UserVerifyNewDeviceResponse}
 */
proto.proto.UserVerifyNewDeviceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.UserVerifyNewDeviceResponse;
  return proto.proto.UserVerifyNewDeviceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.UserVerifyNewDeviceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.UserVerifyNewDeviceResponse}
 */
proto.proto.UserVerifyNewDeviceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new Response_pb.Response;
      reader.readMessage(value,Response_pb.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAppBuildVersion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppVersion(value);
      break;
    case 6:
      var value = /** @type {!proto.proto.Platform} */ (reader.readEnum());
      msg.setPlatform(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatformVersion(value);
      break;
    case 8:
      var value = /** @type {!proto.proto.Device} */ (reader.readEnum());
      msg.setDevice(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceName(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTwoStepVerification(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.UserVerifyNewDeviceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.UserVerifyNewDeviceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.UserVerifyNewDeviceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Response_pb.Response.serializeBinaryToWriter
    );
  }
  f = message.getAppName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAppId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getAppBuildVersion();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getAppVersion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPlatform();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getPlatformVersion();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDevice();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getDeviceName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTwoStepVerification();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional Response response = 1;
 * @return {?proto.proto.Response}
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.getResponse = function() {
  return /** @type{?proto.proto.Response} */ (
    jspb.Message.getWrapperField(this, Response_pb.Response, 1));
};


/** @param {?proto.proto.Response|undefined} value */
proto.proto.UserVerifyNewDeviceResponse.prototype.setResponse = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.UserVerifyNewDeviceResponse.prototype.clearResponse = function() {
  this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string app_name = 2;
 * @return {string}
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.getAppName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.proto.UserVerifyNewDeviceResponse.prototype.setAppName = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 app_id = 3;
 * @return {number}
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.getAppId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.proto.UserVerifyNewDeviceResponse.prototype.setAppId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 app_build_version = 4;
 * @return {number}
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.getAppBuildVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.proto.UserVerifyNewDeviceResponse.prototype.setAppBuildVersion = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string app_version = 5;
 * @return {string}
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.getAppVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.proto.UserVerifyNewDeviceResponse.prototype.setAppVersion = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional Platform platform = 6;
 * @return {!proto.proto.Platform}
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.getPlatform = function() {
  return /** @type {!proto.proto.Platform} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.proto.Platform} value */
proto.proto.UserVerifyNewDeviceResponse.prototype.setPlatform = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional string platform_version = 7;
 * @return {string}
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.getPlatformVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.proto.UserVerifyNewDeviceResponse.prototype.setPlatformVersion = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional Device device = 8;
 * @return {!proto.proto.Device}
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.getDevice = function() {
  return /** @type {!proto.proto.Device} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {!proto.proto.Device} value */
proto.proto.UserVerifyNewDeviceResponse.prototype.setDevice = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional string device_name = 9;
 * @return {string}
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.getDeviceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.proto.UserVerifyNewDeviceResponse.prototype.setDeviceName = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * optional bool two_step_verification = 10;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.proto.UserVerifyNewDeviceResponse.prototype.getTwoStepVerification = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 10, false));
};


/** @param {boolean} value */
proto.proto.UserVerifyNewDeviceResponse.prototype.setTwoStepVerification = function(value) {
  jspb.Message.setField(this, 10, value);
};


goog.object.extend(exports, proto.proto);
