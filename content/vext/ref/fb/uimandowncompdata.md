---
title: UIManDownCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UIManDownCompData()                                                          | Create a new instance of this container type.                                                                             |
| UIManDownCompData(UIManDownCompData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| UIManDownCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIManDownCompData](/vext/ref/fb/uimandowncompdata/).                  |
| UIManDownCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIManDownCompData](/vext/ref/fb/uimandowncompdata/).                                      |
| UIManDownCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIManDownCompData](/vext/ref/fb/uimandowncompdata/). |

## Properties

| Name                 | Type   | Description |
| -------------------- | ------ | ----------- |
| delayManDownTextTime | number |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [UIManDownCompData](/vext/ref/fb/uimandowncompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIManDownCompData](/vext/ref/fb/uimandowncompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
