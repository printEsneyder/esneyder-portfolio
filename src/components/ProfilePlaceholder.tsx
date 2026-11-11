export function ProfilePlaceholder() {
  return (
    <div className="relative aspect-[4/5] w-full max-w-sm mx-auto rounded-2xl overflow-hidden flex items-center justify-center border" style={{ background: 'var(--color-surface-alt)', borderColor: 'var(--color-border)' }}>
      <div className="absolute top-4 left-4 text-xs tracking-widest" style={{ color: 'var(--color-text-secondary)' }}>ESN / PROFILE</div>
      <div className="text-center px-6">
        <div className="text-2xl md:text-3xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>PLACEHOLDER</div>
        <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Add photo later by replacing /images/photo.jpg</div>
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 opacity-20" style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }} />
    </div>
  );
}
