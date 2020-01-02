---
title: UpdateTransparencyData
---
### Base Classes

[ProcessorData](ProcessorData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| UpdateTransparencyData()                                                          | Create a new instance of this container type.                                                                                       |
| UpdateTransparencyData(UpdateTransparencyData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| UpdateTransparencyData([ProcessorData](ProcessorData) other)                      | Upcast an instance of type [ProcessorData](ProcessorData) to [UpdateTransparencyData](UpdateTransparencyData).                      |
| UpdateTransparencyData([EmitterComponentData](EmitterComponentData) other)        | Upcast an instance of type [EmitterComponentData](EmitterComponentData) to [UpdateTransparencyData](UpdateTransparencyData).        |
| UpdateTransparencyData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UpdateTransparencyData](UpdateTransparencyData). |

## Properties

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| cullThreshold | number |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UpdateTransparencyData](UpdateTransparencyData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UpdateTransparencyData](UpdateTransparencyData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
