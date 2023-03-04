//asyn and defer in script tags in HTML
//async indicates that the script should be downloaded asynchronously, 
//meaning that it can be downloaded in the background while the rest of the page continues to load. 
//Once the script has been downloaded, it will be executed as soon as possible, but not necessarily in order 
//with other scripts or the HTML content. This is useful for scripts that don't need to be executed in a specific 
//order or don't depend on other scripts or the HTML content.

//defer also indicates that the script should be downloaded asynchronously, 
//but it should not be executed until the HTML content has finished loading. 
//This ensures that the script is executed in the order it appears in the HTML file, 
//and after the DOM has been fully parsed. This is useful for scripts that need to access and
// manipulate the HTML content, or depend on other scripts that have already been loaded.