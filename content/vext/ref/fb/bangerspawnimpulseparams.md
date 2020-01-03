---
title: BangerSpawnImpulseParams
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| BangerSpawnImpulseParams()                                                          | Create a new instance of this container type.                                                                                           |
| BangerSpawnImpulseParams(BangerSpawnImpulseParams other)                            | Create a reference copy of an instance of the same type.                                                                                |
| BangerSpawnImpulseParams([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BangerSpawnImpulseParams](/vext/ref/fb/bangerspawnimpulseparams/). |

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
| [BangerSpawnImpulseParams](/vext/ref/fb/bangerspawnimpulseparams/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BangerSpawnImpulseParams](/vext/ref/fb/bangerspawnimpulseparams/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
