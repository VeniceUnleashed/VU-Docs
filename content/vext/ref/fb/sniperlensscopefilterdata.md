---
title: SniperLensScopeFilterData
---
### Base Classes

[ScopeFilterData](ScopeFilterData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SniperLensScopeFilterData()                                                          | Create a new instance of this container type.                                                                                             |
| SniperLensScopeFilterData(SniperLensScopeFilterData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SniperLensScopeFilterData([ScopeFilterData](ScopeFilterData) other)                  | Upcast an instance of type [ScopeFilterData](ScopeFilterData) to [SniperLensScopeFilterData](SniperLensScopeFilterData).                  |
| SniperLensScopeFilterData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SniperLensScopeFilterData](SniperLensScopeFilterData).                                      |
| SniperLensScopeFilterData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SniperLensScopeFilterData](SniperLensScopeFilterData). |

## Properties

| Name                             | Type                              | Description |
| -------------------------------- | --------------------------------- | ----------- |
| chromaticAberrationStrengths     | [Vec2](/vext/ref/shared/class/Vec2) |             |
| blurCenter                       | [Vec2](/vext/ref/shared/class/Vec2) |             |
| chromaticAberrationColor1        | [Vec3](/vext/ref/shared/class/Vec3) |             |
| chromaticAberrationColor2        | [Vec3](/vext/ref/shared/class/Vec3) |             |
| radialBlendDistanceCoefficients  | [Vec2](/vext/ref/shared/class/Vec2) |             |
| chromaticAberrationDisplacement1 | [Vec2](/vext/ref/shared/class/Vec2) |             |
| chromaticAberrationDisplacement2 | [Vec2](/vext/ref/shared/class/Vec2) |             |
| blurScale                        | number                            |             |
| colorTintData                    | [ColorTintData](ColorTintData)    |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SniperLensScopeFilterData](SniperLensScopeFilterData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SniperLensScopeFilterData](SniperLensScopeFilterData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
