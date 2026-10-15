import Image from "next/image";
import { profile, copy, projects, otherProjects, tech, openTo, experience } from "@/data/content";

type Project = {
  name: string;
  stack: string;
  summary: string;
  role: string;
  screens?: string[];
};

const Mark = () => <span className="mark" aria-hidden="true">DD</span>;

// Phone-frame screenshots: portrait 9:19.5 frames, up to 3 per featured project.
const MAX_SCREENS = 3;
const PHONE_W = 450;
const PHONE_H = 975;

export default function Home() {
  const featured = (projects as Project[]).slice(0, 2);
  return (
    <>
      <nav className="nav">
        <div className="nav-in">
          <a href="#top" aria-label={`DD, ${copy.nav.home.toLowerCase()}`}><Mark /></a>
          <ul>
            <li><a href="#top">{copy.nav.home}</a></li>
            <li><a href="#work">{copy.nav.work}</a></li>
            <li><a href="#contact">{copy.nav.contact}</a></li>
          </ul>
        </div>
      </nav>

      <main id="top">
        <header className="hero glow">
          <div className="col">
            <p className="hello">{copy.hero.hello} <span>{copy.hero.name}</span></p>
            <h1>{copy.hero.headline}</h1>
            <p className="typed">{copy.hero.typed}</p>
            <p className="sub">{copy.hero.location}</p>
            <p className="about">{profile.intro}</p>
          </div>
        </header>

        <section className="col glow" aria-labelledby="work">
          <h2 id="work">{copy.workTitle}</h2>
          <div className="grid">
            {projects.map((p) => (
              <article key={p.name} className="card">
                <h3>{p.name}</h3>
                <p>{p.summary}</p>
                <span className="pill">{p.stack}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="col center" aria-labelledby="stack">
          <h2 id="stack" className="lead">{openTo}</h2>
          <ul className="chips">{tech.map((t) => <li key={t}>{t}</li>)}</ul>
        </section>

        {featured.map((p, i) => {
          const screens = (p.screens ?? []).slice(0, MAX_SCREENS);
          const slots: (string | null)[] = screens.length ? screens : [null, null, null];
          return (
            <section key={p.name} className={`col feature glow ${i % 2 ? "flip" : ""}`}>
              <div className={`shots n${slots.length}`}>
                {slots.map((src, k) => (
                  <div key={k} className="phone">
                    {src ? (
                      <Image
                        src={src}
                        alt={`${p.name} app screenshot ${k + 1}`}
                        width={PHONE_W}
                        height={PHONE_H}
                        sizes="152px"
                      />
                    ) : (
                      <span>Screenshot {k + 1}</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="text">
                <p className="tag">{copy.featuredTag}</p>
                <h3>{p.name}</h3>
                <p className="glass">{p.summary} {p.role}</p>
                <span className="pill">{p.stack}</span>
              </div>
            </section>
          );
        })}

        {otherProjects.length > 0 && (
          <section className="col" aria-labelledby="more">
            <h2 id="more">{copy.otherTitle}</h2>
            <ul className="other">
              {otherProjects.map((o) => (
                <li key={o.name} className="other-item">
                  <div className="other-head">
                    <h3>{o.name}</h3>
                    {o.link && (
                      <a className="other-link" href={o.link} target="_blank" rel="noopener noreferrer">{copy.otherLink}</a>
                    )}
                  </div>
                  <p>{o.summary}</p>
                  <div className="other-meta">
                    <span className="pill">{o.stack}</span>
                    <span className="other-role">{o.role}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="col" aria-labelledby="path">
          <h2 id="path">{copy.experienceTitle}</h2>
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.role}><strong>{e.role}</strong><span>{e.period}</span>{e.text && <p>{e.text}</p>}</li>
            ))}
          </ol>
        </section>

        <footer id="contact" className="col contact">
          <h2>{copy.contact.title}</h2>
          <p>{openTo} {copy.contact.cta}</p>
          <p><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p className="links"><a href={profile.linkedin}>{copy.contact.linkedin}</a><a href={profile.cv}>{copy.contact.cv}</a></p>
        </footer>
      </main>
    </>
  );
}
