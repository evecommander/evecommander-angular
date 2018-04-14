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
import { GetIndustrySystemsCostIndice } from './getIndustrySystemsCostIndice';


/**
 * 200 ok object
 */
export interface GetIndustrySystems200Ok {
    /**
     * solar_system_id integer
     */
    solarSystemId: number;
    /**
     * cost_indices array
     */
    costIndices: Array<GetIndustrySystemsCostIndice>;
}
