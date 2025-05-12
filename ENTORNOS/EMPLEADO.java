

/**
 * Class EMPLEADO
 */
public class EMPLEADO {

  //
  // Fields
  //

  private String DNI;
  private String nombre;
  private String apellidos;
  private String telefono;
  private String num_seg_social;
  private DOMICILIO domicilio;
  
  //
  // Constructors
  //
  public EMPLEADO () { };
  
  //
  // Methods
  //


  //
  // Accessor methods
  //

  /**
   * Set the value of DNI
   * @param newVar the new value of DNI
   */
  public void setDNI (String newVar) {
    DNI = newVar;
  }

  /**
   * Get the value of DNI
   * @return the value of DNI
   */
  public String getDNI () {
    return DNI;
  }

  /**
   * Set the value of nombre
   * @param newVar the new value of nombre
   */
  public void setNombre (String newVar) {
    nombre = newVar;
  }

  /**
   * Get the value of nombre
   * @return the value of nombre
   */
  public String getNombre () {
    return nombre;
  }

  /**
   * Set the value of apellidos
   * @param newVar the new value of apellidos
   */
  public void setApellidos (String newVar) {
    apellidos = newVar;
  }

  /**
   * Get the value of apellidos
   * @return the value of apellidos
   */
  public String getApellidos () {
    return apellidos;
  }

  /**
   * Set the value of telefono
   * @param newVar the new value of telefono
   */
  public void setTelefono (String newVar) {
    telefono = newVar;
  }

  /**
   * Get the value of telefono
   * @return the value of telefono
   */
  public String getTelefono () {
    return telefono;
  }

  /**
   * Set the value of num_seg_social
   * @param newVar the new value of num_seg_social
   */
  public void setNum_seg_social (String newVar) {
    num_seg_social = newVar;
  }

  /**
   * Get the value of num_seg_social
   * @return the value of num_seg_social
   */
  public String getNum_seg_social () {
    return num_seg_social;
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
