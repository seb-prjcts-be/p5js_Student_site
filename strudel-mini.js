/**
 * Minimal Strudel player for inline examples.
 *
 * Uses the official @strudel/web browser bundle so the inline player follows
 * the same evaluation model as the Strudel docs and REPL.
 */
(function() {
    'use strict';

    const STRUDEL_WEB_URL = 'https://unpkg.com/@strudel/web@1.2.3?module';
    const STRUDEL_SAMPLE_MAPS = [
        'github:tidalcycles/dirt-samples',
        'https://raw.githubusercontent.com/felixroos/dough-samples/main/tidal-drum-machines.json',
        'https://raw.githubusercontent.com/felixroos/dough-samples/main/mridangam.json',
        'https://raw.githubusercontent.com/tidalcycles/uzu-drumkit/main/strudel.json'
    ];

    const icons = {
        play: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>',
        update: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path></svg>'
    };

    let strudelRuntimePromise = null;
    let activeInstance = null;

    async function loadStrudelRuntime() {
        if (strudelRuntimePromise) {
            return strudelRuntimePromise;
        }

        strudelRuntimePromise = (async () => {
            const moduleApi = await import(STRUDEL_WEB_URL);
            const namespaceApi = globalThis.strudel || globalThis.Strudel || globalThis.strudelWeb || {};
            const initStrudel = moduleApi.initStrudel || globalThis.initStrudel || namespaceApi.initStrudel;
            const evaluate = moduleApi.evaluate || globalThis.evaluate || namespaceApi.evaluate;
            const hush = moduleApi.hush || globalThis.hush || namespaceApi.hush;
            const samples = moduleApi.samples || globalThis.samples || namespaceApi.samples;

            if (
                typeof initStrudel !== 'function' ||
                typeof evaluate !== 'function' ||
                typeof hush !== 'function' ||
                typeof samples !== 'function'
            ) {
                throw new Error('Strudel API is niet beschikbaar.');
            }

            await Promise.resolve(initStrudel({
                prebake: () => Promise.all(STRUDEL_SAMPLE_MAPS.map((sampleMap) => samples(sampleMap)))
            }));

            return {
                evaluate,
                hush
            };
        })();

        return strudelRuntimePromise;
    }

    class StrudelMini extends HTMLElement {
        constructor() {
            super();
            this.isPlaying = false;
            this.code = '';
        }

        connectedCallback() {
            this.classList.add('strudel-mini');
            this.code = this.getInitialCode();
            this.render();
            this.bind();
        }

        disconnectedCallback() {
            if (activeInstance === this && strudelRuntimePromise) {
                this.forceStop();
                activeInstance = null;
            }
        }

        getInitialCode() {
            const attrCode = this.getAttribute('code');
            if (attrCode) {
                return attrCode.trim();
            }

            const raw = (this.innerHTML + '').replace('<!--', '').replace('-->', '').trim();
            return raw;
        }

        render() {
            this.innerHTML = `
                <div class="strudel-mini-header">
                    <button class="strudel-mini-btn" type="button" data-action="play" aria-label="play">${icons.play}</button>
                    <button class="strudel-mini-btn" type="button" data-action="update" aria-label="update">${icons.update}</button>
                </div>
                <div class="strudel-mini-body">
                    <div class="strudel-mini-gutter" aria-hidden="true"></div>
                    <textarea class="strudel-mini-code" spellcheck="false" wrap="off"></textarea>
                </div>
                <div class="strudel-mini-status" aria-live="polite"></div>
            `;

            this.codeEl = this.querySelector('.strudel-mini-code');
            this.gutterEl = this.querySelector('.strudel-mini-gutter');
            this.statusEl = this.querySelector('.strudel-mini-status');
            this.playBtn = this.querySelector('[data-action="play"]');
            this.updateBtn = this.querySelector('[data-action="update"]');

            this.codeEl.value = this.code;
            this.updateGutter();
        }

        bind() {
            this.codeEl.addEventListener('input', () => this.updateGutter());
            this.playBtn.addEventListener('click', () => this.togglePlay());
            this.updateBtn.addEventListener('click', () => this.updateCode());
            this.codeEl.addEventListener('keydown', (event) => {
                if (event.ctrlKey && event.key === 'Enter') {
                    event.preventDefault();
                    if (this.isPlaying) {
                        this.updateCode();
                    } else {
                        this.togglePlay();
                    }
                }

                if (event.ctrlKey && event.key === '.') {
                    event.preventDefault();
                    if (this.isPlaying) {
                        this.togglePlay();
                    }
                }
            });
        }

        updateGutter() {
            const lines = this.codeEl.value.split('\n').length || 1;
            this.gutterEl.textContent = Array.from({ length: lines }, (_, i) => i + 1).join('\n');
            this.codeEl.rows = Math.max(lines, 1);
        }

        setStatus(message) {
            if (this.statusEl) {
                this.statusEl.textContent = message;
            }
        }

        setButtonsDisabled(disabled) {
            this.playBtn.disabled = disabled;
            this.updateBtn.disabled = disabled;
        }

        setPlaying(isPlaying) {
            this.isPlaying = isPlaying;
            this.classList.toggle('is-playing', isPlaying);
            this.playBtn.setAttribute('aria-label', isPlaying ? 'stop' : 'play');
        }

        async ensureRuntime() {
            this.setButtonsDisabled(true);
            this.setStatus('Audio laden...');

            try {
                const runtime = await loadStrudelRuntime();
                this.setStatus('');
                return runtime;
            } catch (error) {
                console.error('Strudel runtime kon niet worden geladen.', error);
                this.setStatus('Fout bij laden.');
                throw error;
            } finally {
                this.setButtonsDisabled(false);
            }
        }

        async togglePlay() {
            const runtime = await this.ensureRuntime();
            const code = this.codeEl.value.trim();

            if (!code) {
                this.setStatus('Geen code om af te spelen.');
                return;
            }

            if (this.isPlaying) {
                runtime.hush();
                this.setPlaying(false);
                if (activeInstance === this) {
                    activeInstance = null;
                }
                return;
            }

            if (activeInstance && activeInstance !== this) {
                activeInstance.forceStop();
            }

            activeInstance = this;
            this.setStatus('');

            try {
                await Promise.resolve(runtime.evaluate(code));
                this.setPlaying(true);
            } catch (error) {
                console.error('Strudel code error:', error);
                this.setStatus('Code fout.');
                this.setPlaying(false);
                if (activeInstance === this) {
                    activeInstance = null;
                }
            }
        }

        async updateCode() {
            const runtime = await this.ensureRuntime();
            const code = this.codeEl.value.trim();

            if (!code) {
                this.setStatus('Geen code om te updaten.');
                return;
            }

            if (!this.isPlaying) {
                this.setStatus('Speel dit voorbeeld eerst.');
                return;
            }

            if (activeInstance && activeInstance !== this) {
                this.setStatus('Speel dit voorbeeld eerst.');
                return;
            }

            try {
                await Promise.resolve(runtime.evaluate(code));
                this.setStatus('');
            } catch (error) {
                console.error('Strudel code error:', error);
                this.setStatus('Code fout.');
            }
        }

        forceStop() {
            if (!this.isPlaying) {
                return;
            }

            Promise.resolve(loadStrudelRuntime())
                .then((runtime) => runtime.hush())
                .catch((error) => console.error('Strudel stop error:', error));

            this.setPlaying(false);
            this.setStatus('');
        }
    }

    if (!customElements.get('strudel-mini')) {
        customElements.define('strudel-mini', StrudelMini);
    }
})();
