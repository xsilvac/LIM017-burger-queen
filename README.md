# BURGER BOSS 🍔🍔

![logobb.png](https://i.postimg.cc/3rmP9Mgx/logobb.png)

## Índice
* [1.Introducción del proyecto](#1-introducción-del-proyecto)
* [2.Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Tecnologías utilizadas](#3-tecnologías-utilizadas)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)

***
## 1.Introducción del proyecto 📋

El proyecto consiste en la creación de una aplicación web progresiva (PWA) para un restaurante,
el cual nombramos: "_Burger_ _Boss_". la cual creamos con la librería de _React_ y _Firebase_, 
y nos permite agregar un _producto_ a una _orden_, la interfaz debe actualizar la lista 
del pedido y el total.

## 2.Resumen del proyecto 🍔🍔

Burger Boss es una aplicación web progresiva (PWA), la cual fue creada con la finalidad de ayudar a gestionar órdenes de pedido de restaurantes desde que el mesero toma la orden, pasa por cocina y regresa al mesero para ser servida; la aplicación tiene la finalidad de economizar recursos y que los procesos sean mas rápidos e independientes uno del otro, cuenta con diferentes vistas las cuales tienen diferentes actividades que dependiendo el rol las desempeñan.
Adicionalmente, la aplicación cuenta con la vista del administrador la cual puede agregar productos, crear usuarios ver y eliminar los productos del menú.
![administrador.gif](https://i.postimg.cc/wT1DHFMn/administrador.gif)

La vista del mesero nos muestra el menú con los diferentes productos que dispone el restaurante, al momento de recibir la orden podemos incrementar las cantidades de los productos que va solicitando el cliente, puede eliminar los productos que el cliente no desea y el pedido ser enviado a cocina de igual forma tiene acceso al historial de pedidos para revisar las ordenes listas para ser servidas.Es importante recalcar que el mesero solo tiene autorización de cambiar los pedidos listos a entregados de lo contrario se despliega una alerta que indica que el mesero no cuenta con los permisos necesarios para ejecutar dicho cambio.
![mesero.gif](https://i.postimg.cc/xTmPDY6W/mesero.gif)

La vista del cocinero nos muestra los pedidos que se van realizando en orden de llegada, el cocinero tiene autorización de cambiar el estado de pendiente a listo, si el cocinero intenta cambiar de estado listos a entregado se desplegara una alerta que indica que no tiene autorización de realizar dicho cambio. 
![cocinero.gif](https://i.postimg.cc/pXVP3XVd/cocinero.gif)



## 3. Tecnologías utilizadas🔧
* React
* Firebase
* JavaScript
* HTML
* CSS / SCSS
* Bootstrap
* Sweetalert2
* Jest
* Testing library
* Git and GitHub

## 4. Creadoras 👩🏻‍💻👩🏻‍💻

* 📍[Ximena Silva](https://github.com/xsilvac)
* 📍[Joseline Franco](https://github.com/JossFranco)
