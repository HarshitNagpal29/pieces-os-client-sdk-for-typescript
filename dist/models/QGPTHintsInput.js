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
exports.QGPTHintsInputToJSON = exports.QGPTHintsInputFromJSONTyped = exports.QGPTHintsInputFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function QGPTHintsInputFromJSON(json) {
    return QGPTHintsInputFromJSONTyped(json, false);
}
exports.QGPTHintsInputFromJSON = QGPTHintsInputFromJSON;
function QGPTHintsInputFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'query': !(0, runtime_1.exists)(json, 'query') ? undefined : json['query'],
        'answer': !(0, runtime_1.exists)(json, 'answer') ? undefined : (0, index_1.QGPTQuestionAnswerFromJSON)(json['answer']),
        'relevant': (0, index_1.RelevantQGPTSeedsFromJSON)(json['relevant']),
        'application': !(0, runtime_1.exists)(json, 'application') ? undefined : json['application'],
        'model': !(0, runtime_1.exists)(json, 'model') ? undefined : json['model'],
    };
}
exports.QGPTHintsInputFromJSONTyped = QGPTHintsInputFromJSONTyped;
function QGPTHintsInputToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'query': value.query,
        'answer': (0, index_1.QGPTQuestionAnswerToJSON)(value.answer),
        'relevant': (0, index_1.RelevantQGPTSeedsToJSON)(value.relevant),
        'application': value.application,
        'model': value.model,
    };
}
exports.QGPTHintsInputToJSON = QGPTHintsInputToJSON;
