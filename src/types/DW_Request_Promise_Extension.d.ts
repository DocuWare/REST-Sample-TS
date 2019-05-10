import { RequestPromiseOptions } from "request-promise-native";
import { IncomingMessage } from "http";

declare namespace DWRequestPromiseExtension{
    
    /**
     * Just the definintion of StatusCodeError return
     *
     * @interface IStatusCodeError
     */
    interface IStatusCodeError {
        error: string;
        message: string;
        options: RequestPromiseOptions;
        response: IncomingMessage;
        stack: string;
        statusCode: number;
        retryAfter: number | null | undefined;
    }

    /**
     * Original IncomingMessage does not contain body property, so we enhance it
     *
     * @interface ILogonResponseWrapper
     * @extends {IncomingMessage}
     */
    interface ILogonResponseWrapper extends IncomingMessage{
        body: DWRest.ILogonResponse
    }

    /**
     * Original IncomingMessage does not contain body property, so we enhance it
     *
     * @interface IMessageWithBody
     * @extends {IncomingMessage}
     */
    interface IMessageWithBody extends IncomingMessage{
        body: any;
    }
}