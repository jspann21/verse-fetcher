(function () {
  "use strict";

  const API_BASE = "https://bolls.life";
  const POPULAR_TRANSLATIONS = [
    ["ESV", "English Standard Version"],
    ["LSB", "Legacy Standard Bible"],
    ["NASB", "New American Standard Bible 1995"],
    ["NIV", "New International Version 1984"],
    ["NIV2011", "New International Version 2011"],
    ["KJV", "King James Version"],
    ["NKJV", "New King James Version"],
    ["NLT", "New Living Translation"],
    ["CSB17", "Christian Standard Bible"],
    ["NET", "New English Translation"],
    ["WEB", "World English Bible"],
    ["RSV", "Revised Standard Version"],
    ["AMP", "Amplified Bible"],
    ["BSB", "Berean Standard Bible"],
    ["LSV", "Literal Standard Version"],
    ["MSG", "The Message"]
  ];

  const BOOKS = [
    book(1, "Genesis", ["Gen", "Ge", "Gn"]),
    book(2, "Exodus", ["Exod", "Exo", "Ex"]),
    book(3, "Leviticus", ["Lev", "Le", "Lv"]),
    book(4, "Numbers", ["Num", "Nu", "Nm", "Nb"]),
    book(5, "Deuteronomy", ["Deut", "Deu", "Dt"]),
    book(6, "Joshua", ["Josh", "Jos", "Jsh"]),
    book(7, "Judges", ["Judg", "Jdg", "Jg", "Jdgs"]),
    book(8, "Ruth", ["Rth", "Ru"]),
    book(9, "1 Samuel", ["1 Sam", "1Sam", "1 Sa", "1Sa", "I Sam", "First Samuel"]),
    book(10, "2 Samuel", ["2 Sam", "2Sam", "2 Sa", "2Sa", "II Sam", "Second Samuel"]),
    book(11, "1 Kings", ["1 Kgs", "1Kgs", "1 Ki", "1Ki", "I Kings", "First Kings"]),
    book(12, "2 Kings", ["2 Kgs", "2Kgs", "2 Ki", "2Ki", "II Kings", "Second Kings"]),
    book(13, "1 Chronicles", ["1 Chr", "1Chr", "1 Ch", "1Ch", "I Chronicles", "First Chronicles"]),
    book(14, "2 Chronicles", ["2 Chr", "2Chr", "2 Ch", "2Ch", "II Chronicles", "Second Chronicles"]),
    book(15, "Ezra", ["Ezr"]),
    book(16, "Nehemiah", ["Neh", "Ne"]),
    book(17, "Esther", ["Esth", "Est", "Es"]),
    book(18, "Job", ["Jb"]),
    book(19, "Psalm", ["Psalms", "Ps", "Psa", "Pss"]),
    book(20, "Proverbs", ["Prov", "Pro", "Prv", "Pr"]),
    book(21, "Ecclesiastes", ["Eccl", "Ecc", "Qoh", "Qoheleth"]),
    book(22, "Song of Solomon", ["Song", "Song of Songs", "Canticles", "Cant", "Sos"]),
    book(23, "Isaiah", ["Isa", "Is"]),
    book(24, "Jeremiah", ["Jer", "Je", "Jr"]),
    book(25, "Lamentations", ["Lam", "La"]),
    book(26, "Ezekiel", ["Ezek", "Eze", "Ezk"]),
    book(27, "Daniel", ["Dan", "Da", "Dn"]),
    book(28, "Hosea", ["Hos", "Ho"]),
    book(29, "Joel", ["Jl"]),
    book(30, "Amos", ["Am"]),
    book(31, "Obadiah", ["Obad", "Ob"]),
    book(32, "Jonah", ["Jon", "Jnh"]),
    book(33, "Micah", ["Mic", "Mc"]),
    book(34, "Nahum", ["Nah", "Na"]),
    book(35, "Habakkuk", ["Hab", "Hb"]),
    book(36, "Zephaniah", ["Zeph", "Zep", "Zp"]),
    book(37, "Haggai", ["Hag", "Hg"]),
    book(38, "Zechariah", ["Zech", "Zec", "Zc"]),
    book(39, "Malachi", ["Mal", "Ml"]),
    book(40, "Matthew", ["Matt", "Mat", "Mt"]),
    book(41, "Mark", ["Mrk", "Mk", "Mr"]),
    book(42, "Luke", ["Luk", "Lk"]),
    book(43, "John", ["Jn", "Jhn"]),
    book(44, "Acts", ["Act", "Ac"]),
    book(45, "Romans", ["Rom", "Ro", "Rm"]),
    book(46, "1 Corinthians", ["1 Cor", "1Cor", "1 Co", "1Co", "I Cor", "First Corinthians"]),
    book(47, "2 Corinthians", ["2 Cor", "2Cor", "2 Co", "2Co", "II Cor", "Second Corinthians"]),
    book(48, "Galatians", ["Gal", "Ga"]),
    book(49, "Ephesians", ["Eph", "Ephes"]),
    book(50, "Philippians", ["Phil", "Php", "Pp"]),
    book(51, "Colossians", ["Col", "Co"]),
    book(52, "1 Thessalonians", ["1 Thess", "1Thess", "1 Th", "1Th", "I Thess", "First Thessalonians"]),
    book(53, "2 Thessalonians", ["2 Thess", "2Thess", "2 Th", "2Th", "II Thess", "Second Thessalonians"]),
    book(54, "1 Timothy", ["1 Tim", "1Tim", "1 Ti", "1Ti", "I Tim", "First Timothy"]),
    book(55, "2 Timothy", ["2 Tim", "2Tim", "2 Ti", "2Ti", "II Tim", "Second Timothy"]),
    book(56, "Titus", ["Tit", "Ti"]),
    book(57, "Philemon", ["Phlm", "Philem", "Phm", "Pm"]),
    book(58, "Hebrews", ["Heb"]),
    book(59, "James", ["Jas", "Jm"]),
    book(60, "1 Peter", ["1 Pet", "1Pet", "1 Pe", "1Pe", "I Pet", "First Peter"]),
    book(61, "2 Peter", ["2 Pet", "2Pet", "2 Pe", "2Pe", "II Pet", "Second Peter"]),
    book(62, "1 John", ["1 Jn", "1Jn", "1 John", "1John", "I John", "First John"]),
    book(63, "2 John", ["2 Jn", "2Jn", "2 John", "2John", "II John", "Second John"]),
    book(64, "3 John", ["3 Jn", "3Jn", "3 John", "3John", "III John", "Third John"]),
    book(65, "Jude", ["Jud", "Jd"]),
    book(66, "Revelation", ["Rev", "Re", "Rv", "Apocalypse"])
  ];

  const SINGLE_CHAPTER_BOOKS = new Set([31, 57, 63, 64, 65]);
  const dom = {
    form: document.querySelector("#fetch-form"),
    input: document.querySelector("#reference-input"),
    sampleButton: document.querySelector("#sample-button"),
    translation: document.querySelector("#translation-select"),
    format: document.querySelector("#format-select"),
    verseNumbers: document.querySelector("#verse-numbers"),
    oneVersePerLine: document.querySelector("#one-verse-per-line"),
    markdownPanel: document.querySelector("#markdown-format-panel"),
    markdownTemplate: document.querySelector("#markdown-template"),
    tokenButtons: document.querySelectorAll("[data-token]"),
    boldToken: document.querySelector("#bold-token"),
    italicToken: document.querySelector("#italic-token"),
    resetTemplate: document.querySelector("#reset-template"),
    output: document.querySelector("#output"),
    status: document.querySelector("#status-line"),
    copy: document.querySelector("#copy-button"),
    fetch: document.querySelector("#fetch-button")
  };

  const bookTools = buildBookTools();
  let cachedFetch = null;
  let lastDefaultMarkdownTemplate = "";
  let customMarkdownTemplate = false;
  let selectedMarkdownToken = "Text";

  init();

  function book(id, name, aliases) {
    return { id, name, aliases: [name].concat(aliases) };
  }

  function init() {
    populateTranslations(POPULAR_TRANSLATIONS);
    loadTranslations();
    syncMarkdownTemplateWithFormat(true);
    syncMarkdownPanel();
    dom.sampleButton.addEventListener("click", insertSample);
    dom.copy.addEventListener("click", copyOutput);
    dom.form.addEventListener("submit", fetchVerses);
    dom.format.addEventListener("change", () => {
      syncMarkdownTemplateWithFormat(false);
      renderCachedOutput();
    });
    dom.verseNumbers.addEventListener("change", renderCachedOutput);
    dom.oneVersePerLine.addEventListener("change", () => {
      renderCachedOutput();
    });
    dom.form.querySelectorAll?.('input[name="mode"]').forEach((input) => {
      input.addEventListener("change", () => {
        syncMarkdownPanel();
        renderCachedOutput();
      });
    });
    dom.markdownTemplate.addEventListener("input", () => {
      customMarkdownTemplate = dom.markdownTemplate.value !== lastDefaultMarkdownTemplate;
      syncMarkdownControls();
      renderCachedOutput();
    });
    dom.resetTemplate.addEventListener("click", () => {
      syncMarkdownTemplateWithFormat(true);
      renderCachedOutput();
    });
    dom.tokenButtons.forEach((button) => {
      button.addEventListener("click", () => {
        selectedMarkdownToken = button.dataset.token;
        syncMarkdownControls();
      });
    });
    dom.boldToken.addEventListener("click", () => {
      toggleTokenStyle(selectedMarkdownToken, "bold");
      renderCachedOutput();
    });
    dom.italicToken.addEventListener("click", () => {
      toggleTokenStyle(selectedMarkdownToken, "italic");
      renderCachedOutput();
    });
    dom.input.addEventListener("input", markCacheStale);
    dom.translation.addEventListener("change", markCacheStale);
  }

  async function loadTranslations() {
    try {
      const response = await fetch(`${API_BASE}/static/bolls/app/views/languages.json`);
      if (!response.ok) throw new Error("Translations unavailable");
      const languages = await response.json();
      const english = languages.find((group) => group.language.toLowerCase().includes("english"));
      if (!english) return;

      const popular = new Set(POPULAR_TRANSLATIONS.map(([code]) => code));
      const merged = POPULAR_TRANSLATIONS.map(([code, fallback]) => {
        const live = english.translations.find((item) => item.short_name === code);
        return [code, live ? live.full_name : fallback];
      });

      english.translations
        .filter((item) => !popular.has(item.short_name))
        .forEach((item) => merged.push([item.short_name, item.full_name]));

      populateTranslations(sortTranslations(merged));
    } catch (error) {
      setStatus("Using built-in translation list. Live metadata could not be loaded.");
    }
  }

  function populateTranslations(translations) {
    const selected = dom.translation.value || "ESV";
    dom.translation.replaceChildren(
      ...sortTranslations(translations).map(([code, label]) => {
        const option = document.createElement("option");
        option.value = code;
        option.textContent = `${code} - ${label}`;
        return option;
      })
    );
    dom.translation.value = translations.some(([code]) => code === selected) ? selected : "ESV";
  }

  function sortTranslations(translations) {
    return translations.slice().sort(([codeA], [codeB]) => codeA.localeCompare(codeB));
  }

  function insertSample() {
    dom.input.value = [
      "We believe that God is the author of life and death.",
      "The direct taking of an innocent human life is a moral evil,",
      "regardless of intention. Life is a gift of God and must be",
      "respected from fertilization to natural death. (Exodus 20:13; 23:7;",
      "Matthew 5:21; Acts 17:28)"
    ].join("\n");
    dom.input.focus();
  }

  async function fetchVerses(event) {
    event.preventDefault();
    const translation = dom.translation.value;
    const mode = new FormData(dom.form).get("mode");
    const format = dom.format.value;
    const options = getOutputOptions();
    const input = dom.input.value;
    const cacheKey = makeCacheKey(input, translation);

    dom.fetch.disabled = true;
    dom.copy.disabled = true;
    dom.output.value = "";

    try {
      if (cachedFetch?.key === cacheKey) {
        renderOutput(cachedFetch.passages, format, mode, options);
        setStatus(`Reformatted ${cachedFetch.passages.length} cached reference${cachedFetch.passages.length === 1 ? "" : "s"}.`);
        return;
      }

      setStatus("Finding verse references...");
      const parsed = parseReferences(input);
      if (!parsed.passages.length) {
        throw new Error("No verse references found. Try text that includes something like John 3:16 or 2 Tim 3:16-17.");
      }

      setStatus(`Fetching ${parsed.passages.length} reference${parsed.passages.length === 1 ? "" : "s"}...`);
      const fetched = await fetchPassages(parsed.passages, translation);
      cachedFetch = {
        key: cacheKey,
        passages: fetched.passages
      };
      renderOutput(fetched.passages, format, mode, options);

      const warnings = parsed.warnings.concat(fetched.warnings);
      const warningText = warnings.length ? ` ${warnings.length} warning${warnings.length === 1 ? "" : "s"}.` : "";
      setStatus(`Fetched ${fetched.passages.length} reference${fetched.passages.length === 1 ? "" : "s"}.${warningText}`);
    } catch (error) {
      setStatus(error.message || "Something went wrong.");
    } finally {
      dom.fetch.disabled = false;
    }
  }

  function renderCachedOutput() {
    if (!cachedFetch || cachedFetch.key !== makeCacheKey(dom.input.value, dom.translation.value)) return;
    const mode = new FormData(dom.form).get("mode");
    renderOutput(cachedFetch.passages, dom.format.value, mode, getOutputOptions());
    setStatus(`Reformatted ${cachedFetch.passages.length} cached reference${cachedFetch.passages.length === 1 ? "" : "s"}.`);
  }

  function renderOutput(passages, format, mode, options) {
    const text = formatPassages(passages, format, mode, options);
    dom.output.value = text;
    dom.copy.disabled = text.length === 0;
  }

  function getOutputOptions() {
    return {
      includeVerseNumbers: dom.verseNumbers.checked,
      oneVersePerLine: dom.oneVersePerLine.checked,
      markdownTemplate: dom.markdownTemplate.value
    };
  }

  function syncMarkdownPanel() {
    dom.markdownPanel.hidden = new FormData(dom.form).get("mode") !== "markdown";
    syncMarkdownControls();
  }

  function syncMarkdownTemplateWithFormat(force) {
    const nextDefault = defaultMarkdownTemplate(dom.format.value);
    if (force || !customMarkdownTemplate || dom.markdownTemplate.value === lastDefaultMarkdownTemplate) {
      dom.markdownTemplate.value = nextDefault;
      customMarkdownTemplate = false;
    }
    lastDefaultMarkdownTemplate = nextDefault;
    syncMarkdownControls();
  }

  function defaultMarkdownTemplate(format) {
    if (format === "text-ref") return "{Text} - {Reference}";
    if (format === "ref-newline-text") return "{Reference}\n{Text}";
    if (format === "text-newline-ref") return "{Text}\n{Reference}";
    if (format === "blockquote") return "> {Text}\n>\n> {Reference}";
    return "{Reference} - {Text}";
  }

  function syncMarkdownControls() {
    dom.tokenButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.token === selectedMarkdownToken);
    });
    dom.boldToken.classList.toggle("active", tokenHasStyle(selectedMarkdownToken, "bold"));
    dom.italicToken.classList.toggle("active", tokenHasStyle(selectedMarkdownToken, "italic"));
  }

  function toggleTokenStyle(token, style) {
    const state = getTokenStyleState(token);
    state[style] = !state[style];
    dom.markdownTemplate.value = setTokenStyleState(dom.markdownTemplate.value, token, state);
    customMarkdownTemplate = dom.markdownTemplate.value !== lastDefaultMarkdownTemplate;
    syncMarkdownControls();
  }

  function tokenHasStyle(token, style) {
    return getTokenStyleState(token)[style];
  }

  function getTokenStyleState(token) {
    const escaped = token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(`(\\*{0,3})\\{${escaped}\\}(\\*{0,3})`);
    const match = dom.markdownTemplate.value.match(pattern);
    const marker = match && match[1] === match[2] ? match[1] : "";
    return {
      bold: marker.length >= 2,
      italic: marker.length === 1 || marker.length === 3
    };
  }

  function setTokenStyleState(template, token, state) {
    const escaped = token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const marker = state.bold && state.italic ? "***" : state.bold ? "**" : state.italic ? "*" : "";
    const replacement = `${marker}{${token}}${marker}`;
    const pattern = new RegExp(`\\*{0,3}\\{${escaped}\\}\\*{0,3}`, "g");
    return template.replace(pattern, replacement);
  }

  function markCacheStale() {
    if (!cachedFetch || cachedFetch.key === makeCacheKey(dom.input.value, dom.translation.value)) return;
    setStatus("Input or translation changed. Fetch again to update the verses.");
  }

  function makeCacheKey(input, translation) {
    return `${translation}\n${input}`;
  }

  function parseReferences(value) {
    const input = normalizeDashes(value);
    const matches = Array.from(input.matchAll(bookTools.regex)).map((match) => {
      const prefix = match[1] || "";
      const raw = match[2];
      const start = match.index + prefix.length;
      const end = start + raw.length;
      return { start, end, raw, book: bookTools.aliasMap.get(normalizeAlias(raw)) };
    }).filter((match) => match.book);

    const passages = [];
    const warnings = [];

    matches.forEach((match, index) => {
      const next = matches[index + 1];
      const tail = input.slice(match.end, next ? next.start : input.length);
      const parsed = parseTail(match.book, tail);
      if (!parsed.length) {
        warnings.push(`Could not read numbers after ${match.raw.trim()}.`);
      }
      passages.push(...parsed);
    });

    return { passages, warnings };
  }

  function parseTail(bookInfo, tail) {
    const clean = tail
      .replace(/\b(?:vv?|verses?)\.?\b/gi, "")
      .replace(/\band\b/gi, ",")
      .replace(/^[\s:.,;-]+/, "")
      .replace(/[\])}]+/g, " ")
      .replace(/,\s*(?=\d+\s*[:.])/g, ";")
      .replace(/\n+/g, ";");

    return clean
      .split(";")
      .map((part) => part.trim())
      .filter(Boolean)
      .flatMap((part) => parseReferencePart(bookInfo, part));
  }

  function parseReferencePart(bookInfo, part) {
    const trimmed = part.replace(/\s+/g, " ").trim();
    const chapterVerse = trimmed.match(/^(\d+)\s*[:.]\s*([0-9,\-\s]+)(?:\D.*)?$/);
    if (chapterVerse) {
      const chapter = Number(chapterVerse[1]);
      return [makePassage(bookInfo, chapter, parseVerseList(chapterVerse[2]))].filter(Boolean);
    }

    const spaceSeparated = trimmed.match(/^(\d+)\s+([0-9,\-\s]+)$/);
    if (spaceSeparated) {
      const chapter = Number(spaceSeparated[1]);
      return [makePassage(bookInfo, chapter, parseVerseList(spaceSeparated[2]))].filter(Boolean);
    }

    const numberOnly = trimmed.match(/^(\d+)(?:\D.*)?$/);
    if (numberOnly) {
      const number = Number(numberOnly[1]);
      if (SINGLE_CHAPTER_BOOKS.has(bookInfo.id)) {
        return [makePassage(bookInfo, 1, [number])].filter(Boolean);
      }
      return [makePassage(bookInfo, number, null)].filter(Boolean);
    }

    return [];
  }

  function parseVerseList(value) {
    const verses = [];
    value
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean)
      .forEach((part) => {
        const range = part.match(/^(\d+)\s*-\s*(\d+)$/);
        if (range) {
          const start = Number(range[1]);
          const end = Number(range[2]);
          const step = start <= end ? 1 : -1;
          for (let verse = start; verse !== end + step; verse += step) {
            verses.push(verse);
          }
          return;
        }

        const single = part.match(/^\d+$/);
        if (single) verses.push(Number(part));
      });

    return Array.from(new Set(verses)).filter((verse) => Number.isInteger(verse) && verse > 0);
  }

  function makePassage(bookInfo, chapter, verses) {
    if (!Number.isInteger(chapter) || chapter <= 0) return null;
    if (verses && !verses.length) return null;
    return {
      book: bookInfo,
      chapter,
      verses,
      reference: formatReference(bookInfo.name, chapter, verses)
    };
  }

  async function fetchPassages(passages, translation) {
    const warnings = [];
    const versePassages = passages.filter((passage) => passage.verses);
    const chapterPassages = passages.filter((passage) => !passage.verses);
    const verseMap = new Map();

    if (versePassages.length) {
      const grouped = new Map();
      versePassages.forEach((passage) => {
        const key = `${passage.book.id}:${passage.chapter}`;
        if (!grouped.has(key)) {
          grouped.set(key, {
            translation,
            book: passage.book.id,
            chapter: passage.chapter,
            verses: new Set()
          });
        }
        passage.verses.forEach((verse) => grouped.get(key).verses.add(verse));
      });

      const requestBody = Array.from(grouped.values()).map((item) => ({
        translation: item.translation,
        book: item.book,
        chapter: item.chapter,
        verses: Array.from(item.verses).sort((a, b) => a - b)
      }));

      const response = await fetch(`${API_BASE}/get-verses/`, {
        method: "POST",
        body: JSON.stringify(requestBody)
      });
      if (!response.ok) throw new Error(`Bolls returned ${response.status} while fetching verses.`);
      const data = await response.json();
      data.flat().forEach((verse) => {
        verseMap.set(keyFor(verse.book, verse.chapter, verse.verse), cleanVerseText(verse.text));
      });
    }

    await Promise.all(chapterPassages.map(async (passage) => {
      const response = await fetch(`${API_BASE}/get-text/${translation}/${passage.book.id}/${passage.chapter}/`);
      if (!response.ok) {
        warnings.push(`Could not fetch ${passage.reference}.`);
        return;
      }
      const verses = await response.json();
      passage.verses = verses.map((verse) => verse.verse);
      passage.reference = formatReference(passage.book.name, passage.chapter, null);
      verses.forEach((verse) => {
        verseMap.set(keyFor(passage.book.id, passage.chapter, verse.verse), cleanVerseText(verse.text));
      });
    }));

    const hydrated = passages.map((passage) => {
      const verses = (passage.verses || []).map((verse) => ({
        verse,
        text: verseMap.get(keyFor(passage.book.id, passage.chapter, verse)) || ""
      }));
      const missing = verses.filter((verse) => !verse.text).map((verse) => verse.verse);
      if (missing.length) warnings.push(`Missing ${passage.book.name} ${passage.chapter}:${missing.join(", ")}.`);
      return { ...passage, verses };
    }).filter((passage) => passage.verses.some((verse) => verse.text));

    return { passages: hydrated, warnings };
  }

  function formatPassages(passages, format, mode, options) {
    const markdown = mode === "markdown";
    return passages.map((passage) => {
      const reference = passage.reference;
      const text = formatVerseText(passage.verses, options);

      if (markdown) return applyMarkdownTemplate(options.markdownTemplate, text, reference);

      if (format === "text-ref") return `${text} - ${reference}`;
      if (format === "ref-newline-text") return `${reference}\n${text}`;
      if (format === "text-newline-ref") return `${text}\n${reference}`;
      return `${reference} - ${text}`;
    }).join("\n\n");
  }

  function applyMarkdownTemplate(template, text, reference) {
    const safeTemplate = template || "{Text} - {Reference}";
    return replaceMultilinePlaceholder(safeTemplate, /\{text\}/gi, text)
      .replace(/\{reference\}/gi, reference);
  }

  function replaceMultilinePlaceholder(template, placeholder, value) {
    return template.replace(placeholder, (match, offset, fullTemplate) => {
      const lineStart = fullTemplate.lastIndexOf("\n", offset - 1) + 1;
      const linePrefix = fullTemplate.slice(lineStart, offset);
      const continuationPrefix = linePrefix.match(/^\s*>\s?/) ? linePrefix : "";
      return value.replace(/\n/g, `\n${continuationPrefix}`);
    });
  }

  function formatVerseText(verses, options) {
    return verses
      .map((verse) => options.includeVerseNumbers ? `${verse.verse} ${verse.text}` : verse.text)
      .join(options.oneVersePerLine ? "\n" : " ");
  }

  function formatReference(bookName, chapter, verses) {
    if (!verses) return `${bookName} ${chapter}`;
    return `${bookName} ${chapter}:${compactVerses(verses)}`;
  }

  function compactVerses(verses) {
    const sorted = Array.from(new Set(verses)).sort((a, b) => a - b);
    const parts = [];
    let start = sorted[0];
    let previous = sorted[0];

    for (let index = 1; index <= sorted.length; index += 1) {
      const current = sorted[index];
      if (current === previous + 1) {
        previous = current;
        continue;
      }
      parts.push(start === previous ? String(start) : `${start}-${previous}`);
      start = current;
      previous = current;
    }

    return parts.join(", ");
  }

  function buildBookTools() {
    const aliasMap = new Map();
    BOOKS.forEach((bookInfo) => {
      expandedAliases(bookInfo).forEach((alias) => {
        const key = normalizeAlias(alias);
        if (!aliasMap.has(key)) aliasMap.set(key, bookInfo);
      });
    });

    const aliasPatterns = Array.from(aliasMap.keys())
      .sort((a, b) => b.length - a.length)
      .map(aliasToPattern);

    return {
      aliasMap,
      regex: new RegExp(`(^|[^a-z0-9])(${aliasPatterns.join("|")})(?=\\s*[:.,-]?\\s*\\d|\\d)`, "gi")
    };
  }

  function expandedAliases(bookInfo) {
    const values = new Set();
    bookInfo.aliases.forEach((alias) => {
      values.add(alias);
      values.add(alias.replace(/\s+/g, ""));
      values.add(alias.replace(/\b(\d)\s+/, "$1"));
      const key = normalizeAlias(alias);
      values.add(key);
      const noVowels = key.replace(/[aeiou]/g, "");
      if (noVowels.length >= 2) values.add(noVowels);
    });
    return Array.from(values);
  }

  function aliasToPattern(alias) {
    return alias
      .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      .split("")
      .map((char) => `${char}\\s*\\.?\\s*`)
      .join("");
  }

  function normalizeAlias(value) {
    return value
      .toLowerCase()
      .replace(/\bfirst\b/g, "1")
      .replace(/\bsecond\b/g, "2")
      .replace(/\bthird\b/g, "3")
      .replace(/^iii(?=[a-z])/, "3")
      .replace(/^ii(?=[a-z])/, "2")
      .replace(/^i(?=[a-z])/, "1")
      .replace(/[^a-z0-9]/g, "");
  }

  function normalizeDashes(value) {
    return value.replace(/[‐-―]/g, "-");
  }

  function cleanVerseText(html) {
    const element = document.createElement("div");
    element.innerHTML = String(html || "")
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<\/br>/gi, " ");
    return element.textContent.replace(/\s+/g, " ").trim();
  }

  function keyFor(bookId, chapter, verse) {
    return `${bookId}:${chapter}:${verse}`;
  }

  function setStatus(message) {
    dom.status.textContent = message;
  }

  async function copyOutput() {
    if (!dom.output.value) return;
    await navigator.clipboard.writeText(dom.output.value);
    setStatus("Copied output.");
  }
}());
