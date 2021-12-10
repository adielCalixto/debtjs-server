const permissions = {
    "usuario": {
        "canCreate": [],
        "expires": "10d",
        "canUpdate": [ "usuario" ],
        "canDelete": [ "usuario" ],
    },

    "admin": {
        "canCreate": [ "usuario", "gestor" ],
        "expires": "30m",
        "canUpdate": [ "admin", "usuario", "gestor" ],
        "canDelete": [ "usuario", "gestor" ],
    },

    "gestor": {
        "canCreate": [ "usuario" ],
        "expires": "1d",
        "canUpdate": [ "usuario", "gestor" ],
        "canDelete": [ "usuario" ],
    }
}

module.exports = permissions