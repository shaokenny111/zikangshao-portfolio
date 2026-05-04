(function () {
  const STORE_KEY = 'lang';
  const SUPPORTED = ['en', 'zh'];
  const CV = { en: './Zikang_Shao_CV_EN.pdf', zh: './Zikang_Shao_CV_ZH.pdf' };
  let dict = null;

  const get = (obj, path) => path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj);

  function pickInitial() {
    const u = new URL(location.href).searchParams.get('lang');
    if (SUPPORTED.includes(u)) return u;
    const s = localStorage.getItem(STORE_KEY);
    if (SUPPORTED.includes(s)) return s;
    return 'en';
  }

  function apply(lang) {
    if (!dict || !dict[lang]) return;
    const bundle = dict[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = get(bundle, el.getAttribute('data-i18n'));
      if (typeof v === 'string') el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const v = get(bundle, el.getAttribute('data-i18n-html'));
      if (typeof v === 'string') el.innerHTML = v;
    });

    const meta = bundle.meta || {};
    if (meta.title) {
      document.title = meta.title;
      document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]').forEach(m => m.setAttribute('content', meta.title));
    }
    if (meta.description) {
      document.querySelectorAll('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]').forEach(m => m.setAttribute('content', meta.description));
    }
    if (meta.htmlLang) {
      document.documentElement.setAttribute('lang', meta.htmlLang);
      const ogLocale = document.querySelector('meta[property="og:locale"]');
      if (ogLocale) ogLocale.setAttribute('content', meta.htmlLang === 'zh' ? 'zh_CN' : 'en_US');
      const ogAlt = document.querySelector('meta[property="og:locale:alternate"]');
      if (ogAlt) ogAlt.setAttribute('content', meta.htmlLang === 'zh' ? 'en_US' : 'zh_CN');
    }

    document.querySelectorAll('[data-cv-link]').forEach(a => {
      const href = CV[lang] || CV.en;
      a.setAttribute('href', href);
      a.setAttribute('download', href.split('/').pop());
    });

    document.querySelectorAll('.lang-toggle .lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    localStorage.setItem(STORE_KEY, lang);
    const url = new URL(location.href);
    url.searchParams.set('lang', lang);
    history.replaceState(null, '', url);
  }

  function bind() {
    document.querySelectorAll('.lang-toggle .lang-btn').forEach(btn => {
      btn.addEventListener('click', () => apply(btn.getAttribute('data-lang')));
    });
  }

  fetch('./i18n.json')
    .then(r => r.json())
    .then(d => { dict = d; bind(); apply(pickInitial()); })
    .catch(err => console.error('[i18n] load failed', err));
})();
