

const ImagenB64 = (archivos,set) => {
    Array.from(archivos).forEach(archivo => {
      var reader=new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload=function(){
        var arrayAuxiliar=[];
        var base64 = reader.result;
        console.log(base64)
        arrayAuxiliar=base64.split(',');
        set(arrayAuxiliar[1]);
      }
  
      })
  }

export default ImagenB64