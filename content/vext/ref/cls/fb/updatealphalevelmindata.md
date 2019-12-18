---
title: UpdateAlphaLevelMinData (Frostbite Container)
---
### Base Classes

[ProcessorData](ProcessorData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| UpdateAlphaLevelMinData()                                                          | Create a new instance of this container type.                                                                                         |
| UpdateAlphaLevelMinData(UpdateAlphaLevelMinData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| UpdateAlphaLevelMinData([ProcessorData](ProcessorData) other)                      | Upcast an instance of type [ProcessorData](ProcessorData) to [UpdateAlphaLevelMinData](UpdateAlphaLevelMinData).                      |
| UpdateAlphaLevelMinData([EmitterComponentData](EmitterComponentData) other)        | Upcast an instance of type [EmitterComponentData](EmitterComponentData) to [UpdateAlphaLevelMinData](UpdateAlphaLevelMinData).        |
| UpdateAlphaLevelMinData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UpdateAlphaLevelMinData](UpdateAlphaLevelMinData). |

## Properties

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| minLevel | number |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UpdateAlphaLevelMinData](UpdateAlphaLevelMinData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UpdateAlphaLevelMinData](UpdateAlphaLevelMinData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
