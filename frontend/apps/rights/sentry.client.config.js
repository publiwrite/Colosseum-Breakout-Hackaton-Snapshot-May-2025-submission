// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';
import { SENTRY_CONFIG_BASE } from '../../sentry.client.config.base';

Sentry.init(SENTRY_CONFIG_BASE);
