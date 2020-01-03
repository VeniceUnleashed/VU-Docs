---
title: UpdateSizeData
---
### Base Classes

[ProcessorData](ProcessorData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| UpdateSizeData()                                                          | Create a new instance of this container type.                                                                       |
| UpdateSizeData(UpdateSizeData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| UpdateSizeData([ProcessorData](ProcessorData) other)                      | Upcast an instance of type [ProcessorData](ProcessorData) to [UpdateSizeData](UpdateSizeData).                      |
| UpdateSizeData([EmitterComponentData](EmitterComponentData) other)        | Upcast an instance of type [EmitterComponentData](EmitterComponentData) to [UpdateSizeData](UpdateSizeData).        |
| UpdateSizeData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UpdateSizeData](UpdateSizeData). |

## Properties

| Name  | Type                              | Description |
| ----- | --------------------------------- | ----------- |
| pivot | [Vec2](/vext/ref/shared/class/vec2) |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [UpdateSizeData](UpdateSizeData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UpdateSizeData](UpdateSizeData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
