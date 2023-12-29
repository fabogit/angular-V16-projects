import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electronyzer';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(private electronService: ElectronService) { }

  /**
   * Will be called to get the content of the editor from the filesystem.
   *
   * We use the `invoke` method of the `ipcRenderer` property, passing the name of the communication channel as a parameter.
   * The result of the `getContent` method is a Promise object of the string type, since the content of the editor is raw text data.
   * The `invoke` method initiates a connection with the main process through the `getContent` channel.
   */
  getContent(): Promise<string> {
    return this.electronService.ipcRenderer.invoke('getContent');
  }

  /**
   * Will be called to save the content of the editor to the filesystem.
   *
   * The setContent method calls the `invoke` method of the `ipcRenderer` object again but with a different channel name.
   * It also uses the second parameter of the `invoke` method to pass data to the main process.
   * In this case, the `content` parameter will contain the content of the editor.
   */
  setContent(content: string) {
    this.electronService.ipcRenderer.invoke('setContent', content);
  }


}
