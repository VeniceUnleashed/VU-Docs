---
title: PointSystemParamsAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| PointSystemParamsAsset()                                                          | Create a new instance of this container type.                                                                                       |
| PointSystemParamsAsset(PointSystemParamsAsset other)                              | Create a reference copy of an instance of the same type.                                                                            |
| PointSystemParamsAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PointSystemParamsAsset](/vext/ref/fb/pointsystemparamsasset/).                                      |
| PointSystemParamsAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PointSystemParamsAsset](/vext/ref/fb/pointsystemparamsasset/). |

## Properties

| Name               | Type   | Description |
| ------------------ | ------ | ----------- |
| multiKillTimeLimit | number |             |
| dnfTimeout         | number |             |
| killStreakX        | number |             |
| nemesisKillX       | number |             |
| freefallHeight     | number |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PointSystemParamsAsset](/vext/ref/fb/pointsystemparamsasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PointSystemParamsAsset](/vext/ref/fb/pointsystemparamsasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
