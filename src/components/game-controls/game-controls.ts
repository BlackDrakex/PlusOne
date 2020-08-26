import './game-controls.scss';
import { Button } from '../button/button';

class GameControls {
  private _node: HTMLElement;
  private _mainButton: Button;
  private _settingsButton: Button;

  constructor(node: HTMLElement) {
    this._node = node;
    const mainButtonNode: HTMLButtonElement = node
      .querySelector('.game-controls__main-button')
      .querySelector('.button');
    const settingsButtonNode: HTMLButtonElement = node
      .querySelector('.game-controls__settings-button')
      .querySelector('.button');

    this._mainButton = new Button(mainButtonNode);
    this._settingsButton = new Button(settingsButtonNode);
  }

  onMainButtonPress(callback: () => void): void {
    this._mainButton.onPress(callback);
  }

  onSettingsButtonPress(callback: () => void): void {
    this._settingsButton.onPress(callback);
  }

  setMainButtonText(text: string): void {
    this._mainButton.setButtonText(text);
  }
}
