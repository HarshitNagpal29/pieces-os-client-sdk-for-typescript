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
import { EmbeddedModelSchema, SeededTrackedApplication } from './index';
/**
 * A model that is passed to the context API at bootup
 * @export
 * @interface SeededConnectorConnection
 */
export interface SeededConnectorConnection {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededConnectorConnection
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {SeededTrackedApplication}
     * @memberof SeededConnectorConnection
     */
    application: SeededTrackedApplication;
}
export declare function SeededConnectorConnectionFromJSON(json: any): SeededConnectorConnection;
export declare function SeededConnectorConnectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededConnectorConnection;
export declare function SeededConnectorConnectionToJSON(value?: SeededConnectorConnection | null): any;
