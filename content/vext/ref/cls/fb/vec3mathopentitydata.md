---
title: Vec3MathOpEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Vec3MathOpEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| Vec3MathOpEntityData(Vec3MathOpEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| Vec3MathOpEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [Vec3MathOpEntityData](Vec3MathOpEntityData).                            |
| Vec3MathOpEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [Vec3MathOpEntityData](Vec3MathOpEntityData).                    |
| Vec3MathOpEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [Vec3MathOpEntityData](Vec3MathOpEntityData).              |
| Vec3MathOpEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [Vec3MathOpEntityData](Vec3MathOpEntityData). |

## Properties

| Name      | Type                         | Description |
| --------- | ---------------------------- | ----------- |
| realm     | [Realm](Realm)               |             |
| operators | [Vec3MathOp](Vec3MathOp)\[\] |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [Vec3MathOpEntityData](Vec3MathOpEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [Vec3MathOpEntityData](Vec3MathOpEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
