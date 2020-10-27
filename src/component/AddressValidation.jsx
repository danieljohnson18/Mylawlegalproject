import React from 'react';


export default function addressValidator(address) {
    if (address === "123 1st St., New York, NY") {
      return true;
    }
    return false;
}

