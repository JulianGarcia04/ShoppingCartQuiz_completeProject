# Comands 

--- 

## 1. npm install 
## 2. npm run dev 

----
# Rutas 
---
## 1. Productos
###         -Get all products (GET)
            http://localhost:3000/api/v1/product

            Request Body = Null

            Response = [{
                image: string,
                nombre: string,
                description: string,
                tipoConsumo: string,
                cantidadCaja: Number,
                cantidad: Number,
                IVA: Number,
                precioUnid: Number
            }]
###         -Get one product (GET)
            http://localhost:3000/api/v1/product/:id

            Request Url Params = _id

            Response = {
                image: string,
                nombre: string,
                description: string,
                tipoConsumo: string,
                cantidadCaja: Number,
                cantidad: Number,
                IVA: Number,
                precioUnid: Number
            }
            
###         -Create one product (POST)
            http://localhost:3000/api/v1/product

            Request Body = {
                image: string required,
                nombre: string required,
                description: string required,
                tipoConsumo: string required,
                cantidadCaja: Number required,
                cantidad: Number required,
                IVA: Number required,
                precioUnid: Number required
            }

            Reponse = {
                message: "data created correctly",
                data: {
                    image: string required,
                    nombre: string required,
                    description: string required,
                    tipoConsumo: string required,
                    cantidadCaja: Number required,
                    cantidad: Number required,
                    IVA: Number required,
                    precioUnid: Number required
                }
            }

###         -Update one product (PUT)
            http://localhost:3000/api/v1/product/:id

            Request Url Params = _id

            Request Body = {
                image: string required,
                nombre: string required,
                description: string required,
                tipoConsumo: string required,
                cantidadCaja: Number required,
                cantidad: Number required,
                IVA: Number required,
                precioUnid: Number required
            }

            Reponse = {
                message: "data updated correctly",
                oldData: {
                    image: string required,
                    nombre: string required,
                    description: string required,
                    tipoConsumo: string required,
                    cantidadCaja: Number required,
                    cantidad: Number required,
                    IVA: Number required,
                    precioUnid: Number required
                },
                newData: {
                    image: string required,
                    nombre: string required,
                    description: string required,
                    tipoConsumo: string required,
                    cantidadCaja: Number required,
                    cantidad: Number required,
                    IVA: Number required,
                    precioUnid: Number required
                }
            }
            
###         -Delete one product (DELETE)
            http://localhost:3000/api/v1/product/:id

            Request Url Params = _id
            Response = {
                message: "data deleted correctly",
                data : {
                    image: string required,
                    nombre: string required,
                    description: string required,
                    tipoConsumo: string required,
                    cantidadCaja: Number required,
                    cantidad: Number required,
                    IVA: Number required,
                    precioUnid: Number required
                }
            }
            
##2. Pedidos

###         -Get all pedido (GET)
            http://localhost:3000/api/v1/pedido
###         -Get one pedido (GET)
            http://localhost:3000/api/v1/pedido/:id
            
###         -Create one pedido (POST)
            http://localhost:3000/api/v1/pedido

###         -Update one pedido (PUT)
            http://localhost:3000/api/v1/pedido/:id
            
###         -Delete one pedido (DELETE)
            http://localhost:3000/api/v1/pedido/:id
            
            
## 3. Pedidos-Productos

###         - (GET)
            http://localhost:3000/api/v1/product-pedido
###         - (GET)
            http://localhost:3000/api/v1/product-pedido/:id
            
###         - (POST)
            http://localhost:3000/api/v1/product-pedido

###         - (PUT)
            http://localhost:3000/api/v1/product-pedido/:id
            
###         - (DELETE)
            http://localhost:3000/api/v1/product-pedido/:id
