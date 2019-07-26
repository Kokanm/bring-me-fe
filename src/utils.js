// @flow

import { DateTime } from 'luxon';

export const getDatefromTimestamp = (timestamp: number): string =>
  DateTime.fromMillis(Number(timestamp)).toFormat('dd-LLL-yyyy');
