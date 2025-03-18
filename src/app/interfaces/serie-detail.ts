export interface SerieDetail {
    adult: boolean;
    backdrop_path: string;
    created_by: any[];
    episode_run_time: number[];
    first_air_date: string;
    genres: SerieGenre[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: any;
    name: string;
    next_episode_to_air: string;
    networks: any[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: any[];
    production_countries: any[];
    seasons: any[];
    spoken_languages: any[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;

    generosUnidos: string;
}

interface SerieGenre {
    id: number;
    name: string;
}