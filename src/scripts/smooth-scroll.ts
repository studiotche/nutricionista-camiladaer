/**
 * Scroll suave (Lenis) — adaptação do plugin WordPress "Scroll Suave"
 * para o site Astro.
 *
 * Mesma configuração do plugin:
 * - só ativa no desktop (viewport >= 1025px)
 * - duration 1.2 + easing exponencial
 * - âncoras (#...) roladas via lenis.scrollTo
 * - fallback nativo quando o Lenis não carrega
 */
import type Lenis from "lenis";

const MIN_WIDTH = 1025;
const HEADER_OFFSET = -88; // compensa o header fixo (scroll-padding-top)
const LENIS_DURATION = 1.2;

function getViewportWidth(): number {
  return window.innerWidth || document.documentElement.clientWidth || 0;
}

function resolveTarget(hash: string): HTMLElement | null {
  let target: HTMLElement | null = null;
  try {
    target = document.querySelector<HTMLElement>(hash);
  } catch {
    // hash inválido como seletor — tenta por id abaixo
  }
  if (!target && hash.length > 1) {
    target = document.getElementById(hash.slice(1));
  }
  return target;
}

function fallbackSmoothTo(target: HTMLElement): void {
  const top =
    target.getBoundingClientRect().top + window.pageYOffset + HEADER_OFFSET;
  try {
    window.scrollTo({ top, behavior: "smooth" });
  } catch {
    window.scrollTo(0, top);
  }
}

function wireAnchors(lenis: Lenis): void {
  document.addEventListener(
    "click",
    (event) => {
      const el = event.target as HTMLElement | null;
      const anchor = el?.closest?.(
        'a[href*="#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      if (!href || href === "#" || href === "#0") return;

      const hash =
        anchor.hash || (href.includes("#") ? href.slice(href.indexOf("#")) : "");
      if (!hash || hash === "#") return;

      const target = resolveTarget(hash);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, { offset: HEADER_OFFSET });

      if (history.pushState) {
        history.pushState(null, "", hash);
      } else {
        location.hash = hash;
      }

      // acessibilidade: leva o foco junto no skip-link
      if (hash === "#conteudo" && !target.hasAttribute("tabindex")) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    },
    { passive: false }
  );
}

function scrollToHashOnLoad(lenis: Lenis): void {
  if (!location.hash) return;
  window.setTimeout(() => {
    const target = resolveTarget(location.hash);
    if (!target) return;
    try {
      lenis.scrollTo(target, { offset: HEADER_OFFSET });
    } catch {
      fallbackSmoothTo(target);
    }
  }, 30);
}

async function initSmoothScroll(): Promise<void> {
  if (getViewportWidth() < MIN_WIDTH) return;

  let lenis: Lenis;
  try {
    const { default: LenisCtor } = await import("lenis");
    lenis = new LenisCtor({
      duration: LENIS_DURATION,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });
  } catch {
    // se o Lenis falhar, o CSS nativo (scroll-behavior) assume
    return;
  }

  function raf(time: number): void {
    try {
      lenis.raf(time);
    } catch {
      // ignora erro isolado de frame
    }
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  wireAnchors(lenis);
  window.addEventListener("load", () => scrollToHashOnLoad(lenis));
}

void initSmoothScroll();
