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
import { EmbeddedModelSchema, ReferencedActivity } from './index';
/**
 *
 * @export
 * @interface FlattenedActivities
 */
export interface FlattenedActivities {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedActivities
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<ReferencedActivity>}
     * @memberof FlattenedActivities
     */
    iterable: Array<ReferencedActivity>;
}
export declare function FlattenedActivitiesFromJSON(json: any): FlattenedActivities;
export declare function FlattenedActivitiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedActivities;
export declare function FlattenedActivitiesToJSON(value?: FlattenedActivities | null): any;
