---
title: TurbulanceData
---
### Base Classes

[ProcessorData](/vext/ref/fb/processordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| TurbulanceData()                                                          | Create a new instance of this container type.                                                                       |
| TurbulanceData(TurbulanceData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| TurbulanceData([ProcessorData](/vext/ref/fb/processordata/) other)                      | Upcast an instance of type [ProcessorData](/vext/ref/fb/processordata/) to [TurbulanceData](/vext/ref/fb/turbulancedata/).                      |
| TurbulanceData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [TurbulanceData](/vext/ref/fb/turbulancedata/).        |
| TurbulanceData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TurbulanceData](/vext/ref/fb/turbulancedata/). |

## Properties

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| intensity | number |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [TurbulanceData](/vext/ref/fb/turbulancedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TurbulanceData](/vext/ref/fb/turbulancedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
