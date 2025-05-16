type DeviceInfo = {
  os: 'Mac' | 'Windows' | 'Linux';
};

/**
 * Identifies the user's device and returns the device information.
 */
export const getDeviceInfo = (): DeviceInfo | undefined => {
  if (typeof navigator === 'undefined') return;

  const { userAgent } = navigator;

  const isMac = /Mac|mac/.test(userAgent);
  const isWindows = /Win|win/.test(userAgent);
  const isLinux = /Linux|linux|Unix|unix/.test(userAgent);

  let os: DeviceInfo['os'] = 'Mac';

  if (isMac) {
    os = 'Mac';
  }

  if (isWindows) {
    os = 'Windows';
  }

  if (isLinux) {
    os = 'Linux';
  }

  return { os };
};
