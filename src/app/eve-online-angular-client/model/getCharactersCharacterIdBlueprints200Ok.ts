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
export interface GetCharactersCharacterIdBlueprints200Ok {
    /**
     * Unique ID for this item.
     */
    itemId: number;
    /**
     * type_id integer
     */
    typeId: number;
    /**
     * References a solar system, station or item_id if this blueprint is located within a container. If the return value is an item_id, then the Character AssetList API must be queried to find the container using the given item_id to determine the correct location of the Blueprint.
     */
    locationId: number;
    /**
     * Type of the location_id
     */
    locationFlag: GetCharactersCharacterIdBlueprints200Ok.LocationFlagEnum;
    /**
     * A range of numbers with a minimum of -2 and no maximum value where -1 is an original and -2 is a copy. It can be a positive integer if it is a stack of blueprint originals fresh from the market (e.g. no activities performed on them yet).
     */
    quantity: number;
    /**
     * Time Efficiency Level of the blueprint.
     */
    timeEfficiency: number;
    /**
     * Material Efficiency Level of the blueprint.
     */
    materialEfficiency: number;
    /**
     * Number of runs remaining if the blueprint is a copy, -1 if it is an original.
     */
    runs: number;
}
export namespace GetCharactersCharacterIdBlueprints200Ok {
    export type LocationFlagEnum = 'AutoFit' | 'Cargo' | 'CorpseBay' | 'DroneBay' | 'FleetHangar' | 'Deliveries' | 'HiddenModifiers' | 'Hangar' | 'HangarAll' | 'LoSlot0' | 'LoSlot1' | 'LoSlot2' | 'LoSlot3' | 'LoSlot4' | 'LoSlot5' | 'LoSlot6' | 'LoSlot7' | 'MedSlot0' | 'MedSlot1' | 'MedSlot2' | 'MedSlot3' | 'MedSlot4' | 'MedSlot5' | 'MedSlot6' | 'MedSlot7' | 'HiSlot0' | 'HiSlot1' | 'HiSlot2' | 'HiSlot3' | 'HiSlot4' | 'HiSlot5' | 'HiSlot6' | 'HiSlot7' | 'AssetSafety' | 'Locked' | 'Unlocked' | 'Implant' | 'QuafeBay' | 'RigSlot0' | 'RigSlot1' | 'RigSlot2' | 'RigSlot3' | 'RigSlot4' | 'RigSlot5' | 'RigSlot6' | 'RigSlot7' | 'ShipHangar' | 'SpecializedFuelBay' | 'SpecializedOreHold' | 'SpecializedGasHold' | 'SpecializedMineralHold' | 'SpecializedSalvageHold' | 'SpecializedShipHold' | 'SpecializedSmallShipHold' | 'SpecializedMediumShipHold' | 'SpecializedLargeShipHold' | 'SpecializedIndustrialShipHold' | 'SpecializedAmmoHold' | 'SpecializedCommandCenterHold' | 'SpecializedPlanetaryCommoditiesHold' | 'SpecializedMaterialBay' | 'SubSystemSlot0' | 'SubSystemSlot1' | 'SubSystemSlot2' | 'SubSystemSlot3' | 'SubSystemSlot4' | 'SubSystemSlot5' | 'SubSystemSlot6' | 'SubSystemSlot7' | 'FighterBay' | 'FighterTube0' | 'FighterTube1' | 'FighterTube2' | 'FighterTube3' | 'FighterTube4' | 'Module';
    export const LocationFlagEnum = {
        AutoFit: 'AutoFit' as LocationFlagEnum,
        Cargo: 'Cargo' as LocationFlagEnum,
        CorpseBay: 'CorpseBay' as LocationFlagEnum,
        DroneBay: 'DroneBay' as LocationFlagEnum,
        FleetHangar: 'FleetHangar' as LocationFlagEnum,
        Deliveries: 'Deliveries' as LocationFlagEnum,
        HiddenModifiers: 'HiddenModifiers' as LocationFlagEnum,
        Hangar: 'Hangar' as LocationFlagEnum,
        HangarAll: 'HangarAll' as LocationFlagEnum,
        LoSlot0: 'LoSlot0' as LocationFlagEnum,
        LoSlot1: 'LoSlot1' as LocationFlagEnum,
        LoSlot2: 'LoSlot2' as LocationFlagEnum,
        LoSlot3: 'LoSlot3' as LocationFlagEnum,
        LoSlot4: 'LoSlot4' as LocationFlagEnum,
        LoSlot5: 'LoSlot5' as LocationFlagEnum,
        LoSlot6: 'LoSlot6' as LocationFlagEnum,
        LoSlot7: 'LoSlot7' as LocationFlagEnum,
        MedSlot0: 'MedSlot0' as LocationFlagEnum,
        MedSlot1: 'MedSlot1' as LocationFlagEnum,
        MedSlot2: 'MedSlot2' as LocationFlagEnum,
        MedSlot3: 'MedSlot3' as LocationFlagEnum,
        MedSlot4: 'MedSlot4' as LocationFlagEnum,
        MedSlot5: 'MedSlot5' as LocationFlagEnum,
        MedSlot6: 'MedSlot6' as LocationFlagEnum,
        MedSlot7: 'MedSlot7' as LocationFlagEnum,
        HiSlot0: 'HiSlot0' as LocationFlagEnum,
        HiSlot1: 'HiSlot1' as LocationFlagEnum,
        HiSlot2: 'HiSlot2' as LocationFlagEnum,
        HiSlot3: 'HiSlot3' as LocationFlagEnum,
        HiSlot4: 'HiSlot4' as LocationFlagEnum,
        HiSlot5: 'HiSlot5' as LocationFlagEnum,
        HiSlot6: 'HiSlot6' as LocationFlagEnum,
        HiSlot7: 'HiSlot7' as LocationFlagEnum,
        AssetSafety: 'AssetSafety' as LocationFlagEnum,
        Locked: 'Locked' as LocationFlagEnum,
        Unlocked: 'Unlocked' as LocationFlagEnum,
        Implant: 'Implant' as LocationFlagEnum,
        QuafeBay: 'QuafeBay' as LocationFlagEnum,
        RigSlot0: 'RigSlot0' as LocationFlagEnum,
        RigSlot1: 'RigSlot1' as LocationFlagEnum,
        RigSlot2: 'RigSlot2' as LocationFlagEnum,
        RigSlot3: 'RigSlot3' as LocationFlagEnum,
        RigSlot4: 'RigSlot4' as LocationFlagEnum,
        RigSlot5: 'RigSlot5' as LocationFlagEnum,
        RigSlot6: 'RigSlot6' as LocationFlagEnum,
        RigSlot7: 'RigSlot7' as LocationFlagEnum,
        ShipHangar: 'ShipHangar' as LocationFlagEnum,
        SpecializedFuelBay: 'SpecializedFuelBay' as LocationFlagEnum,
        SpecializedOreHold: 'SpecializedOreHold' as LocationFlagEnum,
        SpecializedGasHold: 'SpecializedGasHold' as LocationFlagEnum,
        SpecializedMineralHold: 'SpecializedMineralHold' as LocationFlagEnum,
        SpecializedSalvageHold: 'SpecializedSalvageHold' as LocationFlagEnum,
        SpecializedShipHold: 'SpecializedShipHold' as LocationFlagEnum,
        SpecializedSmallShipHold: 'SpecializedSmallShipHold' as LocationFlagEnum,
        SpecializedMediumShipHold: 'SpecializedMediumShipHold' as LocationFlagEnum,
        SpecializedLargeShipHold: 'SpecializedLargeShipHold' as LocationFlagEnum,
        SpecializedIndustrialShipHold: 'SpecializedIndustrialShipHold' as LocationFlagEnum,
        SpecializedAmmoHold: 'SpecializedAmmoHold' as LocationFlagEnum,
        SpecializedCommandCenterHold: 'SpecializedCommandCenterHold' as LocationFlagEnum,
        SpecializedPlanetaryCommoditiesHold: 'SpecializedPlanetaryCommoditiesHold' as LocationFlagEnum,
        SpecializedMaterialBay: 'SpecializedMaterialBay' as LocationFlagEnum,
        SubSystemSlot0: 'SubSystemSlot0' as LocationFlagEnum,
        SubSystemSlot1: 'SubSystemSlot1' as LocationFlagEnum,
        SubSystemSlot2: 'SubSystemSlot2' as LocationFlagEnum,
        SubSystemSlot3: 'SubSystemSlot3' as LocationFlagEnum,
        SubSystemSlot4: 'SubSystemSlot4' as LocationFlagEnum,
        SubSystemSlot5: 'SubSystemSlot5' as LocationFlagEnum,
        SubSystemSlot6: 'SubSystemSlot6' as LocationFlagEnum,
        SubSystemSlot7: 'SubSystemSlot7' as LocationFlagEnum,
        FighterBay: 'FighterBay' as LocationFlagEnum,
        FighterTube0: 'FighterTube0' as LocationFlagEnum,
        FighterTube1: 'FighterTube1' as LocationFlagEnum,
        FighterTube2: 'FighterTube2' as LocationFlagEnum,
        FighterTube3: 'FighterTube3' as LocationFlagEnum,
        FighterTube4: 'FighterTube4' as LocationFlagEnum,
        Module: 'Module' as LocationFlagEnum
    }
}
