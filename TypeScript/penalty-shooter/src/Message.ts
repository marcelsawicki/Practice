export class Message {
  private _container!: HTMLElement;

constructor() {
  let container:HTMLElement|null = document.getElementById('main');
  
  if(container!=null)
  {
    this._container = container;
  }
  
}
  public ShowMessage(content: string)
  {
    
    let childContainer = document.createElement('div');
    childContainer.innerText = content;
    this._container.appendChild(childContainer);
  }
}