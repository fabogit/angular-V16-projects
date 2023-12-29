import { app, BrowserWindow } from 'electron';

function createWindow() {
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
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
