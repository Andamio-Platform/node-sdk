/**
 * Configuration interface for Andamio SDK
 */
export interface AndamioConfig {
    /**
     * Global admin token identifier
     */
    globalAdmin: string;
    
    /**
     * Global state reference multi-sig configuration
     */
    globalStateRefMS: {
        mSCAddress: string;
        mSCPolicyID: string;
        mSCTxRef: string;
    };
    
    /**
     * Global state singleton configuration
     */
    globalStateS: {
        sCAddress: string;
        sCTxRef: string;
    };
    
    /**
     * Governance singleton configuration
     */
    governanceS: {
        sCAddress: string;
        sCTxRef: string;
    };
    
    /**
     * Index admin token identifier
     */
    indexAdmin: string;
    
    /**
     * Index multi-sig configuration
     */
    indexMS: {
        mSCAddress: string;
        mSCPolicyID: string;
        mSCTxRef: string;
    };
    
    /**
     * Index reference multi-sig configuration
     */
    indexRefMS: {
        mSCAddress: string;
        mSCPolicyID: string;
        mSCTxRef: string;
    };
    
    /**
     * Instance admin token identifier
     */
    instanceAdmin: string;
    
    /**
     * Instance multi-sig configuration
     */
    instanceMS: {
        mSCAddress: string;
        mSCPolicyID: string;
        mSCTxRef: string;
    };
    
    /**
     * Instance provided multi-sig configuration
     */
    instanceProvidedMS: {
        mSCAddress: string;
        mSCPolicyID: string;
        mSCTxRef: string;
    };
    
    /**
     * Instance provider admin token identifier
     */
    instanceProviderAdmin: string;
    
    /**
     * Reference address
     */
    referenceAddr: string;
    
    /**
     * Staking admin token identifier
     */
    stakingAdmin: string;
    
    /**
     * Staking script hash
     */
    stakingSH: string;
    
    /**
     * V1 Global state observation transaction reference
     */
    v1GlobalStateObsTxRef: string;
}