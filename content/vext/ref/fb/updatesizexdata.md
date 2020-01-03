---
title: UpdateSizeXData
---
### Base Classes

[ProcessorData](ProcessorData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| UpdateSizeXData()                                                          | Create a new instance of this container type.                                                                         |
| UpdateSizeXData(UpdateSizeXData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| UpdateSizeXData([ProcessorData](ProcessorData) other)                      | Upcast an instance of type [ProcessorData](ProcessorData) to [UpdateSizeXData](UpdateSizeXData).                      |
| UpdateSizeXData([EmitterComponentData](EmitterComponentData) other)        | Upcast an instance of type [EmitterComponentData](EmitterComponentData) to [UpdateSizeXData](UpdateSizeXData).        |
| UpdateSizeXData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UpdateSizeXData](UpdateSizeXData). |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [UpdateSizeXData](UpdateSizeXData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UpdateSizeXData](UpdateSizeXData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
