import { RouterLink, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Header1Component } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        Header1Component,
        SidebarComponent,
        BreadcrumsComponent,
        PageNotFoundComponent,
    ],
    exports: [
        Header1Component,
        SidebarComponent,
        BreadcrumsComponent,
        PageNotFoundComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})

export class SharedModule {}
