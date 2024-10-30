/****************************************** Interfaces ****************************************/

interface UserInterface {
    userName: string
    userEmail: string
    userMobile: number
}

interface UserAddress {
    userAddress: string,
    getUserDetails(): object;
}

class Madhavi implements UserInterface, UserAddress {
    constructor(
        public userName: string,
        public userEmail: string,
        public userMobile: number,
        public userAddress: string,
    ) {
    }

    getUserDetails() {
        return { name: this.userName, email: this.userEmail, mobile: this.userMobile }
    }
}