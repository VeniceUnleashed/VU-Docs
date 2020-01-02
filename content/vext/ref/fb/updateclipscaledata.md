---
title: UpdateClipScaleData
---
### Base Classes

[ProcessorData](ProcessorData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UpdateClipScaleData()                                                          | Create a new instance of this container type.                                                                                 |
| UpdateClipScaleData(UpdateClipScaleData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UpdateClipScaleData([ProcessorData](ProcessorData) other)                      | Upcast an instance of type [ProcessorData](ProcessorData) to [UpdateClipScaleData](UpdateClipScaleData).                      |
| UpdateClipScaleData([EmitterComponentData](EmitterComponentData) other)        | Upcast an instance of type [EmitterComponentData](EmitterComponentData) to [UpdateClipScaleData](UpdateClipScaleData).        |
| UpdateClipScaleData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UpdateClipScaleData](UpdateClipScaleData). |

## Properties

| Name   | Type       | Description |
| ------ | ---------- | ----------- |
| lookup | number\[\] |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [UpdateClipScaleData](UpdateClipScaleData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UpdateClipScaleData](UpdateClipScaleData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
