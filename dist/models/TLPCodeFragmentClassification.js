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
exports.TLPCodeFragmentClassificationToJSON = exports.TLPCodeFragmentClassificationFromJSONTyped = exports.TLPCodeFragmentClassificationFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function TLPCodeFragmentClassificationFromJSON(json) {
    return TLPCodeFragmentClassificationFromJSONTyped(json, false);
}
exports.TLPCodeFragmentClassificationFromJSON = TLPCodeFragmentClassificationFromJSON;
function TLPCodeFragmentClassificationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'asset': json['asset'],
        'model': json['model'],
        'created': json['created'],
        'classification': json['classification'],
        'probability': json['probability'],
        'context': json['context'],
        'distribution': !(0, runtime_1.exists)(json, 'distribution') ? undefined : json['distribution'],
        'metadata': !(0, runtime_1.exists)(json, 'metadata') ? undefined : (0, index_1.TLPCodeFragmentClassificationMetadataFromJSON)(json['metadata']),
        'user': json['user'],
        'latency': !(0, runtime_1.exists)(json, 'latency') ? undefined : json['latency'],
        'system': !(0, runtime_1.exists)(json, 'system') ? undefined : (0, index_1.SystemExecutionInformationFromJSON)(json['system']),
    };
}
exports.TLPCodeFragmentClassificationFromJSONTyped = TLPCodeFragmentClassificationFromJSONTyped;
function TLPCodeFragmentClassificationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'asset': value.asset,
        'model': value.model,
        'created': value.created,
        'classification': value.classification,
        'probability': value.probability,
        'context': value.context,
        'distribution': value.distribution,
        'metadata': (0, index_1.TLPCodeFragmentClassificationMetadataToJSON)(value.metadata),
        'user': value.user,
        'latency': value.latency,
        'system': (0, index_1.SystemExecutionInformationToJSON)(value.system),
    };
}
exports.TLPCodeFragmentClassificationToJSON = TLPCodeFragmentClassificationToJSON;
