---
title: CompareBoolEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| CompareBoolEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| CompareBoolEntityData(CompareBoolEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| CompareBoolEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CompareBoolEntityData](CompareBoolEntityData).                            |
| CompareBoolEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CompareBoolEntityData](CompareBoolEntityData).                    |
| CompareBoolEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CompareBoolEntityData](CompareBoolEntityData).              |
| CompareBoolEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [CompareBoolEntityData](CompareBoolEntityData). |

## Properties

| Name                    | Type           | Description |
| ----------------------- | -------------- | ----------- |
| realm                   | [Realm](Realm) |             |
| bool                    | bool           |             |
| triggerOnPropertyChange | bool           |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [CompareBoolEntityData](CompareBoolEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [CompareBoolEntityData](CompareBoolEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
