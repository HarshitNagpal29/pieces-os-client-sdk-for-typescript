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
import { ReferencedAnchor, ReferencedAnnotation, ReferencedHint, ReferencedPerson, ReferencedSensitive, ReferencedShare, ReferencedTag, ReferencedWebsite, TrackedAssetEventCreationMetadata, TrackedAssetEventFormatReclassificationMetadata, TrackedAssetEventRenameMetadata, TrackedAssetsEventSearchMetadata } from './index';
/**
 *
 * @export
 * @interface TrackedAssetEventMetadata
 */
export interface TrackedAssetEventMetadata {
    /**
     *
     * @type {TrackedAssetEventFormatReclassificationMetadata}
     * @memberof TrackedAssetEventMetadata
     */
    reclassification?: TrackedAssetEventFormatReclassificationMetadata;
    /**
     *
     * @type {TrackedAssetEventCreationMetadata}
     * @memberof TrackedAssetEventMetadata
     */
    creation?: TrackedAssetEventCreationMetadata;
    /**
     *
     * @type {TrackedAssetEventRenameMetadata}
     * @memberof TrackedAssetEventMetadata
     */
    rename?: TrackedAssetEventRenameMetadata;
    /**
     *
     * @type {ReferencedTag}
     * @memberof TrackedAssetEventMetadata
     */
    tag?: ReferencedTag;
    /**
     *
     * @type {ReferencedWebsite}
     * @memberof TrackedAssetEventMetadata
     */
    website?: ReferencedWebsite;
    /**
     *
     * @type {ReferencedPerson}
     * @memberof TrackedAssetEventMetadata
     */
    person?: ReferencedPerson;
    /**
     *
     * @type {ReferencedSensitive}
     * @memberof TrackedAssetEventMetadata
     */
    sensitive?: ReferencedSensitive;
    /**
     *
     * @type {ReferencedShare}
     * @memberof TrackedAssetEventMetadata
     */
    share?: ReferencedShare;
    /**
     *
     * @type {TrackedAssetsEventSearchMetadata}
     * @memberof TrackedAssetEventMetadata
     */
    search?: TrackedAssetsEventSearchMetadata;
    /**
     *
     * @type {ReferencedAnnotation}
     * @memberof TrackedAssetEventMetadata
     */
    annotation?: ReferencedAnnotation;
    /**
     *
     * @type {ReferencedHint}
     * @memberof TrackedAssetEventMetadata
     */
    hint?: ReferencedHint;
    /**
     *
     * @type {ReferencedAnchor}
     * @memberof TrackedAssetEventMetadata
     */
    anchor?: ReferencedAnchor;
}
export declare function TrackedAssetEventMetadataFromJSON(json: any): TrackedAssetEventMetadata;
export declare function TrackedAssetEventMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedAssetEventMetadata;
export declare function TrackedAssetEventMetadataToJSON(value?: TrackedAssetEventMetadata | null): any;
