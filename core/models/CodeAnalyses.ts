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
    CodeAnalysis,
    CodeAnalysisFromJSON,
    CodeAnalysisFromJSONTyped,
    CodeAnalysisToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './index';

/**
 * 
 * @export
 * @interface CodeAnalyses
 */
export interface CodeAnalyses {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof CodeAnalyses
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<CodeAnalysis>}
     * @memberof CodeAnalyses
     */
    iterable: Array<CodeAnalysis>;
}

export function CodeAnalysesFromJSON(json: any): CodeAnalyses {
    return CodeAnalysesFromJSONTyped(json, false);
}

export function CodeAnalysesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CodeAnalyses {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(CodeAnalysisFromJSON)),
    };
}

export function CodeAnalysesToJSON(value?: CodeAnalyses | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(CodeAnalysisToJSON)),
    };
}


