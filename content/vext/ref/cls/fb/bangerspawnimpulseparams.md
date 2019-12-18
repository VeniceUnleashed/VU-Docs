---
title: BangerSpawnImpulseParams (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| BangerSpawnImpulseParams()                                                          | Create a new instance of this container type.                                                                                           |
| BangerSpawnImpulseParams(BangerSpawnImpulseParams other)                            | Create a reference copy of an instance of the same type.                                                                                |
| BangerSpawnImpulseParams([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [BangerSpawnImpulseParams](BangerSpawnImpulseParams). |

## Properties

| Name                  | Type   | Description |
| --------------------- | ------ | ----------- |
| minHorizontalAngle    | number |             |
| maxHorizontalAngle    | number |             |
| minVerticalAngle      | number |             |
| maxVerticalAngle      | number |             |
| minStrength           | number |             |
| maxStrength           | number |             |
| waterStrengthModifier | number |             |
| linearDamping         | number |             |
| angularDamping        | number |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [BangerSpawnImpulseParams](BangerSpawnImpulseParams) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [BangerSpawnImpulseParams](BangerSpawnImpulseParams) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
