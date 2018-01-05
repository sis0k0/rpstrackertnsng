import * as app from 'application';
import * as platform from 'platform';

declare var android: any;

export function setStatusBarColors() {
    if (platform.device.sdkVersion >= '21') {
        const View = android.view.View;

        const window = app.android.startActivity.getWindow();
        window.setStatusBarColor(0x000000);

        const decorView = window.getDecorView();

        //decorView.setSystemUiVisibility(
        //    View.SYSTEM_UI_FLAG_DARK_STATUS_BAR
        //);
        decorView.setSystemUiVisibility(
            // tslint:disable-next-line:no-bitwise
            View.SYSTEM_UI_FLAG_LAYOUT_STABLE
            | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
            | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
    }
}
