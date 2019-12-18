---
title: PointSystemParamsAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| PointSystemParamsAsset()                                                          | Create a new instance of this container type.                                                                                       |
| PointSystemParamsAsset(PointSystemParamsAsset other)                              | Create a reference copy of an instance of the same type.                                                                            |
| PointSystemParamsAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PointSystemParamsAsset](PointSystemParamsAsset).                                      |
| PointSystemParamsAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PointSystemParamsAsset](PointSystemParamsAsset). |

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
| [PointSystemParamsAsset](PointSystemParamsAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PointSystemParamsAsset](PointSystemParamsAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
