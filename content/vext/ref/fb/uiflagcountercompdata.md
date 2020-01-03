---
title: UIFlagCounterCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| UIFlagCounterCompData()                                                          | Create a new instance of this container type.                                                                                     |
| UIFlagCounterCompData(UIFlagCounterCompData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| UIFlagCounterCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIFlagCounterCompData](/vext/ref/fb/uiflagcountercompdata/).                  |
| UIFlagCounterCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIFlagCounterCompData](/vext/ref/fb/uiflagcountercompdata/).                                      |
| UIFlagCounterCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIFlagCounterCompData](/vext/ref/fb/uiflagcountercompdata/). |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIFlagCounterCompData](/vext/ref/fb/uiflagcountercompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIFlagCounterCompData](/vext/ref/fb/uiflagcountercompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
