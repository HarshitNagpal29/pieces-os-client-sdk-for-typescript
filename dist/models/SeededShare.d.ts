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
import { AccessEnum, Asset, Assets, EmbeddedModelSchema, SeededUser } from './index';
/**
 *  required to pass in an asset or assets.
 * @export
 * @interface SeededShare
 */
export interface SeededShare {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededShare
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Asset}
     * @memberof SeededShare
     */
    asset?: Asset;
    /**
     * if private please specificy some users you want to share this with.
     * @type {Array<SeededUser>}
     * @memberof SeededShare
     */
    users?: Array<SeededUser>;
    /**
     *
     * @type {AccessEnum}
     * @memberof SeededShare
     */
    access: AccessEnum;
    /**
     *
     * @type {Assets}
     * @memberof SeededShare
     */
    assets?: Assets;
    /**
     * optional name, if it is available. and must be unique.
     * @type {string}
     * @memberof SeededShare
     */
    name?: string;
}
export declare function SeededShareFromJSON(json: any): SeededShare;
export declare function SeededShareFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededShare;
export declare function SeededShareToJSON(value?: SeededShare | null): any;
