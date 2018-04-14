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
 * attacker object
 */
export interface GetKillmailsKillmailIdKillmailHashAttacker {
    /**
     * character_id integer
     */
    characterId?: number;
    /**
     * corporation_id integer
     */
    corporationId?: number;
    /**
     * alliance_id integer
     */
    allianceId?: number;
    /**
     * faction_id integer
     */
    factionId?: number;
    /**
     * Security status for the attacker 
     */
    securityStatus: number;
    /**
     * Was the attacker the one to achieve the final blow 
     */
    finalBlow: boolean;
    /**
     * damage_done integer
     */
    damageDone: number;
    /**
     * What ship was the attacker flying 
     */
    shipTypeId?: number;
    /**
     * What weapon was used by the attacker for the kill 
     */
    weaponTypeId?: number;
}
