function delayedPromise(): Promise<void>
{
    return new Promise<void>(
        (resolve: ()=>void, reject: ()=>void)=>
        {
            function afterTimeout()
            {
                resolve();
            }
            setTimeout(afterTimeout, 1000);
        }
    );
}

function callDelayedPromise()
{
    console.log(`wywołujemy obietnicę delayedPromise`);
    delayedPromise().then(
        () => { console.log(`delayedPromise.then()`) }
    );
}

callDelayedPromise()