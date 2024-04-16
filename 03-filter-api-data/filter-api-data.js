/*input arrays- apiData, mandatoryKeys; ouput apiDataObject - filteredData
 * if apidata includes all mandatory keys -> is true, return filteredData
 *
 */
function filterApiData(apiData, mandatoryKeys) {
  // declare container to add objects scope general,  start empty
  let filteredData = [];
  //apiDataObj - parameter for the anonymous callback function
  // forEach(callbackFn)
  apiData.forEach(function (apiDataObj) {
    let hasAllKeys = true;

    // iterate through mandatory keys.

    for (let i = 0; i < mandatoryKeys.length; i++) {
      let mandatoryKey = mandatoryKeys[i];

      // for the case even one MK is missing, false, break
      /* The in operator returns true if
        the specified property is in the specified object
        or its prototype chain. anatomy: prop in object. similar:include for array
        */
      if (!(mandatoryKey in apiDataObj)) {
        hasAllKeys = false;
        break;
      }
    }
    // hasAllKeys = true, except for the if condition
    if (hasAllKeys) {
      filteredData.push(apiDataObj);
    }
  });

  return filteredData;
}
