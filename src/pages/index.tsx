import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

type Article = {
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  time: string;
  accent: string;
};

const articles: Article[] = [
  {
    tag: 'ENGINEERING',
    date: 'JUL 12, 2025',
    title: 'The quiet power of boring systems',
    excerpt: 'The most dependable software is rarely the loudest. A few notes on choosing clarity over cleverness.',
    time: '6 min read',
    accent: '01',
  },
  {
    tag: 'LEARNING NOTES',
    date: 'JUN 28, 2025',
    title: 'What twelve years of shipping taught me about learning',
    excerpt: 'A better way to stay curious while building software that has to work in the real world.',
    time: '8 min read',
    accent: '02',
  },
  {
    tag: 'CRAFT',
    date: 'JUN 10, 2025',
    title: 'Make the next right thing easier',
    excerpt: 'Good developer experience is a chain of tiny decisions that respects another person’s attention.',
    time: '5 min read',
    accent: '03',
  },
];

function Arrow() {
  return <span aria-hidden="true" className={styles.arrow}>↗</span>;
}

function ArticleCard({article}: {article: Article}) {
  return (
    <article className={styles.articleCard}>
      <div className={styles.cardTopline}>
        <span>{article.tag}</span><span>{article.date}</span>
      </div>
      <div className={styles.articleNumber}>{article.accent}</div>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <div className={styles.cardFooter}><span>{article.time}</span><Link to="/blog" aria-label={`Read ${article.title}`}><Arrow /></Link></div>
    </article>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout title="Perpetual Engineer" description="Charan’s notes on software engineering and continuous learning.">
      <main>
        <section className={styles.hero}>
          <div className={styles.heroGrid}>
            <div className={styles.heroIntro}>
              <p className={styles.eyebrow}><span /> IN PURSUIT OF BETTER QUESTIONS</p>
              <h1>Stay curious.<br /><em>Build</em> better.</h1>
              <p className={styles.heroCopy}>I’m Charan — a software developer with 12 years of experience, documenting the ideas, systems, and small discoveries that keep the work interesting.</p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryLink} to="/blog">Read the journal <Arrow /></Link>
                <a className={styles.textLink} href="#about">More about me <span>↓</span></a>
              </div>
            </div>
            <div className={styles.heroArtwork} aria-label="Abstract illustration of a continuous learning loop">
              <div className={styles.orbit} />
              <div className={styles.orbitTwo} />
              <div className={styles.sun}>PE</div>
              <div className={styles.loopText}>LEARN · CODE · REPEAT · DOCUMENT · </div>
              <div className={styles.artCaption}><span>EST. 2013</span><span>ONGOING</span></div>
            </div>
          </div>
          <div className={styles.marquee}><span>LEARN</span><i>✦</i><span>CODE</span><i>✦</i><span>REPEAT</span><i>✦</i><span>DOCUMENT</span><i>✦</i><span>LEARN</span></div>
        </section>

        <section className={styles.latest}>
          <div className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}><span /> FRESH FROM THE NOTEBOOK</p><h2>Latest <em>thinking.</em></h2></div>
            <Link className={styles.allLink} to="/blog">View all writing <Arrow /></Link>
          </div>
          <div className={styles.articleGrid}>{articles.map((article) => <ArticleCard key={article.accent} article={article} />)}</div>
        </section>

        <section className={styles.about} id="about">
          <p className={styles.verticalLabel}>THE LONG GAME</p>
          <div className={styles.aboutContent}>
            <p className={styles.eyebrow}><span /> A LITTLE CONTEXT</p>
            <h2>Software changes.<br />The joy of <em>learning</em> doesn’t.</h2>
            <div className={styles.aboutText}>
              <p>I’ve spent more than a decade turning complex problems into useful software. Along the way, I’ve learned that the best career strategy is wonderfully simple: remain a student.</p>
              <p>Perpetual Engineer is my public notebook — a place for practical lessons, thoughtful experiments, and the occasional reminder to enjoy the process.</p>
              <a className={styles.underlinedLink} href="mailto:hello@perpetualengineer.dev">Say hello <Arrow /></a>
            </div>
          </div>
          <div className={styles.stats}>
            <div><strong>12<span>+</span></strong><p>years building<br />software</p></div>
            <div><strong>∞</strong><p>things left<br />to learn</p></div>
            <div><strong>01</strong><p>motive:<br />stay curious</p></div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
