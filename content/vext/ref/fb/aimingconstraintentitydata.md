---
title: AimingConstraintEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| AimingConstraintEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| AimingConstraintEntityData(AimingConstraintEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| AimingConstraintEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [AimingConstraintEntityData](/vext/ref/fb/aimingconstraintentitydata/).                            |
| AimingConstraintEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [AimingConstraintEntityData](/vext/ref/fb/aimingconstraintentitydata/).                    |
| AimingConstraintEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [AimingConstraintEntityData](/vext/ref/fb/aimingconstraintentitydata/).              |
| AimingConstraintEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AimingConstraintEntityData](/vext/ref/fb/aimingconstraintentitydata/). |

## Properties

| Name           | Type                                                                 | Description |
| -------------- | -------------------------------------------------------------------- | ----------- |
| commonData     | [AimingConstraintEntityCommonData](/vext/ref/fb/aimingconstraintentitycommondata/) |             |
| enabledInProne | bool                                                                 |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AimingConstraintEntityData](/vext/ref/fb/aimingconstraintentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AimingConstraintEntityData](/vext/ref/fb/aimingconstraintentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
