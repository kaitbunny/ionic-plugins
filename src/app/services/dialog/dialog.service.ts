import { Injectable } from '@angular/core';
import { Dialog } from '@capacitor/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  public static async alert(title: string, message: string) {
    await Dialog.alert({
      title: title,
      message: message
    });
  }

  public static async confirm(title: string, message: string): Promise<boolean> {
    const { value } = await Dialog.confirm({
      title: title,
      message: message
    });
    return value;
  }

  public static async prompt(title: string, message: string): Promise<string> {
    const { value } = await Dialog.prompt({
      title: title,
      message: message
    });
    return value;
  }
}
