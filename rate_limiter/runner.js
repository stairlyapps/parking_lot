
import {
    RateLimiterKey,
    rateLimitStrategy,
    fixedWindowStrategy,
    RateLimiter
} from './index.js';


function sleep(ms){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res();
        }, ms)
    })
}

async function main() {
    const user1 = 'user1';

    const user2 = 'user2';

    const rateLimitStrategy = new fixedWindowStrategy();

    const rateLimiter = new RateLimiter(rateLimitStrategy, 2, 1000);

    const user1Key = new RateLimiterKey(user1);

     const user2Key = new RateLimiterKey(user2);

    let firstHitU1 = rateLimiter.allow(user1Key);

    let secondHitU1 = rateLimiter.allow(user1Key);

    await sleep(2000);

    let thirdHitU1 = rateLimiter.allow(user1Key);

    let firstHitU2 = rateLimiter.allow(user2Key);

    let secondHitU2 = rateLimiter.allow(user2Key);

    await sleep(100);

    let thirdHitU2 = rateLimiter.allow(user2Key);


    console.log("for first user",firstHitU1, secondHitU1, thirdHitU1); //true, true, true


    console.log("for second user",firstHitU2, secondHitU2, thirdHitU2); //true, true, false
    

}

main();