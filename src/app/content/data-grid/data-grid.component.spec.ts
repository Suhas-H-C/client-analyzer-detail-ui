import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { AgGridModule } from 'ag-grid-angular';
import { DataGridComponent } from './data-grid.component';


describe('DataGridComponent', () => {
  let component: DataGridComponent;
  let fixture: ComponentFixture<DataGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataGridComponent],
      imports: [
        MatDialogModule,
        AgGridModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check component title', () => {
    expect(component.title).toEqual('data-grid')
  })

  it('should check the dumpData size', () => {
    /**
     * Using defualt created instance
     */
    let dataGridComp: DataGridComponent = TestBed.createComponent(DataGridComponent).componentInstance;
    expect(dataGridComp.rowDataDump.length).toHaveSize(0);
  })

});
