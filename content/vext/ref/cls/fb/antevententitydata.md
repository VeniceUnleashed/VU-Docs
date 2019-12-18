---
title: AntEventEntityData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| AntEventEntityData()                                                          | Create a new instance of this container type.                                                                               |
| AntEventEntityData(AntEventEntityData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| AntEventEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [AntEventEntityData](AntEventEntityData).                    |
| AntEventEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [AntEventEntityData](AntEventEntityData).              |
| AntEventEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [AntEventEntityData](AntEventEntityData).                            |
| AntEventEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [AntEventEntityData](AntEventEntityData).                    |
| AntEventEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [AntEventEntityData](AntEventEntityData).              |
| AntEventEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AntEventEntityData](AntEventEntityData). |

## Properties

| Name              | Type                             | Description |
| ----------------- | -------------------------------- | ----------- |
| onEnterEvents     | [AntEventData](AntEventData)\[\] |             |
| onUpdateEvents    | [AntEventData](AntEventData)\[\] |             |
| onLeaveEvents     | [AntEventData](AntEventData)\[\] |             |
| sendAsPlayerEvent | bool                             |             |
| autoActivate      | bool                             |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [AntEventEntityData](AntEventEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AntEventEntityData](AntEventEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
