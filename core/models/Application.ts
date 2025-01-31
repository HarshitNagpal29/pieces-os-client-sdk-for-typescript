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
    ApplicationNameEnum,
    ApplicationNameEnumFromJSON,
    ApplicationNameEnumFromJSONTyped,
    ApplicationNameEnumToJSON,
    CapabilitiesEnum,
    CapabilitiesEnumFromJSON,
    CapabilitiesEnumFromJSONTyped,
    CapabilitiesEnumToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    MechanismEnum,
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
    PlatformEnum,
    PlatformEnumFromJSON,
    PlatformEnumFromJSONTyped,
    PlatformEnumToJSON,
    PrivacyEnum,
    PrivacyEnumFromJSON,
    PrivacyEnumFromJSONTyped,
    PrivacyEnumToJSON,
} from './index';

/**
 * A Model to describe what application a format/analytics event originated.
 * 
 * mechanism: This will let us know where this came from.
 * ie.only 2 enums are used here or else throw and error.
 * default mechanism here is MANUAL- meaning that this came from our user Connecting an application.
 * INTERNAL - means that this came from a shareable link
 * @export
 * @interface Application
 */
export interface Application {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Application
     */
    schema?: EmbeddedModelSchema;
    /**
     * The ID of the application at the device level
     * @type {string}
     * @memberof Application
     */
    id: string;
    /**
     * 
     * @type {ApplicationNameEnum}
     * @memberof Application
     */
    name: ApplicationNameEnum;
    /**
     * This is the specific version number 0.0.0
     * @type {string}
     * @memberof Application
     */
    version: string;
    /**
     * 
     * @type {PlatformEnum}
     * @memberof Application
     */
    platform: PlatformEnum;
    /**
     * 
     * @type {boolean}
     * @memberof Application
     */
    onboarded: boolean;
    /**
     * 
     * @type {PrivacyEnum}
     * @memberof Application
     */
    privacy: PrivacyEnum;
    /**
     * 
     * @type {CapabilitiesEnum}
     * @memberof Application
     */
    capabilities?: CapabilitiesEnum;
    /**
     * 
     * @type {MechanismEnum}
     * @memberof Application
     */
    mechanism?: MechanismEnum;
    /**
     * This is a proper that will let us know if we will proactivity unload all of your machine learning models.by default this is false.
     * @type {boolean}
     * @memberof Application
     */
    automaticUnload?: boolean;
}

export function ApplicationFromJSON(json: any): Application {
    return ApplicationFromJSONTyped(json, false);
}

export function ApplicationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Application {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'name': ApplicationNameEnumFromJSON(json['name']),
        'version': json['version'],
        'platform': PlatformEnumFromJSON(json['platform']),
        'onboarded': json['onboarded'],
        'privacy': PrivacyEnumFromJSON(json['privacy']),
        'capabilities': !exists(json, 'capabilities') ? undefined : CapabilitiesEnumFromJSON(json['capabilities']),
        'mechanism': !exists(json, 'mechanism') ? undefined : MechanismEnumFromJSON(json['mechanism']),
        'automaticUnload': !exists(json, 'automaticUnload') ? undefined : json['automaticUnload'],
    };
}

export function ApplicationToJSON(value?: Application | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'name': ApplicationNameEnumToJSON(value.name),
        'version': value.version,
        'platform': PlatformEnumToJSON(value.platform),
        'onboarded': value.onboarded,
        'privacy': PrivacyEnumToJSON(value.privacy),
        'capabilities': CapabilitiesEnumToJSON(value.capabilities),
        'mechanism': MechanismEnumToJSON(value.mechanism),
        'automaticUnload': value.automaticUnload,
    };
}


