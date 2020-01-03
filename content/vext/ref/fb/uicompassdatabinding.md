---
title: UICompassDataBinding
---
### Base Classes

[UIDataBinding](/vext/ref/fb/uidatabinding/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UICompassDataBinding()                                                          | Create a new instance of this container type.                                                                                   |
| UICompassDataBinding(UICompassDataBinding other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UICompassDataBinding([UIDataBinding](/vext/ref/fb/uidatabinding/) other)                      | Upcast an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding/) to [UICompassDataBinding](/vext/ref/fb/uicompassdatabinding/).                      |
| UICompassDataBinding([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UICompassDataBinding](/vext/ref/fb/uicompassdatabinding/). |

## Properties

| Name             | Type                                 | Description |
| ---------------- | ------------------------------------ | ----------- |
| heading          | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| objectives       | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| visibility       | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| showAirRadar     | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| radarSweepDegree | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UICompassDataBinding](/vext/ref/fb/uicompassdatabinding/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UICompassDataBinding](/vext/ref/fb/uicompassdatabinding/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
