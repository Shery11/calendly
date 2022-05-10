import { ServiceAccount } from "firebase-admin";

export const APP_CONFIG = {

    PROD: false, //change to false and run npm run build:serve to run the code locally on PORT replace with locahost:5000
    APP_NAME: "CALENDLY",
    PORT: 5000,

    FIREBASE: {
        "type": "service_account",
        "project_id": "calendly-613f5",
        "private_key_id": "4d9579a7e3c6c02bee81dcecc2ebe76929c5f064",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDFU2z06vK1xNFA\n3NBlUuC6eFa79k7f7UysA+2uyRIOMK9Bx89NlOfe33cl4u6pRGu8BaMYw/yz77WY\nxUzvnQ21ucYkelQDcE1K4GFCmwvprKHHSkS4Y15/K9BowOksk9BljZlTlrC8PErA\nkjxKVY6T0tJO2XQOO2eZvdk6mwFNAYw1MEXmDMqM5l10SXDafapZIU2ffmLjoXoj\n9nRcdxXYcf6oaaj/rWz/4nIUPnPSxTeh4jl2ICizGN9syn6MllSzPMbtN7sSrjHD\nHq575ALvoBQyXk0oDjF8ZM7KsSSdV+6Vax26nmJUCNRwotdS9wmomoRWNKXOFxNu\n9REFK0LjAgMBAAECggEAQjJB94nIAV10+2b4TD144WVUZ3ryK+HeGki5GC0g7vy7\nFnyy2SpufNCHloCiIsuuvqU/eSPqZuywBX+O10VfH4siYwNcosiuTUOnrSH5ZZtB\nrGsIUbkYLt5ibHnm30r5GtBdUvLW+Fbblu2X5zH7gjCz17rQWaPpFeTf9m6giZW3\n8xK5/ANbnMeiZmeHAp6/N4xTDXJdz1iQmE+ESQO2OnUH08Z6KhAaUycv8jqTlGZy\nfsJJ2B7c97/fwYtzi9qjOeierNeDykI9EhdsAeZH/C5SpSV+hRCZtqfglaZOufXD\nThnyhZONpzDGiBZTn5BNoD9S9OaCDpn1VZ/tufjehQKBgQDoWnFKJmSM9Qc03kRu\nHECCY5XvkOGoqLfwwec1P6M3ivnV9dNhjjwg9SBLxSo94QE0tgVGs63tTThqX9q2\nMzMqp2/xpGimZS24LcZ6pLetFJTm/hVQjaI89iPKpIMXjFMjuDFiqpAJv1Ysb1ro\ngPK35zv/5TX44tiqFVdxP4YoZwKBgQDZaGfE1SRsPNdxOJgvwF3jrk+/rvCeqQ98\nOgskEae6k6UdAODERce27mqqtVql0hH+JRcY74MV8w0KzLSqLoYFDW0fvh7RTtdg\nWkw2vHPcN3V0KFS0W2oWwUJSx/Crwoy3TcMfg/uzhJhSGM24bq60UNMH8lBdXZaL\nxlJG+0m0JQKBgQDRXl3jQQEt+sUJoJbs2UxPscizXEvanF1S9oaOds9uBy7k22Qj\n7fTEhd0aKYnMxGk/xByw/stkn0aMo98CetRKRSIcDde2yEkQQz8r2C0iKv+Zva4b\nLeTZJbpOqTrvByULdLgbfjHYdq8Bzz2NcFRF3nk0NqgRouc1K5HlnCYZVQKBgBlp\n//9dXxWcAx9EG14xoYgU/1OL8qrJXnsKGfVMbwv7aGi8ionHEnKK6kMsUf1iUiIg\nWdPbY7p0IAksJs5iA96hVClKwzV6fujPhWs8mlqazQsYD9bJfNxOGR+uKa8aXfKr\nj2ymtAynKlsmdR3jKl7/t7uNEuHnJ8sNEt8jTtlVAoGBAKjdXl2Fh3I9nLev0djR\n+MmylZhXDJuLwzncPE/xjgFb0DlhqsoVfkWKQmou9/zuoPe83zQCLdJolyv7WiMD\nZWpbDwR7gX+5dIWZcKW4enh+N7tpVktgDVDyUTQT0VpBagt7S7fK32uWh06/DuFq\nJKHVDmYBvvNNhXCBlDz9bU4y\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-hcner@calendly-613f5.iam.gserviceaccount.com",
        "client_id": "115924543537297177638",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-hcner%40calendly-613f5.iam.gserviceaccount.com"
    } as ServiceAccount
}


