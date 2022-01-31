/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1A_SignUp_Or_SignIn_Migration_Seamless",
        editProfile: "B2C_1A_ProfileEdit"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://CDSEGDEV.b2clogin.com/CDSEGDEV.onmicrosoft.com/B2C_1A_SignUp_Or_SignIn_Migration_Seamless",
        },
        editProfile: {
            authority: "https://CDSEGDEV.b2clogin.com/CDSEGDEV.onmicrosoft.com/B2C_1A_ProfileEdit"
        }
    },
    authorityDomain: "CDSEGDEV.b2clogin.com"
}