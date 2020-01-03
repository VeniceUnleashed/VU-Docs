---
title: StreamingGateEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| StreamingGateEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| StreamingGateEntityData(StreamingGateEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| StreamingGateEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [StreamingGateEntityData](StreamingGateEntityData).                            |
| StreamingGateEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [StreamingGateEntityData](StreamingGateEntityData).                    |
| StreamingGateEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [StreamingGateEntityData](StreamingGateEntityData).              |
| StreamingGateEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StreamingGateEntityData](StreamingGateEntityData). |

## Properties

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| timeout | number |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StreamingGateEntityData](StreamingGateEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StreamingGateEntityData](StreamingGateEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
