import { NgModule } from '@angular/core';

import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts.routing.module';
import { PostComponent } from './post';

@NgModule({
    imports: [PostsRoutingModule],
    exports: [],
    declarations: [PostsComponent, PostComponent],
    providers: [],
})
export class PostsModule { }
