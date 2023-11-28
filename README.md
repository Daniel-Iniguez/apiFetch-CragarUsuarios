# apiFetch-CragarUsuarios
JS07 API FETCH 
Las indicaciones y requerimientos de esta práctica son: 

La primera vez, el usuario hace una solicitud get al servidor.
El servidor devuelve los datos de usuario y se almacenan en el local storage, donde debe guardarse la fecha y hora de solicitud.
Los datos almacenados en local storage se muestran en el DOM
La segunda vez, se verifica la fecha en que se almacenó y si se encuentra en el plazo de tiempo de 1 minuto, se debe leer de local storage (para ello debe de checar la fecha y hora de la primera solicitud)
En caso de que pase más de 1 minuto, se debe volver a hacer una solicitud get.Aquí el ejemplo en dibujo de las indicaciones anteriores:
![image](https://github.com/Daniel-Iniguez/apiFetch-CragarUsuarios/assets/74033132/64c19474-1b95-4532-ba33-f3c33576e8c7)
Mostrar los datos recuperados en la interfaz del usuario, en una tabla o en otro componente para visualizarlo. 
La visualización de los datos debe ser responsiva. 
Las imágenes de los avatares debe mostrarse de manera circular. 
Los datos recuperados deben almacenarse localmente, con un tiempo de vida de un minuto, para que la próxima recuperación de datos no tarde (mientras esté en el tiempo de vida).
Usa la API DOM para actualizar el resultado. 
Usa estilos con Bootstrap.
