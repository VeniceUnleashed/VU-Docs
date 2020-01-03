---
title: SupportedShootingCommonData
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| SupportedShootingCommonData()                                                          | Create a new instance of this container type.                                                                                                 |
| SupportedShootingCommonData(SupportedShootingCommonData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| SupportedShootingCommonData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SupportedShootingCommonData](SupportedShootingCommonData).                                      |
| SupportedShootingCommonData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SupportedShootingCommonData](SupportedShootingCommonData). |

## Properties

| Name                         | Type                                                                     | Description |
| ---------------------------- | ------------------------------------------------------------------------ | ----------- |
| aimingConstraints            | [AimingConstraintsData](AimingConstraintsData)                           |             |
| enterSupportedShootingAction | [EntryInputActionEnum](EntryInputActionEnum)                             |             |
| binding                      | [SupportedShootingBinding](SupportedShootingBinding)                     |             |
| stand                        | [SupportedShootingProximityChecking](SupportedShootingProximityChecking) |             |
| crouch                       | [SupportedShootingProximityChecking](SupportedShootingProximityChecking) |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SupportedShootingCommonData](SupportedShootingCommonData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SupportedShootingCommonData](SupportedShootingCommonData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
