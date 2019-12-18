---
title: MathOpEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| MathOpEntityData()                                                          | Create a new instance of this container type.                                                                           |
| MathOpEntityData(MathOpEntityData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| MathOpEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [MathOpEntityData](MathOpEntityData).                            |
| MathOpEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [MathOpEntityData](MathOpEntityData).                    |
| MathOpEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [MathOpEntityData](MathOpEntityData).              |
| MathOpEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MathOpEntityData](MathOpEntityData). |

## Properties

| Name      | Type                 | Description |
| --------- | -------------------- | ----------- |
| realm     | [Realm](Realm)       |             |
| operators | [MathOp](MathOp)\[\] |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [MathOpEntityData](MathOpEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MathOpEntityData](MathOpEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
