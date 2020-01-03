---
title: UpdateTransparencyData
---
### Base Classes

[ProcessorData](/vext/ref/fb/processordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| UpdateTransparencyData()                                                          | Create a new instance of this container type.                                                                                       |
| UpdateTransparencyData(UpdateTransparencyData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| UpdateTransparencyData([ProcessorData](/vext/ref/fb/processordata/) other)                      | Upcast an instance of type [ProcessorData](/vext/ref/fb/processordata/) to [UpdateTransparencyData](/vext/ref/fb/updatetransparencydata/).                      |
| UpdateTransparencyData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [UpdateTransparencyData](/vext/ref/fb/updatetransparencydata/).        |
| UpdateTransparencyData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UpdateTransparencyData](/vext/ref/fb/updatetransparencydata/). |

## Properties

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| cullThreshold | number |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UpdateTransparencyData](/vext/ref/fb/updatetransparencydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UpdateTransparencyData](/vext/ref/fb/updatetransparencydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
