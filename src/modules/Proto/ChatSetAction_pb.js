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
goog.exportSymbol('proto.proto.ChatSetAction', null, global);
goog.exportSymbol('proto.proto.ChatSetActionResponse', null, global);

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
proto.proto.ChatSetAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChatSetAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.ChatSetAction.displayName = 'proto.proto.ChatSetAction';
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
proto.proto.ChatSetAction.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChatSetAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChatSetAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChatSetAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && Request_pb.Request.toObject(includeInstance, f),
    roomId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    action: jspb.Message.getFieldWithDefault(msg, 3, 0),
    actionId: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.proto.ChatSetAction}
 */
proto.proto.ChatSetAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChatSetAction;
  return proto.proto.ChatSetAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChatSetAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChatSetAction}
 */
proto.proto.ChatSetAction.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRoomId(value);
      break;
    case 3:
      var value = /** @type {!proto.proto.ClientAction} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setActionId(value);
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
proto.proto.ChatSetAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChatSetAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChatSetAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChatSetAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Request_pb.Request.serializeBinaryToWriter
    );
  }
  f = message.getRoomId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getActionId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional Request request = 1;
 * @return {?proto.proto.Request}
 */
proto.proto.ChatSetAction.prototype.getRequest = function() {
  return /** @type{?proto.proto.Request} */ (
    jspb.Message.getWrapperField(this, Request_pb.Request, 1));
};


/** @param {?proto.proto.Request|undefined} value */
proto.proto.ChatSetAction.prototype.setRequest = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.ChatSetAction.prototype.clearRequest = function() {
  this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ChatSetAction.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 room_id = 2;
 * @return {number}
 */
proto.proto.ChatSetAction.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.proto.ChatSetAction.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional ClientAction action = 3;
 * @return {!proto.proto.ClientAction}
 */
proto.proto.ChatSetAction.prototype.getAction = function() {
  return /** @type {!proto.proto.ClientAction} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.proto.ClientAction} value */
proto.proto.ChatSetAction.prototype.setAction = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 action_id = 4;
 * @return {number}
 */
proto.proto.ChatSetAction.prototype.getActionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.proto.ChatSetAction.prototype.setActionId = function(value) {
  jspb.Message.setField(this, 4, value);
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
proto.proto.ChatSetActionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChatSetActionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.ChatSetActionResponse.displayName = 'proto.proto.ChatSetActionResponse';
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
proto.proto.ChatSetActionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChatSetActionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChatSetActionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChatSetActionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && Response_pb.Response.toObject(includeInstance, f),
    roomId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    action: jspb.Message.getFieldWithDefault(msg, 3, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.proto.ChatSetActionResponse}
 */
proto.proto.ChatSetActionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChatSetActionResponse;
  return proto.proto.ChatSetActionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChatSetActionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChatSetActionResponse}
 */
proto.proto.ChatSetActionResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRoomId(value);
      break;
    case 3:
      var value = /** @type {!proto.proto.ClientAction} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUserId(value);
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
proto.proto.ChatSetActionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChatSetActionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChatSetActionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChatSetActionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Response_pb.Response.serializeBinaryToWriter
    );
  }
  f = message.getRoomId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional Response response = 1;
 * @return {?proto.proto.Response}
 */
proto.proto.ChatSetActionResponse.prototype.getResponse = function() {
  return /** @type{?proto.proto.Response} */ (
    jspb.Message.getWrapperField(this, Response_pb.Response, 1));
};


/** @param {?proto.proto.Response|undefined} value */
proto.proto.ChatSetActionResponse.prototype.setResponse = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.ChatSetActionResponse.prototype.clearResponse = function() {
  this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ChatSetActionResponse.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 room_id = 2;
 * @return {number}
 */
proto.proto.ChatSetActionResponse.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.proto.ChatSetActionResponse.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional ClientAction action = 3;
 * @return {!proto.proto.ClientAction}
 */
proto.proto.ChatSetActionResponse.prototype.getAction = function() {
  return /** @type {!proto.proto.ClientAction} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.proto.ClientAction} value */
proto.proto.ChatSetActionResponse.prototype.setAction = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint64 user_id = 4;
 * @return {number}
 */
proto.proto.ChatSetActionResponse.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.proto.ChatSetActionResponse.prototype.setUserId = function(value) {
  jspb.Message.setField(this, 4, value);
};


goog.object.extend(exports, proto.proto);
