import { CronService } from "./cron/cron-service";
import {CheckService} from "../domain/use-cases/checks/check-service";

export class Server {
  public static start() {
    CronService.createJob(
      '*/5 * * * * *',
      () => {
        const url = 'http://localhost:3000/posts';
        new CheckService(
          () => console.log('Success'),
          (error) => console.log(error)
        ).execute(url);
      }
    );
  }
}
