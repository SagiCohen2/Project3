
class UserInfo {
        public id:number;
        public fullName:string;
        public email:string;
        public password:string;
        public role:string;

        constructor(fullName:string,email:string,password:string){
            this.fullName=fullName;
            this.email=email;
            this.password=password;
        }
}

export default UserInfo;