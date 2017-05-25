Live example: [https://josex2r.github.io/60fps-workshop/](https://josex2r.github.io/60fps-workshop/)

# Conclusiones

* evita a las propiedades que hacer repintado DOM, incluso para leer
* si lo tienes que hacer, procura agrupar las acciones
* divide y delega el momento de ejecución en el navegador
* no dividas demasiado
* no generes delegaciones de ejecución masivas
* normalmente mejor emplear funciones js nativas que jquery etc, prueba
* si tienes que elegir, céntrate en lo que realmente está viendo el usuario
*  necesitarás probablemente combinar diferentes técnicas para conseguir optimizar

# Development

`$ harp server`

# Build production

`$ NODE_ENV="production" harp compile`
