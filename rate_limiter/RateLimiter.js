export class RateLimiter{

    constructor(rateLimitStrategy, maxReq, windowMs){
        this.rateLimitStrategy = rateLimitStrategy;
        this.maxReq = maxReq;
        this.windowMs = windowMs;
    }

    getMaxReq(){
        return this.maxReq;
    }
}



/**
 * 
 * 
 * 
 * rate limiter -> startegy
 * 
 * 
 */