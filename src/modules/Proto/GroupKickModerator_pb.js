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
goog.exportSymbol('proto.proto.GroupKickModerator', null, global);
goog.exportSymbol('proto.proto.GroupKickModeratorResponse', null, global);

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
proto.proto.GroupKickModerator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.GroupKickModerator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.GroupKickModerator.displayName = 'proto.proto.GroupKickModerator';
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
proto.proto.GroupKickModerator.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GroupKickModerator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GroupKickModerator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GroupKickModerator.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && Request_pb.Request.toObject(includeInstance, f),
    roomId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    memberId: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.proto.GroupKickModerator}
 */
proto.proto.GroupKickModerator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GroupKickModerator;
  return proto.proto.GroupKickModerator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GroupKickModerator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GroupKickModerator}
 */
proto.proto.GroupKickModerator.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMemberId(value);
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
proto.proto.GroupKickModerator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GroupKickModerator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GroupKickModerator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GroupKickModerator.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getMemberId();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional Request request = 1;
 * @return {?proto.proto.Request}
 */
proto.proto.GroupKickModerator.prototype.getRequest = function() {
  return /** @type{?proto.proto.Request} */ (
    jspb.Message.getWrapperField(this, Request_pb.Request, 1));
};


/** @param {?proto.proto.Request|undefined} value */
proto.proto.GroupKickModerator.prototype.setRequest = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.GroupKickModerator.prototype.clearRequest = function() {
  this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.GroupKickModerator.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 room_id = 2;
 * @return {number}
 */
proto.proto.GroupKickModerator.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.proto.GroupKickModerator.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint64 member_id = 3;
 * @return {number}
 */
proto.proto.GroupKickModerator.prototype.getMemberId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.proto.GroupKickModerator.prototype.setMemberId = function(value) {
  jspb.Message.setField(this, 3, value);
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
proto.proto.GroupKickModeratorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.GroupKickModeratorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.GroupKickModeratorResponse.displayName = 'proto.proto.GroupKickModeratorResponse';
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
proto.proto.GroupKickModeratorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.GroupKickModeratorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.GroupKickModeratorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GroupKickModeratorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: (f = msg.getResponse()) && Response_pb.Response.toObject(includeInstance, f),
    roomId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    memberId: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.proto.GroupKickModeratorResponse}
 */
proto.proto.GroupKickModeratorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.GroupKickModeratorResponse;
  return proto.proto.GroupKickModeratorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.GroupKickModeratorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.GroupKickModeratorResponse}
 */
proto.proto.GroupKickModeratorResponse.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMemberId(value);
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
proto.proto.GroupKickModeratorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.GroupKickModeratorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.GroupKickModeratorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.GroupKickModeratorResponse.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getMemberId();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional Response response = 1;
 * @return {?proto.proto.Response}
 */
proto.proto.GroupKickModeratorResponse.prototype.getResponse = function() {
  return /** @type{?proto.proto.Response} */ (
    jspb.Message.getWrapperField(this, Response_pb.Response, 1));
};


/** @param {?proto.proto.Response|undefined} value */
proto.proto.GroupKickModeratorResponse.prototype.setResponse = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.proto.GroupKickModeratorResponse.prototype.clearResponse = function() {
  this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.GroupKickModeratorResponse.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 room_id = 2;
 * @return {number}
 */
proto.proto.GroupKickModeratorResponse.prototype.getRoomId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.proto.GroupKickModeratorResponse.prototype.setRoomId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint64 member_id = 3;
 * @return {number}
 */
proto.proto.GroupKickModeratorResponse.prototype.getMemberId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.proto.GroupKickModeratorResponse.prototype.setMemberId = function(value) {
  jspb.Message.setField(this, 3, value);
};


goog.object.extend(exports, proto.proto);
