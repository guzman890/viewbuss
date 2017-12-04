class Ubicacion {
  constructor(id, marca, latitud, longitud) {
    this.id = id;
    this.marca = marca;
    this.latitud = latitud;
    this.longitud = longitud;
  }
  // Getter
  get id() {
    return this.id;
  }
  get marca() {
    return this.marca;
  }
  get latitud() {
    return this.latitud;
  }
  get longitud() {
    return this.longitud;
  }

  //Setter
  set id(newId) {
        this.id = newId;  
  }
  set marca(newMarca) {
        this.marca = newMarca;  
  }
  set latitud(newLatitud) {
        this.latitud = newLatitud;  
  }
  set longitud(newLongitud) {
        this.longitud = newLongitud;  
  }

}