# 📚 PokéPump Documentation

Selamat datang di direktori dokumentasi teknis platform **PokéPump**.

---

## 📑 Daftar Dokumen

1. [**Database Schema & ERD (`DATABASE_SCHEMA.md`)**](./DATABASE_SCHEMA.md)  
   - Diagram Relasi Entitas (Mermaid ERD)
   - Spesifikasi 18 Tipe Pokémon & Rarity Grade
   - Struktur detail tabel `User`, `Pokemon`, `BattleMatch`, `ActivityLog`, `IdempotencyKey`
   - Indeks optimasi performa tinggi

---

## 🛠️ Perintah Manajemen Database

```bash
# Push perubahan skema Prisma ke database cloud
npm run db:push

# Re-generate Prisma Client
npm run db:generate
```
