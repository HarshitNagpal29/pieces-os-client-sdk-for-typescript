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
import { EmbeddedModelSchema } from './index';
/**
 * Bytes is a Model for A FileFormat. Raw and file are the only 2 that are currently supported. Raw and file are an array of integers that represent the file.Typical conversion UTF8 -> array[int] or UTF8 -> array[bytes(in hexidecimal)] -> array[int]. Either way you convert is up to you but the type we need here is an array of integers.
 *
 * [NOT IMPLEMENTED] base64, base64_url, data_url
 * [IMPLEMENTED] raw
 * @export
 * @interface TransferableBytes
 */
export interface TransferableBytes {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof TransferableBytes
     */
    schema?: EmbeddedModelSchema;
    /**
     * IMPLEMENTED
     * @type {Array<number>}
     * @memberof TransferableBytes
     */
    raw?: Array<number>;
    /**
     * NOT IMPLEMENTED
     * @type {Array<number>}
     * @memberof TransferableBytes
     */
    base64?: Array<number>;
    /**
     * NOT IMPLEMENTED
     * @type {Array<number>}
     * @memberof TransferableBytes
     */
    base64Url?: Array<number>;
    /**
     * NOT IMPLEMENTED
     * @type {Array<number>}
     * @memberof TransferableBytes
     */
    dataUrl?: Array<number>;
}
export declare function TransferableBytesFromJSON(json: any): TransferableBytes;
export declare function TransferableBytesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferableBytes;
export declare function TransferableBytesToJSON(value?: TransferableBytes | null): any;
