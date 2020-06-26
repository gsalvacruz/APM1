import { Component } from '@angular/core';
import data from 'src/data/jobs.json'
import * as DataNS from 'src/app/shared/dataobjects';
import { DataService } from "src/app/shared/dataservice";
import { Data } from '@angular/router';

@Component({
    selector: 'pm-jobs',
    templateUrl: './job-list.component.html'
})

export  class JobListComponent {
    jbLst: DataNS.JobList;
    isListVisible: boolean = true;
    isJobVisible:boolean = false;
    currentJob: DataNS.Job = null;

    constructor(private data: DataService) {
        this.data.loadJobsData();
        this.jbLst = this.data.jbLst; 
        console.log(this.jbLst);
    }
    pageTitle: string = 'Product List';

    showJob(id: number):void {
        console.log(id);
        this.toggleViews();
        this.currentJob = this.jbLst.jobs[id];
    }
    toggleViews() {
        this.isListVisible = !this.isListVisible;
        this.isJobVisible = !this.isJobVisible;
    }
}