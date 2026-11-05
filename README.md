# Minecraft Server Website

Statik sayt (HTML + CSS + JS). Build kerak emas.

## Sozlash
`script.js` ning tepasidagi `CONFIG` ni o'zgartiring:
- `serverName` — server nomi
- `serverIp` — server IP manzili
- `discord` — Discord invite havolasi

## GitHub'ga yuklash
```bash
git init
git add .
git commit -m "Minecraft website"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

## Render'da deploy
1. render.com → New → **Static Site**
2. GitHub repo'ni ulang
3. Build Command: (bo'sh qoldiring)
4. Publish Directory: `.`
5. Create Static Site
