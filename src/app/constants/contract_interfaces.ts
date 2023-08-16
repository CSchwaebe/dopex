export interface EpochData {
    expired: boolean;
    startTime: number;
    expiry: number;
    settlementPrice: number;
    totalCollateralBalance: number;
    collateralExchangeRate: number;
    settlementCollateralExchangeRate: number;
    strikes: number[];
    totalRewardsCollected: number[];
    rewardDistributionRatios: number[];
    rewardTokensToDistribute: string[];
}

export interface EpochStrikeData {
    strikeToken: string;
    totalCollateral: number;
    activeCollateral: number;
    totalPremiums: number;
    checkpointPointer: number;
    rewardStoredForPremiums: number[];
    rewardDistributionRatiosForPremiums: number[];
}

export interface VaultCheckpoint {
    activeCollateral: number;
    totalCollateral: number;
    accruedPremium: number;
}

export interface WritePosition {
    epoch: number;
    strike: number;
    collateralAmount: number;
    checkpointIndex: number;
    rewardDistributionRatios: number[];
}
