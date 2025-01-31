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
    FlattenedAnchorPoint,
    FlattenedAnchorPointFromJSON,
    FlattenedAnchorPointFromJSONTyped,
    FlattenedAnchorPointToJSON,
} from './index';

/**
 * 
 * @export
 * @interface ReferencedAnchorPoint
 */
export interface ReferencedAnchorPoint {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedAnchorPoint
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof ReferencedAnchorPoint
     */
    id: string;
    /**
     * 
     * @type {FlattenedAnchorPoint}
     * @memberof ReferencedAnchorPoint
     */
    reference?: FlattenedAnchorPoint;
}

export function ReferencedAnchorPointFromJSON(json: any): ReferencedAnchorPoint {
    return ReferencedAnchorPointFromJSONTyped(json, false);
}

export function ReferencedAnchorPointFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedAnchorPoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'reference': !exists(json, 'reference') ? undefined : FlattenedAnchorPointFromJSON(json['reference']),
    };
}

export function ReferencedAnchorPointToJSON(value?: ReferencedAnchorPoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'reference': FlattenedAnchorPointToJSON(value.reference),
    };
}


