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
exports.SeededAssetsRecommendationToJSON = exports.SeededAssetsRecommendationFromJSONTyped = exports.SeededAssetsRecommendationFromJSON = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
function SeededAssetsRecommendationFromJSON(json) {
    return SeededAssetsRecommendationFromJSONTyped(json, false);
}
exports.SeededAssetsRecommendationFromJSON = SeededAssetsRecommendationFromJSON;
function SeededAssetsRecommendationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'assets': (0, index_1.AssetsFromJSON)(json['assets']),
        'interactions': (0, index_1.InteractedAssetsFromJSON)(json['interactions']),
    };
}
exports.SeededAssetsRecommendationFromJSONTyped = SeededAssetsRecommendationFromJSONTyped;
function SeededAssetsRecommendationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'assets': (0, index_1.AssetsToJSON)(value.assets),
        'interactions': (0, index_1.InteractedAssetsToJSON)(value.interactions),
    };
}
exports.SeededAssetsRecommendationToJSON = SeededAssetsRecommendationToJSON;
