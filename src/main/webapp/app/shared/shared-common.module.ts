import { NgModule } from '@angular/core';

import { NewTestTestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [NewTestTestSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [NewTestTestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class NewTestTestSharedCommonModule {}
