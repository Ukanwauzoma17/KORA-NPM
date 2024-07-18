export const KoraEndpoints = {
  BANKS: {
    LIST_BANKS: "/merchant/api/v1/misc/banks?countryCode=NG", 
    RESOLVE: "/merchant/api/v1/misc/banks/resolve",
  },
  TRANSFERS: "/merchant/api/v1/misc/banks?countryCode=NG",
  TRANSACTIONS: {
    DISBURSE: "/merchant/api/v1/transactions/disburse",
    DISBURSE_BULK: "/merchant/api/v1/transactions/disburse/bulk",
    BANK_TRANSFER: "/merchant/api/v1/charges/bank-transfer",
  },
};
