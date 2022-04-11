const {app, BrowserWindow} = require('electron'); 

let mainWindow; 

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 700, 
        height: 600, 
    }); 

    mainWindow.loadFile('index.html')

}

app.whenReady().then(createWindow); 

