import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GatewayAddressModule } from './address/address.module';
import { GatewayEmployeeModule } from './employee/employee.module';
import { GatewayProjectModule } from './project/project.module';
import { GatewayEmployeeProjectModule } from './employee-project/employee-project.module';
import { GatewayDepartmentModule } from './department/department.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        GatewayAddressModule,
        GatewayEmployeeModule,
        GatewayProjectModule,
        GatewayEmployeeProjectModule,
        GatewayDepartmentModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatewayEntityModule {}
