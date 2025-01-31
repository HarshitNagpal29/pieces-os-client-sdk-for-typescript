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
import { EmbeddedModelSchema, FlattenedConversationMessages } from './index';
/**
 * Optionally you may pass in a list of conversation message that you would like to use for the summary.
 * @export
 * @interface ConversationSummarizeInput
 */
export interface ConversationSummarizeInput {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof ConversationSummarizeInput
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {FlattenedConversationMessages}
     * @memberof ConversationSummarizeInput
     */
    messages?: FlattenedConversationMessages;
}
export declare function ConversationSummarizeInputFromJSON(json: any): ConversationSummarizeInput;
export declare function ConversationSummarizeInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationSummarizeInput;
export declare function ConversationSummarizeInputToJSON(value?: ConversationSummarizeInput | null): any;
