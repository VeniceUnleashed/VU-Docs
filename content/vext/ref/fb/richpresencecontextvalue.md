---
title: RichPresenceContextValue
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| RichPresenceContextValue()                                                          | Create a new instance of this container type.                                                                                           |
| RichPresenceContextValue(RichPresenceContextValue other)                            | Create a reference copy of an instance of the same type.                                                                                |
| RichPresenceContextValue([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RichPresenceContextValue](/vext/ref/fb/richpresencecontextvalue/). |

## Properties

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| sid   | string |             |
| index | number |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [RichPresenceContextValue](/vext/ref/fb/richpresencecontextvalue/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RichPresenceContextValue](/vext/ref/fb/richpresencecontextvalue/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
