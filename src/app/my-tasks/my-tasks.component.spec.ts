import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxNavigationDrawerModule, IgxListModule, IgxCalendarModule } from 'igniteui-angular';
import { MyTasksComponent } from './my-tasks.component';

describe('MyTasksComponent', () => {
  let component: MyTasksComponent;
  let fixture: ComponentFixture<MyTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTasksComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxNavigationDrawerModule, IgxListModule, IgxCalendarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
