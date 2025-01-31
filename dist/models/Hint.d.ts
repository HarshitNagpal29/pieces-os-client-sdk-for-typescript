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
import { EmbeddedModelSchema, GroupedTimestamp, HintTypeEnum, MechanismEnum, ReferencedAsset, ReferencedModel, Score } from './index';
/**
 * This is a hint that is attached to an asset, used for suggested_queries, and hints given via the qgpt flow.
 * @export
 * @interface Hint
 */
export interface Hint {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Hint
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof Hint
     */
    id: string;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Hint
     */
    created: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Hint
     */
    updated: GroupedTimestamp;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Hint
     */
    deleted?: GroupedTimestamp;
    /**
     *
     * @type {MechanismEnum}
     * @memberof Hint
     */
    mechanism?: MechanismEnum;
    /**
     *
     * @type {ReferencedAsset}
     * @memberof Hint
     */
    asset?: ReferencedAsset;
    /**
     *
     * @type {HintTypeEnum}
     * @memberof Hint
     */
    type: HintTypeEnum;
    /**
     * This is the text of the hint.
     * @type {string}
     * @memberof Hint
     */
    text: string;
    /**
     *
     * @type {ReferencedModel}
     * @memberof Hint
     */
    model?: ReferencedModel;
    /**
     *
     * @type {Score}
     * @memberof Hint
     */
    score?: Score;
}
export declare function HintFromJSON(json: any): Hint;
export declare function HintFromJSONTyped(json: any, ignoreDiscriminator: boolean): Hint;
export declare function HintToJSON(value?: Hint | null): any;
