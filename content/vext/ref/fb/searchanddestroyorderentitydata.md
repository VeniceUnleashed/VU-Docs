---
title: SearchAndDestroyOrderEntityData
---
### Base Classes

[BFOrderEntityData](BFOrderEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| SearchAndDestroyOrderEntityData()                                                          | Create a new instance of this container type.                                                                                                         |
| SearchAndDestroyOrderEntityData(SearchAndDestroyOrderEntityData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| SearchAndDestroyOrderEntityData([BFOrderEntityData](BFOrderEntityData) other)              | Upcast an instance of type [BFOrderEntityData](BFOrderEntityData) to [SearchAndDestroyOrderEntityData](SearchAndDestroyOrderEntityData).              |
| SearchAndDestroyOrderEntityData([OrderEntityData](OrderEntityData) other)                  | Upcast an instance of type [OrderEntityData](OrderEntityData) to [SearchAndDestroyOrderEntityData](SearchAndDestroyOrderEntityData).                  |
| SearchAndDestroyOrderEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SearchAndDestroyOrderEntityData](SearchAndDestroyOrderEntityData).                            |
| SearchAndDestroyOrderEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SearchAndDestroyOrderEntityData](SearchAndDestroyOrderEntityData).                    |
| SearchAndDestroyOrderEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SearchAndDestroyOrderEntityData](SearchAndDestroyOrderEntityData).              |
| SearchAndDestroyOrderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SearchAndDestroyOrderEntityData](SearchAndDestroyOrderEntityData). |

## Properties

| Name                    | Type                                             | Description |
| ----------------------- | ------------------------------------------------ | ----------- |
| targetPosKnowledge      | [TargetPosKnowledgeType](TargetPosKnowledgeType) |             |
| findTargetTime          | number                                           |             |
| targetAreaFollowsTarget | bool                                             |             |
| aggressive              | bool                                             |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SearchAndDestroyOrderEntityData](SearchAndDestroyOrderEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SearchAndDestroyOrderEntityData](SearchAndDestroyOrderEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
