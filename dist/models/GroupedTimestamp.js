"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Pieces Isomorphic OpenAPI
 * Endpoints for Assets, Formats, Users, Asset, Format, User.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupedTimestampToJSON = exports.GroupedTimestampFromJSONTyped = exports.GroupedTimestampFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function GroupedTimestampFromJSON(json) {
    return GroupedTimestampFromJSONTyped(json, false);
}
exports.GroupedTimestampFromJSON = GroupedTimestampFromJSON;
function GroupedTimestampFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'value': (new Date(json['value'])),
        'readable': !(0, runtime_1.exists)(json, 'readable') ? undefined : json['readable'],
    };
}
exports.GroupedTimestampFromJSONTyped = GroupedTimestampFromJSONTyped;
function GroupedTimestampToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'value': (value.value.toISOString()),
        'readable': value.readable,
    };
}
exports.GroupedTimestampToJSON = GroupedTimestampToJSON;
