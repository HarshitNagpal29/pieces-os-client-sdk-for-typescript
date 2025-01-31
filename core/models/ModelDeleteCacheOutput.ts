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
    ReferencedModel,
    ReferencedModelFromJSON,
    ReferencedModelFromJSONTyped,
    ReferencedModelToJSON,
} from './index';

/**
 * This is the output model for '/model/{model}/delete/cache'
 * @export
 * @interface ModelDeleteCacheOutput
 */
export interface ModelDeleteCacheOutput {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ModelDeleteCacheOutput
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {ReferencedModel}
     * @memberof ModelDeleteCacheOutput
     */
    model: ReferencedModel;
}

export function ModelDeleteCacheOutputFromJSON(json: any): ModelDeleteCacheOutput {
    return ModelDeleteCacheOutputFromJSONTyped(json, false);
}

export function ModelDeleteCacheOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelDeleteCacheOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'model': ReferencedModelFromJSON(json['model']),
    };
}

export function ModelDeleteCacheOutputToJSON(value?: ModelDeleteCacheOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'model': ReferencedModelToJSON(value.model),
    };
}


