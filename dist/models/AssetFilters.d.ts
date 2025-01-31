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
import { AssetFilter, EmbeddedModelSchema, FilterOperationTypeEnum } from './index';
/**
 *
 * @export
 * @interface AssetFilters
 */
export interface AssetFilters {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof AssetFilters
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<AssetFilter>}
     * @memberof AssetFilters
     */
    iterable: Array<AssetFilter>;
    /**
     *
     * @type {FilterOperationTypeEnum}
     * @memberof AssetFilters
     */
    type?: FilterOperationTypeEnum;
}
export declare function AssetFiltersFromJSON(json: any): AssetFilters;
export declare function AssetFiltersFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetFilters;
export declare function AssetFiltersToJSON(value?: AssetFilters | null): any;
