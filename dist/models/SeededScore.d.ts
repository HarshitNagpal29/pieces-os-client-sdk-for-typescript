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
import { EmbeddedModelSchema } from './index';
/**
 * This is the low level seeded score and will let us know what exactly we want to increment on our material.
 *
 * Note: ONLY include one of these, as we will only increment one of the following.
 * @export
 * @interface SeededScore
 */
export interface SeededScore {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededScore
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {boolean}
     * @memberof SeededScore
     */
    reuse?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof SeededScore
     */
    update?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof SeededScore
     */
    reference?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof SeededScore
     */
    priority?: boolean;
}
export declare function SeededScoreFromJSON(json: any): SeededScore;
export declare function SeededScoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededScore;
export declare function SeededScoreToJSON(value?: SeededScore | null): any;
