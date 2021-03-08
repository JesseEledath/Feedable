# Feedable

Deployed Link Here


### Built With

* React
* Express
* Node
* MongoDB
* Mongoose

## About
Here is a [link](https://docs.google.com/document/d/15U5NPlJ0PVFWd8dPnJQdOaQPe7KipYfSrD9CpkaPTuw/edit) to our Team Expectations.
Contributors are Bilal Khundmiri, Cullen Scarborough, Dawit Endaylalu, Jesse Eledath
## Prototypes
Here is a [link](https://www.figma.com/proto/L9ygdOIG2IT4Q7dvbrbOUu/Feedable?node-id=2%3A0&scaling=min-zoom) to our Figma protoype of the webapp.

## Flow
### Component Heirarchy

## Schema
`` Javascript 
const Product = new Schema (
    {
        name: { type: String, required: true },
        imgURL: { type: String, required: true },
        description: { type: String, required: true},
        category: [{ type: String, required: true }],
        quantity: { type: Number, required: true }
    },
    { timestamps: true }
)
``

## Contact
