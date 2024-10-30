"use strict";
/****************************************** Interfaces ****************************************/
class Madhavi {
    constructor(userName, userEmail, userMobile, userAddress) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userMobile = userMobile;
        this.userAddress = userAddress;
    }
    getUserDetails() {
        return { name: this.userName, email: this.userEmail, mobile: this.userMobile };
    }
}
