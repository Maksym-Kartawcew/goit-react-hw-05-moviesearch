import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { toastConfig } from '../components/Loader/toastConfig';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api/api';
import { Dna } from 'react-loader-spinner';

import profile from '../images/profile.png';
import styles from './Pages.module.css';

const MovieCast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchReviewsData = async () => {
      try {
        const castDetails = await fetchMovieCast(movieId);

        setMovieCast(castDetails);
      } catch (error) {
        setError(error.message);
        toast.error(error.message, toastConfig);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviewsData();
  }, [movieId]);

  return (
    <div>
      {error !== null && (
        <p>
          Oops, some error occurred! Please, try again later. Error: {error}
        </p>
      )}
      {isLoading && (
        <Dna
          visible={true}
          height={80}
          width={80}
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClassName="dna-wrapper"
        />
      )}

      <div className={styles.MovieDetailsBox}>
               {movieCast?.length > 0 ? (
          <ul className={styles.castList}>
            {movieCast.map(({ id, profile_path, character, name }) => (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : profile
                  }
                  alt={name}
                  width="250"
                />
                <h2>{name}</h2>
                <p>{character}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We do not have any reviews for this Movie.</p>
        )}
      </div>
    </div>
  );
};

export default MovieCast;
