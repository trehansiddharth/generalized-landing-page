/* eslint-disable import/prefer-default-export */
export function handleError(e: Error): void {
  console.error(e);
}

declare function gtag(a: string, b: string, c: any): any;
/**
 * Function that registers a click on an outbound link in Analytics.
 * This function takes a valid URL string as an argument, and uses that URL string
 * as the event label. Setting the transport method to 'beacon' lets the hit be sent
 * using 'navigator.sendBeacon' in browser that support it.
 */
export function getOutboundLink(url: string) {
  gtag('event', 'click', {
    event_category: 'outbound',
    event_label: url,
    transport_type: 'beacon',
    event_callback: () => {
      console.log(url);
    },
  });
}