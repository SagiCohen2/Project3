
class LoginInfo {
        public id:number;
        public email:string;
        public password:string;
        public role:string;

        constructor(email:string,password:string){
            this.email=email;
            this.password=password;
        }
}

export default LoginInfo;