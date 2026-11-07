# Dieta Vein & Andrus

Sito per le diete di Vein e Andrus: dieta del giorno, calcoli crudo/cotto, scorte cucinate, frutta di stagione e lista della spesa.
Scorte e spesa sono salvate su **Supabase** e si aggiornano in tempo reale su entrambi i telefoni. Il sito è pubblicato gratis con **GitHub Pages**.

## File

| File | A cosa serve |
|---|---|
| `index.html` | Il sito |
| `config.js` | Indirizzo e chiave pubblica di Supabase (da compilare) |
| `icon.png` | Icona per la schermata Home |
| `supabase.sql` | Crea le tabelle su Supabase (si usa una volta sola) |
| `README.md` | Questa guida |

## 1. Supabase (circa 5 minuti)

1. Vai su [supabase.com](https://supabase.com), crea un account e premi **New project**. Scegli un nome (es. `dieta`), una password del database (salvala da qualche parte) e la regione **Europe**.
2. Aspetta che il progetto sia pronto, poi apri **SQL Editor** → **New query**, incolla tutto il contenuto di `supabase.sql` e premi **Run**. Deve comparire "Success".
3. **Authentication → Users → Add user → Create new user**: crea l'utente di Vein (email e password) e spunta **Auto Confirm User**. Ripeti per Andrus.
4. **Authentication → Sign In / Providers** (o *Providers → Email*): disattiva **Allow new users to sign up**. Così nessun altro può crearsi un account.
5. **Project Settings → API** (o *API Keys*): copia **Project URL** e la chiave pubblica (**anon public** oppure **publishable**). Non usare mai la chiave *service_role* / *secret*.

## 2. GitHub Pages (circa 5 minuti)

1. Su [github.com](https://github.com) crea un account e poi **New repository**: nome `dieta`, visibilità **Public**, poi **Create repository**.
2. Premi **uploading an existing file** e trascina `index.html`, `config.js` e `icon.png` (gli altri due file sono facoltativi). Premi **Commit changes**.
3. Apri `config.js` nel repository, premi la matita ✏️, sostituisci `INCOLLA_QUI_URL` e `INCOLLA_QUI_CHIAVE` con i valori copiati da Supabase e premi **Commit changes**.
4. **Settings → Pages**: in *Source* scegli **Deploy from a branch**, branch **main**, cartella **/ (root)**, poi **Save**.
5. Dopo uno o due minuti il sito è su `https://TUO-NOME-UTENTE.github.io/dieta/`.

## 3. Sui telefoni

1. Apri l'indirizzo del sito, vai su **Scorte** o **Spesa** ed entra con la tua email e password (una volta sola: il telefono se lo ricorda).
2. In alto scegli **Vein** o **Andrus**: anche questo resta salvato sul telefono.
3. Aggiungi il sito alla schermata Home:
   - **iPhone (Safari):** tasto Condividi → *Aggiungi alla schermata Home*.
   - **Android (Chrome):** menu ⋮ → *Aggiungi a schermata Home*.

## Da sapere

- **Chi vede cosa.** Il sito è pubblico: chi conosce l'indirizzo può vedere le diete (non ci sono cognomi). Scorte e lista della spesa invece si vedono e si modificano solo dopo l'accesso.
- **Senza connessione** (es. al supermercato) si vede l'ultima copia salvata della spesa; le modifiche partono quando torna il segnale.
- **Calcoli veloci** (crudo/cotto e totali non salvati come scorta) restano sul telefono di chi li fa.
- **Modificare la dieta.** Le diete sono scritte dentro `index.html` (cerca `const DIET=`). Se cambia il piano, si aggiorna quel blocco.
- **Piano gratuito di Supabase.** Se il progetto resta inutilizzato per una settimana, Supabase lo mette in pausa: basta riattivarlo dalla dashboard.
