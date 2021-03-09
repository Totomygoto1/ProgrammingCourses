import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoaddComponent } from './todoadd.component';

describe('TodoaddComponent', () => {
  let component: TodoaddComponent;
  let fixture: ComponentFixture<TodoaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).toBe(true);
  });
});

});
