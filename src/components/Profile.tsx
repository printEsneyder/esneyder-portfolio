import { useLanguage } from "../i18n/useLanguage";
import profilePhoto from "../assets/images/projects/Esneyder set up.jpg";

export function Profile() {
  const { t } = useLanguage();
  return (
    <div className="relative mx-auto max-w-sm">
      <div className="group relative aspect-square w-full overflow-hidden rounded-xl border transition-colors duration-300" style={{ borderColor: "var(--color-border)" }}>
        <img
          src={profilePhoto}
          alt={t("hero.profileLabel")}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const placeholder = target.nextElementSibling as HTMLElement;
            if (placeholder) placeholder.style.display = "flex";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 ring-1 ring-inset ring-transparent group-hover:ring-[var(--color-accent)] transition-colors duration-300" />
        <div className="absolute inset-0 hidden items-center justify-center" style={{ background: "var(--color-surface-alt)" }}>
          <span className="text-6xl font-semibold tracking-tight" style={{ color: "var(--color-text-secondary)" }}>EI</span>
        </div>
      </div>
      <div className="absolute -bottom-3 -right-3 rounded-full border px-3 py-1 text-xs uppercase tracking-widest backdrop-blur-sm" style={{ borderColor: "var(--color-border)", background: "color-mix(in srgb, var(--color-bg) 80%, transparent)" }}>
        {t("hero.brandSub")}
      </div>
    </div>
  );
}
