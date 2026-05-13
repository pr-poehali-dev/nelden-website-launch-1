import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const STORAGE_KEY = 'cookie_consent_v1';
const METRIKA_ID = 101026698;

type YmFn = ((...args: unknown[]) => void) & { a?: unknown[]; l?: number };

declare global {
  interface Window {
    ym?: YmFn;
  }
}

function loadYandexMetrika() {
  if (typeof window === 'undefined') return;
  if (document.getElementById('ym-tag')) return;

  const w = window as Window & { ym?: YmFn };

  if (!w.ym) {
    const queue: unknown[] = [];
    const stub = function (...args: unknown[]) {
      queue.push(args);
    } as YmFn;
    stub.a = queue;
    stub.l = Date.now();
    w.ym = stub;
  }

  const script = document.createElement('script');
  script.id = 'ym-tag';
  script.async = true;
  script.src = 'https://mc.yandex.ru/metrika/tag.js';
  document.head.appendChild(script);

  w.ym(METRIKA_ID, 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: false,
  });
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'accepted') {
      loadYandexMetrika();
    } else if (!saved) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    loadYandexMetrika();
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-50 animate-fade-in">
      <div className="max-w-5xl mx-auto bg-white border border-border rounded-2xl shadow-2xl p-5 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <div className="flex items-start gap-3 flex-1">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Icon name="Cookie" className="text-accent" size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-primary text-sm md:text-base mb-1">Файлы cookie</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Мы используем cookie и сервис «Яндекс.Метрика», чтобы сайт работал лучше.
                Продолжая, вы соглашаетесь с{' '}
                <Link to="/privacy" className="text-accent hover:underline font-semibold">
                  Политикой обработки персональных данных
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="flex gap-2 md:gap-3 flex-shrink-0">
            <Button
              variant="outline"
              onClick={decline}
              className="flex-1 md:flex-none border-border hover:bg-muted text-xs md:text-sm h-10 md:h-11 px-4 md:px-6"
            >
              Отклонить
            </Button>
            <Button
              onClick={accept}
              className="flex-1 md:flex-none bg-accent hover:bg-accent/90 text-white font-semibold text-xs md:text-sm h-10 md:h-11 px-4 md:px-6"
            >
              Принять
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}