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
import { EmbeddedModelSchema, OCRAnalysis } from './index';
/**
 *
 * @export
 * @interface OCRAnalyses
 */
export interface OCRAnalyses {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof OCRAnalyses
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {Array<OCRAnalysis>}
     * @memberof OCRAnalyses
     */
    iterable: Array<OCRAnalysis>;
}
export declare function OCRAnalysesFromJSON(json: any): OCRAnalyses;
export declare function OCRAnalysesFromJSONTyped(json: any, ignoreDiscriminator: boolean): OCRAnalyses;
export declare function OCRAnalysesToJSON(value?: OCRAnalyses | null): any;
