import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Comprendre le projet',
    to: '/docs/introduction/objectifs',
    description: (
      <>
        Objectifs, public cible et plateformes supportées : ce que KORA ONE fait,
        et ce qu'il ne fait volontairement pas.
      </>
    ),
  },
  {
    title: 'Comprendre le code',
    to: '/docs/architecture/vue-densemble',
    description: (
      <>
        Les quatre couches — UI, player, provider et proxy — leurs responsabilités
        et le chemin complet d'une lecture de flux.
      </>
    ),
  },
  {
    title: 'Lancer et contribuer',
    to: '/docs/developpement/setup',
    description: (
      <>
        Installer le projet en quelques commandes, tester le player et ouvrir
        une Pull Request.
      </>
    ),
  },
];

function Feature({title, description, to}) {
  return (
    <div className={clsx('col col--4')}>
      <Link className={styles.featureCard} to={to}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
