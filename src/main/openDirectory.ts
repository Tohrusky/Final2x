import { dialog } from 'electron'

/**
 * Open a directory or file/multiple files
 * @param event
 * @param p
 */
export function openDirectory(event, p: Array<any>): void {
  dialog
    .showOpenDialog({
      properties: p
    })
    .then((result) => {
      console.log(result)
      event.sender.send('selectedItem', result.filePaths)
    })
    .catch((err) => {
      console.log(err)
    })
}
