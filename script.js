// ====== SOZLAMALAR — shu yerni o'zgartiring ======
const CONFIG = {
  serverName: 'CraftWorld',
  serverIp: 'play.craftworld.uz',   // o'z server IP manzilingiz
  discord: 'https://discord.gg/your-invite'
};
// =================================================

// Matnlarni sozlamalardan to'ldirish
document.querySelectorAll('[data-server-name]').forEach(el => (el.textContent = CONFIG.serverName));
document.querySelectorAll('[data-discord]').forEach(el => (el.href = CONFIG.discord));
document.querySelectorAll('.ip-inline').forEach(el => (el.textContent = CONFIG.serverIp));
document.getElementById('ipText').textContent = CONFIG.serverIp;
document.getElementById('year').textContent = new Date().getFullYear();
document.title = CONFIG.serverName + ' — Minecraft Server';

// Mobil menyu
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

// Toast xabar
function toast(text) {
  let t = document.querySelector('.toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = text;
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => t.classList.remove('show'), 2000);
}

// IP nusxalash
document.getElementById('copyBtn').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(CONFIG.serverIp);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = CONFIG.serverIp;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
  toast('IP NUSXALANDI!');
});

// Server holati (mcsrvstat.us API)
async function loadStatus() {
  const box = document.getElementById('status');
  const text = document.getElementById('statusText');
  const ver = document.getElementById('versionText');
  try {
    const res = await fetch('https://api.mcsrvstat.us/3/' + encodeURIComponent(CONFIG.serverIp));
    const d = await res.json();
    if (d.online) {
      box.className = 'status online';
      text.textContent = `ONLAYN — ${d.players?.online ?? 0}/${d.players?.max ?? 0} o'yinchi`;
      ver.textContent = d.version ? 'Versiya: ' + d.version : '';
    } else {
      box.className = 'status offline';
      text.textContent = 'OFLAYN';
      ver.textContent = '';
    }
  } catch {
    box.className = 'status offline';
    text.textContent = 'Holatni olib bo\'lmadi';
  }
}
loadStatus();
setInterval(loadStatus, 60000);
      
