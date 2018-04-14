/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.7.6
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/**
 * 200 ok object
 */
export interface GetCorporationCorporationIdMiningObserversObserverId200Ok {
    /**
     * last_updated string
     */
    lastUpdated: string;
    /**
     * The character that did the mining 
     */
    characterId: number;
    /**
     * The corporation id of the character at the time data was recorded. 
     */
    recordedCorporationId: number;
    /**
     * type_id integer
     */
    typeId: number;
    /**
     * quantity integer
     */
    quantity: number;
}
