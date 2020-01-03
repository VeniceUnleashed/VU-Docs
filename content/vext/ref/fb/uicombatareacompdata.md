---
title: UICombatAreaCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UICombatAreaCompData()                                                          | Create a new instance of this container type.                                                                                   |
| UICombatAreaCompData(UICombatAreaCompData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UICombatAreaCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UICombatAreaCompData](/vext/ref/fb/uicombatareacompdata/).                  |
| UICombatAreaCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UICombatAreaCompData](/vext/ref/fb/uicombatareacompdata/).                                      |
| UICombatAreaCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UICombatAreaCompData](/vext/ref/fb/uicombatareacompdata/). |

## Properties

| Name               | Type   | Description |
| ------------------ | ------ | ----------- |
| outOfAreaSidPrefix | string |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UICombatAreaCompData](/vext/ref/fb/uicombatareacompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UICombatAreaCompData](/vext/ref/fb/uicombatareacompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
