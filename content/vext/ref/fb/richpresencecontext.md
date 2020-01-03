---
title: RichPresenceContext
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| RichPresenceContext()                                                          | Create a new instance of this container type.                                                                                 |
| RichPresenceContext(RichPresenceContext other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| RichPresenceContext([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RichPresenceContext](RichPresenceContext). |

## Properties

| Name         | Type                                                     | Description |
| ------------ | -------------------------------------------------------- | ----------- |
| name         | string                                                   |             |
| values       | [RichPresenceContextValue](RichPresenceContextValue)\[\] |             |
| defaultValue | [RichPresenceContextValue](RichPresenceContextValue)     |             |
| index        | number                                                   |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [RichPresenceContext](RichPresenceContext) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RichPresenceContext](RichPresenceContext) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
