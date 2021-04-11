import { Engine } from "./Engine";

window.onload = () => {
	let engine: Engine = new Engine(1);

	let end:boolean = false;
	let ile: number = 0;
	
	while(end!=true)
	{
		ile++;
		
		if(ile>24)
		{
			end=true;
		}
		else
		{
			engine.showMessage('hello world');
		}
	}
	
}
