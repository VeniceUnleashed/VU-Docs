---
title: SniperLensScopeFilterData
---
### Base Classes

[ScopeFilterData](/vext/ref/fb/scopefilterdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SniperLensScopeFilterData()                                                          | Create a new instance of this container type.                                                                                             |
| SniperLensScopeFilterData(SniperLensScopeFilterData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SniperLensScopeFilterData([ScopeFilterData](/vext/ref/fb/scopefilterdata/) other)                  | Upcast an instance of type [ScopeFilterData](/vext/ref/fb/scopefilterdata/) to [SniperLensScopeFilterData](/vext/ref/fb/sniperlensscopefilterdata/).                  |
| SniperLensScopeFilterData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SniperLensScopeFilterData](/vext/ref/fb/sniperlensscopefilterdata/).                                      |
| SniperLensScopeFilterData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SniperLensScopeFilterData](/vext/ref/fb/sniperlensscopefilterdata/). |

## Properties

| Name                             | Type                              | Description |
| -------------------------------- | --------------------------------- | ----------- |
| chromaticAberrationStrengths     | [Vec2](/vext/ref/shared/class/vec2) |             |
| blurCenter                       | [Vec2](/vext/ref/shared/class/vec2) |             |
| chromaticAberrationColor1        | [Vec3](/vext/ref/shared/class/vec3) |             |
| chromaticAberrationColor2        | [Vec3](/vext/ref/shared/class/vec3) |             |
| radialBlendDistanceCoefficients  | [Vec2](/vext/ref/shared/class/vec2) |             |
| chromaticAberrationDisplacement1 | [Vec2](/vext/ref/shared/class/vec2) |             |
| chromaticAberrationDisplacement2 | [Vec2](/vext/ref/shared/class/vec2) |             |
| blurScale                        | number                            |             |
| colorTintData                    | [ColorTintData](/vext/ref/fb/colortintdata/)    |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SniperLensScopeFilterData](/vext/ref/fb/sniperlensscopefilterdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SniperLensScopeFilterData](/vext/ref/fb/sniperlensscopefilterdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
