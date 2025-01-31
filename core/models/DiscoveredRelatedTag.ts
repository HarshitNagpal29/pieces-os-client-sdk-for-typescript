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
    SeededTag,
    SeededTagFromJSON,
    SeededTagFromJSONTyped,
    SeededTagToJSON,
} from './index';

/**
 * 
 * @export
 * @interface DiscoveredRelatedTag
 */
export interface DiscoveredRelatedTag {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof DiscoveredRelatedTag
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {SeededTag}
     * @memberof DiscoveredRelatedTag
     */
    seed: SeededTag;
}

export function DiscoveredRelatedTagFromJSON(json: any): DiscoveredRelatedTag {
    return DiscoveredRelatedTagFromJSONTyped(json, false);
}

export function DiscoveredRelatedTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscoveredRelatedTag {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'seed': SeededTagFromJSON(json['seed']),
    };
}

export function DiscoveredRelatedTagToJSON(value?: DiscoveredRelatedTag | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'seed': SeededTagToJSON(value.seed),
    };
}


