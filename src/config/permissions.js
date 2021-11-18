module.exports = {
    "usuario": {
        "canCreate": [],
        "expires": "10d",
    },

    "admin": {
        "canCreate": [ "usuario", "gestor" ],
        "expires": "30m",
    },

    "gestor": {
        "canCreate": [ "usuario" ],
        "expires": "1d",
    }
}