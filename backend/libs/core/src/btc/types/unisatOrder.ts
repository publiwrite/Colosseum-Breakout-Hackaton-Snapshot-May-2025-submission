enum OrderStatus {
  // when create order
  pending = 'pending',

  // pay not enough, need pay more
  payment_notenough = 'payment_notenough',

  // pay over, need choose continue or refund
  payment_overpay = 'payment_overpay',

  // there is an inscription in payment transaction, need refund
  payment_withinscription = 'payment_withinscription',

  // in some case, payment transaction need be confirmed
  payment_waitconfirmed = 'payment_waitconfirmed',

  // payment success
  payment_success = 'payment_success',

  // ready to inscribe
  ready = 'ready',
  inscribing = 'inscribing',
  minted = 'minted',
  closed = 'closed',
  refunded = 'refunded',
  cancel = 'cancel',
}

enum InscriptionStatus {
  pending = 'pending',
  unconfirmed = 'unconfirmed',
  confirmed = 'confirmed',
}

type File = {
  /**
   * The name of the file.
   */
  filename: string;

  /**
   * The ID of the inscription associated with the file.
   */
  inscriptionId: string;

  /**
   * The current status of the inscription.
   */
  status: InscriptionStatus;
};

export type UnisatOrder = {
  /**
   * The unique identifier for the order.
   */
  orderId: string;

  /**
   * The current status of the order.
   */
  status: OrderStatus;

  /**
   * The address to which payment should be made to start inscribing.
   */
  payAddress: string;

  /**
   * The Bitcoin address to receive the inscriptions.
   */
  receiveAddress: string;

  /**
   * The BTC amount (in satoshis) needed to pay.
   */
  amount: number;

  /**
   * The paid BTC amount (in satoshis).
   */
  paidAmount: number;

  /**
   * The output value of each inscription.
   */
  outputValue: number;

  /**
   * The fee rate of inscribing transactions.
   */
  feeRate: number;

  /**
   * The miner fee for this order.
   */
  minerFee: number;

  /**
   * The service fee for this order.
   */
  serviceFee: number;

  /**
   * The developer fee for this order.
   */
  devFee: number;

  /**
   * The array of files associated with the order.
   */
  files: File[];

  /**
   * The total count of inscriptions.
   */
  count: number;

  /**
   * The count of pending inscriptions.
   */
  pendingCount: number;

  /**
   * The count of unconfirmed inscriptions.
   */
  unconfirmedCount: number;

  /**
   * The count of confirmed inscriptions.
   */
  confirmedCount: number;

  /**
   * The timestamp when the order was created.
   */
  createTime: number;

  /**
   * The transaction ID for the refund.
   */
  refundTxid: string;

  /**
   * The fee rate for the refund transaction.
   */
  refundFeeRate: number;
};
