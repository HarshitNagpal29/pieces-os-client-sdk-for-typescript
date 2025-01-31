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
exports.PreviewToJSON = exports.PreviewFromJSONTyped = exports.PreviewFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function PreviewFromJSON(json) {
    return PreviewFromJSONTyped(json, false);
}
exports.PreviewFromJSON = PreviewFromJSON;
function PreviewFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'base': (0, index_1.ReferencedFormatFromJSON)(json['base']),
        'overlay': !(0, runtime_1.exists)(json, 'overlay') ? undefined : (0, index_1.ReferencedFormatFromJSON)(json['overlay']),
    };
}
exports.PreviewFromJSONTyped = PreviewFromJSONTyped;
function PreviewToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'base': (0, index_1.ReferencedFormatToJSON)(value.base),
        'overlay': (0, index_1.ReferencedFormatToJSON)(value.overlay),
    };
}
exports.PreviewToJSON = PreviewToJSON;
