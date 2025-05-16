import { Body, Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { PaylinkEventPayload } from './dto/webhooks.dto';
import { Request, Response } from 'express';
import { HelioService } from './helio.service';

@Controller('helio')
export class HelioWebhookController {
  constructor(private readonly helioService: HelioService) {}

  @Post('/book-license-webhook')
  async bookLicenseWebhook(
    @Req() req: Request,
    @Res() res: Response,
    @Body() payload: PaylinkEventPayload,
  ) {
    console.log('processHelioTransaction webhook', payload);

    const authHeader = req.headers['authorization'];
    const webhookSecret =
      await this.helioService.getBookLicensePaymentLinkWebhookToken(
        payload.transactionObject.paylinkId,
      );

    if (authHeader !== `Bearer ${webhookSecret}`) {
      return res.status(HttpStatus.UNAUTHORIZED).send('Unauthorized');
    }

    await this.helioService.processBookLicenseHelioTransaction(payload);

    return res.status(HttpStatus.OK).send({ status: 'ok' });
  }
}
