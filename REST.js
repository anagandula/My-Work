let allUserAddresses = [];

let seeUserAdresses = (userID,...allUserAdress) => { //used REST concept here ... these dots performs rest operation in called function
    //CSV values are converted into array values by usng ... dots in called function
     let customAdress = {userID,allUserAdress};//used object literals concept here
     allUserAddresses.push(customAdress);
     console.log(allUserAddresses);  
     return allUserAddresses;
}

let firstAdress = {'street' : 'deepthi sree ngr',
                   'place' : 'hyderabad',
                   'flat' : 303
                  };

let secondAdress = {'street' : 'madinaguda',
                   'place' : 'hyderabad',
                   'flat' : 403
                   };

let thirdAdress = {'street' : 'darmaram',
                   'place' : 'hyderabad',
                   'flat' : 342
                   };

let getUserAdress = seeUserAdresses('sairaj',firstAdress,secondAdress,thirdAdress);