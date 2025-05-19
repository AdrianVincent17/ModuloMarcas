for $a in doc("UD7_CPE1_cartamenus.xml")/carta/platos
let $c:= $a//nombre
return <platos>{$c}</platos>