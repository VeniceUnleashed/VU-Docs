---
title: EventSplitterEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| EventSplitterEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| EventSplitterEntityData(EventSplitterEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| EventSplitterEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [EventSplitterEntityData](EventSplitterEntityData).                            |
| EventSplitterEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [EventSplitterEntityData](EventSplitterEntityData).                    |
| EventSplitterEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [EventSplitterEntityData](EventSplitterEntityData).              |
| EventSplitterEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EventSplitterEntityData](EventSplitterEntityData). |

## Properties

| Name    | Type           | Description |
| ------- | -------------- | ----------- |
| realm   | [Realm](Realm) |             |
| runOnce | bool           |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EventSplitterEntityData](EventSplitterEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EventSplitterEntityData](EventSplitterEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
