import { app, BrowserWindow, ipcMain } from 'electron';
import * as fs from 'fs';
import * as path from 'path';

// The file that keeps the content of the editor is the content.html file that exists inside the reserved userData folder.
// the userData folder is an alias for a special purpose system folder, different for each OS, and it is used to store application-specific files such as configuration
const contentFile = path.join(app.getPath('userData'), 'content.html');

function createWindow() {
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			// Expose the ipcRenderer interface,
			// which we will need to communicate with the main process
			nodeIntegration: true,
			contextIsolation: false,
		},
	});
	// The index.html file that we pass in loadFile is the main HTML file of the Angular application.
	// It is loaded using the file protocol, which is why we removed the <base> tag
	mainWindow.loadFile('index.html');
}

// The app object is the global object of our desktop application,
// just like the window object on a web page.
// It exposes a whenReady Promise that, when resolved,
// allows us to run any initialization logic for our application,
// including creating the window.
app.whenReady().then(() => {
	createWindow();
});

// Call the handle method of the ipcMain object to start listening for requests in the getContent channel
ipcMain.handle('getContent', () => {
	// When the main process receives a request in this channel, it uses the existsSync method of the fs library to check whether the file with the content of the editor exists already.
	// If it exists, it reads it using the readFileSync method and returns its content to the renderer process
	if (fs.existsSync(contentFile)) {
		const result = fs.readFileSync(contentFile);
		return result.toString();
	}
	return '';
});

ipcMain.handle('setContent', ({ }, content: string) => {
	fs.writeFileSync(contentFile, content);
});
