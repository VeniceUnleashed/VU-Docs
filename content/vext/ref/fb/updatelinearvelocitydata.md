---
title: UpdateLinearVelocityData
---
### Base Classes

[ProcessorData](/vext/ref/fb/processordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| UpdateLinearVelocityData()                                                          | Create a new instance of this container type.                                                                                           |
| UpdateLinearVelocityData(UpdateLinearVelocityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| UpdateLinearVelocityData([ProcessorData](/vext/ref/fb/processordata/) other)                      | Upcast an instance of type [ProcessorData](/vext/ref/fb/processordata/) to [UpdateLinearVelocityData](/vext/ref/fb/updatelinearvelocitydata/).                      |
| UpdateLinearVelocityData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [UpdateLinearVelocityData](/vext/ref/fb/updatelinearvelocitydata/).        |
| UpdateLinearVelocityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UpdateLinearVelocityData](/vext/ref/fb/updatelinearvelocitydata/). |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UpdateLinearVelocityData](/vext/ref/fb/updatelinearvelocitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UpdateLinearVelocityData](/vext/ref/fb/updatelinearvelocitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
