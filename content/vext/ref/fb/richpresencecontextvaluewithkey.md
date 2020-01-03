---
title: RichPresenceContextValueWithKey
---
### Base Classes

[RichPresenceContextValue](RichPresenceContextValue)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RichPresenceContextValueWithKey()                                                           | Create a new instance of this container type.                                                                                                          |
| RichPresenceContextValueWithKey(RichPresenceContextValueWithKey other)                      | Create a reference copy of an instance of the same type.                                                                                               |
| RichPresenceContextValueWithKey([RichPresenceContextValue](RichPresenceContextValue) other) | Upcast an instance of type [RichPresenceContextValue](RichPresenceContextValue) to [RichPresenceContextValueWithKey](RichPresenceContextValueWithKey). |
| RichPresenceContextValueWithKey([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RichPresenceContextValueWithKey](RichPresenceContextValueWithKey).  |

## Properties

| Name | Type   | Description |
| ---- | ------ | ----------- |
| key  | string |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [RichPresenceContextValueWithKey](RichPresenceContextValueWithKey) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RichPresenceContextValueWithKey](RichPresenceContextValueWithKey) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
