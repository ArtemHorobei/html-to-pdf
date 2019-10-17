const moment = require('moment');

function timeline(legendData, event) {
  const checkInTimeRaw = moment(event.checkInTime).hour();
  const checkOutTimeRaw = moment(event.checkOutTime).hour();

  const checkInTime = checkInTimeRaw < 6
    ? moment(event.checkInTime).set({ hour: 6, minute: 0, second: 0, millisecond: 0 })
    : event.checkInTime;

  const checkOutTime = checkOutTimeRaw > 19
    ? moment(event.checkOutTime).set({ hour: 19, minute: 0, second: 0, millisecond: 0 })
    : event.checkOutTime;

  const diffTimeInMinutes = moment(checkOutTime).diff(checkInTime) / 1000 / 60;
  const widthTimelineInPercent = diffTimeInMinutes * 100 / 780;
  const startTimeEvent = moment(checkInTime).format('HH:mm').split(':').map(num => +num);
  const offsetGap = (startTimeEvent[0] * 60 + startTimeEvent[1] - 360) * 100 / 780;

  return `
      <div class="timeline" style="margin-left: calc(${offsetGap}% - 2px);">
        ${timeline.styles}
        <div class="timeline_wrap">
          <div class="legend_item" style="margin-right: -2px">
            <div
              class="legend_itemRound"
              style="
              background-color: ${legendData.find(room => room.id === (event.checkInRoom.id || 'home')).color};"
            ></div>
          </div>                        
          <div class="timeline_row" style="width: calc(${widthTimelineInPercent}% - 5px);"></div>                        
          <div class="legend_item" style="margin-left: -2px">
            <div
              class="legend_itemRound"
              style="background-color: ${event.checkOutRoom ? legendData.find(room => room.id === (event.checkOutRoom.id)).color : ''};"
            ></div>
            <span class="timeline_roomName">${event.checkOutRoom ? legendData.find(room => room.id === (event.checkOutRoom.id)).shortName : ''}</span>                
          </div>
        </div>
      </div>
  `;
}

timeline.styles = `
  <style>
    .timeline {
      position: absolute;
      top: 2px;
      width: 100%;
    }
    .timeline_wrap {
      display: -webkit-flex;
      -webkit-align-items: center;
      -webkit-align-self: center;
    }
    .timeline_row {
      height: 15px;
      background-color: green;
      -webkit-filter: opacity(0.7);
      border-radius: 3px;
    }
    .timeline_roomName {
      margin-left: 3px;
      font-weight: bold;
      font-size: 10px;
    }
  </style>
`;

module.exports = timeline;
