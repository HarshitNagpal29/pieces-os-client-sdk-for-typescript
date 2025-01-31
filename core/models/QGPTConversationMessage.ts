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
    GroupedTimestamp,
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
    QGPTConversationMessageRoleEnum,
    QGPTConversationMessageRoleEnumFromJSON,
    QGPTConversationMessageRoleEnumFromJSONTyped,
    QGPTConversationMessageRoleEnumToJSON,
} from './index';

/**
 * This will take a single message, and a role.
 * @export
 * @interface QGPTConversationMessage
 */
export interface QGPTConversationMessage {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof QGPTConversationMessage
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof QGPTConversationMessage
     */
    text: string;
    /**
     * 
     * @type {QGPTConversationMessageRoleEnum}
     * @memberof QGPTConversationMessage
     */
    role: QGPTConversationMessageRoleEnum;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof QGPTConversationMessage
     */
    timestamp: GroupedTimestamp;
}

export function QGPTConversationMessageFromJSON(json: any): QGPTConversationMessage {
    return QGPTConversationMessageFromJSONTyped(json, false);
}

export function QGPTConversationMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTConversationMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'text': json['text'],
        'role': QGPTConversationMessageRoleEnumFromJSON(json['role']),
        'timestamp': GroupedTimestampFromJSON(json['timestamp']),
    };
}

export function QGPTConversationMessageToJSON(value?: QGPTConversationMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'text': value.text,
        'role': QGPTConversationMessageRoleEnumToJSON(value.role),
        'timestamp': GroupedTimestampToJSON(value.timestamp),
    };
}


