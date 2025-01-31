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
import { AssetFilters, AssetSearchSpace, EmbeddedModelSchema } from './index';
/**
 *
 * @export
 * @interface AssetsSearchWithFiltersInput
 */
export interface AssetsSearchWithFiltersInput {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof AssetsSearchWithFiltersInput
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof AssetsSearchWithFiltersInput
     */
    query?: string;
    /**
     *
     * @type {AssetSearchSpace}
     * @memberof AssetsSearchWithFiltersInput
     */
    space?: AssetSearchSpace;
    /**
     *
     * @type {AssetFilters}
     * @memberof AssetsSearchWithFiltersInput
     */
    filters?: AssetFilters;
    /**
     * This is an optional bool that will let us know, if we want to ignore case or not.(default is to allow casing)ie casing:true.
     * @type {boolean}
     * @memberof AssetsSearchWithFiltersInput
     */
    casing?: boolean;
}
export declare function AssetsSearchWithFiltersInputFromJSON(json: any): AssetsSearchWithFiltersInput;
export declare function AssetsSearchWithFiltersInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetsSearchWithFiltersInput;
export declare function AssetsSearchWithFiltersInputToJSON(value?: AssetsSearchWithFiltersInput | null): any;
