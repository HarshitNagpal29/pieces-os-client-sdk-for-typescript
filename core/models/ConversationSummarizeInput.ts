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
    FlattenedConversationMessages,
    FlattenedConversationMessagesFromJSON,
    FlattenedConversationMessagesFromJSONTyped,
    FlattenedConversationMessagesToJSON,
} from './index';

/**
 * Optionally you may pass in a list of conversation message that you would like to use for the summary.
 * @export
 * @interface ConversationSummarizeInput
 */
export interface ConversationSummarizeInput {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ConversationSummarizeInput
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {FlattenedConversationMessages}
     * @memberof ConversationSummarizeInput
     */
    messages?: FlattenedConversationMessages;
}

export function ConversationSummarizeInputFromJSON(json: any): ConversationSummarizeInput {
    return ConversationSummarizeInputFromJSONTyped(json, false);
}

export function ConversationSummarizeInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationSummarizeInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'messages': !exists(json, 'messages') ? undefined : FlattenedConversationMessagesFromJSON(json['messages']),
    };
}

export function ConversationSummarizeInputToJSON(value?: ConversationSummarizeInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'messages': FlattenedConversationMessagesToJSON(value.messages),
    };
}


