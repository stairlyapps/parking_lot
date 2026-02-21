export class rateLimitStrategy{

    constructor(internalStorage){
        this.internalStorage = internalStorage;
    }

}


export class fixedWindowStrategy extends rateLimitStrategy{


}

export class tokenBcktStrategy extends rateLimitStrategy{

    
}

export class slidingWindowStrategy extends rateLimitStrategy{

    
}

export class leakyBcktStrategy extends rateLimitStrategy{

    
}