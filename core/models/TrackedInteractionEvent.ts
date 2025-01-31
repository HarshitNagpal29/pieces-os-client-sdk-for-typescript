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
} from './index';

/**
 * This is a model that will hold relavent information in relation to an interaction(ONLY CLICK/TAP) analytics event(usage). If you want to register an event that relates to an interaction with the key then register a Keyboard Event.
 * @export
 * @interface TrackedInteractionEvent
 */
export interface TrackedInteractionEvent {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TrackedInteractionEvent
     */
    schema?: EmbeddedModelSchema;
    /**
     * (optional) a description of this button that was clicked. or maybe what it did.
     * @type {string}
     * @memberof TrackedInteractionEvent
     */
    description: string;
    /**
     * This is an identifer that will allow the developer to know what unique button/field was interacted with.
     * @type {string}
     * @memberof TrackedInteractionEvent
     */
    element?: string;
}

export function TrackedInteractionEventFromJSON(json: any): TrackedInteractionEvent {
    return TrackedInteractionEventFromJSONTyped(json, false);
}

export function TrackedInteractionEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedInteractionEvent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'description': json['description'],
        'element': !exists(json, 'element') ? undefined : json['element'],
    };
}

export function TrackedInteractionEventToJSON(value?: TrackedInteractionEvent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'description': value.description,
        'element': value.element,
    };
}


