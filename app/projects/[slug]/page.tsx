import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProject, getPublicProjects } from '@/config/projects';
import SystemStatus from '@/components/project/SystemStatus';
import BuildLog from '@/components/project/BuildLog';
import TechModules from '@/components/project/TechModules';

export async function generateStaticParams() {
  return getPublicProjects().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Ansh Gupta`,
    description: project.shortDescription,
  };
}

// ─── Per-project specialty blocks ───────────────────────────────────────────

function OperonixTerminal({ color }: { color: string }) {
  return (
    <div
      style={{
        background: '#0a0a0f',
        border: `1px solid ${color}33`,
        borderRadius: '12px',
        padding: '20px',
        fontFamily: '"JetBrains Mono", "Fira Code", "Courier New", monospace',
        fontSize: '0.75rem',
        lineHeight: 1.8,
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
        <span style={{ marginLeft: '8px', color: 'rgba(255,255,255,0.25)', fontSize: '0.65rem', letterSpacing: '0.12em' }}>
          OPERONIX EXECUTION ENGINE — v0.1
        </span>
      </div>
      <div style={{ color: '#4ade80' }}>{'>'} operonix --init execution-layer</div>
      <div style={{ color: '#4ade80' }}>✓ Context engine loaded</div>
      <div style={{ color: '#4ade80' }}>✓ Decision tracker active</div>
      <div style={{ color: `${color}cc` }}>→ AI routing: standby</div>
      <div style={{ color: `${color}cc` }}>→ Dashboard: building...</div>
      <div style={{ color: 'rgba(255,255,255,0.3)', marginTop: '4px' }}>
        [████████████░░░░░░░░] 62% — compiling operator modules
      </div>
    </div>
  );
}

function OozeEditorial({ color }: { color: string }) {
  return (
    <div
      style={{
        position: 'relative',
        padding: '36px 32px 32px 48px',
        borderLeft: `3px solid ${color}`,
        background: `linear-gradient(135deg, ${color}08, transparent 70%)`,
        borderRadius: '0 12px 12px 0',
        overflow: 'hidden',
      }}
    >
      {/* Decorative huge quote mark */}
      <span
        style={{
          position: 'absolute',
          top: '-12px',
          left: '10px',
          fontSize: '8rem',
          fontFamily: 'var(--font-space-grotesk)',
          fontWeight: 900,
          color: color,
          opacity: 0.3,
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        &ldquo;
      </span>
      <p
        style={{
          fontFamily: 'var(--font-space-grotesk)',
          fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          fontWeight: 700,
          fontStyle: 'italic',
          color: '#fff',
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          position: 'relative',
          zIndex: 1,
        }}
      >
        Clothing as a cinematic experience.
      </p>
      <p
        style={{
          marginTop: '14px',
          fontSize: '0.72rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: color,
          fontFamily: 'var(--font-space-grotesk)',
          fontWeight: 600,
        }}
      >
        — The Ooze Philosophy
      </p>
    </div>
  );
}

function BikeTribeStats({ color }: { color: string }) {
  const stats = [
    { value: '10K+', label: 'Riders' },
    { value: '500+', label: 'Routes' },
    { value: '50+', label: 'Events' },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
      {stats.map(stat => (
        <div
          key={stat.label}
          style={{
            background: `linear-gradient(135deg, ${color}18, ${color}08)`,
            border: `1px solid ${color}30`,
            borderRadius: '16px',
            padding: '20px 16px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 900,
              color: color,
              lineHeight: 1,
              marginBottom: '6px',
            }}
          >
            {stat.value}
          </div>
          <div
            style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(228,228,231,0.5)',
              fontFamily: 'var(--font-space-grotesk)',
            }}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function ArchitectDiagram({ color }: { color: string }) {
  const steps = ['IDEA', 'STRATEGY', 'EXECUTION'];
  return (
    <div
      style={{
        background: `${color}05`,
        border: `1px solid ${color}20`,
        borderRadius: '12px',
        padding: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0',
      }}
    >
      {steps.map((step, i) => (
        <div key={step} style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              border: `1.5px solid ${color}`,
              borderRadius: '8px',
              padding: '12px 20px',
              minWidth: '90px',
              textAlign: 'center',
              background: `${color}10`,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.62rem',
                fontWeight: 800,
                letterSpacing: '0.18em',
                color: color,
              }}
            >
              {step}
            </div>
          </div>
          {i < steps.length - 1 && (
            <div
              style={{
                fontSize: '1.1rem',
                color: `${color}50`,
                margin: '0 8px',
                fontFamily: 'monospace',
              }}
            >
              →
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function SevaAgroBadge({ color }: { color: string }) {
  const features = [
    'Production-ready architecture',
    'Mobile-first design',
    'Lead generation system',
    'SEO-optimized structure',
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span
          style={{
            display: 'inline-block',
            background: `${color}22`,
            border: `1.5px solid ${color}`,
            borderRadius: '999px',
            padding: '8px 22px',
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '0.72rem',
            fontWeight: 800,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: color,
          }}
        >
          INDUSTRIAL GRADE
        </span>
      </div>
      <p
        style={{
          fontSize: '0.85rem',
          color: 'rgba(228,228,231,0.6)',
          lineHeight: 1.6,
          fontStyle: 'italic',
          marginBottom: '4px',
        }}
      >
        Built for India&apos;s Agricultural Infrastructure
      </p>
      {/* Feature rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {features.map(f => (
          <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#4ade80', fontSize: '0.8rem', flexShrink: 0 }}>✓</span>
            <span style={{ fontSize: '0.85rem', color: 'rgba(228,228,231,0.65)', lineHeight: 1.5 }}>{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectSpecialBlock({ slug, color }: { slug: string; color: string }) {
  if (slug === 'operonix') return <OperonixTerminal color={color} />;
  if (slug === 'ooze') return <OozeEditorial color={color} />;
  if (slug === 'biketribe') return <BikeTribeStats color={color} />;
  if (slug === 'architect-ai') return <ArchitectDiagram color={color} />;
  if (slug === 'seva-agro') return <SevaAgroBadge color={color} />;
  return null;
}

// ─── Section label helper ────────────────────────────────────────────────────
function SectionLabel({ text, color }: { text: string; color: string }) {
  return (
    <p
      style={{
        fontSize: '0.65rem',
        fontWeight: 700,
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color,
        fontFamily: 'var(--font-space-grotesk)',
        marginBottom: '12px',
      }}
    >
      {text}
    </p>
  );
}

// ─── Main page ───────────────────────────────────────────────────────────────

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { themeColors } = project;

  return (
    <div style={{ background: '#050505', minHeight: '100vh' }}>

      {/* ── BACK NAVIGATION (fixed) ── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center px-6 py-4 pointer-events-none">
        <Link
          href="/#build-worlds"
          className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold transition-all duration-300"
          style={{
            background: 'rgba(5,5,5,0.85)',
            backdropFilter: 'blur(16px)',
            borderColor: 'rgba(255,255,255,0.08)',
            color: 'rgba(228,228,231,0.7)',
            fontFamily: 'var(--font-space-grotesk)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m19 12-14 0M12 19l-7-7 7-7" />
          </svg>
          All Worlds
        </Link>
      </div>

      {/* ── CINEMATIC HERO (full viewport height) ── */}
      <div
        className="relative overflow-hidden"
        style={{ minHeight: '100vh', display: 'flex', alignItems: 'flex-end' }}
      >
        {/* Background: image with heavy dark overlay, or pure gradient */}
        {project.tileImage ? (
          <div className="absolute inset-0">
            <Image
              src={project.tileImage}
              alt={project.name}
              fill
              className="object-cover object-center"
              style={{ filter: 'brightness(0.2) contrast(1.1) saturate(0.8)' }}
              priority
            />
          </div>
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 120% 100% at 55% 30%, ${themeColors.primary}18, ${themeColors.secondary}0a, transparent 65%)`,
            }}
          />
        )}

        {/* Ambient glow blob */}
        <div
          className="absolute"
          style={{
            top: '10%',
            left: '40%',
            width: '60%',
            height: '60%',
            background: `radial-gradient(ellipse at center, ${themeColors.primary}40, transparent 70%)`,
            filter: 'blur(120px)',
            pointerEvents: 'none',
            opacity: 0.3,
          }}
        />

        {/* Bottom gradient fade to page bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(5,5,5,0.1) 0%, transparent 30%, rgba(5,5,5,0.6) 70%, #050505 100%)',
          }}
        />

        {/* Hero content — bottom-left */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20 pt-32">
          {/* Status badge + year */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '999px',
                border: `1px solid ${themeColors.primary}30`,
                background: 'rgba(5,5,5,0.75)',
                backdropFilter: 'blur(12px)',
                color: themeColors.text,
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: themeColors.text,
                  flexShrink: 0,
                }}
              />
              {project.status}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontSize: '0.65rem',
                color: 'rgba(228,228,231,0.4)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              {project.year}
            </span>
          </div>

          {/* Giant project name */}
          <h1
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: 'clamp(4rem, 10vw, 9rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              color: '#fff',
              lineHeight: 0.9,
              marginBottom: '20px',
            }}
          >
            {project.name}
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
              fontWeight: 600,
              color: themeColors.text,
              maxWidth: '640px',
              lineHeight: 1.4,
              marginBottom: '24px',
            }}
          >
            {project.tagline}
          </p>

          {/* Tags row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tags.map(tag => (
              <span
                key={tag}
                style={{
                  padding: '4px 10px',
                  borderRadius: '999px',
                  border: `1px solid ${themeColors.primary}20`,
                  background: `${themeColors.primary}12`,
                  color: themeColors.text,
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT GRID ── */}
      <div className="max-w-6xl mx-auto px-6 pb-32 pt-16">
        <div className="grid md:grid-cols-3 gap-10">

          {/* ── LEFT: Story column (70%) ── */}
          <div className="md:col-span-2 flex flex-col gap-14">

            {/* a) WHAT IT IS */}
            <div>
              <SectionLabel text="WHAT IT IS" color={themeColors.text} />
              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'rgba(228,228,231,0.65)',
                  lineHeight: 1.85,
                }}
              >
                {project.shortDescription}
              </p>
            </div>

            {/* b) THE STORY */}
            {project.fullStory && (
              <div>
                <SectionLabel text="THE STORY" color={themeColors.text} />
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'rgba(228,228,231,0.55)',
                    lineHeight: 1.85,
                  }}
                >
                  {project.fullStory}
                </p>
              </div>
            )}

            {/* c) Per-project specialty block */}
            <div>
              <SectionLabel
                text={
                  slug === 'operonix' ? 'EXECUTION ENGINE' :
                  slug === 'ooze' ? 'THE VISION' :
                  slug === 'biketribe' ? 'COMMUNITY STATS' :
                  slug === 'architect-ai' ? 'THE WORKFLOW' :
                  slug === 'seva-agro' ? 'BUILD QUALITY' :
                  'SIGNATURE'
                }
                color={themeColors.text}
              />
              <ProjectSpecialBlock slug={slug} color={themeColors.primary} />
            </div>

            {/* d) Screenshots gallery */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div>
                <SectionLabel text="VISUAL SHOWCASE" color={themeColors.text} />
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.screenshots.map((src, i) => (
                    <div
                      key={i}
                      className="relative rounded-xl overflow-hidden border"
                      style={{
                        aspectRatio: '16/9',
                        borderColor: `${themeColors.primary}15`,
                      }}
                    >
                      <Image
                        src={src}
                        alt={`${project.name} screenshot ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* e) SHIPPED features */}
            {project.builtFeatures && project.builtFeatures.length > 0 && (
              <div>
                <SectionLabel text="SHIPPED" color={themeColors.text} />
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {project.builtFeatures.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ color: '#4ade80', fontSize: '0.75rem', marginTop: '3px', flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: '0.88rem', color: 'rgba(228,228,231,0.65)', lineHeight: 1.6 }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* f) WHAT'S NEXT */}
            {project.plannedFeatures && project.plannedFeatures.length > 0 && (
              <div>
                <SectionLabel text="WHAT'S NEXT" color={themeColors.text} />
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {project.plannedFeatures.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ color: `${themeColors.primary}80`, fontSize: '0.75rem', marginTop: '3px', flexShrink: 0 }}>→</span>
                      <span style={{ fontSize: '0.88rem', color: 'rgba(228,228,231,0.45)', lineHeight: 1.6 }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* g) TECH STACK */}
            {project.techStack && project.techStack.length > 0 && (
              <TechModules stack={project.techStack} primaryColor={themeColors.primary} />
            )}

            {/* h) CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                paddingTop: '16px',
                borderTop: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {project.liveUrl && project.liveUrl !== 'https://PLACEHOLDER' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 20px',
                    borderRadius: '12px',
                    fontFamily: 'var(--font-space-grotesk)',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    background: themeColors.primary,
                    color: '#fff',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s',
                  }}
                >
                  Visit Live
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
              {project.repoUrl && project.repoUrl !== 'https://PLACEHOLDER' && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 20px',
                    borderRadius: '12px',
                    fontFamily: 'var(--font-space-grotesk)',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    color: 'rgba(228,228,231,0.65)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.03)',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  View Repo
                </a>
              )}
            </div>
          </div>

          {/* ── RIGHT: Sidebar (30%) ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {project.systemStatus && project.systemStatus.length > 0 && (
              <SystemStatus items={project.systemStatus} primaryColor={themeColors.primary} />
            )}
            {project.buildLog && project.buildLog.length > 0 && (
              <BuildLog entries={project.buildLog} primaryColor={themeColors.primary} />
            )}

            {/* Positioning quote card */}
            <div
              style={{
                borderRadius: '16px',
                border: `1px solid ${themeColors.primary}20`,
                background: `${themeColors.primary}06`,
                padding: '20px',
              }}
            >
              <p
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: themeColors.text,
                  fontFamily: 'var(--font-space-grotesk)',
                  marginBottom: '10px',
                }}
              >
                POSITIONING
              </p>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'rgba(228,228,231,0.6)',
                  lineHeight: 1.65,
                  fontStyle: 'italic',
                }}
              >
                &ldquo;{project.positioning}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── PROJECT-SPECIFIC FOOTER ── */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '64px',
          paddingBottom: '64px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-space-grotesk)',
            fontSize: '0.7rem',
            color: 'rgba(228,228,231,0.25)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}
        >
          STILL EVOLVING · {project.year}
        </p>
        <p
          style={{
            fontSize: '0.85rem',
            color: 'rgba(228,228,231,0.2)',
          }}
        >
          Built independently by Ansh Gupta
        </p>
      </div>
    </div>
  );
}
