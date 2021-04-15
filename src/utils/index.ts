import { DeviceInfo, DeviceType } from '@/types';

/**
 * 判断设备是否被支持
 * @param uiid 设备的 uiid
 * @returns 是否支持设备
 */
export function deviceIsSupport(device: DeviceInfo): boolean {
    if (device.type === 1) {
        return true;
    }

    if (device.type === 2 && device.deviceName && device.manufacturer) {
        return true;
    }

    const supported = [1, 2, 3, 4, 6, 7, 8, 14, 15, 22, 32, 36, 59, 77, 103, 112, 113, 114];
    if (device.uiid && ~supported.indexOf(device.uiid)) {
        return true;
    }
    return false;
}

/**
 * 判断设备登录后是否被支持
 * @param isLogin 用户是否登录
 * @param type 设备类型
 * @returns 是否登录后支持
 */
export function deviceIsLoginAva(isLogin: boolean, type: number): boolean {
    return type === DeviceType.LAN && !isLogin;
}
