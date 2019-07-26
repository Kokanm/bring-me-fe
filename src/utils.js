// @flow

import { DateTime } from 'luxon';

export const getDatefromTimestamp = (timestamp: number): string => {
  return DateTime.fromMillis(Number(timestamp)).toFormat('dd-LLL-yyyy');
};
