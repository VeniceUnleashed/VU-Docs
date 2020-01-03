---
title: DynamicAvoidanceEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| DynamicAvoidanceEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| DynamicAvoidanceEntityData(DynamicAvoidanceEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| DynamicAvoidanceEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [DynamicAvoidanceEntityData](/vext/ref/fb/dynamicavoidanceentitydata/).                            |
| DynamicAvoidanceEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [DynamicAvoidanceEntityData](/vext/ref/fb/dynamicavoidanceentitydata/).                    |
| DynamicAvoidanceEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [DynamicAvoidanceEntityData](/vext/ref/fb/dynamicavoidanceentitydata/).              |
| DynamicAvoidanceEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DynamicAvoidanceEntityData](/vext/ref/fb/dynamicavoidanceentitydata/). |

## Properties

| Name                     | Type                                                     | Description |
| ------------------------ | -------------------------------------------------------- | ----------- |
| repelOthers              | [DynamicAvoidanceMode](/vext/ref/fb/dynamicavoidancemode/)             |             |
| reportPredictedCollision | [DynamicAvoidanceMode](/vext/ref/fb/dynamicavoidancemode/)             |             |
| collisionRadius          | number                                                   |             |
| realm                    | [Realm](/vext/ref/fb/realm/)                                           |             |
| antBinding               | [AntDynamicAvoidanceBinding](/vext/ref/fb/antdynamicavoidancebinding/) |             |
| affectedByRepellingForce | bool                                                     |             |
| predictedByOthers        | bool                                                     |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DynamicAvoidanceEntityData](/vext/ref/fb/dynamicavoidanceentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DynamicAvoidanceEntityData](/vext/ref/fb/dynamicavoidanceentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
