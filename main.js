function setYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

function initMobileNav() {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");
  if (!burger || !navLinks) return;

  burger.addEventListener("click", () => navLinks.classList.toggle("open"));

  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

function setActiveNav() {
  const path = location.pathname.split("/").pop() || "index.html";
  const map = {
    "index.html": "home",
    "features.html": "features",
    "modules.html": "modules",
    "calculator.html": "calculator",
    "video.html": "videos",
    "infographics.html": "infographics",
    "gamification.html": "gamification",
    "keamanan.html": "security"
  };

  const activeKey = map[path] || "home";
  document.querySelectorAll(".nav-link").forEach(a => {
    a.classList.toggle("active", a.dataset.nav === activeKey);
  });
}

function revealObserver() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  els.forEach(el => {
    const d = el.getAttribute("data-delay");
    if (d) el.style.transitionDelay = `${parseInt(d, 10) || 0}ms`;
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));
}

function initCopyButtons() {
  const btns = document.querySelectorAll("[data-copy]");
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener("click", async () => {
      const selector = btn.getAttribute("data-copy");
      const target = selector ? document.querySelector(selector) : null;
      const text = (target?.innerText || target?.textContent || "").trim();
      if (!text) return;

      try{
        await navigator.clipboard.writeText(text);
        const old = btn.textContent;
        btn.textContent = "Tersalin ✓";
        btn.disabled = true;
        setTimeout(() => {
          btn.textContent = old;
          btn.disabled = false;
        }, 1200);
      }catch(e){
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
    });
  });
}

function initVideoEmbeds() {
  const embeds = document.querySelectorAll(".video-embed[data-video-src]");
  if (!embeds.length) return;

  embeds.forEach(embed => {
    const poster = embed.querySelector(".video-poster");
    const src = embed.getAttribute("data-video-src");
    if (!poster || !src) return;

    const play = () => {
      const video = document.createElement("video");
      video.className = "video-native";
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      video.preload = "metadata";

      const source = document.createElement("source");
      source.src = src;
      source.type = "video/mp4";
      video.appendChild(source);

      embed.innerHTML = "";
      embed.appendChild(video);
      video.focus();
    };

    poster.addEventListener("click", play);
    poster.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        play();
      }
    });

    const btn = poster.querySelector(".video-play");
    if (btn) btn.addEventListener("click", (e) => e.preventDefault());
  });
}

function initNativeVideoPlayOverlay() {
  const wrappers = document.querySelectorAll(".video-embed");
  if (!wrappers.length) return;

  wrappers.forEach(wrap => {
    const video = wrap.querySelector("video.video-native");
    if (!video) return;

    let overlay = wrap.querySelector(".video-play-overlay");
    if (!overlay) {
      overlay = document.createElement("button");
      overlay.type = "button";
      overlay.className = "video-play-overlay";
      overlay.setAttribute("aria-label", "Putar video");
      overlay.innerHTML = '<span class="video-play-icon" aria-hidden="true"></span>';
      wrap.appendChild(overlay);
    }

    const sync = () => {
      const playing = !video.paused && !video.ended;
      overlay.classList.toggle("hidden", playing);
    };

    const play = async () => {
      try {
        await video.play();
      } catch (_) {
      }
      sync();
    };

    overlay.addEventListener("click", play);
    overlay.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        play();
      }
    });

    video.addEventListener("play", sync);
    video.addEventListener("pause", sync);
    video.addEventListener("ended", sync);
    sync();
  });
}

function initAutoVideoPoster() {
  const vids = document.querySelectorAll("video.video-native[data-autoposter='true']");
  if (!vids.length) return;

  vids.forEach(video => {
    const existingPoster = (video.getAttribute("poster") || "").trim();
    if (existingPoster) return;

    video.pause();

    const captureFrameAsPoster = () => {
      try {
        const canvas = document.createElement("canvas");
        const w = video.videoWidth || 0;
        const h = video.videoHeight || 0;
        if (!w || !h) return;
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(video, 0, 0, w, h);
        const dataUrl = canvas.toDataURL("image/png");
        if (dataUrl && dataUrl.startsWith("data:image")) {
          video.setAttribute("poster", dataUrl);
        }
      } catch (e) {
      }
    };

    const onLoadedMeta = () => {
      const target = Math.min(0.1, Math.max(0, (video.duration || 0) - 0.1));
      if (isFinite(target) && target > 0) {
        const onSeeked = () => {
          captureFrameAsPoster();
          video.removeEventListener("seeked", onSeeked);
          try { video.currentTime = 0; } catch (e) {}
        };
        video.addEventListener("seeked", onSeeked, { once: false });
        try { video.currentTime = target; } catch (e) {
          captureFrameAsPoster();
        }
      } else {
        captureFrameAsPoster();
      }
    };

    const onLoadedData = () => captureFrameAsPoster();

    video.addEventListener("loadedmetadata", onLoadedMeta, { once: true });
    video.addEventListener("loadeddata", onLoadedData, { once: true });
  });
}

function clamp(n, min, max){ return Math.min(max, Math.max(min, n)); }

function paintRange(el){
  if(!el) return;
  const v = parseFloat(el.value || "0");
  el.style.setProperty("--p", `${clamp(v,0,100)}%`);
}

function initBudgetCalculator(){
  const rNeeds = document.getElementById("rNeeds");
  const rWants = document.getElementById("rWants");
  const rSave  = document.getElementById("rSave");
  const iNeeds = document.getElementById("iNeeds");
  const iWants = document.getElementById("iWants");
  const iSave  = document.getElementById("iSave");
  const sumHint = document.getElementById("sumHint");

  if(!rNeeds || !rWants || !rSave || !iNeeds || !iWants || !iSave) return;

  if (document.getElementById('budgetPlanner')) return;

  const ranges = {needs:rNeeds, wants:rWants, save:rSave};
  const inputs = {needs:iNeeds, wants:iWants, save:iSave};

  function getVals(){
    return {
      needs: clamp(parseInt(inputs.needs.value||ranges.needs.value||"0",10)||0, 0, 100),
      wants: clamp(parseInt(inputs.wants.value||ranges.wants.value||"0",10)||0, 0, 100),
      save:  clamp(parseInt(inputs.save.value ||ranges.save.value ||"0",10)||0, 0, 100)
    };
  }

  function setVals(vals){
    Object.keys(vals).forEach(k=>{
      const v = clamp(Math.round(vals[k]),0,100);
      ranges[k].value = v;
      inputs[k].value = v;
      paintRange(ranges[k]);
    });
    const total = vals.needs + vals.wants + vals.save;
    if(sumHint){
      sumHint.textContent = `Total harus 100% — kami sesuaikan otomatis. (Total: ${total}%)`;
      sumHint.classList.toggle("warn", total !== 100);
    }
  }

  function applyDiff(vals, keys, diff){
    for(const k of keys){
      if(diff === 0) break;
      if(diff > 0){
        const room = 100 - vals[k];
        const add = Math.min(room, diff);
        vals[k] += add;
        diff -= add;
      }else{
        const room = vals[k];
        const sub = Math.min(room, -diff);
        vals[k] -= sub;
        diff += sub;
      }
    }
    return diff;
  }

  function normalize(changedKey){
    let vals = getVals();

    vals[changedKey] = clamp(vals[changedKey],0,100);

    let total = vals.needs + vals.wants + vals.save;
    let diff = 100 - total; 

    const otherKeys = ["needs","wants","save"].filter(k=>k!==changedKey);
    diff = applyDiff(vals, [...otherKeys].reverse(), diff);

    if(diff !== 0){
      vals[changedKey] = clamp(vals[changedKey] + diff, 0, 100);
    }

    vals.needs = clamp(vals.needs,0,100);
    vals.wants = clamp(vals.wants,0,100);
    vals.save  = clamp(vals.save,0,100);

    total = vals.needs + vals.wants + vals.save;
    if(total !== 100){
      const last = otherKeys[otherKeys.length-1] || changedKey;
      vals[last] = clamp(vals[last] + (100 - total), 0, 100);
    }
    setVals(vals);
  }

  function bindPair(key){
    const r = ranges[key];
    const i = inputs[key];

    const onRange = () => {
      i.value = r.value;
      normalize(key);
    };
    const onInput = () => {
      if(i.value === "") return;
      r.value = clamp(parseInt(i.value,10)||0,0,100);
      normalize(key);
    };

    r.addEventListener("input", onRange);
    i.addEventListener("input", onInput);
    i.addEventListener("blur", () => {
      if(i.value === "") i.value = r.value;
      normalize(key);
    });
  }

  ["needs","wants","save"].forEach(bindPair);

  document.querySelectorAll('[data-preset]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const p = btn.getAttribute('data-preset');
      if(!p) return;
      if(p === "reset"){
        setVals({needs:50,wants:30,save:20});
        return;
      }
      const parts = p.split('-').map(x=>parseInt(x,10));
      if(parts.length===3 && parts.every(n=>!isNaN(n))){
        setVals({needs:clamp(parts[0],0,100),wants:clamp(parts[1],0,100),save:clamp(parts[2],0,100)});
      }
    });
  });

  setVals(getVals());
  normalize("needs");
}

document.addEventListener("DOMContentLoaded", () => {
  setYear();
  initMobileNav();
  setActiveNav();
  revealObserver();
  initCopyButtons();
  initBudgetCalculator();
  initVideoEmbeds();
  initAutoVideoPoster();
  initNativeVideoPlayOverlay();
});
