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
import { EmbeddedModelSchema, FlattenedAnnotation } from './index';
/**
 * This is the referenced version of a annotation, main used for the uuid.
 * @export
 * @interface ReferencedAnnotation
 */
export interface ReferencedAnnotation {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedAnnotation
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {string}
     * @memberof ReferencedAnnotation
     */
    id: string;
    /**
     *
     * @type {FlattenedAnnotation}
     * @memberof ReferencedAnnotation
     */
    reference?: FlattenedAnnotation;
}
export declare function ReferencedAnnotationFromJSON(json: any): ReferencedAnnotation;
export declare function ReferencedAnnotationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedAnnotation;
export declare function ReferencedAnnotationToJSON(value?: ReferencedAnnotation | null): any;
