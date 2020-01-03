---
title: FloatUnlockValuePair
---
### Base Classes

[UnlockValuePair](UnlockValuePair)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| FloatUnlockValuePair()                                                          | Create a new instance of this container type.                                                                                   |
| FloatUnlockValuePair(FloatUnlockValuePair other)                                | Create a reference copy of an instance of the same type.                                                                        |
| FloatUnlockValuePair([UnlockValuePair](UnlockValuePair) other)                  | Upcast an instance of type [UnlockValuePair](UnlockValuePair) to [FloatUnlockValuePair](FloatUnlockValuePair).                  |
| FloatUnlockValuePair([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FloatUnlockValuePair](FloatUnlockValuePair). |

## Properties

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| defaultValue  | number |             |
| unlockedValue | number |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [FloatUnlockValuePair](FloatUnlockValuePair) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FloatUnlockValuePair](FloatUnlockValuePair) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
