/**
 * p5.js Live Editor Module
 * Modulaire editor voor p5.js code die automatisch initialiseert
 */

(function() {
    'use strict';

    const P5_VERSION = '2.2.3';
    const P5_CDN_URL = `https://cdn.jsdelivr.net/npm/p5@${P5_VERSION}/lib/p5.min.js`;

    // Editor instances opslaan
    const editors = new Map();

    /**
     * Maak een nieuwe editor instance
     * @param {HTMLElement} container - Container element voor de editor
     * @param {Object} options - Configuratie opties
     */
    function createEditor(container, options = {}) {
        // Genereer unieke ID voor deze editor
        const editorId = 'editor-' + Math.random().toString(36).substr(2, 9);
        
        // Default opties
        const config = {
            code: options.code || '',
            width: options.width || 600,
            height: options.height || 400,
            autorun: options.autorun !== false, // Default true
            ...options
        };

        // Haal code uit script tag als die bestaat
        const scriptTag = container.querySelector('script[type="text/p5"]');
        if (scriptTag && !config.code) {
            config.code = scriptTag.textContent.trim();
        }

        // Haal code uit data-code attribuut als die bestaat
        if (container.dataset.code && !config.code) {
            config.code = container.dataset.code;
        }

        // Haal configuratie uit data-attributen
        if (container.dataset.width) config.width = parseInt(container.dataset.width);
        if (container.dataset.height) config.height = parseInt(container.dataset.height);
        if (container.dataset.autorun !== undefined) {
            config.autorun = container.dataset.autorun === 'true';
        }

        // Maak editor HTML structuur
        const pageLang = document.documentElement.getAttribute('data-lang') || 'nl';
        const versionLabel = pageLang === 'en'
            ? `Running on p5.js ${P5_VERSION}`
            : `Draait op p5.js ${P5_VERSION}`;

        const runLabel = pageLang === 'en' ? 'Run' : 'Run';
        const resetLabel = pageLang === 'en' ? 'Reset' : 'Reset';

        container.innerHTML = `
            <div class="p5-editor-container">
                <div class="p5-editor-controls">
                    <div class="p5-editor-brand" aria-hidden="true">
                        <i class="bi bi-braces"></i>
                        <span>p5.js</span>
                    </div>
                    <div class="p5-editor-actions">
                        <button class="p5-editor-btn p5-editor-btn--primary p5-editor-run" data-action="run" title="${runLabel}">
                            <i class="bi bi-play-fill" aria-hidden="true"></i>
                            <span>${runLabel}</span>
                        </button>
                        <button class="p5-editor-btn p5-editor-reset" data-action="reset" title="${resetLabel}">
                            <i class="bi bi-arrow-counterclockwise" aria-hidden="true"></i>
                            <span>${resetLabel}</span>
                        </button>
                    </div>
                </div>
                <div class="p5-editor-split">
                    <div class="p5-editor-code-panel">
                        <textarea class="p5-editor-code" id="${editorId}-code" spellcheck="false">${escapeHtml(config.code)}</textarea>
                    </div>
                    <div class="p5-editor-preview-panel">
                        <iframe class="p5-editor-preview" id="${editorId}-preview"></iframe>
                    </div>
                </div>
                <div class="p5-editor-footer">${versionLabel}</div>
            </div>
        `;

        // Verwijder script tag (niet meer nodig)
        if (scriptTag) {
            scriptTag.remove();
        }

        // Haal elementen op
        const codeTextarea = container.querySelector(`#${editorId}-code`);
        const previewIframe = container.querySelector(`#${editorId}-preview`);
        const runBtn = container.querySelector('[data-action="run"]');
        const resetBtn = container.querySelector('[data-action="reset"]');

        // Sla originele code op voor reset
        const originalCode = config.code;

        // Functie om sketch uit te voeren
        function runSketch() {
            const code = codeTextarea.value;
            
            // Escape code voor gebruik in HTML
            const escapedCode = code.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\${/g, '\\${');
            
            const currentLang = document.documentElement.getAttribute('data-lang') || 'nl';
            const html = `<!DOCTYPE html>
<html lang="${currentLang}">
<head>
<meta charset="UTF-8">
<script src="${P5_CDN_URL}"></script>
<style>
body { margin: 0; padding: 0; overflow: hidden; }
</style>
</head>
<body>
<script>
try {
${escapedCode}
} catch(error) {
  document.body.innerHTML = '<div style="padding: 20px; font-family: monospace; color: #e74c3c;"><strong>' + (document.documentElement.lang === 'en' ? 'Error:' : 'Fout:') + '</strong><br>' + error.message + '</div>';
  console.error(error);
}
<\/script>
</body>
</html>`;

            // Gebruik srcdoc in plaats van doc.write() om cross-origin problemen te voorkomen
            try {
                previewIframe.srcdoc = html;
            } catch (error) {
                console.error('Fout bij laden van preview:', error);
                // Fallback: probeer via blob URL
                try {
                    const blob = new Blob([html], { type: 'text/html' });
                    const url = URL.createObjectURL(blob);
                    previewIframe.src = url;
                    // Cleanup na laden
                    previewIframe.onload = () => {
                        URL.revokeObjectURL(url);
                    };
                } catch (blobError) {
                    console.error('Fout bij blob URL fallback:', blobError);
                }
            }
        }

        // Event listeners
        runBtn.addEventListener('click', runSketch);
        
        resetBtn.addEventListener('click', () => {
            codeTextarea.value = originalCode;
            runSketch();
        });

        // Auto-run bij laden als enabled
        if (config.autorun && originalCode) {
            runSketch();
        }

        // Sla editor instance op
        editors.set(editorId, {
            container,
            codeTextarea,
            previewIframe,
            originalCode,
            runSketch
        });

        return editorId;
    }

    /**
     * Escape HTML om XSS te voorkomen
     */
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    /**
     * Initialiseer alle editors op de pagina
     */
    function initEditors() {
        const editorContainers = document.querySelectorAll('.p5-editor');
        editorContainers.forEach(container => {
            // Skip als al geïnitialiseerd
            if (container.querySelector('.p5-editor-container')) {
                return;
            }

            // Haal configuratie uit data-attributen
            const options = {
                code: container.dataset.code || '',
                width: container.dataset.width ? parseInt(container.dataset.width) : 600,
                height: container.dataset.height ? parseInt(container.dataset.height) : 400,
                autorun: container.dataset.autorun !== 'false'
            };

            createEditor(container, options);
        });
    }

    /**
     * Publieke API
     */
    window.P5Editor = {
        init: initEditors,
        create: createEditor,
        editors: editors
    };

    // Auto-initialisatie bij DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initEditors);
    } else {
        // DOM is al ready
        initEditors();
    }

    // Herinitialiseer na content updates (voor dynamisch geladen content)
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) { // Element node
                        // Check of nieuwe editors zijn toegevoegd
                        if (node.classList && node.classList.contains('p5-editor')) {
                            initEditors();
                        } else if (node.querySelectorAll) {
                            const newEditors = node.querySelectorAll('.p5-editor');
                            if (newEditors.length > 0) {
                                initEditors();
                            }
                        }
                    }
                });
            }
        });
    });

    // Observeer de main content area
    const contentArea = document.getElementById('content');
    if (contentArea) {
        observer.observe(contentArea, {
            childList: true,
            subtree: true
        });
    }

})();

