---
title: ChangeReadinessOrderEntityData
---
### Base Classes

[BFOrderEntityData](/vext/ref/fb/bforderentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| ChangeReadinessOrderEntityData()                                                          | Create a new instance of this container type.                                                                                                       |
| ChangeReadinessOrderEntityData(ChangeReadinessOrderEntityData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| ChangeReadinessOrderEntityData([BFOrderEntityData](/vext/ref/fb/bforderentitydata/) other)              | Upcast an instance of type [BFOrderEntityData](/vext/ref/fb/bforderentitydata/) to [ChangeReadinessOrderEntityData](/vext/ref/fb/changereadinessorderentitydata/).              |
| ChangeReadinessOrderEntityData([OrderEntityData](/vext/ref/fb/orderentitydata/) other)                  | Upcast an instance of type [OrderEntityData](/vext/ref/fb/orderentitydata/) to [ChangeReadinessOrderEntityData](/vext/ref/fb/changereadinessorderentitydata/).                  |
| ChangeReadinessOrderEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [ChangeReadinessOrderEntityData](/vext/ref/fb/changereadinessorderentitydata/).                            |
| ChangeReadinessOrderEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ChangeReadinessOrderEntityData](/vext/ref/fb/changereadinessorderentitydata/).                    |
| ChangeReadinessOrderEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ChangeReadinessOrderEntityData](/vext/ref/fb/changereadinessorderentitydata/).              |
| ChangeReadinessOrderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ChangeReadinessOrderEntityData](/vext/ref/fb/changereadinessorderentitydata/). |

## Properties

| Name          | Type                             | Description |
| ------------- | -------------------------------- | ----------- |
| pulse         | [ReadinessLevel](/vext/ref/fb/readinesslevel/) |             |
| minimum       | [ReadinessLevel](/vext/ref/fb/readinesslevel/) |             |
| allowDecrease | bool                             |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ChangeReadinessOrderEntityData](/vext/ref/fb/changereadinessorderentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ChangeReadinessOrderEntityData](/vext/ref/fb/changereadinessorderentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
