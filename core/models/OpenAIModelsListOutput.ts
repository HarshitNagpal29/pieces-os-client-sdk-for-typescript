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
    SeededModels,
    SeededModelsFromJSON,
    SeededModelsFromJSONTyped,
    SeededModelsToJSON,
} from './index';

/**
 * This is the output model for the /open_ai/models/list endpoint.
 * @export
 * @interface OpenAIModelsListOutput
 */
export interface OpenAIModelsListOutput {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof OpenAIModelsListOutput
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {SeededModels}
     * @memberof OpenAIModelsListOutput
     */
    models: SeededModels;
}

export function OpenAIModelsListOutputFromJSON(json: any): OpenAIModelsListOutput {
    return OpenAIModelsListOutputFromJSONTyped(json, false);
}

export function OpenAIModelsListOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): OpenAIModelsListOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'models': SeededModelsFromJSON(json['models']),
    };
}

export function OpenAIModelsListOutputToJSON(value?: OpenAIModelsListOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'models': SeededModelsToJSON(value.models),
    };
}


