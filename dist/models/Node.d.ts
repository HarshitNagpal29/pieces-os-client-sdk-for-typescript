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
import { GroupedTimestamp, NodeTypeEnum } from './index';
/**
 * This describes a node within a relationship graph used to related like types. ie asset to asset, tag to tag, ...etc
 *
 * created: is here to let us know when the node was attached.
 *
 * id: this is the the id of the type ie, if the type is Asset the id here points to the asset that this node represents.
 * @export
 * @interface Node
 */
export interface Node {
    /**
     *
     * @type {string}
     * @memberof Node
     */
    id: string;
    /**
     *
     * @type {NodeTypeEnum}
     * @memberof Node
     */
    type: NodeTypeEnum;
    /**
     * This is a boolean to let us know if this node is the root or origin of the relationship graph.
     * @type {boolean}
     * @memberof Node
     */
    root: boolean;
    /**
     *
     * @type {GroupedTimestamp}
     * @memberof Node
     */
    created: GroupedTimestamp;
}
export declare function NodeFromJSON(json: any): Node;
export declare function NodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Node;
export declare function NodeToJSON(value?: Node | null): any;
