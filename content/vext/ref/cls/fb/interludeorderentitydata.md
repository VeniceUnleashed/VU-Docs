---
title: InterludeOrderEntityData (Frostbite Container)
---
### Base Classes

[BFOrderEntityData](BFOrderEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| InterludeOrderEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| InterludeOrderEntityData(InterludeOrderEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| InterludeOrderEntityData([BFOrderEntityData](BFOrderEntityData) other)              | Upcast an instance of type [BFOrderEntityData](BFOrderEntityData) to [InterludeOrderEntityData](InterludeOrderEntityData).              |
| InterludeOrderEntityData([OrderEntityData](OrderEntityData) other)                  | Upcast an instance of type [OrderEntityData](OrderEntityData) to [InterludeOrderEntityData](InterludeOrderEntityData).                  |
| InterludeOrderEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [InterludeOrderEntityData](InterludeOrderEntityData).                            |
| InterludeOrderEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [InterludeOrderEntityData](InterludeOrderEntityData).                    |
| InterludeOrderEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [InterludeOrderEntityData](InterludeOrderEntityData).              |
| InterludeOrderEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [InterludeOrderEntityData](InterludeOrderEntityData). |

## Properties

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| isCutscene | bool |             |
| crouch     | bool |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [InterludeOrderEntityData](InterludeOrderEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [InterludeOrderEntityData](InterludeOrderEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
