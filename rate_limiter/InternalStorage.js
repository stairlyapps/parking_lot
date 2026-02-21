export class InternalStorage{

    /**
     * 
     * type -> "Timestamps",
     * type -> "token"
     * type -> "queue"
     */
    constructor(type, rateLimiter){
        this.type = type;
        this.rateLimiter = rateLimiter;
        this.storage = {};
    }
}


export class TimeStampStorage extends InternalStorage{

    refresh(){
        /**
         * 
         * triggers every min and clears all timestamps
         */

        for(let k in this.storage){
            this.storage[k] = [];
        }
    }

    // addKey(rateLimiterKey){
    //     /**
    //      * storage = {
    //      * key1: [t1, t2, t3]
    //      * }
    //      */
    //     if(!this.storage[rateLimiterKey]){
    //         this.storage[rateLimiterKey] = Date.now();
    //     }
    // }

    isHitAllowed(rateLimiterKey){
        const maxReq = this.rateLimiter.getMaxReq;

        if(!this.storage[rateLimiterKey] || this.storage[rateLimiterKey].length < maxReq ){
            return true;
        }
        return false;
    }   

    hit(rateLimiterKey){
        if(!this.storage[rateLimiterKey]){
            this.storage[rateLimiterKey] = Date.now();
        }
        else{
        this.storage[rateLimiterKey].push( Date.now());
        }
    }
}

export class TokenStorage extends InternalStorage{
    
    refresh(){
        /**
         * 
         * triggers every min and clears all timestamps
         */

        const maxReq = this.rateLimiter.getMaxReq;
        for(let k in this.storage){
            this.storage[k] = maxReq;
        }
    }


    isHitAllowed(rateLimiter,rateLimiterKey){
        const maxReq = this.rateLimiter.getMaxReq;

        if(this.storage[rateLimiterKey] < maxReq ){
            return true;
        }
        return false;
    } 

    hit(rateLimiterKey){
        const maxReq = this.rateLimiter.getMaxReq;
        if(!this.storage[rateLimiterKey]){
            this.storage[rateLimiterKey] = maxReq;
        }
        else{
        this.storage[rateLimiterKey]--;
        }
    }
}


export class QueueStorage extends InternalStorage{
    
    refresh(){
    }


    isHitAllowed(rateLimiter,rateLimiterKey){
        const maxReq = this.rateLimiter.getMaxReq;

        if(this.storage[rateLimiterKey] < maxReq ){
            return true;
        }
        return false;
    } 

    hit(rateLimiterKey){
        const maxReq = this.rateLimiter.getMaxReq;
        if(!this.storage[rateLimiterKey]){
            this.storage[rateLimiterKey] = maxReq;
        }
        else{
        this.storage[rateLimiterKey]--;
        }
    }
}