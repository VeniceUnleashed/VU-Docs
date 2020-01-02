---
title: AimingConstraintEntityCommonData
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AimingConstraintEntityCommonData()                                                          | Create a new instance of this container type.                                                                                                           |
| AimingConstraintEntityCommonData(AimingConstraintEntityCommonData other)                    | Create a reference copy of an instance of the same type.                                                                                                |
| AimingConstraintEntityCommonData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [AimingConstraintEntityCommonData](AimingConstraintEntityCommonData).                                      |
| AimingConstraintEntityCommonData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AimingConstraintEntityCommonData](AimingConstraintEntityCommonData). |

## Properties

| Name                          | Type                                                           | Description |
| ----------------------------- | -------------------------------------------------------------- | ----------- |
| aimingConstraintsBinding      | [AimingConstraintEntityBinding](AimingConstraintEntityBinding) |             |
| aimingConstraints             | [AimingConstraintsData](AimingConstraintsData)                 |             |
| disableAimingConstraintsDelay | number                                                         |             |
| constraintMoveSpeedMultiplier | number                                                         |             |
| shuffleAnimationThreshold     | number                                                         |             |
| shuffleAnimationDelay         | number                                                         |             |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AimingConstraintEntityCommonData](AimingConstraintEntityCommonData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AimingConstraintEntityCommonData](AimingConstraintEntityCommonData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
