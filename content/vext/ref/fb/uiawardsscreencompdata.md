---
title: UIAwardsScreenCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| UIAwardsScreenCompData()                                                          | Create a new instance of this container type.                                                                                       |
| UIAwardsScreenCompData(UIAwardsScreenCompData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| UIAwardsScreenCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIAwardsScreenCompData](/vext/ref/fb/uiawardsscreencompdata/).                  |
| UIAwardsScreenCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIAwardsScreenCompData](/vext/ref/fb/uiawardsscreencompdata/).                                      |
| UIAwardsScreenCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIAwardsScreenCompData](/vext/ref/fb/uiawardsscreencompdata/). |

## Properties

| Name              | Type                                               | Description |
| ----------------- | -------------------------------------------------- | ----------- |
| trackableAwardRow | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/)\[\] |             |
| trackableAwardCol | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata/)\[\] |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIAwardsScreenCompData](/vext/ref/fb/uiawardsscreencompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIAwardsScreenCompData](/vext/ref/fb/uiawardsscreencompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
