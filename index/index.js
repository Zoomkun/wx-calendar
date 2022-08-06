const app = getApp()

Page({
    data: {
        spotMap:  [
            {
              "date": "2022-08-17",
              "status": 1
            },
            {
              "date": "2022-08-18",
              "status": 1
            },
            {
              "date": "2022-08-19",
              "status": 1
            },
            {
              "date": "2022-08-20",
              "status": 1
            },
            {
              "date": "2022-08-21",
              "status": 1
            },
            {
              "date": "2022-08-22",
              "status": 1
            },
            {
              "date": "2022-08-23",
              "status": 0
            },
            {
              "date": "2022-08-25",
              "status": 1
            },
            {
              "date": "2022-08-26",
              "status": 1
            },
            {
              "date": "2022-08-27",
              "status": 0
            },
            {
              "date": "2022-08-28",
              "status": 0
            },
            {
              "date": "2022-08-29",
              "status": 0
            }
          ]
    },
    onLoad() {

    },
    monthChange({detail}) {
        console.log(detail,'monthChange detail');
    },
    getDateList({detail}) {
        console.log(detail,'getDateList detail');
    },
    selectDay({detail}){
        console.log(detail,'selectDay detail');
    }
})