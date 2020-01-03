---
title: OrderEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| OrderEntityData()                                                          | Create a new instance of this container type.                                                                         |
| OrderEntityData(OrderEntityData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| OrderEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [OrderEntityData](/vext/ref/fb/orderentitydata/).                            |
| OrderEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [OrderEntityData](/vext/ref/fb/orderentitydata/).                    |
| OrderEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [OrderEntityData](/vext/ref/fb/orderentitydata/).              |
| OrderEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OrderEntityData](/vext/ref/fb/orderentitydata/). |

## Properties

| Name              | Type                             | Description |
| ----------------- | -------------------------------- | ----------- |
| debugName         | string                           |             |
| issueOrderDelay   | number                           |             |
| onCompleteTimeOut | number                           |             |
| onFailedTimeOut   | number                           |             |
| readinessOnStart  | [ReadinessLevel](/vext/ref/fb/readinesslevel/) |             |
| enabled           | bool                             |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [OrderEntityData](/vext/ref/fb/orderentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [OrderEntityData](/vext/ref/fb/orderentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
