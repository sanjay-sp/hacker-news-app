export const urlConverter = (url) => {
    
var hostname = new URL(url).hostname;

return hostname;
}