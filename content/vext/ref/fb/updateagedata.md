---
title: UpdateAgeData
---
### Base Classes

[ProcessorData](/vext/ref/fb/processordata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| UpdateAgeData()                                                          | Create a new instance of this container type.                                                                     |
| UpdateAgeData(UpdateAgeData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| UpdateAgeData([ProcessorData](/vext/ref/fb/processordata/) other)                      | Upcast an instance of type [ProcessorData](/vext/ref/fb/processordata/) to [UpdateAgeData](/vext/ref/fb/updateagedata/).                      |
| UpdateAgeData([EmitterComponentData](/vext/ref/fb/emittercomponentdata/) other)        | Upcast an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata/) to [UpdateAgeData](/vext/ref/fb/updateagedata/).        |
| UpdateAgeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UpdateAgeData](/vext/ref/fb/updateagedata/). |

## Properties

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| lifetime | number |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [UpdateAgeData](/vext/ref/fb/updateagedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UpdateAgeData](/vext/ref/fb/updateagedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
