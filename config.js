// Collegamento a Supabase
// Copia questi due valori da Supabase: Project Settings → API (o "API Keys").
// Usa SOLO la chiave pubblica ("anon public" oppure "publishable").
// Non incollare mai la chiave "service_role" o "secret": darebbe accesso totale a chiunque.

window.VA_CONFIG = {
  supabaseUrl: 'INCOLLA_QUI_URL',     // es. https://abcdefghijkl.supabase.co
  supabaseKey: 'INCOLLA_QUI_CHIAVE'   // la chiave pubblica, una stringa lunga
};
