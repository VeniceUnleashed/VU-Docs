---
title: ViewFxData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| ViewFxData()                                                          | Create a new instance of this container type.                                                               |
| ViewFxData(ViewFxData other)                                          | Create a reference copy of an instance of the same type.                                                    |
| ViewFxData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ViewFxData](ViewFxData). |

## Properties

| Name                    | Type                                           | Description |
| ----------------------- | ---------------------------------------------- | ----------- |
| poissonRadialBlur       | [PoissonRadialBlurData](PoissonRadialBlurData) |             |
| colorTint               | [ColorTintData](ColorTintData)                 |             |
| blurAdd                 | number                                         |             |
| colorTintEnable         | bool                                           |             |
| poissonRadialBlurEnable | bool                                           |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [ViewFxData](ViewFxData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ViewFxData](ViewFxData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
