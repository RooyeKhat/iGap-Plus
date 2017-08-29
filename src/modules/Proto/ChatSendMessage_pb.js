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
goog.exportSymbol('proto.proto.ChatSendMessage', null, global);
goog.exportSymbol('proto.proto.ChatSendMessageResponse', null, global);

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
proto.proto.ChatSendMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChatSendMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.ChatSendMessage.displayName = 'proto.proto.ChatSendMessage';
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
proto.proto.ChatSendMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChatSendMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChatSendMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChatSendMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && Request_pb.Request.toObject(includeInstance, f),
    messageType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    roomId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    message: jspb.Message.getFieldWithDefault(msg, 4, ""),
    attachment: jspb.Message.getFieldWithDefault(msg, 5, ""),
    location: (f = msg.getLocation()) && Global_pb.RoomMessageLocation.toObject(includeInstance, f),
    contact: (f = msg.getContact()) && Global_pb.RoomMessageContact.toObject(includeInstance, f),
    replyTo: jspb.Message.getFieldWithDefault(msg, 8, 0),
    forwardFrom: (f = msg.getForwardFrom()) && Global_pb.RoomMessageForwardFrom.toObject(includeInstance, f)
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
 * @return {!proto.proto.ChatSendMessage}
 */
proto.proto.ChatSendMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChatSendMessage;
  return proto.proto.ChatSendMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChatSendMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChatSendMessage}
 */
proto.proto.ChatSendMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.proto.RoomMessageType} */ (reader.readEnum());
      msg.setMessageType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRoomId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttachment(value);
      break;
    case 6:
      var value = new Global_pb.RoomMessageLocation;
      reader.readMessage(value,Global_pb.RoomMessageLocation.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 7:
      var value = new Global_pb.RoomMessageContact;
      reader.readMessage(value,Global_pb.RoomMessageContact.deserializeBinaryFromReader);
      msg.setContact(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setReplyTo(value);
      break;
    case 9:
      var value = new Global_pb.RoomMessageForwardFrom;
      reader.readMessage(value,Global_pb.RoomMessageForwardFrom.deserializeBinaryFromReader);
      msg.setForwardFrom(value);
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
proto.proto.ChatSendMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChatSendMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChatSendMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChatSendMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      Request_pb.Request.serializeBinaryToWriter
    );
  }
  f = message.getMessageType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getRoomId();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAttachment();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      Global_pb.RoomMessageLocation.serializeBinaryToWriter
    );
  }
  f = message.getContact();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      Global_pb.RoomMessageContact.serializeBinaryToWriter
    );
  }
  f = message.getReplyTo();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getForwardFrom();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      Global_pb.RoomMessageForwardFrom.serializeBinaryToWriter
    );
  }
};


/**
 * optional Request request = 1;
 * @return {?proto.proto.Request}
 */
proto.proto.ChatSendMessage.prototype.getRequest = function() {
  return /** @type{?proto.proto.Request} */ (
    jspb.Message.getWrapperField(this, Request_pb.Request, 1));
};


/** @param {?proto.proto.Request|undefined} value */
proto.proto.ChatSendMessage.prototype.setRequest = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.ChatSendMessage.prototype.clearRequest = function() {
  this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ChatSendMessage.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RoomMessageType message_type = 2;
 * @return {!proto.proto.RoomMessageType}
 */
proto.proto.ChatSendMessage.prototype.getMessageType = function() {
  return /** @type {!proto.proto.RoomMessageType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.proto.RoomMessageType} value */
proto.proto.ChatSendMessage.prototype.setMessageType = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint64 room_id = 3;
 * @return {number}
 */
proto.proto.ChatSendMessage.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.proto.ChatSendMessage.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.proto.ChatSendMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.proto.ChatSendMessage.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string attachment = 5;
 * @return {string}
 */
proto.proto.ChatSendMessage.prototype.getAttachment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.proto.ChatSendMessage.prototype.setAttachment = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional RoomMessageLocation location = 6;
 * @return {?proto.proto.RoomMessageLocation}
 */
proto.proto.ChatSendMessage.prototype.getLocation = function() {
  return /** @type{?proto.proto.RoomMessageLocation} */ (
    jspb.Message.getWrapperField(this, Global_pb.RoomMessageLocation, 6));
};


/** @param {?proto.proto.RoomMessageLocation|undefined} value */
proto.proto.ChatSendMessage.prototype.setLocation = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.proto.ChatSendMessage.prototype.clearLocation = function() {
  this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ChatSendMessage.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional RoomMessageContact contact = 7;
 * @return {?proto.proto.RoomMessageContact}
 */
proto.proto.ChatSendMessage.prototype.getContact = function() {
  return /** @type{?proto.proto.RoomMessageContact} */ (
    jspb.Message.getWrapperField(this, Global_pb.RoomMessageContact, 7));
};


/** @param {?proto.proto.RoomMessageContact|undefined} value */
proto.proto.ChatSendMessage.prototype.setContact = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.proto.ChatSendMessage.prototype.clearContact = function() {
  this.setContact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ChatSendMessage.prototype.hasContact = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint64 reply_to = 8;
 * @return {number}
 */
proto.proto.ChatSendMessage.prototype.getReplyTo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.proto.ChatSendMessage.prototype.setReplyTo = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional RoomMessageForwardFrom forward_from = 9;
 * @return {?proto.proto.RoomMessageForwardFrom}
 */
proto.proto.ChatSendMessage.prototype.getForwardFrom = function() {
  return /** @type{?proto.proto.RoomMessageForwardFrom} */ (
    jspb.Message.getWrapperField(this, Global_pb.RoomMessageForwardFrom, 9));
};


/** @param {?proto.proto.RoomMessageForwardFrom|undefined} value */
proto.proto.ChatSendMessage.prototype.setForwardFrom = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.proto.ChatSendMessage.prototype.clearForwardFrom = function() {
  this.setForwardFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ChatSendMessage.prototype.hasForwardFrom = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.proto.ChatSendMessageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.ChatSendMessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.ChatSendMessageResponse.displayName = 'proto.proto.ChatSendMessageResponse';
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
proto.proto.ChatSendMessageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.ChatSendMessageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.ChatSendMessageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChatSendMessageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && Response_pb.Response.toObject(includeInstance, f),
    roomId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    roomMessage: (f = msg.getRoomMessage()) && Global_pb.RoomMessage.toObject(includeInstance, f)
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
 * @return {!proto.proto.ChatSendMessageResponse}
 */
proto.proto.ChatSendMessageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.ChatSendMessageResponse;
  return proto.proto.ChatSendMessageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.ChatSendMessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.ChatSendMessageResponse}
 */
proto.proto.ChatSendMessageResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new Global_pb.RoomMessage;
      reader.readMessage(value,Global_pb.RoomMessage.deserializeBinaryFromReader);
      msg.setRoomMessage(value);
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
proto.proto.ChatSendMessageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.ChatSendMessageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.ChatSendMessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.ChatSendMessageResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getRoomMessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      Global_pb.RoomMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional Response response = 1;
 * @return {?proto.proto.Response}
 */
proto.proto.ChatSendMessageResponse.prototype.getResponse = function() {
  return /** @type{?proto.proto.Response} */ (
    jspb.Message.getWrapperField(this, Response_pb.Response, 1));
};


/** @param {?proto.proto.Response|undefined} value */
proto.proto.ChatSendMessageResponse.prototype.setResponse = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.ChatSendMessageResponse.prototype.clearResponse = function() {
  this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ChatSendMessageResponse.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 room_id = 2;
 * @return {number}
 */
proto.proto.ChatSendMessageResponse.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.proto.ChatSendMessageResponse.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional RoomMessage room_message = 3;
 * @return {?proto.proto.RoomMessage}
 */
proto.proto.ChatSendMessageResponse.prototype.getRoomMessage = function() {
  return /** @type{?proto.proto.RoomMessage} */ (
    jspb.Message.getWrapperField(this, Global_pb.RoomMessage, 3));
};


/** @param {?proto.proto.RoomMessage|undefined} value */
proto.proto.ChatSendMessageResponse.prototype.setRoomMessage = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.proto.ChatSendMessageResponse.prototype.clearRoomMessage = function() {
  this.setRoomMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.ChatSendMessageResponse.prototype.hasRoomMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.proto);
