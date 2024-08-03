// For the Users
const USER_MAIN_KEY = 'GMS_user';

// For Customers
const CUSTOMER_MAIN_KEY = 'GMS_customer';
// For Rates
const RATE_MAIN_KEY = 'GMS_rate';

// For Quality
const QUALITY_MAIN_KEY = 'GMS_quality';
// For items
const ITEM_MAIN_KEY = 'GMS_Item';
// For Stones
const STONE_MAIN_KEY = 'GMS_Stone';
// For Tags
const TAG_MAIN_KEY = 'GMS_Tags';

module.exports = Object.freeze({
    // Users.
    GET_ALL_USERS: `${USER_MAIN_KEY}:ALL_USERS`,
    // Customers
    GET_ALL_CUSTOMERS: `${CUSTOMER_MAIN_KEY}:ALL_CUSTOMERS`,
    GET_CUSTOMER_ID: `${CUSTOMER_MAIN_KEY}:CUSTOMER_BY_ID`,
    // Rate
    GET_ALL_RATES: `${RATE_MAIN_KEY}:ALL_RATES`,
    GET_RATE_ID: `${RATE_MAIN_KEY}:RATE_BY_ID`,
    // QUALITY
    GET_ALL_QUALITY: `${QUALITY_MAIN_KEY}:ALL_QUALITY`,
    GET_QUALITY_ID: `${QUALITY_MAIN_KEY}:QUALITY_BY_ID`,
    // ITEMS
    GET_ALL_ITEMS: `${ITEM_MAIN_KEY}:ALL_ITEMS`,
    GET_ITEM_ID: `${ITEM_MAIN_KEY}:ITEM_BY_ID`,
    // STONES
    GET_ALL_STONES: `${STONE_MAIN_KEY}:ALL_STONES`,
    GET_STONE_ID: `${STONE_MAIN_KEY}:STONE_BY_ID`,
    // TAGS
    GET_ALL_TAGS: `${TAG_MAIN_KEY}:ALL_TAGS`,
    GET_TAG_ID: `${TAG_MAIN_KEY}:TAG_BY_ID`,

});
