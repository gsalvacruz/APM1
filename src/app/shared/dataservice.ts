import { Injectable } from '@angular/core';
import data from 'src/data/jobs.json'
import * as DataNS from 'src/app/shared/dataobjects';

@Injectable({
	providedIn: 'root'
})

export class DataService {
    public jbLst: DataNS.JobList;

    public loadJobsData():void {
        this.jbLst = data;
    }
}
