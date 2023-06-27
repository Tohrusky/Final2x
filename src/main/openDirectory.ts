import { dialog } from 'electron'

export function openDirectory(event, p): void {
  dialog
    .showOpenDialog({
      properties: [p]
    })
    .then((result) => {
      console.log(result)
      event.sender.send('selectedItem', result.filePaths[0])
    })
}
