const moment = require('moment');

function timeline(legendData, event) {
  const diffTimeInMinutes = moment(event.checkOutTime).diff(event.checkInTime) / 1000 / 60;
  const widthTimelineInPercent = diffTimeInMinutes * 100 / 790;
  const startTimeEvent = moment(event.checkInTime).format('HH:mm').split(':').map(num => +num);
  const offsetGap = (startTimeEvent[0] * 60 + startTimeEvent[1] - 360) * 100 / 780;

  return `
      <div class="timeline" style="margin-left: ${offsetGap}%;">
        ${timeline.styles}
        <div class="timeline_wrap">
          <div class="legend_item" style="margin-right: -2px">
            <div
              class="legend_itemRound"
              style="
              background-color: ${legendData.find(room => room.id === (event.checkInRoom.id || 'home')).color};"
            ></div>
          </div>                        
          <div class="timeline_row" style="width: calc(${widthTimelineInPercent}% - 15px);"></div>                        
          <div class="legend_item" style="margin-left: -2px">
            <div
              class="legend_itemRound"
              style="background-color: ${legendData.find(room => room.id === (event.checkOutRoom.id || 'home')).color};"
            ></div>
            <span class="timeline_roomName">${legendData.find(room => room.id === (event.checkOutRoom.id || 'home')).shortName}</span>                
          </div>
        </div>
      </div>
  `;
}

timeline.styles = `
  <style>
    .timeline {
      position: absolute;
      top: 0;
      width: 100%;
    }
    .timeline_wrap {
      display: -webkit-flex;
      -webkit-align-items: center;
      -webkit-align-self: center;
    }
    .timeline_row {
      height: 10px;
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
