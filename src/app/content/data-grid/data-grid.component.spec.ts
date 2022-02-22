import { HttpClientTestingModule } from '@angular/common/http/testing';
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
        HttpClientTestingModule,
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
    expect(component.rowDataDump.length).toHaveSize(0);
  })

  it('should check userData size', () => {
    /**
     * To create own instance
     */
    const creatingDummyInstance = TestBed.createComponent(DataGridComponent);
    const creatingOwnInstance = creatingDummyInstance.componentInstance;
    console.log(creatingOwnInstance.rowDataUser.length)
    /**
     * subscribing and checking the response length
     */
    creatingOwnInstance.contentService.getUserRecords().subscribe(
      response => {
        expect(response.length).toBe(10);
      }
    )
  })

  it('should check userData calling time', () => {
    expect(component.contentService.getUserRecords().subscribe(
      (response) => {
        expect(response).toHaveBeenCalledTimes(1);
      }
    ))
  })
});
