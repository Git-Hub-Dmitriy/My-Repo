type Callback = (entry: IntersectionObserverEntry) => void;

let observer: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, Callback>();

function getObserver() {
  if (!observer && typeof window !== "undefined") {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cb = callbacks.get(entry.target);
            if (cb) {
              cb(entry);
              callbacks.delete(entry.target);
              observer?.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );
  }
  return observer;
}

export function observeElement(el: Element, cb: Callback) {
  const obs = getObserver();
  if (!obs) return;
  callbacks.set(el, cb);
  obs.observe(el);
}

export function unobserveElement(el: Element) {
  const obs = getObserver();
  if (!obs) return;
  callbacks.delete(el);
  obs.unobserve(el);
}
