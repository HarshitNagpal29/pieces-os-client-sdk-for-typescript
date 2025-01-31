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
exports.SeededTrackedKeyboardEventIdentifierDescriptionPairsToJSON = exports.SeededTrackedKeyboardEventIdentifierDescriptionPairsFromJSONTyped = exports.SeededTrackedKeyboardEventIdentifierDescriptionPairsFromJSON = exports.SeededTrackedKeyboardEventIdentifierDescriptionPairsAssetsListRefreshedEnum = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
/**
* @export
* @enum {string}
*/
var SeededTrackedKeyboardEventIdentifierDescriptionPairsAssetsListRefreshedEnum;
(function (SeededTrackedKeyboardEventIdentifierDescriptionPairsAssetsListRefreshedEnum) {
    SeededTrackedKeyboardEventIdentifierDescriptionPairsAssetsListRefreshedEnum["TheAssetsListWasRefreshedThroughAKeyboardShortcut"] = "the_assets_list_was_refreshed_through_a_keyboard_shortcut";
})(SeededTrackedKeyboardEventIdentifierDescriptionPairsAssetsListRefreshedEnum || (exports.SeededTrackedKeyboardEventIdentifierDescriptionPairsAssetsListRefreshedEnum = SeededTrackedKeyboardEventIdentifierDescriptionPairsAssetsListRefreshedEnum = {}));
function SeededTrackedKeyboardEventIdentifierDescriptionPairsFromJSON(json) {
    return SeededTrackedKeyboardEventIdentifierDescriptionPairsFromJSONTyped(json, false);
}
exports.SeededTrackedKeyboardEventIdentifierDescriptionPairsFromJSON = SeededTrackedKeyboardEventIdentifierDescriptionPairsFromJSON;
function SeededTrackedKeyboardEventIdentifierDescriptionPairsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'assetsListRefreshed': !(0, runtime_1.exists)(json, 'assets_list_refreshed') ? undefined : json['assets_list_refreshed'],
    };
}
exports.SeededTrackedKeyboardEventIdentifierDescriptionPairsFromJSONTyped = SeededTrackedKeyboardEventIdentifierDescriptionPairsFromJSONTyped;
function SeededTrackedKeyboardEventIdentifierDescriptionPairsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'assets_list_refreshed': value.assetsListRefreshed,
    };
}
exports.SeededTrackedKeyboardEventIdentifierDescriptionPairsToJSON = SeededTrackedKeyboardEventIdentifierDescriptionPairsToJSON;
