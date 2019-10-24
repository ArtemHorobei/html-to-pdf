const moment = require('moment');

function timeline(legendData, event) {
  const checkInTimeHour = moment.parseZone(event.checkInTime).hour();
  const checkOutTimeHour = moment.parseZone(event.checkOutTime).hour();

  const checkInTime = checkInTimeHour < 6
    ? moment.parseZone(event.checkInTime).set({ hour: 6, minute: 0, second: 0, millisecond: 0 })
    : moment.parseZone(event.checkInTime);

  const checkOutTime = checkOutTimeHour > 18
    ? moment.parseZone(event.checkOutTime).set({ hour: 19, minute: 0, second: 0, millisecond: 0 })
    : moment.parseZone(event.checkOutTime);

  const diffTimeInMinutes = moment.parseZone(checkOutTime).diff(moment.parseZone(checkInTime)) / 1000 / 60;
  const widthTimelineInPercent = diffTimeInMinutes * 100 / 788;
  const startTimeEvent = moment.parseZone(checkInTime).format('HH:mm').split(':').map((num) => +num);
  const offsetGap = (startTimeEvent[0] * 60 + startTimeEvent[1] - 360) * 100 / 795;

  const timeInfo = widthTimelineInPercent > 6.4 ? (
    `
      <div class="timeline_row__info">${moment.parseZone(checkInTime).format('hh:mma')}</div>
      <div class="timeline_row__info">${moment.parseZone(checkOutTime).format('hh:mma')}</div>
    `
  ) : '';
  return `
      <div class="timeline" style="margin-left: calc(${offsetGap}% - 2px);">
        ${timeline.styles}
        <div class="timeline_wrap">
          <div class="legend_item" style="margin-right: -2px">
            <div
              class="legend_itemRound"
              style="
              background-color: ${legendData.find((room) => room.id === (event.checkInRoom.id)).color};"
            ></div>
          </div>
          <div class="timeline_row" style="width: calc(${widthTimelineInPercent}% - 5px);">
            ${timeInfo}
          </div>
          <div class="legend_item" style="margin-left: -2px">
            <div
              class="legend_itemRound"
              style="background-color: ${event.checkOutRoom ? legendData.find((room) => room.id === (event.checkOutRoom.id)).color : ''};"
            ></div>
            <span class="timeline_roomName">${event.checkOutRoom ? legendData.find((room) => room.id === (event.checkOutRoom.id)).shortName : ''}</span>
          </div>
        </div>
      </div>
  `;
}

timeline.styles = `
  <style>
    .timeline {
      position: absolute;
      top: 3px;
      width: 100%;
    }
    .timeline_wrap {
      display: -webkit-flex;
      -webkit-align-items: center;
      -webkit-align-self: center;
    }
    .timeline_row {
      height: 13px;
      background: rgba(106, 191, 77, 0.8);
      border-radius: 3px;
      display: -webkit-flex;
      -webkit-align-items: center;
      -webkit-justify-content: space-between;
    }
    .timeline_row__info {
      font-size: 6px;
      font-weight: bold;
      margin: 0 3px;
    }
    .timeline_roomName {
      margin-left: 3px;
      font-weight: bold;
      font-size: 10px;
    }
  </style>
`;

module.exports = timeline;
