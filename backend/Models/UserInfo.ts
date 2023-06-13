
class UserInfo {
        public userKey:number;
        public fullName:string;
        public email:string;
        public password:string;
        public role:string;

        constructor(userKey:number,fullName:string,email:string,password:string,role:string){
            this.userKey=userKey;
            this.fullName=fullName;
            this.email=email;
            this.password=password;
            this.role=role;
        }
}

export default UserInfo;