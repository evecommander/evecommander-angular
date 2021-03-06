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
import { GetCharactersCharacterIdClonesHomeLocation } from './getCharactersCharacterIdClonesHomeLocation';
import { GetCharactersCharacterIdClonesJumpClone } from './getCharactersCharacterIdClonesJumpClone';


/**
 * 200 ok object
 */
export interface GetCharactersCharacterIdClonesOk {
    /**
     * last_clone_jump_date string
     */
    lastCloneJumpDate?: Date;
    homeLocation?: GetCharactersCharacterIdClonesHomeLocation;
    /**
     * last_station_change_date string
     */
    lastStationChangeDate?: Date;
    /**
     * jump_clones array
     */
    jumpClones: Array<GetCharactersCharacterIdClonesJumpClone>;
}
