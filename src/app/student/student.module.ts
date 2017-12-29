import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { StudentListComponent } from '../student-list/student-list.component';
import { StudentDetailComponent } from '../student-detail/student-detail.component';
import { StudentItemComponent } from '../student-item/student-item.component';
import { ShowSorterPipe } from '../show-sorter.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: StudentListComponent, pathMatch: 'full' },
      { path: 'detail', component: StudentDetailComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [StudentListComponent, StudentDetailComponent, StudentItemComponent, ShowSorterPipe]
})
export class StudentModule { }
