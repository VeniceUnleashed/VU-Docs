---
title: UIComponentData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| UIComponentData()                                                          | Create a new instance of this container type.                                                                         |
| UIComponentData(UIComponentData other)                                     | Create a reference copy of an instance of the same type.                                                              |
| UIComponentData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIComponentData](/vext/ref/fb/uicomponentdata/).                                      |
| UIComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIComponentData](/vext/ref/fb/uicomponentdata/). |

## Properties

| Name             | Type                         | Description |
| ---------------- | ---------------------------- | ----------- |
| shortName        | string                       |             |
| dataSources      | string\[\]                   |             |
| updateType       | [UIUpdateType](/vext/ref/fb/uiupdatetype/) |             |
| updatesPerSecond | number                       |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [UIComponentData](/vext/ref/fb/uicomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIComponentData](/vext/ref/fb/uicomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
