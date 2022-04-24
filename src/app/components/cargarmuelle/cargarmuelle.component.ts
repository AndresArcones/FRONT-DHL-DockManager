import { Component, OnInit } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { SubirFicherosService } from 'src/app/services/subir-ficheros.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cargarmuelle',
  templateUrl: './cargarmuelle.component.html',
  styleUrls: ['./cargarmuelle.component.css']
})
export class CargarmuelleComponent implements OnInit {

  public files: NgxFileDropEntry[] = [];
  fileUploaded: boolean = false;
  fileEntry: FileSystemFileEntry | undefined;

  public files2: NgxFileDropEntry[] = [];
  fileUploaded2: boolean = false;
  fileEntry2: FileSystemFileEntry | undefined;

  constructor(private servFichero: SubirFicherosService) { }

  ngOnInit(): void {
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        this.fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        this.fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          this.fileUploaded = true;

          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)
  
          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })
  
          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event: any) {
    console.log(event);
  }

  public fileLeave(event: any) {
    console.log(event);
  }


  public dropped2(files: NgxFileDropEntry[]) {
    this.files2 = files;
    console.log(this.files2);
    for (const droppedFile2 of this.files2) {

      // Is it a file?
      if (droppedFile2.fileEntry.isFile) {
        this.fileEntry2 = droppedFile2.fileEntry as FileSystemFileEntry;
        this.fileEntry2.file((file2: File) => {

          // Here you can access the real file
          console.log(droppedFile2.relativePath, file2);

          this.fileUploaded2 = true;

          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)
  
          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })
  
          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry2 = droppedFile2.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile2.relativePath, fileEntry2);
      }
    }
  }

  public fileOver2(event: any) {
    console.log(event);
  }

  public fileLeave2(event: any) {
    console.log(event);
  }

  public subirFichero() {
    if (this.fileEntry != undefined) {


      this.fileEntry.file(file => {
        this.servFichero.subirFicheroMuelles(file)
          .subscribe(resp => {

            Swal.fire("Cargar Datos", "Datos cargados correctamente", "success");
          }, err => {
            Swal.fire("Cargar Datos", err.error.message, "error");
          })
      });
    }
    if (this.fileEntry2 != undefined) {


      this.fileEntry2.file(file => {
        this.servFichero.subirFicheroPedidos(file)
          .subscribe(resp => {

            Swal.fire("Cargar Datos", "Datos cargados correctamente", "success");
          }, err => {
            Swal.fire("Cargar Datos", err.error.message, "error");
          })
      });

    }

  }

}

