---
title: SearchAndDestroyOrderEntityData
---
### Base Classes

[BFOrderEntityData](/vext/ref/fb/bforderentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| SearchAndDestroyOrderEntityData()                                                          | Create a new instance of this container type.                                                                                                         |
| SearchAndDestroyOrderEntityData(SearchAndDestroyOrderEntityData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| SearchAndDestroyOrderEntityData([BFOrderEntityData](/vext/ref/fb/bforderentitydata/) other)              | Upcast an instance of type [BFOrderEntityData](/vext/ref/fb/bforderentitydata/) to [SearchAndDestroyOrderEntityData](/vext/ref/fb/searchanddestroyorderentitydata/).              |
| SearchAndDestroyOrderEntityData([OrderEntityData](/vext/ref/fb/orderentitydata/) other)                  | Upcast an instance of type [OrderEntityData](/vext/ref/fb/orderentitydata/) to [SearchAndDestroyOrderEntityData](/vext/ref/fb/searchanddestroyorderentitydata/).                  |
| SearchAndDestroyOrderEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SearchAndDestroyOrderEntityData](/vext/ref/fb/searchanddestroyorderentitydata/).                            |
| SearchAndDestroyOrderEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SearchAndDestroyOrderEntityData](/vext/ref/fb/searchanddestroyorderentitydata/).                    |
| SearchAndDestroyOrderEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SearchAndDestroyOrderEntityData](/vext/ref/fb/searchanddestroyorderentitydata/).              |
| SearchAndDestroyOrderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SearchAndDestroyOrderEntityData](/vext/ref/fb/searchanddestroyorderentitydata/). |

## Properties

| Name                    | Type                                             | Description |
| ----------------------- | ------------------------------------------------ | ----------- |
| targetPosKnowledge      | [TargetPosKnowledgeType](/vext/ref/fb/targetposknowledgetype/) |             |
| findTargetTime          | number                                           |             |
| targetAreaFollowsTarget | bool                                             |             |
| aggressive              | bool                                             |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SearchAndDestroyOrderEntityData](/vext/ref/fb/searchanddestroyorderentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SearchAndDestroyOrderEntityData](/vext/ref/fb/searchanddestroyorderentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
