---
title: AimingConstraintEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| AimingConstraintEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| AimingConstraintEntityData(AimingConstraintEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| AimingConstraintEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [AimingConstraintEntityData](AimingConstraintEntityData).                            |
| AimingConstraintEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [AimingConstraintEntityData](AimingConstraintEntityData).                    |
| AimingConstraintEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [AimingConstraintEntityData](AimingConstraintEntityData).              |
| AimingConstraintEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AimingConstraintEntityData](AimingConstraintEntityData). |

## Properties

| Name           | Type                                                                 | Description |
| -------------- | -------------------------------------------------------------------- | ----------- |
| commonData     | [AimingConstraintEntityCommonData](AimingConstraintEntityCommonData) |             |
| enabledInProne | bool                                                                 |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AimingConstraintEntityData](AimingConstraintEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AimingConstraintEntityData](AimingConstraintEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
