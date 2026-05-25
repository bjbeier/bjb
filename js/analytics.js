window.loadTracking = function () {
    // Production (bjb) uses G-5R4EJK544M, staging (bjb-staging) or local dev uses G-393461309
    const isProduction = window.location.hostname === 'bjbeier.com' || window.location.hostname === 'www.bjbeier.com';
    const gaId = isProduction ? 'G-5R4EJK544M' : 'G-393461309';

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', gaId);
};
