<template>
  <popup-layout
    Title="Перенести на"
    :isAccess="true"
    @close="close"
    @access="access"
  >
    <template #body>
      <smooth-picker ref="smoothPicker" :data="data" :change="change" />
    </template>
  </popup-layout>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "datePicker",
  data() {
    let weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    let otherDays = () => {
      let days = [];
      for (let i = 2; i <= 30; i++) {
        days.push(new Date(0, 0, new Date().getDate() + i).getDate());
      }
      return days;
    };
    function getDays() {
      return [
        `Сегодня`,
        `Завтра, ${weekDays[new Date().getDay()]} ${new Date().getDate() + 1}`,
        ...otherDays(),
      ];
    }
    function getMinutes() {
      return [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
        "46",
        "47",
        "48",
        "49",
        "50",
        "51",
        "52",
        "53",
        "54",
        "55",
        "56",
        "57",
        "58",
        "59",
      ];
    }
    function getHours() {
      return [...Array(24).keys()];
    }
    return {
      date: new Date().getDate(),
      month: new Date().getMonth() + 1,
      hour: 0,
      minute: 0,
      days: getDays(),
      hours: getHours(),
      minutes: getMinutes(),
      data: [
        {
          currentIndex: 0,
          flex: 3,
          list: getDays(),
          onClick: this.clickOnDate,
          textAlign: "center",
          className: "row-group",
        },
        {
          currentIndex: 0,
          flex: 3,
          list: getHours(),
          onClick: this.clickOnPlan,
          textAlign: "center",
          className: "row-group",
        },
        {
          currentIndex: 0,
          flex: 3,
          list: getMinutes(),
          onClick: this.clickOnProduct,
          textAlign: "center",
          className: "item-group",
        },
      ],
    };
  },
  computed: {
    ...mapState(["client"]),
  },
  methods: {
    change(index, value) {
      if (index === 0) {
        if (value == 0) {
          this.date = new Date().getDate();
        } else if (value == 1) {
          this.date = new Date().getDate() + 1;
        } else {
          this.date = this.days[value];
          if (this.date < new Date().getDate()) {
            this.month = new Date().getMonth() + 2;
          }
        }
      } else if (index === 1) {
        this.hour = this.hours[value];
      } else if (index === 2) {
        this.minute = this.minutes[value];
      }
    },
    close() {
      this.$emit("close");
    },
    async access() {
      let date = new Date(
        new Date().getFullYear(),
        this.month - 1,
        this.date,
        this.hour,
        this.minute
      );
      date = this.$moment(date).format("YYYY-MM-DD HH:mm:ss");
      try {
        const { data } = await this.$axios.post(`/${this.client}/request`, {
          code: "change_date",
          params: {
            date: date,
          },
        });
        this.$store.commit("home/setVariables", data.variables);
        this.$emit("close");
      } catch (e) {
        const {
          data: { message },
        } = e.response;
        this.errorHandler(message);
      }
    },
  },
};
</script>

<style scoped>
.picker-group {
  display: flex;
}
.smooth-picker {
  flex: 1;
}
</style>
