---
title: RichPresenceContext (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| RichPresenceContext()                                                          | Create a new instance of this container type.                                                                                 |
| RichPresenceContext(RichPresenceContext other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| RichPresenceContext([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RichPresenceContext](RichPresenceContext). |

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
| [RichPresenceContext](RichPresenceContext) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RichPresenceContext](RichPresenceContext) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
