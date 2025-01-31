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
exports.PersonTypeToJSON = exports.PersonTypeFromJSONTyped = exports.PersonTypeFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function PersonTypeFromJSON(json) {
    return PersonTypeFromJSONTyped(json, false);
}
exports.PersonTypeFromJSON = PersonTypeFromJSON;
function PersonTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'basic': !(0, runtime_1.exists)(json, 'basic') ? undefined : (0, index_1.PersonBasicTypeFromJSON)(json['basic']),
        'platform': !(0, runtime_1.exists)(json, 'platform') ? undefined : (0, index_1.UserProfileFromJSON)(json['platform']),
    };
}
exports.PersonTypeFromJSONTyped = PersonTypeFromJSONTyped;
function PersonTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'basic': (0, index_1.PersonBasicTypeToJSON)(value.basic),
        'platform': (0, index_1.UserProfileToJSON)(value.platform),
    };
}
exports.PersonTypeToJSON = PersonTypeToJSON;
