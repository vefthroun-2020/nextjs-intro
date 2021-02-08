import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home({ people }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul className={styles.peopleList}>
        {people.map((person) => (
          <li>
            <div>
              <img src={person.avatar} />
            </div>
            <div>
              {person.first_name} {person.last_name}
            </div>
            <div>{person.country}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`https://my.api.mockaroo.com/people.json`, {
    headers: {
      "X-API-Key": "632d7f80",
    },
  });
  const dummyPeople = await res.json();

  if (!dummyPeople) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      people: dummyPeople,
    },
  };
}
