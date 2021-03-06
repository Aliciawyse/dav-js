import BaseMessageParams from '../MessageParams';
/**
 * @class The Class boat-charging/StatusRequestMessageParams represent the parameters of boat-charging status request message.
 */
export default class MessageParams extends BaseMessageParams {
    private static _type = 'status_request_message';

    public static getMessageType(): string {
        return MessageParams._type;
    }

    constructor(values?: Partial<MessageParams>) {
        super(MessageParams._type, values);
    }

    public serialize() {
        const formattedParams = super.serialize();
        return formattedParams;
    }

    public deserialize(json: any): void {
        super.deserialize(json);
    }
}
