export const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];
export const SUPPORTED_IMAGE_FILE_EXTENSIONS = ACCEPTED_IMAGE_TYPES.map(
  (type) => type.replace('image/', ' .'),
);

export const ACCEPTED_DOCUMENT_TYPES = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
export const ACCEPTED_DOCUMENT_FILE_EXTENSIONS = ['.pdf', '.docx'];
