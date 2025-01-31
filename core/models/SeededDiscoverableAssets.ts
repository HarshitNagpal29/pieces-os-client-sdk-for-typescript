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

import { exists, mapValues } from '../runtime';
import {
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    SeededDiscoverableAsset,
    SeededDiscoverableAssetFromJSON,
    SeededDiscoverableAssetFromJSONTyped,
    SeededDiscoverableAssetToJSON,
    TLPDirectedDiscoveryFilters,
    TLPDirectedDiscoveryFiltersFromJSON,
    TLPDirectedDiscoveryFiltersFromJSONTyped,
    TLPDirectedDiscoveryFiltersToJSON,
} from './index';

/**
 * Assumption: filters imposed in this model can be overwritten by passing them in SeededDiscoverableAsset
 * @export
 * @interface SeededDiscoverableAssets
 */
export interface SeededDiscoverableAssets {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededDiscoverableAssets
     */
    schema?: EmbeddedModelSchema;
    /**
     * application id.
     * @type {string}
     * @memberof SeededDiscoverableAssets
     */
    application: string;
    /**
     * This is an iterable of already snippitized snippets that we will compare && cluster.
     * @type {Array<SeededDiscoverableAsset>}
     * @memberof SeededDiscoverableAssets
     */
    iterable: Array<SeededDiscoverableAsset>;
    /**
     * 
     * @type {TLPDirectedDiscoveryFilters}
     * @memberof SeededDiscoverableAssets
     */
    filters?: TLPDirectedDiscoveryFilters;
}

export function SeededDiscoverableAssetsFromJSON(json: any): SeededDiscoverableAssets {
    return SeededDiscoverableAssetsFromJSONTyped(json, false);
}

export function SeededDiscoverableAssetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededDiscoverableAssets {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'application': json['application'],
        'iterable': ((json['iterable'] as Array<any>).map(SeededDiscoverableAssetFromJSON)),
        'filters': !exists(json, 'filters') ? undefined : TLPDirectedDiscoveryFiltersFromJSON(json['filters']),
    };
}

export function SeededDiscoverableAssetsToJSON(value?: SeededDiscoverableAssets | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'application': value.application,
        'iterable': ((value.iterable as Array<any>).map(SeededDiscoverableAssetToJSON)),
        'filters': TLPDirectedDiscoveryFiltersToJSON(value.filters),
    };
}


