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
exports.TrackedAssetEventIdentifierDescriptionPairsToJSON = exports.TrackedAssetEventIdentifierDescriptionPairsFromJSONTyped = exports.TrackedAssetEventIdentifierDescriptionPairsFromJSON = exports.TrackedAssetEventIdentifierDescriptionPairsAssetAnchorUpdatedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetAnchorDeletedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetAnchorAddedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetHintUpdatedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetHintDeletedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetHintAddedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetAnnotationUpdatedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetAnnotationDeletedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetAnnotationAddedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsActivityAssetReferencedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetReferencedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsSearchedAssetReferencedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsSuggestedAssetReferencedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetSensitiveDeletedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetSensitiveAddedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetPersonDeletedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetPersonAddedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetLinkRevokedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetFormatUpdatedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetFormatValueEditedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetUpdatedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetTagDeletedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetLinkDeletedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetLinkGeneratedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetLinkAddedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetTagAddedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetCreationFailedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetFormatSpecificClassificationUpdatedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetFormatGenericClassificationUpdatedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetNameUpdatedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetDescriptionUpdatedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetDeletedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetFormatDownloadedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetFormatCopiedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetViewedEnum = exports.TrackedAssetEventIdentifierDescriptionPairsAssetCreatedEnum = void 0;
const runtime_1 = require("../runtime");
const index_1 = require("./index");
/**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetCreatedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetCreatedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetCreatedEnum["AnAssetWasCreated"] = "an_asset_was_created";
})(TrackedAssetEventIdentifierDescriptionPairsAssetCreatedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetCreatedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetCreatedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetViewedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetViewedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetViewedEnum["AnAssetWasViewed"] = "an_asset_was_viewed";
})(TrackedAssetEventIdentifierDescriptionPairsAssetViewedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetViewedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetViewedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetFormatCopiedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetFormatCopiedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetFormatCopiedEnum["AnAssetPreviewFormatWasCopied"] = "an_asset_preview_format_was_copied";
})(TrackedAssetEventIdentifierDescriptionPairsAssetFormatCopiedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetFormatCopiedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetFormatCopiedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetFormatDownloadedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetFormatDownloadedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetFormatDownloadedEnum["AnAssetFormatWasDownloaded"] = "an_asset_format_was_downloaded";
})(TrackedAssetEventIdentifierDescriptionPairsAssetFormatDownloadedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetFormatDownloadedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetFormatDownloadedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetDeletedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetDeletedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetDeletedEnum["AnAssetWasDeleted"] = "an_asset_was_deleted";
})(TrackedAssetEventIdentifierDescriptionPairsAssetDeletedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetDeletedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetDeletedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetDescriptionUpdatedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetDescriptionUpdatedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetDescriptionUpdatedEnum["AnAssetWasRedescribedByTheUser"] = "an_asset_was_redescribed_by_the_user";
})(TrackedAssetEventIdentifierDescriptionPairsAssetDescriptionUpdatedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetDescriptionUpdatedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetDescriptionUpdatedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetNameUpdatedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetNameUpdatedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetNameUpdatedEnum["AnAssetWasRenamedByTheUser"] = "an_asset_was_renamed_by_the_user";
})(TrackedAssetEventIdentifierDescriptionPairsAssetNameUpdatedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetNameUpdatedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetNameUpdatedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetFormatGenericClassificationUpdatedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetFormatGenericClassificationUpdatedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetFormatGenericClassificationUpdatedEnum["AGenericClassificationWasChangedOnAFormatWithinAnAsset"] = "a_generic_classification_was_changed_on_a_format_within_an_asset";
})(TrackedAssetEventIdentifierDescriptionPairsAssetFormatGenericClassificationUpdatedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetFormatGenericClassificationUpdatedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetFormatGenericClassificationUpdatedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetFormatSpecificClassificationUpdatedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetFormatSpecificClassificationUpdatedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetFormatSpecificClassificationUpdatedEnum["ASpecificClassificationWasChangedOnAFormatWithinAnAsset"] = "a_specific_classification_was_changed_on_a_format_within_an_asset";
})(TrackedAssetEventIdentifierDescriptionPairsAssetFormatSpecificClassificationUpdatedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetFormatSpecificClassificationUpdatedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetFormatSpecificClassificationUpdatedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetCreationFailedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetCreationFailedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetCreationFailedEnum["AnAssetFailedToBeCreated"] = "an_asset_failed_to_be_created";
})(TrackedAssetEventIdentifierDescriptionPairsAssetCreationFailedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetCreationFailedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetCreationFailedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetTagAddedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetTagAddedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetTagAddedEnum["ATagWasAddedByTheUser"] = "a_tag_was_added_by_the_user";
})(TrackedAssetEventIdentifierDescriptionPairsAssetTagAddedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetTagAddedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetTagAddedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetLinkAddedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetLinkAddedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetLinkAddedEnum["ALinkWasAddedByTheUser"] = "a_link_was_added_by_the_user";
})(TrackedAssetEventIdentifierDescriptionPairsAssetLinkAddedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetLinkAddedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetLinkAddedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetLinkGeneratedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetLinkGeneratedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetLinkGeneratedEnum["AnAssetLinkWasGenerated"] = "an_asset_link_was_generated";
})(TrackedAssetEventIdentifierDescriptionPairsAssetLinkGeneratedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetLinkGeneratedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetLinkGeneratedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetLinkDeletedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetLinkDeletedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetLinkDeletedEnum["ALinkWasDeletedByTheUser"] = "a_link_was_deleted_by_the_user";
})(TrackedAssetEventIdentifierDescriptionPairsAssetLinkDeletedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetLinkDeletedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetLinkDeletedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetTagDeletedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetTagDeletedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetTagDeletedEnum["ATagWasDeletedByTheUser"] = "a_tag_was_deleted_by_the_user";
})(TrackedAssetEventIdentifierDescriptionPairsAssetTagDeletedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetTagDeletedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetTagDeletedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetUpdatedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetUpdatedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetUpdatedEnum["AnAssetWasUpdated"] = "an_asset_was_updated";
})(TrackedAssetEventIdentifierDescriptionPairsAssetUpdatedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetUpdatedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetUpdatedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetFormatValueEditedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetFormatValueEditedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetFormatValueEditedEnum["ASpecificFormatValueWasEditedOnAnAsset"] = "a_specific_format_value_was_edited_on_an_asset";
})(TrackedAssetEventIdentifierDescriptionPairsAssetFormatValueEditedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetFormatValueEditedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetFormatValueEditedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetFormatUpdatedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetFormatUpdatedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetFormatUpdatedEnum["ASpecificFormatWasUpdatedOnAnAsset"] = "a_specific_format_was_updated_on_an_asset";
})(TrackedAssetEventIdentifierDescriptionPairsAssetFormatUpdatedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetFormatUpdatedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetFormatUpdatedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetLinkRevokedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetLinkRevokedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetLinkRevokedEnum["AnAssetLinkWasRevoked"] = "an_asset_link_was_revoked";
})(TrackedAssetEventIdentifierDescriptionPairsAssetLinkRevokedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetLinkRevokedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetLinkRevokedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetPersonAddedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetPersonAddedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetPersonAddedEnum["APersonWasAddedByTheUser"] = "a_person_was_added_by_the_user";
})(TrackedAssetEventIdentifierDescriptionPairsAssetPersonAddedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetPersonAddedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetPersonAddedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetPersonDeletedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetPersonDeletedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetPersonDeletedEnum["APersonWasDeletedByTheUser"] = "a_person_was_deleted_by_the_user";
})(TrackedAssetEventIdentifierDescriptionPairsAssetPersonDeletedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetPersonDeletedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetPersonDeletedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetSensitiveAddedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetSensitiveAddedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetSensitiveAddedEnum["ASensitiveWasAddedByTheUser"] = "a_sensitive_was_added_by_the_user";
})(TrackedAssetEventIdentifierDescriptionPairsAssetSensitiveAddedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetSensitiveAddedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetSensitiveAddedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetSensitiveDeletedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetSensitiveDeletedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetSensitiveDeletedEnum["ASensitiveWasDeletedByTheUser"] = "a_sensitive_was_deleted_by_the_user";
})(TrackedAssetEventIdentifierDescriptionPairsAssetSensitiveDeletedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetSensitiveDeletedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetSensitiveDeletedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsSuggestedAssetReferencedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsSuggestedAssetReferencedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsSuggestedAssetReferencedEnum["ASuggestedAssetWasReferencedByTheUser"] = "a_suggested_asset_was_referenced_by_the_user";
})(TrackedAssetEventIdentifierDescriptionPairsSuggestedAssetReferencedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsSuggestedAssetReferencedEnum = TrackedAssetEventIdentifierDescriptionPairsSuggestedAssetReferencedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsSearchedAssetReferencedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsSearchedAssetReferencedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsSearchedAssetReferencedEnum["ASearchedAssetWasReferencedByTheUser"] = "a_searched_asset_was_referenced_by_the_user";
})(TrackedAssetEventIdentifierDescriptionPairsSearchedAssetReferencedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsSearchedAssetReferencedEnum = TrackedAssetEventIdentifierDescriptionPairsSearchedAssetReferencedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetReferencedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetReferencedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetReferencedEnum["AnAssetWasReferencedByTheUser"] = "an_asset_was_referenced_by_the_user";
})(TrackedAssetEventIdentifierDescriptionPairsAssetReferencedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetReferencedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetReferencedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsActivityAssetReferencedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsActivityAssetReferencedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsActivityAssetReferencedEnum["AnActivityAssetWasReferencedByTheUser"] = "an_activity_asset_was_referenced_by_the_user";
})(TrackedAssetEventIdentifierDescriptionPairsActivityAssetReferencedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsActivityAssetReferencedEnum = TrackedAssetEventIdentifierDescriptionPairsActivityAssetReferencedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetAnnotationAddedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetAnnotationAddedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetAnnotationAddedEnum["AnAnnotationWasAddedByTheUser"] = "an_annotation_was_added_by_the_user";
})(TrackedAssetEventIdentifierDescriptionPairsAssetAnnotationAddedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetAnnotationAddedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetAnnotationAddedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetAnnotationDeletedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetAnnotationDeletedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetAnnotationDeletedEnum["AnAnnotationWasDeletedByTheUser"] = "an_annotation_was_deleted_by_the_user";
})(TrackedAssetEventIdentifierDescriptionPairsAssetAnnotationDeletedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetAnnotationDeletedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetAnnotationDeletedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetAnnotationUpdatedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetAnnotationUpdatedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetAnnotationUpdatedEnum["AnAnnotationWasUpdatedByTheUser"] = "an_annotation_was_updated_by_the_user";
})(TrackedAssetEventIdentifierDescriptionPairsAssetAnnotationUpdatedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetAnnotationUpdatedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetAnnotationUpdatedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetHintAddedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetHintAddedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetHintAddedEnum["AHintWasAddedByTheUser"] = "a_hint_was_added_by_the_user";
})(TrackedAssetEventIdentifierDescriptionPairsAssetHintAddedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetHintAddedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetHintAddedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetHintDeletedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetHintDeletedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetHintDeletedEnum["AHintWasDeletedByTheUser"] = "a_hint_was_deleted_by_the_user";
})(TrackedAssetEventIdentifierDescriptionPairsAssetHintDeletedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetHintDeletedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetHintDeletedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetHintUpdatedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetHintUpdatedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetHintUpdatedEnum["AHintWasUpdatedByTheUser"] = "a_hint_was_updated_by_the_user";
})(TrackedAssetEventIdentifierDescriptionPairsAssetHintUpdatedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetHintUpdatedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetHintUpdatedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetAnchorAddedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetAnchorAddedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetAnchorAddedEnum["AAnchorWasAddedByTheUser"] = "a_anchor_was_added_by_the_user";
})(TrackedAssetEventIdentifierDescriptionPairsAssetAnchorAddedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetAnchorAddedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetAnchorAddedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetAnchorDeletedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetAnchorDeletedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetAnchorDeletedEnum["AAnchorWasDeletedByTheUser"] = "a_anchor_was_deleted_by_the_user";
})(TrackedAssetEventIdentifierDescriptionPairsAssetAnchorDeletedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetAnchorDeletedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetAnchorDeletedEnum = {})); /**
* @export
* @enum {string}
*/
var TrackedAssetEventIdentifierDescriptionPairsAssetAnchorUpdatedEnum;
(function (TrackedAssetEventIdentifierDescriptionPairsAssetAnchorUpdatedEnum) {
    TrackedAssetEventIdentifierDescriptionPairsAssetAnchorUpdatedEnum["AAnchorWasUpdatedByTheUser"] = "a_anchor_was_updated_by_the_user";
})(TrackedAssetEventIdentifierDescriptionPairsAssetAnchorUpdatedEnum || (exports.TrackedAssetEventIdentifierDescriptionPairsAssetAnchorUpdatedEnum = TrackedAssetEventIdentifierDescriptionPairsAssetAnchorUpdatedEnum = {}));
function TrackedAssetEventIdentifierDescriptionPairsFromJSON(json) {
    return TrackedAssetEventIdentifierDescriptionPairsFromJSONTyped(json, false);
}
exports.TrackedAssetEventIdentifierDescriptionPairsFromJSON = TrackedAssetEventIdentifierDescriptionPairsFromJSON;
function TrackedAssetEventIdentifierDescriptionPairsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, index_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'assetCreated': !(0, runtime_1.exists)(json, 'asset_created') ? undefined : json['asset_created'],
        'assetViewed': !(0, runtime_1.exists)(json, 'asset_viewed') ? undefined : json['asset_viewed'],
        'assetFormatCopied': !(0, runtime_1.exists)(json, 'asset_format_copied') ? undefined : json['asset_format_copied'],
        'assetFormatDownloaded': !(0, runtime_1.exists)(json, 'asset_format_downloaded') ? undefined : json['asset_format_downloaded'],
        'assetDeleted': !(0, runtime_1.exists)(json, 'asset_deleted') ? undefined : json['asset_deleted'],
        'assetDescriptionUpdated': !(0, runtime_1.exists)(json, 'asset_description_updated') ? undefined : json['asset_description_updated'],
        'assetNameUpdated': !(0, runtime_1.exists)(json, 'asset_name_updated') ? undefined : json['asset_name_updated'],
        'assetFormatGenericClassificationUpdated': !(0, runtime_1.exists)(json, 'asset_format_generic_classification_updated') ? undefined : json['asset_format_generic_classification_updated'],
        'assetFormatSpecificClassificationUpdated': !(0, runtime_1.exists)(json, 'asset_format_specific_classification_updated') ? undefined : json['asset_format_specific_classification_updated'],
        'assetCreationFailed': !(0, runtime_1.exists)(json, 'asset_creation_failed') ? undefined : json['asset_creation_failed'],
        'assetTagAdded': !(0, runtime_1.exists)(json, 'asset_tag_added') ? undefined : json['asset_tag_added'],
        'assetLinkAdded': !(0, runtime_1.exists)(json, 'asset_link_added') ? undefined : json['asset_link_added'],
        'assetLinkGenerated': !(0, runtime_1.exists)(json, 'asset_link_generated') ? undefined : json['asset_link_generated'],
        'assetLinkDeleted': !(0, runtime_1.exists)(json, 'asset_link_deleted') ? undefined : json['asset_link_deleted'],
        'assetTagDeleted': !(0, runtime_1.exists)(json, 'asset_tag_deleted') ? undefined : json['asset_tag_deleted'],
        'assetUpdated': !(0, runtime_1.exists)(json, 'asset_updated') ? undefined : json['asset_updated'],
        'assetFormatValueEdited': !(0, runtime_1.exists)(json, 'asset_format_value_edited') ? undefined : json['asset_format_value_edited'],
        'assetFormatUpdated': !(0, runtime_1.exists)(json, 'asset_format_updated') ? undefined : json['asset_format_updated'],
        'assetLinkRevoked': !(0, runtime_1.exists)(json, 'asset_link_revoked') ? undefined : json['asset_link_revoked'],
        'assetPersonAdded': !(0, runtime_1.exists)(json, 'asset_person_added') ? undefined : json['asset_person_added'],
        'assetPersonDeleted': !(0, runtime_1.exists)(json, 'asset_person_deleted') ? undefined : json['asset_person_deleted'],
        'assetSensitiveAdded': !(0, runtime_1.exists)(json, 'asset_sensitive_added') ? undefined : json['asset_sensitive_added'],
        'assetSensitiveDeleted': !(0, runtime_1.exists)(json, 'asset_sensitive_deleted') ? undefined : json['asset_sensitive_deleted'],
        'suggestedAssetReferenced': !(0, runtime_1.exists)(json, 'suggested_asset_referenced') ? undefined : json['suggested_asset_referenced'],
        'searchedAssetReferenced': !(0, runtime_1.exists)(json, 'searched_asset_referenced') ? undefined : json['searched_asset_referenced'],
        'assetReferenced': !(0, runtime_1.exists)(json, 'asset_referenced') ? undefined : json['asset_referenced'],
        'activityAssetReferenced': !(0, runtime_1.exists)(json, 'activity_asset_referenced') ? undefined : json['activity_asset_referenced'],
        'assetAnnotationAdded': !(0, runtime_1.exists)(json, 'asset_annotation_added') ? undefined : json['asset_annotation_added'],
        'assetAnnotationDeleted': !(0, runtime_1.exists)(json, 'asset_annotation_deleted') ? undefined : json['asset_annotation_deleted'],
        'assetAnnotationUpdated': !(0, runtime_1.exists)(json, 'asset_annotation_updated') ? undefined : json['asset_annotation_updated'],
        'assetHintAdded': !(0, runtime_1.exists)(json, 'asset_hint_added') ? undefined : json['asset_hint_added'],
        'assetHintDeleted': !(0, runtime_1.exists)(json, 'asset_hint_deleted') ? undefined : json['asset_hint_deleted'],
        'assetHintUpdated': !(0, runtime_1.exists)(json, 'asset_hint_updated') ? undefined : json['asset_hint_updated'],
        'assetAnchorAdded': !(0, runtime_1.exists)(json, 'asset_anchor_added') ? undefined : json['asset_anchor_added'],
        'assetAnchorDeleted': !(0, runtime_1.exists)(json, 'asset_anchor_deleted') ? undefined : json['asset_anchor_deleted'],
        'assetAnchorUpdated': !(0, runtime_1.exists)(json, 'asset_anchor_updated') ? undefined : json['asset_anchor_updated'],
    };
}
exports.TrackedAssetEventIdentifierDescriptionPairsFromJSONTyped = TrackedAssetEventIdentifierDescriptionPairsFromJSONTyped;
function TrackedAssetEventIdentifierDescriptionPairsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, index_1.EmbeddedModelSchemaToJSON)(value.schema),
        'asset_created': value.assetCreated,
        'asset_viewed': value.assetViewed,
        'asset_format_copied': value.assetFormatCopied,
        'asset_format_downloaded': value.assetFormatDownloaded,
        'asset_deleted': value.assetDeleted,
        'asset_description_updated': value.assetDescriptionUpdated,
        'asset_name_updated': value.assetNameUpdated,
        'asset_format_generic_classification_updated': value.assetFormatGenericClassificationUpdated,
        'asset_format_specific_classification_updated': value.assetFormatSpecificClassificationUpdated,
        'asset_creation_failed': value.assetCreationFailed,
        'asset_tag_added': value.assetTagAdded,
        'asset_link_added': value.assetLinkAdded,
        'asset_link_generated': value.assetLinkGenerated,
        'asset_link_deleted': value.assetLinkDeleted,
        'asset_tag_deleted': value.assetTagDeleted,
        'asset_updated': value.assetUpdated,
        'asset_format_value_edited': value.assetFormatValueEdited,
        'asset_format_updated': value.assetFormatUpdated,
        'asset_link_revoked': value.assetLinkRevoked,
        'asset_person_added': value.assetPersonAdded,
        'asset_person_deleted': value.assetPersonDeleted,
        'asset_sensitive_added': value.assetSensitiveAdded,
        'asset_sensitive_deleted': value.assetSensitiveDeleted,
        'suggested_asset_referenced': value.suggestedAssetReferenced,
        'searched_asset_referenced': value.searchedAssetReferenced,
        'asset_referenced': value.assetReferenced,
        'activity_asset_referenced': value.activityAssetReferenced,
        'asset_annotation_added': value.assetAnnotationAdded,
        'asset_annotation_deleted': value.assetAnnotationDeleted,
        'asset_annotation_updated': value.assetAnnotationUpdated,
        'asset_hint_added': value.assetHintAdded,
        'asset_hint_deleted': value.assetHintDeleted,
        'asset_hint_updated': value.assetHintUpdated,
        'asset_anchor_added': value.assetAnchorAdded,
        'asset_anchor_deleted': value.assetAnchorDeleted,
        'asset_anchor_updated': value.assetAnchorUpdated,
    };
}
exports.TrackedAssetEventIdentifierDescriptionPairsToJSON = TrackedAssetEventIdentifierDescriptionPairsToJSON;
