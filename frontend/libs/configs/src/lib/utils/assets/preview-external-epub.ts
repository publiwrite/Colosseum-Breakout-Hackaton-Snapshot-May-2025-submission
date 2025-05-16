import Cookies from 'js-cookie';
import {
  NON_SECURE_COOKIE_OPTIONS,
  READER_FILE_NAME_COOKIE_NAME,
  READER_FILE_URL_COOKIE_NAME,
} from '../../constants';
import { safeOpenNewTab } from '../browser';

export async function previewExternalEpub(
  downloadUrl: string,
  fileName: string,
) {
  Cookies.set(READER_FILE_URL_COOKIE_NAME, downloadUrl, {
    ...NON_SECURE_COOKIE_OPTIONS,
    expires: 0.1,
  });

  Cookies.set(READER_FILE_NAME_COOKIE_NAME, fileName, {
    ...NON_SECURE_COOKIE_OPTIONS,
    expires: 0.1,
  });

  safeOpenNewTab(
    `${process.env.NEXT_PUBLIC_DASHBOARD_PROJECT_URL}/read/preview-url`,
  );
}
