{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Chrome", // ajouter un nom a la conf
            "type": "chrome", // On le lance avec chrome, donc le type est chrome
            "request": "launch", 
            "url": "http://localhost:3000", // URL d'acces  
            "webRoot": "${workspaceRoot}/src" // Où se situe le point d'entrée 
        }
    ]
}