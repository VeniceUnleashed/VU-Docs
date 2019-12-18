---
title: OrderEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| OrderEntityData()                                                          | Create a new instance of this container type.                                                                         |
| OrderEntityData(OrderEntityData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| OrderEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [OrderEntityData](OrderEntityData).                            |
| OrderEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [OrderEntityData](OrderEntityData).                    |
| OrderEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [OrderEntityData](OrderEntityData).              |
| OrderEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [OrderEntityData](OrderEntityData). |

## Properties

| Name              | Type                             | Description |
| ----------------- | -------------------------------- | ----------- |
| debugName         | string                           |             |
| issueOrderDelay   | number                           |             |
| onCompleteTimeOut | number                           |             |
| onFailedTimeOut   | number                           |             |
| readinessOnStart  | [ReadinessLevel](ReadinessLevel) |             |
| enabled           | bool                             |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [OrderEntityData](OrderEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [OrderEntityData](OrderEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
