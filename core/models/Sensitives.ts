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
    Score,
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
    Sensitive,
    SensitiveFromJSON,
    SensitiveFromJSONTyped,
    SensitiveToJSON,
} from './index';

/**
 * This is a model that represents many individual sensitive pieces of data.
 * @export
 * @interface Sensitives
 */
export interface Sensitives {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Sensitives
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<Sensitive>}
     * @memberof Sensitives
     */
    iterable: Array<Sensitive>;
    /**
     * 
     * @type {Score}
     * @memberof Sensitives
     */
    score?: Score;
}

export function SensitivesFromJSON(json: any): Sensitives {
    return SensitivesFromJSONTyped(json, false);
}

export function SensitivesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Sensitives {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(SensitiveFromJSON)),
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
    };
}

export function SensitivesToJSON(value?: Sensitives | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(SensitiveToJSON)),
        'score': ScoreToJSON(value.score),
    };
}


