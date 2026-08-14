/**
 * Ponte de tracking.
 *
 * O HTML original marcava cada elemento interativo com `data-event`
 * (ex.: data-event="hero_cta_start_trial") pensando na integração
 * futura com o Croct. Isso foi preservado: os componentes continuam
 * emitindo os mesmos nomes de evento, e o <EventTracker /> (montado no
 * layout) escuta cliques/submits de forma delegada em [data-event].
 *
 * Para plugar o Croct de verdade, basta preencher `sendToProvider`.
 */

export type EventPayload = Record<string, unknown>;

declare global {
  interface Window {
    croct?: {
      track: (event: string, payload?: EventPayload) => Promise<unknown> | void;
    };
  }
}

function sendToProvider(event: string, payload?: EventPayload) {
  if (typeof window === "undefined") return;

  // Croct: eventos customizados vão em `eventOccurred`.
  // Confirme a assinatura na versão do SDK que você usar antes de ativar.
  // window.croct?.track("eventOccurred", { name: event, details: payload });

  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.debug("[track]", event, payload ?? {});
  }
}

export function track(event: string, payload?: EventPayload) {
  sendToProvider(event, payload);
}
