---
title: UIDelayedCommandsCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| UIDelayedCommandsCompData()                                                          | Create a new instance of this container type.                                                                                             |
| UIDelayedCommandsCompData(UIDelayedCommandsCompData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| UIDelayedCommandsCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIDelayedCommandsCompData](/vext/ref/fb/uidelayedcommandscompdata/).                  |
| UIDelayedCommandsCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIDelayedCommandsCompData](/vext/ref/fb/uidelayedcommandscompdata/).                                      |
| UIDelayedCommandsCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIDelayedCommandsCompData](/vext/ref/fb/uidelayedcommandscompdata/). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIDelayedCommandsCompData](/vext/ref/fb/uidelayedcommandscompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIDelayedCommandsCompData](/vext/ref/fb/uidelayedcommandscompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
