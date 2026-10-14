import { profile, projects, tech, openTo, experience } from "@/data/content";

const Mark = () => <span className="mark" aria-hidden="true">DD</span>;

export default function Home() {
  const featured = projects.slice(0, 2);
  return (
    <>
      <nav className="nav">
        <div className="nav-in">
          <a href="#top" aria-label="Home"><Mark /></a>
          <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main id="top">
        <header className="hero glow">
          <div className="col">
            <p className="hello">Hello! I am <span>Djibril</span></p>
            <h1>A frontend engineer whose apps passed 100K downloads</h1>
            <p className="typed" aria-label="I'm a Frontend Engineer.">I&apos;m a Frontend Engineer.</p>
            <p className="sub">Currently at Kabakoo, in Lomé.</p>
            <p className="about">{profile.intro}</p>
          </div>
        </header>

        <section className="col glow" aria-labelledby="work">
          <h2 id="work">Work</h2>
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

        {featured.map((p, i) => (
          <section key={p.name} className={`col feature glow ${i % 2 ? "flip" : ""}`}>
            <div className="shots">
              {((p as { screens?: string[] }).screens?.length ? (p as { screens?: string[] }).screens! : [null, null, null]).map((src, k) => (
                <div key={k} className="phone">
                  {src ? <img src={src} alt={`${p.name} screen ${k + 1}`} loading="lazy" /> : <span>Screenshot {k + 1}</span>}
                </div>
              ))}
            </div>
            <div className="text">
              <p className="tag">Featured project</p>
              <h3>{p.name}</h3>
              <p className="glass">{p.summary} {p.role}</p>
              <span className="pill">{p.stack}</span>
            </div>
          </section>
        ))}

        <section className="col" aria-labelledby="path">
          <h2 id="path">Experience and education</h2>
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.role}><strong>{e.role}</strong><span>{e.period}</span>{e.text && <p>{e.text}</p>}</li>
            ))}
          </ol>
        </section>

        <footer id="contact" className="col contact">
          <h2>Contact</h2>
          <p>{openTo} Have a role or a project in mind? Let&apos;s connect.</p>
          <p><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p className="links"><a href={profile.linkedin}>LinkedIn</a><a href={profile.cv}>Download CV</a></p>
        </footer>
      </main>
    </>
  );
}
