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
import { GetCharactersCharacterIdWalletJournalExtraInfo } from './getCharactersCharacterIdWalletJournalExtraInfo';


/**
 * 200 ok object
 */
export interface GetCharactersCharacterIdWalletJournal200Ok {
    /**
     * Date and time of transaction
     */
    date: Date;
    /**
     * Unique journal reference ID
     */
    refId: number;
    /**
     * Transaction type, different type of transaction will populate different fields in `extra_info` Note: If you have an existing XML API application that is using ref_types, you will need to know which string ESI ref_type maps to which integer. You can use the following gist to see string->int mappings: https://gist.github.com/ccp-zoetrope/c03db66d90c2148724c06171bc52e0ec
     */
    refType: GetCharactersCharacterIdWalletJournal200Ok.RefTypeEnum;
    /**
     * first_party_id integer
     */
    firstPartyId?: number;
    /**
     * first_party_type string
     */
    firstPartyType?: GetCharactersCharacterIdWalletJournal200Ok.FirstPartyTypeEnum;
    /**
     * second_party_id integer
     */
    secondPartyId?: number;
    /**
     * second_party_type string
     */
    secondPartyType?: GetCharactersCharacterIdWalletJournal200Ok.SecondPartyTypeEnum;
    /**
     * Transaction amount. Positive when value transferred to the first party. Negative otherwise
     */
    amount?: number;
    /**
     * Wallet balance after transaction occurred
     */
    balance?: number;
    /**
     * reason string
     */
    reason?: string;
    /**
     * the corporation ID receiving any tax paid
     */
    taxReceiverId?: number;
    /**
     * Tax amount received for tax related transactions
     */
    tax?: number;
    extraInfo?: GetCharactersCharacterIdWalletJournalExtraInfo;
}
export namespace GetCharactersCharacterIdWalletJournal200Ok {
    export type RefTypeEnum = 'acceleration_gate_fee' | 'advertisement_listing_fee' | 'agent_donation' | 'agent_location_services' | 'agent_miscellaneous' | 'agent_mission_collateral_paid' | 'agent_mission_collateral_refunded' | 'agent_mission_reward' | 'agent_mission_reward_corporation_tax' | 'agent_mission_time_bonus_reward' | 'agent_mission_time_bonus_reward_corporation_tax' | 'agent_security_services' | 'agent_services_rendered' | 'agents_preward' | 'alliance_maintainance_fee' | 'alliance_registration_fee' | 'asset_safety_recovery_tax' | 'bounty' | 'bounty_prize' | 'bounty_prize_corporation_tax' | 'bounty_prizes' | 'bounty_reimbursement' | 'bounty_surcharge' | 'brokers_fee' | 'clone_activation' | 'clone_transfer' | 'contraband_fine' | 'contract_auction_bid' | 'contract_auction_bid_corp' | 'contract_auction_bid_refund' | 'contract_auction_sold' | 'contract_brokers_fee' | 'contract_brokers_fee_corp' | 'contract_collateral' | 'contract_collateral_deposited_corp' | 'contract_collateral_payout' | 'contract_collateral_refund' | 'contract_deposit' | 'contract_deposit_corp' | 'contract_deposit_refund' | 'contract_deposit_sales_tax' | 'contract_price' | 'contract_price_payment_corp' | 'contract_reversal' | 'contract_reward' | 'contract_reward_deposited' | 'contract_reward_deposited_corp' | 'contract_reward_refund' | 'contract_sales_tax' | 'copying' | 'corporate_reward_payout' | 'corporate_reward_tax' | 'corporation_account_withdrawal' | 'corporation_bulk_payment' | 'corporation_dividend_payment' | 'corporation_liquidation' | 'corporation_logo_change_cost' | 'corporation_payment' | 'corporation_registration_fee' | 'courier_mission_escrow' | 'cspa' | 'cspaofflinerefund' | 'datacore_fee' | 'dna_modification_fee' | 'docking_fee' | 'duel_wager_escrow' | 'duel_wager_payment' | 'duel_wager_refund' | 'factory_slot_rental_fee' | 'gm_cash_transfer' | 'industry_job_tax' | 'infrastructure_hub_maintenance' | 'inheritance' | 'insurance' | 'jump_clone_activation_fee' | 'jump_clone_installation_fee' | 'kill_right_fee' | 'lp_store' | 'manufacturing' | 'market_escrow' | 'market_fine_paid' | 'market_transaction' | 'medal_creation' | 'medal_issued' | 'mission_completion' | 'mission_cost' | 'mission_expiration' | 'mission_reward' | 'office_rental_fee' | 'operation_bonus' | 'opportunity_reward' | 'planetary_construction' | 'planetary_export_tax' | 'planetary_import_tax' | 'player_donation' | 'player_trading' | 'project_discovery_reward' | 'project_discovery_tax' | 'reaction' | 'release_of_impounded_property' | 'repair_bill' | 'reprocessing_tax' | 'researching_material_productivity' | 'researching_technology' | 'researching_time_productivity' | 'resource_wars_reward' | 'reverse_engineering' | 'security_processing_fee' | 'shares' | 'sovereignity_bill' | 'store_purchase' | 'store_purchase_refund' | 'transaction_tax' | 'upkeep_adjustment_fee' | 'war_ally_contract' | 'war_fee' | 'war_fee_surrender';
    export const RefTypeEnum = {
        AccelerationGateFee: 'acceleration_gate_fee' as RefTypeEnum,
        AdvertisementListingFee: 'advertisement_listing_fee' as RefTypeEnum,
        AgentDonation: 'agent_donation' as RefTypeEnum,
        AgentLocationServices: 'agent_location_services' as RefTypeEnum,
        AgentMiscellaneous: 'agent_miscellaneous' as RefTypeEnum,
        AgentMissionCollateralPaid: 'agent_mission_collateral_paid' as RefTypeEnum,
        AgentMissionCollateralRefunded: 'agent_mission_collateral_refunded' as RefTypeEnum,
        AgentMissionReward: 'agent_mission_reward' as RefTypeEnum,
        AgentMissionRewardCorporationTax: 'agent_mission_reward_corporation_tax' as RefTypeEnum,
        AgentMissionTimeBonusReward: 'agent_mission_time_bonus_reward' as RefTypeEnum,
        AgentMissionTimeBonusRewardCorporationTax: 'agent_mission_time_bonus_reward_corporation_tax' as RefTypeEnum,
        AgentSecurityServices: 'agent_security_services' as RefTypeEnum,
        AgentServicesRendered: 'agent_services_rendered' as RefTypeEnum,
        AgentsPreward: 'agents_preward' as RefTypeEnum,
        AllianceMaintainanceFee: 'alliance_maintainance_fee' as RefTypeEnum,
        AllianceRegistrationFee: 'alliance_registration_fee' as RefTypeEnum,
        AssetSafetyRecoveryTax: 'asset_safety_recovery_tax' as RefTypeEnum,
        Bounty: 'bounty' as RefTypeEnum,
        BountyPrize: 'bounty_prize' as RefTypeEnum,
        BountyPrizeCorporationTax: 'bounty_prize_corporation_tax' as RefTypeEnum,
        BountyPrizes: 'bounty_prizes' as RefTypeEnum,
        BountyReimbursement: 'bounty_reimbursement' as RefTypeEnum,
        BountySurcharge: 'bounty_surcharge' as RefTypeEnum,
        BrokersFee: 'brokers_fee' as RefTypeEnum,
        CloneActivation: 'clone_activation' as RefTypeEnum,
        CloneTransfer: 'clone_transfer' as RefTypeEnum,
        ContrabandFine: 'contraband_fine' as RefTypeEnum,
        ContractAuctionBid: 'contract_auction_bid' as RefTypeEnum,
        ContractAuctionBidCorp: 'contract_auction_bid_corp' as RefTypeEnum,
        ContractAuctionBidRefund: 'contract_auction_bid_refund' as RefTypeEnum,
        ContractAuctionSold: 'contract_auction_sold' as RefTypeEnum,
        ContractBrokersFee: 'contract_brokers_fee' as RefTypeEnum,
        ContractBrokersFeeCorp: 'contract_brokers_fee_corp' as RefTypeEnum,
        ContractCollateral: 'contract_collateral' as RefTypeEnum,
        ContractCollateralDepositedCorp: 'contract_collateral_deposited_corp' as RefTypeEnum,
        ContractCollateralPayout: 'contract_collateral_payout' as RefTypeEnum,
        ContractCollateralRefund: 'contract_collateral_refund' as RefTypeEnum,
        ContractDeposit: 'contract_deposit' as RefTypeEnum,
        ContractDepositCorp: 'contract_deposit_corp' as RefTypeEnum,
        ContractDepositRefund: 'contract_deposit_refund' as RefTypeEnum,
        ContractDepositSalesTax: 'contract_deposit_sales_tax' as RefTypeEnum,
        ContractPrice: 'contract_price' as RefTypeEnum,
        ContractPricePaymentCorp: 'contract_price_payment_corp' as RefTypeEnum,
        ContractReversal: 'contract_reversal' as RefTypeEnum,
        ContractReward: 'contract_reward' as RefTypeEnum,
        ContractRewardDeposited: 'contract_reward_deposited' as RefTypeEnum,
        ContractRewardDepositedCorp: 'contract_reward_deposited_corp' as RefTypeEnum,
        ContractRewardRefund: 'contract_reward_refund' as RefTypeEnum,
        ContractSalesTax: 'contract_sales_tax' as RefTypeEnum,
        Copying: 'copying' as RefTypeEnum,
        CorporateRewardPayout: 'corporate_reward_payout' as RefTypeEnum,
        CorporateRewardTax: 'corporate_reward_tax' as RefTypeEnum,
        CorporationAccountWithdrawal: 'corporation_account_withdrawal' as RefTypeEnum,
        CorporationBulkPayment: 'corporation_bulk_payment' as RefTypeEnum,
        CorporationDividendPayment: 'corporation_dividend_payment' as RefTypeEnum,
        CorporationLiquidation: 'corporation_liquidation' as RefTypeEnum,
        CorporationLogoChangeCost: 'corporation_logo_change_cost' as RefTypeEnum,
        CorporationPayment: 'corporation_payment' as RefTypeEnum,
        CorporationRegistrationFee: 'corporation_registration_fee' as RefTypeEnum,
        CourierMissionEscrow: 'courier_mission_escrow' as RefTypeEnum,
        Cspa: 'cspa' as RefTypeEnum,
        Cspaofflinerefund: 'cspaofflinerefund' as RefTypeEnum,
        DatacoreFee: 'datacore_fee' as RefTypeEnum,
        DnaModificationFee: 'dna_modification_fee' as RefTypeEnum,
        DockingFee: 'docking_fee' as RefTypeEnum,
        DuelWagerEscrow: 'duel_wager_escrow' as RefTypeEnum,
        DuelWagerPayment: 'duel_wager_payment' as RefTypeEnum,
        DuelWagerRefund: 'duel_wager_refund' as RefTypeEnum,
        FactorySlotRentalFee: 'factory_slot_rental_fee' as RefTypeEnum,
        GmCashTransfer: 'gm_cash_transfer' as RefTypeEnum,
        IndustryJobTax: 'industry_job_tax' as RefTypeEnum,
        InfrastructureHubMaintenance: 'infrastructure_hub_maintenance' as RefTypeEnum,
        Inheritance: 'inheritance' as RefTypeEnum,
        Insurance: 'insurance' as RefTypeEnum,
        JumpCloneActivationFee: 'jump_clone_activation_fee' as RefTypeEnum,
        JumpCloneInstallationFee: 'jump_clone_installation_fee' as RefTypeEnum,
        KillRightFee: 'kill_right_fee' as RefTypeEnum,
        LpStore: 'lp_store' as RefTypeEnum,
        Manufacturing: 'manufacturing' as RefTypeEnum,
        MarketEscrow: 'market_escrow' as RefTypeEnum,
        MarketFinePaid: 'market_fine_paid' as RefTypeEnum,
        MarketTransaction: 'market_transaction' as RefTypeEnum,
        MedalCreation: 'medal_creation' as RefTypeEnum,
        MedalIssued: 'medal_issued' as RefTypeEnum,
        MissionCompletion: 'mission_completion' as RefTypeEnum,
        MissionCost: 'mission_cost' as RefTypeEnum,
        MissionExpiration: 'mission_expiration' as RefTypeEnum,
        MissionReward: 'mission_reward' as RefTypeEnum,
        OfficeRentalFee: 'office_rental_fee' as RefTypeEnum,
        OperationBonus: 'operation_bonus' as RefTypeEnum,
        OpportunityReward: 'opportunity_reward' as RefTypeEnum,
        PlanetaryConstruction: 'planetary_construction' as RefTypeEnum,
        PlanetaryExportTax: 'planetary_export_tax' as RefTypeEnum,
        PlanetaryImportTax: 'planetary_import_tax' as RefTypeEnum,
        PlayerDonation: 'player_donation' as RefTypeEnum,
        PlayerTrading: 'player_trading' as RefTypeEnum,
        ProjectDiscoveryReward: 'project_discovery_reward' as RefTypeEnum,
        ProjectDiscoveryTax: 'project_discovery_tax' as RefTypeEnum,
        Reaction: 'reaction' as RefTypeEnum,
        ReleaseOfImpoundedProperty: 'release_of_impounded_property' as RefTypeEnum,
        RepairBill: 'repair_bill' as RefTypeEnum,
        ReprocessingTax: 'reprocessing_tax' as RefTypeEnum,
        ResearchingMaterialProductivity: 'researching_material_productivity' as RefTypeEnum,
        ResearchingTechnology: 'researching_technology' as RefTypeEnum,
        ResearchingTimeProductivity: 'researching_time_productivity' as RefTypeEnum,
        ResourceWarsReward: 'resource_wars_reward' as RefTypeEnum,
        ReverseEngineering: 'reverse_engineering' as RefTypeEnum,
        SecurityProcessingFee: 'security_processing_fee' as RefTypeEnum,
        Shares: 'shares' as RefTypeEnum,
        SovereignityBill: 'sovereignity_bill' as RefTypeEnum,
        StorePurchase: 'store_purchase' as RefTypeEnum,
        StorePurchaseRefund: 'store_purchase_refund' as RefTypeEnum,
        TransactionTax: 'transaction_tax' as RefTypeEnum,
        UpkeepAdjustmentFee: 'upkeep_adjustment_fee' as RefTypeEnum,
        WarAllyContract: 'war_ally_contract' as RefTypeEnum,
        WarFee: 'war_fee' as RefTypeEnum,
        WarFeeSurrender: 'war_fee_surrender' as RefTypeEnum
    }
    export type FirstPartyTypeEnum = 'character' | 'corporation' | 'alliance' | 'faction' | 'system';
    export const FirstPartyTypeEnum = {
        Character: 'character' as FirstPartyTypeEnum,
        Corporation: 'corporation' as FirstPartyTypeEnum,
        Alliance: 'alliance' as FirstPartyTypeEnum,
        Faction: 'faction' as FirstPartyTypeEnum,
        System: 'system' as FirstPartyTypeEnum
    }
    export type SecondPartyTypeEnum = 'character' | 'corporation' | 'alliance' | 'faction' | 'system';
    export const SecondPartyTypeEnum = {
        Character: 'character' as SecondPartyTypeEnum,
        Corporation: 'corporation' as SecondPartyTypeEnum,
        Alliance: 'alliance' as SecondPartyTypeEnum,
        Faction: 'faction' as SecondPartyTypeEnum,
        System: 'system' as SecondPartyTypeEnum
    }
}
