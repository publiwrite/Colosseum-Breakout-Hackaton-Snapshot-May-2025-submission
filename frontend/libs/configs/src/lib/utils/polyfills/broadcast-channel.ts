export const isBroadcastChannelSupported =
  typeof BroadcastChannel !== 'undefined';

export const BroadcastChannelPolyfill = isBroadcastChannelSupported
  ? BroadcastChannel
  : class {
      constructor(name: string) {
        // No-op when BroadcastChannel is not supported
        console.log('BroadcastChannel not supported in this browser');
      }
      postMessage = (message: any) => {
        // No-op when BroadcastChannel is not supported
        console.log('BroadcastChannel not supported in this browser');
      };
      addEventListener = (
        type: string,
        listener: (event: MessageEvent) => void,
        options?: boolean | AddEventListenerOptions,
      ) => {
        // No-op when BroadcastChannel is not supported
        console.log('BroadcastChannel not supported in this browser');
      };
      removeEventListener = (
        type: string,
        listener: (event: MessageEvent) => void,
        options?: boolean | EventListenerOptions,
      ) => {
        // No-op when BroadcastChannel is not supported
        console.log('BroadcastChannel not supported in this browser');
      };
    };
