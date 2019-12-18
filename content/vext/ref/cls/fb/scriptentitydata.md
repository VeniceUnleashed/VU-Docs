---
title: ScriptEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ScriptEntityData()                                                          | Create a new instance of this container type.                                                                           |
| ScriptEntityData(ScriptEntityData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| ScriptEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [ScriptEntityData](ScriptEntityData).                            |
| ScriptEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ScriptEntityData](ScriptEntityData).                    |
| ScriptEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ScriptEntityData](ScriptEntityData).              |
| ScriptEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ScriptEntityData](ScriptEntityData). |

## Properties

| Name  | Type           | Description |
| ----- | -------------- | ----------- |
| code  | string         |             |
| realm | [Realm](Realm) |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [ScriptEntityData](ScriptEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ScriptEntityData](ScriptEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
