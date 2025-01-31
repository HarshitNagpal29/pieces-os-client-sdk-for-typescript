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
    Auth0OpenAIUserMetadata,
    Auth0OpenAIUserMetadataFromJSON,
    Auth0OpenAIUserMetadataFromJSONTyped,
    Auth0OpenAIUserMetadataToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './index';

/**
 * This is the endput model for "/external_provider/api_key/update". everything but the uder will be optional, anything that is defined will get an update.
 * @export
 * @interface PreupdatedExternalProviderApiKey
 */
export interface PreupdatedExternalProviderApiKey {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof PreupdatedExternalProviderApiKey
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof PreupdatedExternalProviderApiKey
     */
    user: string;
    /**
     * 
     * @type {Auth0OpenAIUserMetadata}
     * @memberof PreupdatedExternalProviderApiKey
     */
    openAI?: Auth0OpenAIUserMetadata;
}

export function PreupdatedExternalProviderApiKeyFromJSON(json: any): PreupdatedExternalProviderApiKey {
    return PreupdatedExternalProviderApiKeyFromJSONTyped(json, false);
}

export function PreupdatedExternalProviderApiKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PreupdatedExternalProviderApiKey {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'user': json['user'],
        'openAI': !exists(json, 'open_AI') ? undefined : Auth0OpenAIUserMetadataFromJSON(json['open_AI']),
    };
}

export function PreupdatedExternalProviderApiKeyToJSON(value?: PreupdatedExternalProviderApiKey | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'user': value.user,
        'open_AI': Auth0OpenAIUserMetadataToJSON(value.openAI),
    };
}


