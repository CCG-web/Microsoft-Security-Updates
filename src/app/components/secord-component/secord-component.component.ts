import { Component, OnInit } from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-secord-component',
  templateUrl: './secord-component.component.html',
  styleUrls: ['./secord-component.component.css']
})
export class SecordComponentComponent implements OnInit {

    
    faSearch = faSearch
    term: any;
    
  jsonArray = [
  
        {
            "ID": "2016-Apr",
            "Alias": "2016-Apr",
            "DocumentTitle": "April 2016 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2016-04-12T07:00:00Z",
            "CurrentReleaseDate": "2018-04-10T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2016-Apr"
        },
        {
            "ID": "2016-Aug",
            "Alias": "2016-Aug",
            "DocumentTitle": "August 2016 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2016-08-09T07:00:00Z",
            "CurrentReleaseDate": "2017-09-12T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2016-Aug"
        },
        {
            "ID": "2016-Dec",
            "Alias": "2016-Dec",
            "DocumentTitle": "December 2016 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2016-12-13T08:00:00Z",
            "CurrentReleaseDate": "2018-07-10T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2016-Dec"
        },
        {
            "ID": "2016-Jan",
            "Alias": "2016-Jan",
            "DocumentTitle": "January 2016 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2016-01-12T08:00:00Z",
            "CurrentReleaseDate": "2016-05-25T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2016-Jan"
        },
        {
            "ID": "2016-Jul",
            "Alias": "2016-Jul",
            "DocumentTitle": "July 2016 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2016-07-12T07:00:00Z",
            "CurrentReleaseDate": "2017-09-12T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2016-Jul"
        },
        {
            "ID": "2016-Jun",
            "Alias": "2016-Jun",
            "DocumentTitle": "June 2016 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2016-06-14T07:00:00Z",
            "CurrentReleaseDate": "2017-05-18T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2016-Jun"
        },
        {
            "ID": "2016-May",
            "Alias": "2016-May",
            "DocumentTitle": "May 2016 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2016-05-10T07:00:00Z",
            "CurrentReleaseDate": "2017-05-17T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2016-May"
        },
        {
            "ID": "2016-Nov",
            "Alias": "2016-Nov",
            "DocumentTitle": "November 2016 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2016-11-08T08:00:00Z",
            "CurrentReleaseDate": "2020-05-27T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2016-Nov"
        },
        {
            "ID": "2016-Oct",
            "Alias": "2016-Oct",
            "DocumentTitle": "October 2016 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2016-10-11T07:00:00Z",
            "CurrentReleaseDate": "2017-09-12T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2016-Oct"
        },
        {
            "ID": "2016-Sep",
            "Alias": "2016-Sep",
            "DocumentTitle": "September 2016 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2016-09-13T07:00:00Z",
            "CurrentReleaseDate": "2017-07-11T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2016-Sep"
        },
        {
            "ID": "2017-Apr",
            "Alias": "2017-Apr",
            "DocumentTitle": "April 2017 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2017-04-11T07:00:00Z",
            "CurrentReleaseDate": "2017-09-13T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2017-Apr"
        },
        {
            "ID": "2017-Aug",
            "Alias": "2017-Aug",
            "DocumentTitle": "August 2017 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2017-08-08T07:00:00Z",
            "CurrentReleaseDate": "2020-05-27T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2017-Aug"
        },
        {
            "ID": "2017-Dec",
            "Alias": "2017-Dec",
            "DocumentTitle": "December 2017 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2017-12-12T08:00:00Z",
            "CurrentReleaseDate": "2022-01-11T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2017-Dec"
        },
        {
            "ID": "2017-Feb",
            "Alias": "2017-Feb",
            "DocumentTitle": "February 2017 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2017-02-21T08:00:00Z",
            "CurrentReleaseDate": "2017-04-12T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2017-Feb"
        },
        {
            "ID": "2017-Jan",
            "Alias": "2017-Jan",
            "DocumentTitle": "January 2017 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2017-01-10T08:00:00Z",
            "CurrentReleaseDate": "2017-04-12T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2017-Jan"
        },
        {
            "ID": "2017-Jul",
            "Alias": "2017-Jul",
            "DocumentTitle": "July 2017 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2017-07-11T07:00:00Z",
            "CurrentReleaseDate": "2017-11-09T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2017-Jul"
        },
        {
            "ID": "2017-Jun",
            "Alias": "2017-Jun",
            "DocumentTitle": "June 2017 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2017-06-13T07:00:00Z",
            "CurrentReleaseDate": "2019-06-11T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2017-Jun"
        },
        {
            "ID": "2017-Mar",
            "Alias": "2017-Mar",
            "DocumentTitle": "March 2017 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2017-03-14T07:00:00Z",
            "CurrentReleaseDate": "2017-08-08T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2017-Mar"
        },
        {
            "ID": "2017-May",
            "Alias": "2017-May",
            "DocumentTitle": "May 2017 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2017-05-09T07:00:00Z",
            "CurrentReleaseDate": "2018-03-14T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2017-May"
        },
        {
            "ID": "2017-May-B",
            "Alias": "2017-May-B",
            "DocumentTitle": "May 8 2017 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2017-05-08T07:00:00Z",
            "CurrentReleaseDate": "2017-05-08T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2017-May-B"
        },
        {
            "ID": "2017-Nov",
            "Alias": "2017-Nov",
            "DocumentTitle": "November 2017 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2017-11-14T08:00:00Z",
            "CurrentReleaseDate": "2017-12-12T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2017-Nov"
        },
        {
            "ID": "2017-Oct",
            "Alias": "2017-Oct",
            "DocumentTitle": "October 2017 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2017-10-10T07:00:00Z",
            "CurrentReleaseDate": "2021-04-06T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2017-Oct"
        },
        {
            "ID": "2017-Sep",
            "Alias": "2017-Sep",
            "DocumentTitle": "September 2017 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2017-09-12T07:00:00Z",
            "CurrentReleaseDate": "2019-12-04T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2017-Sep"
        },
        {
            "ID": "2018-Apr",
            "Alias": "2018-Apr",
            "DocumentTitle": "April 2018 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2018-04-10T07:00:00Z",
            "CurrentReleaseDate": "2018-06-12T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2018-Apr"
        },
        {
            "ID": "2018-Aug",
            "Alias": "2018-Aug",
            "DocumentTitle": "August 2018 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2018-08-14T07:00:00Z",
            "CurrentReleaseDate": "2020-05-27T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2018-Aug"
        },
        {
            "ID": "2018-Dec",
            "Alias": "2018-Dec",
            "DocumentTitle": "December 2018 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2018-12-11T08:00:00Z",
            "CurrentReleaseDate": "2019-10-08T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2018-Dec"
        },
        {
            "ID": "2018-FEB",
            "Alias": "2018-FEB",
            "DocumentTitle": "February 2018 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2018-02-13T08:00:00Z",
            "CurrentReleaseDate": "2019-12-10T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2018-FEB"
        },
        {
            "ID": "2018-Jan",
            "Alias": "2018-Jan",
            "DocumentTitle": "January 2018 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2018-01-09T08:00:00Z",
            "CurrentReleaseDate": "2019-06-14T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2018-Jan"
        },
        {
            "ID": "2018-Jul",
            "Alias": "2018-Jul",
            "DocumentTitle": "July 2018 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2018-07-10T07:00:00Z",
            "CurrentReleaseDate": "2018-12-11T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2018-Jul"
        },
        {
            "ID": "2018-Jun",
            "Alias": "2018-Jun",
            "DocumentTitle": "June 2018 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2018-06-12T07:00:00Z",
            "CurrentReleaseDate": "2020-02-11T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2018-Jun"
        },
        {
            "ID": "2018-Mar",
            "Alias": "2018-Mar",
            "DocumentTitle": "March 2018 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2018-03-13T07:00:00Z",
            "CurrentReleaseDate": "2020-05-12T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2018-Mar"
        },
        {
            "ID": "2018-May",
            "Alias": "2018-May",
            "DocumentTitle": "May 2018 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2018-05-08T07:00:00Z",
            "CurrentReleaseDate": "2019-01-08T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2018-May"
        },
        {
            "ID": "2018-Nov",
            "Alias": "2018-Nov",
            "DocumentTitle": "November 2018 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2018-11-13T08:00:00Z",
            "CurrentReleaseDate": "2019-01-15T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2018-Nov"
        },
        {
            "ID": "2018-Oct",
            "Alias": "2018-Oct",
            "DocumentTitle": "October 2018 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2018-10-09T07:00:00Z",
            "CurrentReleaseDate": "2018-11-01T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2018-Oct"
        },
        {
            "ID": "2018-Sep",
            "Alias": "2018-Sep",
            "DocumentTitle": "September 2018 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2018-09-11T07:00:00Z",
            "CurrentReleaseDate": "2021-01-12T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2018-Sep"
        },
        {
            "ID": "2019-Apr",
            "Alias": "2019-Apr",
            "DocumentTitle": "April 2019 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2019-04-09T07:00:00Z",
            "CurrentReleaseDate": "2019-12-10T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2019-Apr"
        },
        {
            "ID": "2019-Aug",
            "Alias": "2019-Aug",
            "DocumentTitle": "August 2019 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2019-08-13T07:00:00Z",
            "CurrentReleaseDate": "2020-10-13T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2019-Aug"
        },
        {
            "ID": "2019-Dec",
            "Alias": "2019-Dec",
            "DocumentTitle": "December 2019 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2019-12-10T08:00:00Z",
            "CurrentReleaseDate": "2020-07-23T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2019-Dec"
        },
        {
            "ID": "2019-Feb",
            "Alias": "2019-Feb",
            "DocumentTitle": "February 2019 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2019-02-12T08:00:00Z",
            "CurrentReleaseDate": "2019-12-19T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2019-Feb"
        },
        {
            "ID": "2019-Jan",
            "Alias": "2019-Jan",
            "DocumentTitle": "January 2019 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2019-01-08T08:00:00Z",
            "CurrentReleaseDate": "2019-12-19T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2019-Jan"
        },
        {
            "ID": "2019-Jul",
            "Alias": "2019-Jul",
            "DocumentTitle": "July 2019 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2019-07-09T07:00:00Z",
            "CurrentReleaseDate": "2021-12-14T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2019-Jul"
        },
        {
            "ID": "2019-Jun",
            "Alias": "2019-Jun",
            "DocumentTitle": "June 2019 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2019-06-11T07:00:00Z",
            "CurrentReleaseDate": "2020-03-10T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2019-Jun"
        },
        {
            "ID": "2019-Mar",
            "Alias": "2019-Mar",
            "DocumentTitle": "March 2019 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2019-03-12T07:00:00Z",
            "CurrentReleaseDate": "2019-09-10T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2019-Mar"
        },
        {
            "ID": "2019-May",
            "Alias": "2019-May",
            "DocumentTitle": "May 2019 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2019-05-14T07:00:00Z",
            "CurrentReleaseDate": "2020-03-25T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2019-May"
        },
        {
            "ID": "2019-Nov",
            "Alias": "2019-Nov",
            "DocumentTitle": "November 2019 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2019-11-12T08:00:00Z",
            "CurrentReleaseDate": "2020-02-03T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2019-Nov"
        },
        {
            "ID": "2019-Oct",
            "Alias": "2019-Oct",
            "DocumentTitle": "October 2019 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2019-10-08T07:00:00Z",
            "CurrentReleaseDate": "2020-01-31T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2019-Oct"
        },
        {
            "ID": "2019-Sep",
            "Alias": "2019-Sep",
            "DocumentTitle": "September 2019 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2019-09-10T07:00:00Z",
            "CurrentReleaseDate": "2020-01-14T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2019-Sep"
        },
        {
            "ID": "2020-Apr",
            "Alias": "2020-Apr",
            "DocumentTitle": "April 2020 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2020-04-14T07:00:00Z",
            "CurrentReleaseDate": "2021-06-08T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2020-Apr"
        },
        {
            "ID": "2020-Aug",
            "Alias": "2020-Aug",
            "DocumentTitle": "August 2020 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2020-08-11T07:00:00Z",
            "CurrentReleaseDate": "2021-02-09T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2020-Aug"
        },
        {
            "ID": "2020-Dec",
            "Alias": "2020-Dec",
            "DocumentTitle": "December 2020 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2020-12-08T08:00:00Z",
            "CurrentReleaseDate": "2021-03-12T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2020-Dec"
        },
        {
            "ID": "2020-Feb",
            "Alias": "2020-Feb",
            "DocumentTitle": "February 2020 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2020-02-11T08:00:00Z",
            "CurrentReleaseDate": "2021-12-14T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2020-Feb"
        },
        {
            "ID": "2020-Jan",
            "Alias": "2020-Jan",
            "DocumentTitle": "January 2020 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2020-01-14T08:00:00Z",
            "CurrentReleaseDate": "2020-06-25T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2020-Jan"
        },
        {
            "ID": "2020-Jul",
            "Alias": "2020-Jul",
            "DocumentTitle": "July 2020 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2020-07-14T07:00:00Z",
            "CurrentReleaseDate": "2022-04-15T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2020-Jul"
        },
        {
            "ID": "2020-Jun",
            "Alias": "2020-Jun",
            "DocumentTitle": "June 2020 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2020-06-09T07:00:00Z",
            "CurrentReleaseDate": "2021-04-20T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2020-Jun"
        },
        {
            "ID": "2020-Mar",
            "Alias": "2020-Mar",
            "DocumentTitle": "March 2020 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2020-03-10T07:00:00Z",
            "CurrentReleaseDate": "2021-08-10T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2020-Mar"
        },
        {
            "ID": "2020-May",
            "Alias": "2020-May",
            "DocumentTitle": "May 2020 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2020-05-12T07:00:00Z",
            "CurrentReleaseDate": "2021-02-25T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2020-May"
        },
        {
            "ID": "2020-Nov",
            "Alias": "2020-Nov",
            "DocumentTitle": "November 2020 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2020-11-10T08:00:00Z",
            "CurrentReleaseDate": "2021-07-13T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2020-Nov"
        },
        {
            "ID": "2020-Oct",
            "Alias": "2020-Oct",
            "DocumentTitle": "October 2020 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2020-10-13T07:00:00Z",
            "CurrentReleaseDate": "2021-02-24T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2020-Oct"
        },
        {
            "ID": "2020-Sep",
            "Alias": "2020-Sep",
            "DocumentTitle": "September 2020 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2020-09-08T07:00:00Z",
            "CurrentReleaseDate": "2021-10-14T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2020-Sep"
        },
        {
            "ID": "2021-Apr",
            "Alias": "2021-Apr",
            "DocumentTitle": "April 2021 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2021-04-13T07:00:00Z",
            "CurrentReleaseDate": "2021-04-29T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2021-Apr"
        },
        {
            "ID": "2021-Aug",
            "Alias": "2021-Aug",
            "DocumentTitle": "August 2021 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2021-08-10T07:00:00Z",
            "CurrentReleaseDate": "2022-03-25T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2021-Aug"
        },
        {
            "ID": "2021-Dec",
            "Alias": "2021-Dec",
            "DocumentTitle": "December 2021 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2021-12-14T08:00:00Z",
            "CurrentReleaseDate": "2022-04-12T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2021-Dec"
        },
        {
            "ID": "2021-Feb",
            "Alias": "2021-Feb",
            "DocumentTitle": "February 2021 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2021-02-09T08:00:00Z",
            "CurrentReleaseDate": "2021-12-14T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2021-Feb"
        },
        {
            "ID": "2021-Jan",
            "Alias": "2021-Jan",
            "DocumentTitle": "January 2021 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2021-01-12T08:00:00Z",
            "CurrentReleaseDate": "2021-12-14T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2021-Jan"
        },
        {
            "ID": "2021-Jul",
            "Alias": "2021-Jul",
            "DocumentTitle": "July 2021 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2021-07-13T07:00:00Z",
            "CurrentReleaseDate": "2021-12-06T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2021-Jul"
        },
        {
            "ID": "2021-Jun",
            "Alias": "2021-Jun",
            "DocumentTitle": "June 2021 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2021-06-08T07:00:00Z",
            "CurrentReleaseDate": "2022-06-28T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2021-Jun"
        },
        {
            "ID": "2021-Mar",
            "Alias": "2021-Mar",
            "DocumentTitle": "March 2021 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2021-03-09T08:00:00Z",
            "CurrentReleaseDate": "2021-04-06T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2021-Mar"
        },
        {
            "ID": "2021-May",
            "Alias": "2021-May",
            "DocumentTitle": "May 2021 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2021-05-11T07:00:00Z",
            "CurrentReleaseDate": "2021-06-08T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2021-May"
        },
        {
            "ID": "2021-Nov",
            "Alias": "2021-Nov",
            "DocumentTitle": "November 2021 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2021-11-09T08:00:00Z",
            "CurrentReleaseDate": "2022-06-21T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2021-Nov"
        },
        {
            "ID": "2021-Oct",
            "Alias": "2021-Oct",
            "DocumentTitle": "October 2021 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2021-10-12T07:00:00Z",
            "CurrentReleaseDate": "2022-04-12T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2021-Oct"
        },
        {
            "ID": "2021-Sep",
            "Alias": "2021-Sep",
            "DocumentTitle": "September 2021 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2021-09-14T07:00:00Z",
            "CurrentReleaseDate": "2021-10-12T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2021-Sep"
        },
        {
            "ID": "2022-Apr",
            "Alias": "2022-Apr",
            "DocumentTitle": "April 2022 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2022-04-12T08:00:00Z",
            "CurrentReleaseDate": "2022-06-14T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2022-Apr"
        },
        {
            "ID": "2022-Feb",
            "Alias": "2022-Feb",
            "DocumentTitle": "February 2022 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2022-02-08T08:00:00Z",
            "CurrentReleaseDate": "2022-03-23T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2022-Feb"
        },
        {
            "ID": "2022-Jan",
            "Alias": "2022-Jan",
            "DocumentTitle": "January 2022 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2022-01-11T08:00:00Z",
            "CurrentReleaseDate": "2022-02-25T08:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2022-Jan"
        },
        {
            "ID": "2022-Jun",
            "Alias": "2022-Jun",
            "DocumentTitle": "June 2022 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2022-06-14T07:00:00Z",
            "CurrentReleaseDate": "2022-06-30T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2022-Jun"
        },
        {
            "ID": "2022-Mar",
            "Alias": "2022-Mar",
            "DocumentTitle": "March 2022 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2022-03-08T08:00:00Z",
            "CurrentReleaseDate": "2022-05-16T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2022-Mar"
        },
        {
            "ID": "2022-May",
            "Alias": "2022-May",
            "DocumentTitle": "May 2022 Security Updates",
            "Severity": null,
            "InitialReleaseDate": "2022-05-10T08:00:00Z",
            "CurrentReleaseDate": "2022-06-14T07:00:00Z",
            "CvrfUrl": "https://api.msrc.microsoft.com/cvrf/v2.0/document/2022-May"
        }
    
    ]
 
  constructor() { }

  ngOnInit(): void {
  }
search(event: any): void{

}
}
