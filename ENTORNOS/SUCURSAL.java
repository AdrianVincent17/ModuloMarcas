

/**
 * Class SUCURSAL
 */
public class SUCURSAL {

  //
  // Fields
  //

  private int identificador;
  private String direccion;
  private DOMICILIO domicilio;
  
  //
  // Constructors
  //
  public SUCURSAL () { };
  
  //
  // Methods
  //


  //
  // Accessor methods
  //

  /**
   * Set the value of identificador
   * @param newVar the new value of identificador
   */
  public void setIdentificador (int newVar) {
    identificador = newVar;
  }

  /**
   * Get the value of identificador
   * @return the value of identificador
   */
  public int getIdentificador () {
    return identificador;
  }

  /**
   * Set the value of direccion
   * @param newVar the new value of direccion
   */
  public void setDireccion (String newVar) {
    direccion = newVar;
  }

  /**
   * Get the value of direccion
   * @return the value of direccion
   */
  public String getDireccion () {
    return direccion;
  }

  /**
   * Set the value of domicilio
   * @param newVar the new value of domicilio
   */
  public void setDomicilio (DOMICILIO newVar) {
    domicilio = newVar;
  }

  /**
   * Get the value of domicilio
   * @return the value of domicilio
   */
  public DOMICILIO getDomicilio () {
    return domicilio;
  }

  //
  // Other methods
  //

}
