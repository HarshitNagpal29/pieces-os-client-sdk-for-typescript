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
import { EmbeddedModelSchema, Score, Tag } from './index';
/**
 * This is a model that represents multiple Tag Models
 * @export
 * @interface Tags
 */
export interface Tags {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Tags
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<Tag>}
     * @memberof Tags
     */
    iterable: Array<Tag>;
    /**
     * This is a Map<String, int> where the the key is an tag id.
     * @type {{ [key: string]: number; }}
     * @memberof Tags
     */
    indices?: {
        [key: string]: number;
    };
    /**
     *
     * @type {Score}
     * @memberof Tags
     */
    score?: Score;
}
export declare function TagsFromJSON(json: any): Tags;
export declare function TagsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tags;
export declare function TagsToJSON(value?: Tags | null): any;
