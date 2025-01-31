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
exports.FlattenedImageAnalysisToJSON = exports.FlattenedImageAnalysisFromJSONTyped = exports.FlattenedImageAnalysisFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function FlattenedImageAnalysisFromJSON(json) {
    return FlattenedImageAnalysisFromJSONTyped(json, false);
}
exports.FlattenedImageAnalysisFromJSON = FlattenedImageAnalysisFromJSON;
function FlattenedImageAnalysisFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'id': json['id'],
        'ocr': !(0, runtime_1.exists)(json, 'ocr') ? undefined : (0, index_1.FlattenedOCRAnalysisFromJSON)(json['ocr']),
        'analysis': json['analysis'],
    };
}
exports.FlattenedImageAnalysisFromJSONTyped = FlattenedImageAnalysisFromJSONTyped;
function FlattenedImageAnalysisToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'id': value.id,
        'ocr': (0, index_1.FlattenedOCRAnalysisToJSON)(value.ocr),
        'analysis': value.analysis,
    };
}
exports.FlattenedImageAnalysisToJSON = FlattenedImageAnalysisToJSON;
