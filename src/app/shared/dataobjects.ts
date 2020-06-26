export interface JobList {
    jobs: Job[];
}

export interface Job {
    facility:        string;
    jobTitle:        string;
    summary:         string;
    status:          string;
    shift:           string;
    classification?: string;
    details:         Detail[];
}

export interface Detail {
    title:       string;
    description?: string;
    list:        string[];
}
