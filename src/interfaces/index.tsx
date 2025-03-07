export interface ActivityCard {
  title: string;
  timeframes: {
    daily: {
      "current": 5,
      "previous": 7
    },
    weekly: {
      "current": 32,
      "previous": 36
    },
    monthly: {
      "current": 103,
      "previous": 128
    }
  }
  currentTimeframe: string;
}