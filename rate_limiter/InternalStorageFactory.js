import { InternalStorage, QueueStorage, TimeStampStorage, TokenStorage } from "./InternalStorage";

export class InternalStorageFactory{

    static create(internalStorageType, rateLimiter){
        switch(internalStorageType){
            case "TIMESTAMP":
                return new TimeStampStorage("TOKEN", rateLimiter);
            case "TOKEN":
                return new TokenStorage("TOKEN", rateLimiter);
            case "QUEUE":
                return new QueueStorage("TOKEN", rateLimiter);
            default:
                return null;
        }
    }
}