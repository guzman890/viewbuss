class Ubicacion {

  constructor(id, marca, latitud, longitud) {
    this._id = id;
    this._marca = marca;
    this._latitud = latitud;
    this._longitud = longitud;
  }
  // Getter
  get id() {
    return this._id;
  }
  get marca() {
    return this._marca;
  }
  get latitud() {
    return this._latitud;
  }
  get longitud() {
    return this._longitud;
  }

  //Setter
  set id(newId) {
        this._id = newId;  
  }
  set marca(newMarca) {
        this._marca = newMarca;  
  }
  set latitud(newLatitud) {
        this._latitud = newLatitud;  
  }
  set longitud(newLongitud) {
        this._longitud = newLongitud;  
  }

}