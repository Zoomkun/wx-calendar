// index.js
const app = getApp()

Page({
    data: {
        markers: [
            { year: 2022, month: 9, day: 1, type: 'holiday', mark: '愚人节', color: '#2a97ff', bgColor: '#cce6ff' },
            { year: 2022, month: 9, day: 2, type: 'holiday', mark: '清明', color: '#2a97ff', bgColor: '#cce6ff' },
            { year: 2022, month: 9, day: 3, type: 'corner', mark: '休', color: '#61b057' },
            { year: 2022, month: 9, day: 4, type: 'corner', mark: '休', color: '#61b057' },
            { year: 2022, month: 9, day: 5, type: 'corner', mark: '休', color: '#61b057' },
            { year: 2022, month: 9, day: 6, type: 'schedule', mark: '测试一下', color: '#2a97ff', bgColor: '#cce6ff' },
            { year: 2022, month: 9, day: 7, type: 'regular', mark: '测试一下哈哈哈', color: '#2a97ff', bgColor: '#cce6ff' },
            { year: 2022, month: 9, day: 8, type: 'schedule', mark: '测试一下哈哈哈', color: '#2a97ff', bgColor: '#cce6ff' }
        ]
    },
    onLoad() {

    },
    toMonth(toMonth){

        console.log('toMonth', toMonth)
    },
    handleCalendarLoad({ detail }) {
        this.calendar = this.selectComponent('#calendar')

        // const timefunc = callback => {
        //     const timer = setTimeout(() => {
        //         callback()
        //         clearTimeout(timer)
        //     }, 5000)

        // }

        // const timer = setTimeout(() => {
        //     this.calendar.toDate('2021-08-08');
        //     timefunc(() => {
        //         this.calendar.toDate('2022-08-09');
        //     })
        //     clearTimeout(timer)
        // }, 5000)

    },
    onTap() {
        this.setData({
            markers: [
                { year: 2022, month: 1, day: 10, type: 'holiday', mark: '愚人节', color: '#2a97ff', bgColor: '#cce6ff' },
                { year: 2022, month: 1, day: 11, type: 'corner', mark: '休', color: '#61b057' },
                { year: 2022, month: 1, day: 12, type: 'schedule', mark: '测试一下哈哈哈', color: '#2a97ff', bgColor: '#cce6ff' },
                { year: 2022, month: 1, day: 12, type: 'schedule', mark: '测试一下哈哈哈', color: '#2a97ff', bgColor: '#cce6ff' }
            ]
        })
    },
    // calendarSwiperChange(e) {
    //     console.log('calendarSwiperChange', e)
    //     const diff = e.detail.current - this._swiperCurr
    //     this._swiperDiff += Math.abs(diff) == 1 ? diff : diff / (1 - this.panels)
    //     this._swiperCurr = e.detail.current
    // },
    handleCalendarDateChange({ detail }) {
        console.log('calendar-date-change', detail)
    },
    handleCalendarRangeChange({ detail }) {
        // console.log('calendar-range-change', detail)
        //以下参考
        // const { curr, range, view, visual, markerCommit } = detail
        // const { year, month, day } = curr
        // setTimeout(() => {
        //     markerCommit([
        //         { year, month, day, type: 'holiday', mark: 'TEST', color: '#2a97ff', bgColor: '#cce6ff' }
        //     ])
        // }, 500)
    },
    handleCalendarPanelViewChange({ detail }) {
        console.log('calendar-view-change', detail)
    }
})