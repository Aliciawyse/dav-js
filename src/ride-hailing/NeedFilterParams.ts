import BaseNeedFilterParams from '../NeedFilterParams';
import ProtocolTypes from './ProtocolTypes';

/**
 * @class The Class ride-hailing/NeedFilterParams represent the parameters that used to filter ride-hailing needs.
 */
export default class NeedFilterParams extends BaseNeedFilterParams {

    private static _protocol = 'ride_hailing';
    private static _type = 'need_filter';

    public static getMessageType(): string {
        return NeedFilterParams._type;
    }

    public static getMessageProtocol(): string {
        return NeedFilterParams._protocol;
    }

    constructor(values?: Partial<NeedFilterParams>) {
        super(NeedFilterParams._protocol, NeedFilterParams._type, values);
        if (!!values) {
            if (!values.location || !values.location.lat || !values.location.long || !values.radius) {
                throw new Error('NeedFilter lack of essential parameters');
            }
        }
    }

    public getProtocolTypes() {
        return ProtocolTypes;
    }

    public serialize() {
       const formattedParams = super.serialize();
       return formattedParams;
    }

    public deserialize(json: any): void {
        super.deserialize(json);
    }
}
