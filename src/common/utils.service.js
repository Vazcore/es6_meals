class UtilsService {
    constructor() {        
        this.config = {
            img_rsr: "https://images.aerlingus.com/resrc-origin/",
            host: "https://www.aerlingus.com"
        };
    }
    parseResponse(resp) {
        return resp.data.data;
    }    
    getConfig() {
        return this.config;
    }
    getRsrImage(src, width, height) {
        return this.config.img_rsr + 'c=ar1410x' + height + '/s=w' + width + ',pd1/o=75/' + src;
    }
}

export {UtilsService};