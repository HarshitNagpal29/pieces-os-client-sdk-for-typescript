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
 * A Model To Represent the Code Returned from a PKCE Response
 * @export
 * @interface ResultedPKCE
 */
export interface ResultedPKCE {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ResultedPKCE
     */
    schema?: EmbeddedModelSchema;
    /**
     * The PKCE Code to be used to access a Token.
     * @type {string}
     * @memberof ResultedPKCE
     */
    code: string;
    /**
     * Likely the state that will be returned which should match the requested state as well as the nonce
     * @type {string}
     * @memberof ResultedPKCE
     */
    state: string;
}

export function ResultedPKCEFromJSON(json: any): ResultedPKCE {
    return ResultedPKCEFromJSONTyped(json, false);
}

export function ResultedPKCEFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResultedPKCE {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'code': json['code'],
        'state': json['state'],
    };
}

export function ResultedPKCEToJSON(value?: ResultedPKCE | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'code': value.code,
        'state': value.state,
    };
}


