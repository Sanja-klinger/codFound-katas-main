function extractClassName(sessionTitle) {
  if (!sessionTitle.includes("Live-Session Class")) {
    return null;
  }

  let shortString;
  shortString = sessionTitle.slice(19);

  let arrShort = shortString.split(" ");

  let yyyy;
  yyyy = arrShort[0];

  if (isNaN(yyyy) || yyyy.length !== 4 || yyyy < 1980 || yyyy > 2025) {
    return null;
  }

  let month = arrShort[1];

  if (
    month !== "Januar" &&
    month !== "Februar" &&
    month !== "März" &&
    month !== "Maerz" &&
    month !== "April" &&
    month !== "Mai" &&
    month !== "Juni" &&
    month !== "Juli" &&
    month !== "August" &&
    month !== "September" &&
    month !== "Oktober" &&
    month !== "November" &&
    month !== "Dezember"
  ) {
    return null;
  }

  let MM;

  if (month === "Januar") {
    MM = "01";
  } else if (month === "Februar") {
    MM = "02";
  } else if (month === "März" || month === "Maerz") {
    MM = "03";
  } else if (month === "April") {
    MM = "04";
  } else if (month === "Mai") {
    MM = "05";
  } else if (month === "Juni") {
    MM = "06";
  } else if (month === "Juli") {
    MM = "07";
  } else if (month === "August") {
    MM = "08";
  } else if (month === "September") {
    MM = "09";
  } else if (month === "Oktober") {
    MM = "10";
  } else if (month === "November") {
    MM = "11";
  } else if (month === "Dezember") {
    MM = "12";
  }

  let yyyyHyphenMMString;
  yyyyHyphenMMString = yyyy + "-" + MM;

  return yyyyHyphenMMString;
}

console.log(extractClassName("Live-Session Class 2022 januar"));
