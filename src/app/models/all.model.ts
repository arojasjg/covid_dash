export interface AllModel { 
    countries_stat : CountryStat[];
}

export interface CountryStat{
    
        country_name: string;
        cases: string;
        deaths: string;
        region: string;
        total_recovered: string;
        new_deaths: string;
        new_cases: string;
        serious_critical: string;
        active_cases: string;
        total_cases_per_1m_population: string;
        deaths_per_1m_population: string;
        total_tests: string;
        tests_per_1m_population: string;
}

export interface GlobalStats {
    totalCases : number;
    deathCases : number;
}

export const DEFAULT_GLOBAL_STATS = {
    totalCases : 0,
    deathCases : 0
  }