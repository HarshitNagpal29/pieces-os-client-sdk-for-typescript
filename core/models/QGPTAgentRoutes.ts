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
    QGPTAgentRelatedRoutes,
    QGPTAgentRelatedRoutesFromJSON,
    QGPTAgentRelatedRoutesFromJSONTyped,
    QGPTAgentRelatedRoutesToJSON,
} from './index';

/**
 * This is apart of the Output and will let the plugin developer know if we reccomend to run specific agent functionality/routes.
 * for instance, related.people, code classification...xyz, for now we start with relatedPeople.
 * @export
 * @interface QGPTAgentRoutes
 */
export interface QGPTAgentRoutes {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof QGPTAgentRoutes
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {QGPTAgentRelatedRoutes}
     * @memberof QGPTAgentRoutes
     */
    related?: QGPTAgentRelatedRoutes;
}

export function QGPTAgentRoutesFromJSON(json: any): QGPTAgentRoutes {
    return QGPTAgentRoutesFromJSONTyped(json, false);
}

export function QGPTAgentRoutesFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTAgentRoutes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'related': !exists(json, 'related') ? undefined : QGPTAgentRelatedRoutesFromJSON(json['related']),
    };
}

export function QGPTAgentRoutesToJSON(value?: QGPTAgentRoutes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'related': QGPTAgentRelatedRoutesToJSON(value.related),
    };
}


