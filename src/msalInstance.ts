declare global {
    var Msal: any;
}

const applicationConfig = {
    auth: {
        clientId: '58503fd3-6d1d-4eb2-a3e7-f2c1a761480b',
        // authority: "Enter_the_Cloud_Instance_Id_HereEnter_the_Tenant_Info_Here",
        // eslint-disable-next-line no-restricted-globals
        redirectUri: location.href,
    },
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: true, // Set this to "true" if you are having issues on IE11 or Edge
    },
};

const tokenRequest = {
    scopes: ['openid', 'profile', 'User.ReadWrite',
        'User.Read', 'Sites.ReadWrite.All', 'Contacts.ReadWrite',
        'Calendars.Read', 'Mail.Read', 'Device.Read',
        'Files.Read.All', 'Mail.Read.Shared', 'People.Read',
        'People.Read', 'Notes.Read.All', 'Tasks.Read', 'Mail.ReadWrite'],
};

const clientApplication = new Msal.UserAgentApplication(applicationConfig);

export async function login() {

    let idToken, tokenResponse;
    try {
        idToken = await clientApplication.loginPopup(tokenRequest);
    } catch (e) {
        throw new Error('Error during login:\n' + e);
    }
    try {
        tokenResponse = await clientApplication.acquireTokenSilent(tokenRequest);
    } catch (e) {
        try {
            tokenResponse = await clientApplication.acquireTokenPopup(tokenRequest)
        } catch (e) {
            throw new Error('Error acquiring the popup:\n' + e);
        }
    }
    return tokenResponse;
}