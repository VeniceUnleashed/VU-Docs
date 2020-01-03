---
title: UIManagePlayersCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| UIManagePlayersCompData()                                                          | Create a new instance of this container type.                                                                                         |
| UIManagePlayersCompData(UIManagePlayersCompData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| UIManagePlayersCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIManagePlayersCompData](/vext/ref/fb/uimanageplayerscompdata/).                  |
| UIManagePlayersCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIManagePlayersCompData](/vext/ref/fb/uimanageplayerscompdata/).                                      |
| UIManagePlayersCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIManagePlayersCompData](/vext/ref/fb/uimanageplayerscompdata/). |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIManagePlayersCompData](/vext/ref/fb/uimanageplayerscompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIManagePlayersCompData](/vext/ref/fb/uimanageplayerscompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
