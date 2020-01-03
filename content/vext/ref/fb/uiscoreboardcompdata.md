---
title: UIScoreboardCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UIScoreboardCompData()                                                          | Create a new instance of this container type.                                                                                   |
| UIScoreboardCompData(UIScoreboardCompData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UIScoreboardCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIScoreboardCompData](/vext/ref/fb/uiscoreboardcompdata/).                  |
| UIScoreboardCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIScoreboardCompData](/vext/ref/fb/uiscoreboardcompdata/).                                      |
| UIScoreboardCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIScoreboardCompData](/vext/ref/fb/uiscoreboardcompdata/). |

## Properties

| Name              | Type   | Description |
| ----------------- | ------ | ----------- |
| maxUpdateInterval | number |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIScoreboardCompData](/vext/ref/fb/uiscoreboardcompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIScoreboardCompData](/vext/ref/fb/uiscoreboardcompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
