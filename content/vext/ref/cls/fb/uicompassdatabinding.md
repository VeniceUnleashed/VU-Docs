---
title: UICompassDataBinding (Frostbite Container)
---
### Base Classes

[UIDataBinding](UIDataBinding)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UICompassDataBinding()                                                          | Create a new instance of this container type.                                                                                   |
| UICompassDataBinding(UICompassDataBinding other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UICompassDataBinding([UIDataBinding](UIDataBinding) other)                      | Upcast an instance of type [UIDataBinding](UIDataBinding) to [UICompassDataBinding](UICompassDataBinding).                      |
| UICompassDataBinding([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UICompassDataBinding](UICompassDataBinding). |

## Properties

| Name             | Type                                 | Description |
| ---------------- | ------------------------------------ | ----------- |
| heading          | [UIDataSourceInfo](UIDataSourceInfo) |             |
| objectives       | [UIDataSourceInfo](UIDataSourceInfo) |             |
| visibility       | [UIDataSourceInfo](UIDataSourceInfo) |             |
| showAirRadar     | [UIDataSourceInfo](UIDataSourceInfo) |             |
| radarSweepDegree | [UIDataSourceInfo](UIDataSourceInfo) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UICompassDataBinding](UICompassDataBinding) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UICompassDataBinding](UICompassDataBinding) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
